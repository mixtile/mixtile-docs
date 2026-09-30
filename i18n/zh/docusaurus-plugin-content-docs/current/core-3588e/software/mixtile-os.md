---
sidebar_position: 1
description: What Mixtile OS is, which editions exist for Core 3588E, and what is accelerated.
---

# Mixtile OS

:::info
内容翻译同步中，以下为英文原文。
:::

Mixtile OS is the official operating system for Core 3588E. It is built from [mixtile-rockchip/mixtile-os](https://github.com/mixtile-rockchip/mixtile-os) and ships as ready-to-flash images; there is one image per distribution and edition, all on the same Rockchip vendor Linux 6.1 kernel.

## Editions

| Distribution | Codename | Editions |
| --- | --- | --- |
| Ubuntu 26.04 LTS | `resolute` | Server, Desktop (GNOME) |
| Ubuntu 24.04 LTS | `noble` | Server, Desktop (GNOME) |
| Debian 13 | `trixie` | Server, Desktop (GNOME) |
| Debian 12 | `bookworm` | Server, Desktop (GNOME) |

The server edition has no graphical session. The desktop edition adds GNOME.

Download links for all eight Core 3588E images are on [Downloads](/core-3588e/download), and the write procedure is [Flashing a Firmware Image](/core-3588e/getting-started/install-os).

## What is accelerated

- **3D**: Mali GPU through the Mesa OpenGL and Vulkan drivers
- **Video**: hardware encoding and decoding through Rockchip MPP
- **2D**: hardware 2D acceleration
- **NPU**: on-device inference

## Logging in

| Item | Value |
| --- | --- |
| User | `mixtile` |
| Password | `mixtile` |
| Hostname | `mixtile-core3588e` |
| Serial console | `ttyS2`, 1500000 baud |

Logins are accepted on HDMI, the serial console and SSH. Change the password with `passwd` after the first boot. See [Connect to Core 3588E](/core-3588e/getting-started/connect).

## Building it yourself

The image sources are public and one command builds any combination. See [Building a Mixtile OS Image](/core-3588e/development/build-image).
