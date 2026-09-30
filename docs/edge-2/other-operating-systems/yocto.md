---
title: Yocto
sidebar_position: 3
description: Download and install the Yocto image for Edge 2, a mainline-kernel image for BSP work, hardware bring-up and system customization.
---

# Yocto

## Overview

The Yocto image for Edge 2 is a Yocto-based system for Rockchip boards, maintained by Mixtile in its [project repository](https://github.com/mixtile-rockchip/focalcrest-rockchip-yocto). For Edge 2 it builds an image with the mainline Linux 6.18 kernel.

The image is intended for BSP development, hardware bring-up and system customization. It is not a general-purpose distribution like Mixtile OS: it has no desktop, and it ships debugging and test tools instead of an application stack.

## Download

Edge 2 releases are listed on the [releases page](https://github.com/mixtile-rockchip/focalcrest-rockchip-yocto/releases?q=rk3568-mixtile-edge2), with tags that start with `rk3568-mixtile-edge2-`. Open the newest one and download its image, named `focalcrest-image-bringup-rk3568-mixtile-edge2.rootfs-<timestamp>.wic`, about 900 MB.

## Install

The `.wic` file is a complete, uncompressed disk image for the eMMC, with U-Boot included. Write it as described in [Flashing an OS Image](/edge-2/getting-started/install-os).

This procedure has not yet been verified with the Yocto image.

## First Boot

:::danger
The image logs `root` in without a password, both over SSH and on the serial console. Do not connect Edge 2 to an untrusted network while it runs this image.
:::

You can reach the board in two ways:

- **Serial console.** Connect to the [debug UART](/edge-2/hardware-usage/debug-uart) at 1500000 baud. `root` is logged in automatically.
- **USB network link.** Connect the **POWER** USB-C port to your computer, and power the board from the DC 12V jack. The board appears as a USB network adapter at `192.168.7.1` and gives your computer an address by DHCP. Then run:

  ```bash title="Host PC"
  ssh root@192.168.7.1
  ```

## Build from Source

The release image above is built from the same source, so you only need to build it yourself to customize the system.

These steps follow the build scripts and CI of the repository. They have not been tested as written here.

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

### Configure the Edge 2 build

Create a build directory for Edge 2 and set the machine. Without a directory name, `setup-env.sh` uses `build-az07`, and without the `MACHINE` line it builds for another board.

```bash title="Host PC"
. ./setup-env.sh build-edge2
echo 'MACHINE = "rk3568-mixtile-edge2"' >> conf/auto.conf
```

`setup-env.sh` changes into the build directory. In a new shell, run `. ./setup-env.sh build-edge2` again from the repository directory before you build; the `MACHINE` line only needs to be added once.

### Build

```bash title="Host PC"
bitbake focalcrest-image-bringup
```

### Build output

The disk image is written to `tmp/deploy/images/rk3568-mixtile-edge2/` in the build directory:

```text
focalcrest-image-bringup-rk3568-mixtile-edge2.rootfs-<timestamp>.wic
```

Install it as described in [Install](#install).

:::warning
A self-built image has the same debug settings as the release image, including the `root` login without a password. Review the image configuration before you connect a self-built image to an untrusted network.
:::

The Edge 2 support is in the `layers/meta-focalcrest/` layer. Its README in the [project repository](https://github.com/mixtile-rockchip/focalcrest-rockchip-yocto) describes the machine configuration and the image.

## Known Limitations

The project reports the following as validated on Edge 2: booting from the eMMC, the microSD slot, PCIe Gen3 x2 with an NVMe SSD in the M.2 socket, Gigabit Ethernet, Wi-Fi on both bands, Bluetooth, the USB 3.0 hub, and the USB network link. The eMMC runs in HS200 mode instead of HS400. Other interfaces, for example HDMI, audio, CAN and the serial connectors, are not listed as validated.
