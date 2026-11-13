---
sidebar_position: 2
description: Build a complete NAOS image and boot it.
---

# Building NAOS

This page builds a complete image with the full-image path: U-Boot, the kernel, the encrypted root filesystem and the Rockchip firmware package.

## Get the source

```bash title="Build host"
git clone https://github.com/mixtile-rockchip/naos.git
cd naos
```

## Build in the container

The repository includes a build container with the required toolchain and image tools.

```bash title="Build host"
docker build -t ubuntu-22.04-build-env misc-tools/build-env/
docker run --privileged -it \
    -v $PWD:/workspace \
    -v /dev:/dev \
    ubuntu-22.04-build-env
```

Inside the container, the source is at `/workspace`. Build the image for your board:

```bash title="Container"
cd /workspace
./build.sh --target all --board mixtile-core3588e-nano
```

Replace `mixtile-core3588e-nano` with the board name from [Supported boards](/naos/#supported-boards).

## Build on the host

To build directly on an Ubuntu 22.04 x86_64 host, install the packages listed in `misc-tools/build-env/Dockerfile`, then run:

```bash title="Build host"
sudo ./build.sh --target all --board mixtile-core3588e-nano
```

The component scripts call `sudo` and `chroot` themselves. The outer `sudo` keeps the run consistent when the build is started from a normal user account.

## What the build does

| Step | Script | Output |
| --- | --- | --- |
| U-Boot | `scripts/build_uboot.sh` | `MiniLoaderAll.bin`, `uboot.img` |
| Kernel | `scripts/build_kernel.sh` | `Image`, `<board>.dtb`, `resource.img` |
| Ramdisk | `scripts/build_ramdisk.sh` | `ramdisk.img`, `misc.img` |
| FIT boot image | `build_fit_boot` in `build.sh` | `boot.img` |
| Signed boot image | `build_sign_boot` in `build.sh` | signed `boot.img` |
| Alpine root filesystem | `scripts/build_alpinefs_base.sh` or a board script | `build/alpine/` |
| Root filesystem image | `scripts/build_rootfs.sh` | `rootfs.img` |
| Encrypted images | `scripts/build_encryption.sh` | `encrypted.img`, `encrypted_userdata.img` |
| Firmware package | `scripts/build_update.sh` | `update.img` |

The build downloads U-Boot, rkbin and the kernel sources from GitHub on the first run, together with the Alpine minirootfs and packages.

## Output

The build writes to `build/output/`:

```text
build/output/
├── MiniLoaderAll.bin
├── uboot.img
├── boot.img
├── ramdisk.img
├── rootfs.img
├── encrypted.img
├── encrypted_userdata.img
├── misc.img
└── update.img
```

`update.img` is the complete Rockchip firmware package. Write it to the device eMMC with Rockchip Flash Tool. The MaskROM entry procedure depends on the carrier board; use the board's hardware documentation for the correct button or jumper. The NAOS repository does not include a board-specific flashing guide.

To build a full-disk image from the firmware package:

```bash title="Build host"
sudo ./build.sh --target raw --board mixtile-core3588e-nano
```

`raw.img` is created from an existing `update.img`, so run `--target all` first.

## Build packages for the image generator

To build artifacts without the final image:

```bash title="Build host"
sudo ./build.sh --target packages --board mixtile-core3588e-nano
```

This writes `MiniLoaderAll.bin`, `uboot.img`, `boot.img`, `ramdisk.img`, `misc.img` and `alpine-rootfs.tar.gz` to `build/output/`. Package them as APKs and upload them to your APK repository, as described in [APK Packages](/naos/system-development/apk-packages) and [Image Generation](/naos/system-development/image-generation).

## First boot and login

The debug UART runs at 1500000 baud. Boot messages and the IPv4 address of `eth0` are printed to it; the `print-ip` service prints `Network Ready - eth0 IP: <address>` after DHCP completes.

Serial login is disabled in the default image. SSH password login is also disabled: `sshd` accepts certificates signed by the CA whose public key is installed at `packages/alpine/etc/ssh/ssh_ca_key.pub`.

Sign a user key with your CA and connect as `root`:

```bash title="Build host"
ssh-keygen -s ssh_ca_key \
    -I dev-cert-001 \
    -n root \
    -V always:+3650d \
    ~/.ssh/id_ed25519.pub

ssh -i ~/.ssh/id_ed25519 root@<device-ip>
```

`ssh_ca_key` is the CA private key you generated. The certificate is written next to your public key as `~/.ssh/id_ed25519-cert.pub`. Replace the repository CA public key with your own before building, as described in [Prerequisites](/naos/getting-started/prerequisites#keys).

:::warning
Do not log in as `root` over an untrusted network without a certificate policy you control. Replace the development SSH CA key and use short-lived certificates for production.
:::

To re-enable serial login for debugging, remove the two `sed` lines in the root filesystem build script (`scripts/build_alpinefs_base.sh`, or the board-specific script for your board) that delete the `tty` and `console` entries from `/etc/inittab`, then rebuild. Use this only on a device you control; it reopens the console login path.
