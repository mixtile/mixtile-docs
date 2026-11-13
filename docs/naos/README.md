---
sidebar_position: 0
description: NAOS is a lightweight embedded Linux operating system based on Alpine Linux, with APK packages, encrypted A/B images and OTA updates for Rockchip RK3588 devices.
---

# NAOS

NAOS is a lightweight embedded Linux operating system based on Alpine Linux, built for Rockchip RK3588 devices. It builds U-Boot, the Linux 6.1 kernel and an Alpine root filesystem from source, packages system components as Alpine APK packages, and produces encrypted A/B images with rollback-capable updates.

NAOS is a separate operating system from the Ubuntu- and Debian-based Mixtile OS. Choose NAOS when you need a small Alpine-based system, APK-based application delivery, or encrypted storage with A/B updates.

## What NAOS provides

- **Alpine Linux 3.22 base** — musl libc and BusyBox, OpenRC services and a root filesystem built from the official Alpine minirootfs.
- **One build entry point** — `build.sh` builds U-Boot, the kernel, a FIT boot image, the root filesystem and a Rockchip `update.img`.
- **APK packaging** — U-Boot, kernel, root filesystem and applications are delivered as versioned `.apk` packages.
- **A/B slots** — `uboot_a` and `uboot_b`, `boot_a` and `boot_b`, and `system_a` and `system_b`, with rollback and a service that repairs a failed slot.
- **Encrypted storage** — the read-only system image and the writable `userdata` partition are encrypted with dm-crypt. The key is provisioned on first boot and stored in RPMB.
- **Updates** — local `upgrade-system`, signed USB offline packages and a HawkBit OTA client.
- **Image generation** — `genimage-tools` assembles an image from prebuilt APKs plus your own application packages.

## Supported boards

The repository contains board configurations for these targets. Use the directory name from `board/` as the `--board` value.

| Board name | Target |
| --- | --- |
| `mixtile-core3588e-nano` | Mixtile Core 3588E v1.1.0 with a Jetson Orin Nano carrier board |
| `mixtile-core3588e-tx` | Mixtile Core 3588E v1.1.0 with a Jetson TX carrier board |
| `mixtile-core3588e-v2-nano` | Mixtile Core 3588E v2.0.0 with a Jetson Orin Nano carrier board |
| `mixtile-vision1` | Mixtile Vision 1 |

Only these board configurations are included. The build does not provide board support for other hardware; to add a board, see [Build System](/naos/system-development/build-system).

For the Core 3588E module and carrier board documentation, see [Mixtile Core 3588E](/core-3588e/).

## Build paths

| Path | Command | Output |
| --- | --- | --- |
| Full image | `build.sh --target all` | `build/output/update.img` |
| Packages, then image generator | `build.sh --target packages`, then `genimage.sh` | `update.img` from the APK repository |

Use the full-image path for development and validation. Use the package path for production, where U-Boot, the kernel and the root filesystem are versioned independently and reused across images.

## Documentation

<ChapterCards />
