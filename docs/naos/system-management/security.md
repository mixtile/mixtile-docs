---
sidebar_position: 2
description: Secure boot, encrypted storage and access control.
---

# Security

NAOS builds security into the boot chain, storage and access paths. The repository contains development keys; replace them before production.

## Secure boot

The boot chain uses the Rockchip RK3588 secure boot mechanism:

1. MaskROM verifies the SPL signature against the public-key hash stored in OTP.
2. SPL verifies U-Boot.
3. U-Boot verifies the FIT boot image, which contains the kernel, DTB and ramdisk.

The U-Boot defconfig enables:

```config
CONFIG_OPTEE_CLIENT=y
CONFIG_OPTEE_V2=y
CONFIG_OPTEE_ALWAYS_USE_SECURITY_PARTITION=y
CONFIG_FIT_SIGNATURE=y
CONFIG_SPL_FIT_SIGNATURE=y
```

`build.sh` signs the FIT boot image with the key in `packages/keys/`; `packages/configs/boot.its` uses `key-name-hint = "dev"`. Replace `dev.crt`, `dev.key` and `dev.pubkey` with your own key pair before building.

:::note
The default build signs the FIT image. Programming the public-key hash into OTP is a production provisioning step, not something to repeat casually: OTP is one-time programmable. Validate the key and the signed image before programming a device.
:::

For the complete secure-boot design, see [Security and Compliance Design](https://github.com/mixtile-rockchip/naos/blob/main/doc/detailed-design/security-and-compliance-design.md).

## Replacing keys

### Secure boot key pair

From the NAOS source:

```bash title="Build host"
cd tools/genkey
./rk_sign_tool cc --chip 3588
./rk_sign_tool kk --out .
mv private_key.pem dev.key
mv public_key.pem dev.pubkey
openssl req -batch -new -x509 -key dev.key -out dev.crt
cp dev.crt dev.key dev.pubkey ../../packages/keys/
```

Keep `dev.crt`, `dev.key` and `dev.pubkey` in a safe place. The private key signs every image for that device family.

### Filesystem encryption key

Generate a 256-bit key:

```bash title="Build host"
openssl rand -hex 32
```

Replace the `key=` value in `tools/linux_securitydm/encrypted_key` with the generated value. Use the same key in `genimage-tools/tools/encrypted_key`; if the build and image generator use different keys, the image cannot decrypt its partitions.

### SSH CA key pair

Generate the CA key pair in a secure environment:

```bash title="Build host"
ssh-keygen -t ed25519 -f ssh_ca_key -C "naos ca"
```

Replace `packages/alpine/etc/ssh/ssh_ca_key.pub` with the generated `ssh_ca_key.pub`. Keep `ssh_ca_key`, the private key, offline.

Sign a user certificate:

```bash title="Build host"
ssh-keygen -s ssh_ca_key \
    -I dev-cert-001 \
    -n root \
    -V always:+3650d \
    ~/.ssh/id_ed25519.pub
```

The certificate is written next to the public key as `~/.ssh/id_ed25519-cert.pub`. Use a shorter validity period for production.

### USB offline upgrade keys

```bash title="Build host"
cd tools/upgrade_key
openssl genpkey -algorithm RSA -out private.pem -pkeyopt rsa_keygen_bits:2048
openssl rsa -in private.pem -pubout -out public.pem
openssl rand -hex 32 > aes.key
cp aes.key public.pem ../../packages/alpine/etc/upgrade/
```

Keep `private.pem` for `make_update.sh`. The device uses `/etc/upgrade/public.pem` to verify the update package and `/etc/upgrade/aes.key` to decrypt it.

## Encrypted storage

The `system_a` and `system_b` partitions contain an encrypted read-only squashfs root filesystem. The `userdata` partition contains an encrypted writable f2fs filesystem. The ramdisk creates the dm-crypt mappings before mounting the root filesystem.

The encryption key lifecycle is:

1. The build writes the key into the `misc` image with `tools/linux_securitydm/writeKey.sh`.
2. On first boot, the ramdisk reads the key from `misc` and writes it to the eMMC RPMB partition with `keybox_app`.
3. The ramdisk clears the temporary key from `misc`.
4. On later boots, the ramdisk reads the key from RPMB.

The default cipher is `aes-cbc-plain`, configured by `mkdm.sh` and the ramdisk init script.

:::note
The security design also describes dm-verity integrity protection. The default build path in `scripts/build_encryption.sh` creates dm-crypt containers with the `fde-s` mode. The separate dm-verity mode in `tools/linux_securitydm/mkdm.sh` is not enabled by that path. If your threat model requires verified integrity, review and test that mode before relying on it.
:::

A full image generated with `genimage.sh -u image` contains the first-boot key in the `misc` partition. Do not distribute a full image as an update package; use `genimage.sh -u update` for OTA delivery.

## SSH access

`packages/alpine/etc/ssh/sshd_config` disables password authentication, permits root login, and trusts certificates signed by the CA public key at `/etc/ssh/ssh_ca_key.pub`:

```config
PermitRootLogin yes
PasswordAuthentication no
TrustedUserCAKeys /etc/ssh/ssh_ca_key.pub
```

Clients connect with a certificate signed for the `root` principal:

```bash title="Build host"
ssh -i ~/.ssh/id_ed25519 root@<device-ip>
```

Keep the CA private key offline, use short certificate lifetimes, and replace the repository CA public key before building an image you need to log in to.

## UART access

The root filesystem build removes the `tty` and `console` entries from `/etc/inittab`, so the default image has no serial login. `ttyFIQ0` remains in `/etc/securetty` for the debug console when login is enabled.

Boot messages and the `print-ip` output still appear on the debug UART at 1500000 baud.

To re-enable serial login for debugging, remove the two `sed` lines in `scripts/build_alpinefs_base.sh` that delete the entries from `/etc/inittab`, then rebuild. Do not ship an image with the debug console enabled.

## Before production

- Replace the secure boot keys and validate the signed image before programming OTP.
- Replace the filesystem encryption key in both the build and the image generator.
- Replace the SSH CA key pair and keep the private key offline.
- Replace the USB offline upgrade keys and deploy the matching public key and AES key in the image.
- Change the default root password set by the root filesystem build script.
- Set a unique HawkBit controller ID and token, and use HTTPS.
- Do not ship development keys or an enabled debug console.
- Restrict access to the APK repository; `genimage.sh` installs packages with `--allow-untrusted`.
