---
sidebar_position: 7
---

# Downloads

:::info
内容翻译同步中，以下为英文原文。
:::

## Mixtile OS

Mixtile OS is the official operating system for Blade 3. Pick one image:

- **Edition.** Choose **Desktop** to use the board with a monitor, keyboard and mouse. Choose **Server** to use it without a monitor, over SSH or the serial console.
- **Distribution.** All four give the same hardware support on Blade 3. Choose the one your software is packaged for. If you are following another guide, use the distribution that guide was written for.

| Distribution | Desktop | Server |
| --- | --- | --- |
| Ubuntu 26.04 LTS | [ubuntu-26.04-desktop-arm64-mixtile-blade3.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/ubuntu-26.04-desktop-arm64-mixtile-blade3.img.xz) | [ubuntu-26.04-server-arm64-mixtile-blade3.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/ubuntu-26.04-server-arm64-mixtile-blade3.img.xz) |
| Ubuntu 24.04 LTS | [ubuntu-24.04-desktop-arm64-mixtile-blade3.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/ubuntu-24.04-desktop-arm64-mixtile-blade3.img.xz) | [ubuntu-24.04-server-arm64-mixtile-blade3.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/ubuntu-24.04-server-arm64-mixtile-blade3.img.xz) |
| Debian 13 | [debian-13-desktop-arm64-mixtile-blade3.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/debian-13-desktop-arm64-mixtile-blade3.img.xz) | [debian-13-server-arm64-mixtile-blade3.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/debian-13-server-arm64-mixtile-blade3.img.xz) |
| Debian 12 | [debian-12-desktop-arm64-mixtile-blade3.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/debian-12-desktop-arm64-mixtile-blade3.img.xz) | [debian-12-server-arm64-mixtile-blade3.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/debian-12-server-arm64-mixtile-blade3.img.xz) |

The links always download the latest release. Download the matching `.sha256` file from [the release page](https://github.com/mixtile-rockchip/mixtile-os/releases/latest) as well, to check the download.

Older releases are on [all releases](https://github.com/mixtile-rockchip/mixtile-os/releases).

## Flashing Tool

Rockchip Flash Tool writes an image to the board over USB. Download it from [the latest release](https://github.com/mixtile-rockchip/rockchip-flash-tool/releases/latest):

| Operating system | File |
| --- | --- |
| Windows 10 or 11 | `Rockchip-Flash-Tool-windows-x64.zip` |
| macOS 13 or later | `Rockchip-Flash-Tool-macOS-universal.dmg` |
| Linux x86_64 | `Rockchip-Flash-Tool-linux-x86_64.AppImage` |

How to install and use it is in [Flashing an OS Image](/blade-3/getting-started/install-os).

## Hardware Design

### Mixtile Blade 3

- [Schematic V1.1.1](pathname:///files/blade-3/blade3_v111_schematic.pdf)
