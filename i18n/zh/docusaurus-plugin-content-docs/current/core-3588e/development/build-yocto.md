---
sidebar_position: 2

---

# Compiling a Yocto Image

:::info
内容翻译同步中，以下为英文原文。
:::

## Overview

This guide describes the current Mixtile Core3588E Yocto build flow based on:

- Manifest branch: `rk3588-linux-6.1-rkr6`
- Yocto include: `common/yocto/yocto-scarthgap-release-r6.xml`
- Board layer: `meta-mixtile`
- Build target: `core-image-minimal`

Validated on: `Ubuntu + rk3588-linux-6.1-rkr6`

## Build Host Requirements

- Ubuntu 20.04/22.04 (recommended)
- At least 120 GB free disk space
- At least 16 GB RAM (more recommended)
- Stable network access (proxy recommended in restricted networks)

## Install Required Host Packages

```bash
sudo apt update
sudo apt install -y \
  gawk wget git diffstat unzip texinfo gcc build-essential chrpath socat cpio \
  python3 python3-pip python3-pexpect xz-utils debianutils iputils-ping \
  python3-git python3-jinja2 libegl1-mesa libsdl1.2-dev python3-subunit \
  mesa-common-dev zstd liblz4-tool file locales libacl1
sudo locale-gen en_US.UTF-8
```

## Sync Yocto Sources

```bash
mkdir -p ~/mixtile-core3588e-yocto
cd ~/mixtile-core3588e-yocto
repo init -u https://github.com/mixtile-rockchip/manifests.git -b rk3588-linux-6.1-rkr6 -m rk3588_linux6.1_release.xml
repo sync -c -j8 --no-tags --no-clone-bundle \
  yocto/meta-browser yocto/meta-clang yocto/meta-openembedded \
  yocto/meta-lts-mixins yocto/meta-rockchip yocto/meta-mixtile yocto/poky yocto/build/conf
```

## Enter Build Environment

```bash
cd yocto
source oe-init-build-env build
```

## Configure `local.conf`

```bash
cat > conf/local.conf <<'EOF'
MACHINE = "mixtile-core3588e"
INHERIT:append = " rockchip-image"
EOF
```

## Build Image

```bash
bitbake core-image-minimal
```

## Output Artifacts

After successful build, outputs are under:

```bash
~/mixtile-core3588e-yocto/yocto/build/tmp/deploy/images/mixtile-core3588e/
```

Key files:

- core-image-minimal-mixtile-core3588e.rootfs.update.img
- core-image-minimal-mixtile-core3588e.rootfs.wic

## Flashing (Using Rockchip Flash Tool)

1.  Download and install the latest Rockchip Flash Tool from:
    [https://github.com/mixtile-rockchip/rockchip-flash-tool/releases/latest](https://github.com/mixtile-rockchip/rockchip-flash-tool/releases/latest)
2.  Prepare your firmware image file:
  - `update.img` (recommended for packaged firmware), or
  - `.wic` image
3.  Put the board into **Loader** or **Maskrom** mode, then connect it to the host via USB.
4.  Open Rockchip Flash Tool and select the firmware image file.
5.  Click **Start Flash** to begin programming.
6.  Wait until flashing is completed successfully, then reboot the board and verify boot.

Notes:

- On Linux, if the AppImage cannot start, install `libfuse2` (or `libfuse2t64` depending on distro).
- If the device is not detected, re-check USB cable quality, USB port, and board boot mode.
