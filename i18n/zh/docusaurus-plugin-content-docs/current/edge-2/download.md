---
sidebar_position: 2
---

# Downloads

:::info
内容翻译同步中，以下为英文原文。
:::

## Mixtile OS

Mixtile OS is the official operating system for Edge 2. Every release carries the same four distributions, each in a server and a GNOME desktop edition, and all of them run the Rockchip vendor Linux 6.1 kernel.

| Distribution | Edition | Image |
| --- | --- | --- |
| Ubuntu 26.04 LTS | Desktop (GNOME) | [ubuntu-26.04-desktop-arm64-mixtile-edge2.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/ubuntu-26.04-desktop-arm64-mixtile-edge2.img.xz) |
| Ubuntu 26.04 LTS | Server | [ubuntu-26.04-server-arm64-mixtile-edge2.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/ubuntu-26.04-server-arm64-mixtile-edge2.img.xz) |
| Ubuntu 24.04 LTS | Desktop (GNOME) | [ubuntu-24.04-desktop-arm64-mixtile-edge2.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/ubuntu-24.04-desktop-arm64-mixtile-edge2.img.xz) |
| Ubuntu 24.04 LTS | Server | [ubuntu-24.04-server-arm64-mixtile-edge2.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/ubuntu-24.04-server-arm64-mixtile-edge2.img.xz) |
| Debian 13 | Desktop (GNOME) | [debian-13-desktop-arm64-mixtile-edge2.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/debian-13-desktop-arm64-mixtile-edge2.img.xz) |
| Debian 13 | Server | [debian-13-server-arm64-mixtile-edge2.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/debian-13-server-arm64-mixtile-edge2.img.xz) |
| Debian 12 | Desktop (GNOME) | [debian-12-desktop-arm64-mixtile-edge2.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/debian-12-desktop-arm64-mixtile-edge2.img.xz) |
| Debian 12 | Server | [debian-12-server-arm64-mixtile-edge2.img.xz](https://github.com/mixtile-rockchip/mixtile-os/releases/latest/download/debian-12-server-arm64-mixtile-edge2.img.xz) |

Each image has a matching `.sha256` file in the [same release](https://github.com/mixtile-rockchip/mixtile-os/releases/latest). Extract the `.img.xz` before flashing, then follow [Flashing a Firmware Image](/edge-2/getting-started/install-os).

The images above always point at the latest release. For older releases and the changelog, see [all releases](https://github.com/mixtile-rockchip/mixtile-os/releases).

## Hardware Design

Edge 2 consists of a Mixtile Core 3568 system on module and the Edge 2 main board. Each board is versioned separately.

### Edge 2 Main Board

- [Schematic V1.2.1](pathname:///files/edge-2/edge2_v121_schematic.pdf)
- [Components Placement Map V1.2.1](pathname:///files/edge-2/edge2_v121_components_placement_map.pdf)

### Core 3568 System on Module

- [Schematic V1.2.1](pathname:///files/core-3568/core3568_v121_schematic.pdf)
- [Components Placement Map V1.2.1](pathname:///files/core-3568/core3568_v121_components_placement_map.pdf)

:::note
The V1.2.1 components placement maps also apply to V1.2.0 boards.
:::
