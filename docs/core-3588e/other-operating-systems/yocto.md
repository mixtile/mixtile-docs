---
title: Yocto
sidebar_position: 1
description: Download and install the Yocto image for Core 3588E, a mainline-kernel image for BSP work, hardware bring-up and system customization.
---

# Yocto

## Overview

The Yocto image for Core 3588E is a Yocto-based system for Rockchip boards, maintained by Mixtile in its [project repository](https://github.com/mixtile-rockchip/focalcrest-rockchip-yocto). For Core 3588E it builds an image with the mainline Linux 6.18 kernel and U-Boot 2026.07.

The image is intended for BSP development, hardware bring-up and system customization. It is not a general-purpose distribution like Mixtile OS: it has no desktop, and it ships debugging and test tools instead of an application stack.

## Download

The current Core 3588E release is [rk3588-mixtile-core3588e-20260921](https://github.com/mixtile-rockchip/focalcrest-rockchip-yocto/releases/tag/rk3588-mixtile-core3588e-20260921). Download its image, about 870 MB:

[focalcrest-image-bringup-rk3588-mixtile-core3588e.rootfs-20260921094113.wic](https://github.com/mixtile-rockchip/focalcrest-rockchip-yocto/releases/download/rk3588-mixtile-core3588e-20260921/focalcrest-image-bringup-rk3588-mixtile-core3588e.rootfs-20260921094113.wic)

## Install

The `.wic` file is a complete, uncompressed disk image for the eMMC, with U-Boot included. Write it as described in [Flashing an OS Image](/core-3588e/getting-started/install-os).

## First Boot

:::danger
The image logs `root` in without a password, both over SSH and on the serial console. Do not connect Core 3588E to an untrusted network while it runs this image.
:::

You can reach the module in two ways:

- **Serial console.** Connect to the [debug UART](/core-3588e/hardware-usage/debug-uart) at 1500000 baud. `root` is logged in automatically.
- **USB network link.** Connect the carrier board's micro-USB port to your computer. The module appears as a USB network adapter at `192.168.7.1` and gives your computer an address by DHCP. Then run:

  ```bash title="Host PC"
  ssh root@192.168.7.1
  ```

The image is smaller than the eMMC, and the root file system does not grow to fill it on first boot. To use the whole eMMC, extend the partition table and the root file system yourself.

## Build from Source

The release image above is built from the same source, so you only need to build it yourself to customize the system.

### Prerequisites

An x86_64 computer running Ubuntu 22.04 or 24.04, the host systems the project is tested on. Install the build dependencies:

```bash title="Host PC"
sudo apt-get update
sudo apt-get install -y --no-install-recommends gawk wget git diffstat unzip texinfo gcc \
    build-essential chrpath socat cpio python3 python3-pip python3-pexpect python3-git \
    python3-jinja2 python3-subunit xz-utils debianutils iputils-ping zstd liblz4-tool file \
    locales libacl1
sudo locale-gen en_US.UTF-8
```

On Ubuntu 24.04, BitBake also needs unprivileged user namespaces, which AppArmor restricts by default:

```bash title="Host PC"
sudo sysctl kernel.apparmor_restrict_unprivileged_userns=0
```

### Get the source

The upstream Yocto layers are Git submodules, so clone with `--recurse-submodules`:

```bash title="Host PC"
git clone --recurse-submodules https://github.com/mixtile-rockchip/focalcrest-rockchip-yocto.git
cd focalcrest-rockchip-yocto
```

### Configure the Core 3588E build

Create a build directory for Core 3588E and set the machine. Without a directory name, `setup-env.sh` uses `build-az07`, and without the `MACHINE` line it builds for another board.

```bash title="Host PC"
. ./setup-env.sh build-core3588e
echo 'MACHINE = "rk3588-mixtile-core3588e"' >> conf/auto.conf
```

`setup-env.sh` changes into the build directory. In a new shell, run `. ./setup-env.sh build-core3588e` again from the repository directory before you build; the `MACHINE` line only needs to be added once.

### Build

```bash title="Host PC"
bitbake focalcrest-image-bringup
```

### Build output

The disk image is written to `tmp/deploy/images/rk3588-mixtile-core3588e/` in the build directory:

```text
focalcrest-image-bringup-rk3588-mixtile-core3588e.rootfs-<timestamp>.wic
```

Install it as described in [Install](#install).

:::warning
A self-built image has the same debug settings as the release image, including the `root` login without a password. Review the image configuration before you connect a self-built image to an untrusted network.
:::

The Core 3588E support is in the `layers/meta-focalcrest/` layer. Its README in the [project repository](https://github.com/mixtile-rockchip/focalcrest-rockchip-yocto) describes the machine configuration and the image.

## Known Limitations

The project reports the following as validated on Core 3588E: booting from the eMMC, a microSD card, PCIe Gen3 x4 with an NVMe SSD, the PCIe Gen2 x1 interface, Gigabit Ethernet, USB 2.0 and USB 3.0, HDMI output with audio, the Mali GPU, the NPU, the fan and the RTC. The MIPI CSI camera inputs, MIPI DSI, CAN and the SPI and I²S interfaces of the 40-pin header are not set up. The image has no Wi-Fi drivers, so a Wi-Fi card in the M.2 Key E socket is not usable.
