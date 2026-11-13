---
sidebar_position: 2
description: Assemble an image from prebuilt APK packages.
---

# Image Generation

The image generator builds a deployable image from the U-Boot, kernel and root filesystem APKs in your repository, plus any application APKs you add. It does not rebuild U-Boot or the kernel, so the same components can be reused across images.

The generator is a separate repository: [genimage-tools](https://github.com/mixtile-rockchip/genimage-tools).

## What you need

- The APK repository produced by the package path, see [APK Packages](/naos/system-development/apk-packages)
- An Ubuntu x86_64 host with `genext2fs`, `qemu-user-static`, `binfmt-support`, `squashfs-tools` and `f2fs-tools`
- The same filesystem encryption key used by the NAOS build
- Root access: `genimage.sh` creates loop devices and filesystems

```bash title="Build host"
sudo apt install genext2fs qemu-user-static binfmt-support squashfs-tools f2fs-tools
```

## Configure the generator

```bash title="Build host"
git clone https://github.com/mixtile-rockchip/genimage-tools.git
cd genimage-tools
```

Set the APK repository URL in `genimage.sh`:

```bash title="genimage.sh"
URL="http://your-server/alpine/"
```

Set the encryption key in `tools/encrypted_key` to the same key used in `tools/linux_securitydm/encrypted_key` when the APKs were built:

```text title="tools/encrypted_key"
key=YOUR_HEX_KEY
```

If the keys do not match, the generated image cannot decrypt its system and userdata partitions.

## Add application packages

Put application APKs in `packages/`:

```bash title="Build host"
cp /path/to/myapp-1.0-r0.apk packages/
```

The generator installs every APK in that directory into the root filesystem. Add any post-install commands, such as enabling an OpenRC service, to the `commands` file:

```bash title="commands"
rc-update add myapp default
```

The `commands` file runs inside the generated root filesystem.

## Generate an image

```bash title="Build host"
sudo ./genimage.sh -b core3588e-nano -u image -v 1.0.0
```

| Option | Value |
| --- | --- |
| `-b`, `--board` | Board name used as the prefix of the APK packages. The script looks for `<board>-uboot`, `<board>-kernel` and `<board>-alpine-rootfs`, version `<version>-r0`. |
| `-v`, `--version` | Version of the component APKs in the repository |
| `-u`, `--update` | `image` for a full image, `update` for an update package |

Use the board name that prefixes your APK packages. For the packages built by NAOS for the Core 3588E, that is `core3588e-nano`, `core3588e-tx` or `core3588e-v2-nano`; for Vision 1, `vision1`. The script does not validate the board name.

:::note
The built-in `genimage.sh --help` lists `core3588e` and `vision1`. The generator uses the value verbatim to form APK names, so pass the prefix that exists in your repository, such as `core3588e-nano`.
:::

The command writes `update.img` in the current directory.

A full image contains the `misc` partition with the first-boot filesystem decryption key. To create an update package for `upgrade-system` instead, use:

```bash title="Build host"
sudo ./genimage.sh -b core3588e-nano -u update -v 1.0.0
```

This writes a smaller update package that contains the partitions needed for an upgrade. Use the full image for the first installation and the update package for upgrades.
