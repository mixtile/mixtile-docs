---
sidebar_position: 2
---

# Downloads

:::info
内容翻译同步中，以下为英文原文。
:::

## Mixtile OS

Mixtile OS is the official operating system for Core 3588E. Every release carries the same four distributions, each in a server and a GNOME desktop edition, and all of them run the Rockchip vendor Linux 6.1 kernel.

| Distribution | Edition | Image |
| --- | --- | --- |
| Ubuntu 26.04 LTS | Desktop (GNOME) | [ubuntu-26.04-desktop-arm64-mixtile-core3588e.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/ubuntu-26.04-desktop-arm64-mixtile-core3588e.img.xz) |
| Ubuntu 26.04 LTS | Server | [ubuntu-26.04-server-arm64-mixtile-core3588e.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/ubuntu-26.04-server-arm64-mixtile-core3588e.img.xz) |
| Ubuntu 24.04 LTS | Desktop (GNOME) | [ubuntu-24.04-desktop-arm64-mixtile-core3588e.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/ubuntu-24.04-desktop-arm64-mixtile-core3588e.img.xz) |
| Ubuntu 24.04 LTS | Server | [ubuntu-24.04-server-arm64-mixtile-core3588e.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/ubuntu-24.04-server-arm64-mixtile-core3588e.img.xz) |
| Debian 13 | Desktop (GNOME) | [debian-13-desktop-arm64-mixtile-core3588e.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/debian-13-desktop-arm64-mixtile-core3588e.img.xz) |
| Debian 13 | Server | [debian-13-server-arm64-mixtile-core3588e.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/debian-13-server-arm64-mixtile-core3588e.img.xz) |
| Debian 12 | Desktop (GNOME) | [debian-12-desktop-arm64-mixtile-core3588e.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/debian-12-desktop-arm64-mixtile-core3588e.img.xz) |
| Debian 12 | Server | [debian-12-server-arm64-mixtile-core3588e.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/debian-12-server-arm64-mixtile-core3588e.img.xz) |

Each image has a matching `.sha256` file in the [same release](https://github.com/mixtile-rockchip/mixtile-os/releases/latest). Extract the `.img.xz` before flashing, then follow [Flashing a Firmware Image](/core-3588e/getting-started/install-os).

The images above always point at the latest release. For older releases and the changelog, see [all releases](https://github.com/mixtile-rockchip/mixtile-os/releases).

## Other images

Yocto is not part of Mixtile OS. The image below is a minimal build for evaluation only, without a graphical interface; build your own from the [Yocto source](/core-3588e/other-operating-systems/yocto). Its default user is `root` with no password.

- [image-release-raw-format-mixtile-core3588e-yocto-minimal-240116.wic](https://downloads.mixtile.com/core3588e/image/image-release-raw-format-mixtile-core3588e-yocto-minimal-240116.wic)
