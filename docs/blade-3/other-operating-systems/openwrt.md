---
title: OpenWrt
sidebar_position: 1
description: Download the Mixtile build of OpenWrt for Blade 3, write it to the eMMC, and log in for the first time.
---

# OpenWrt

## Overview

Mixtile builds OpenWrt for Blade 3 from the official OpenWrt releases, with the Blade 3 device tree and U-Boot added. The build is published in the [mixtile-rockchip/openwrt](https://github.com/mixtile-rockchip/openwrt) repository. Blade 3 is not a target of the official OpenWrt project.

:::warning
Hardware support has not been fully verified on Blade 3. Test the interfaces you need before you rely on the system.
:::

## Download

The current release is [mixtile-v25.12.4](https://github.com/mixtile-rockchip/openwrt/releases/tag/mixtile-v25.12.4), based on OpenWrt 25.12.4. Download one of the two Blade 3 images:

| Image | File system |
| --- | --- |
| [openwrt-rockchip-armv8-mixtile_blade3-squashfs-sysupgrade.img.gz](https://github.com/mixtile-rockchip/openwrt/releases/download/mixtile-v25.12.4/openwrt-rockchip-armv8-mixtile_blade3-squashfs-sysupgrade.img.gz) | Read-only system with a writable overlay. Supports factory reset. |
| [openwrt-rockchip-armv8-mixtile_blade3-ext4-sysupgrade.img.gz](https://github.com/mixtile-rockchip/openwrt/releases/download/mixtile-v25.12.4/openwrt-rockchip-armv8-mixtile_blade3-ext4-sysupgrade.img.gz) | Writable file system, for development. |

Releases based on OpenWrt 24.10 are on the [releases page](https://github.com/mixtile-rockchip/openwrt/releases).

## Install

Each file is a complete disk image, with U-Boot included, compressed with gzip. Extract the `.img` file, then write it to the eMMC as described in [Flashing an OS Image](/blade-3/getting-started/install-os).

This procedure has not yet been verified with the OpenWrt images.

## First Boot

In the Blade 3 board configuration, `eth1` is the LAN interface and `eth0` is the WAN interface. OpenWrt's default LAN address is `192.168.1.1`. Connect a computer to the LAN port and log in as described in OpenWrt's [first login guide](https://openwrt.org/docs/guide-quick-start/walkthrough_login).

The serial console is also available on the [debug UART](/blade-3/hardware-usage/debug-uart), at 1500000 baud.

## Build from Source

The release images above are built from the same source, so you only need to build OpenWrt yourself to change its configuration or packages.

These steps follow the build configuration and CI of the repository. They have not been tested as written here.

### Prerequisites

An x86_64 computer running Ubuntu or Debian, on a case-sensitive file system. Install the build dependencies:

```bash title="Host PC"
sudo apt-get update
sudo apt-get install -y build-essential ccache file flex g++ gawk gcc-multilib gettext git \
    libncurses-dev libssl-dev python3 python3-pyelftools python3-setuptools rsync subversion \
    swig unzip wget zlib1g-dev
```

### Get the source

The `main` branch tracks upstream OpenWrt. Mixtile product support is maintained in branches based on OpenWrt release series. The `openwrt-25.12` branch is based on OpenWrt 25.12 and includes Mixtile Blade 3 support; the current release, `mixtile-v25.12.4`, is built from it.

```bash title="Host PC"
git clone -b openwrt-25.12 https://github.com/mixtile-rockchip/openwrt.git
cd openwrt
./scripts/feeds update -a
./scripts/feeds install -a
```

To build the source of a specific release, check out its tag, for example `git checkout mixtile-v25.12.4`.

### Configure the Blade 3 build

The repository includes a configuration that selects Blade 3:

```bash title="Host PC"
cp configs/mixtile-blade3-25.12.config .config
make defconfig
```

It selects **Target System** `Rockchip`, **Subtarget** `RK33xx/RK35xx boards (64 bit)` and **Target Profile** `Mixtile Blade3`. To add packages or change other options, run `make menuconfig` afterwards.

The release images also include every kernel module package. To match them, run `echo CONFIG_ALL_KMODS=y >> .config` before `make defconfig`.

### Build

```bash title="Host PC"
make download -j$(nproc)
make -j$(nproc)
```

If the build fails, run `make -j1 V=s` to see the error.

### Build output

The images are written to `bin/targets/rockchip/armv8/`, with the same names as the release files:

```text
openwrt-rockchip-armv8-mixtile_blade3-squashfs-sysupgrade.img.gz
openwrt-rockchip-armv8-mixtile_blade3-ext4-sysupgrade.img.gz
```

Install one of them as described in [Install](#install). For more about the OpenWrt build system, see the [OpenWrt developer documentation](https://openwrt.org/docs/guide-developer/toolchain/use-buildsystem).

## Known Limitations

- Which Ethernet jack is `eth0` and which is `eth1` has not been documented.
- The image includes no Wi-Fi packages.
- Ethernet, storage, USB, HDMI and other interfaces have not been verified on Blade 3.
