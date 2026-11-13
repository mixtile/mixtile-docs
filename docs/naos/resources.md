---
sidebar_position: 4
description: Source repositories and design documents.
---

# Resources

## Source code

| Repository | Contents |
| --- | --- |
| [naos](https://github.com/mixtile-rockchip/naos) | Build scripts, board configurations, package overlay, encryption and upgrade tools |
| [genimage-tools](https://github.com/mixtile-rockchip/genimage-tools) | Image generator |
| [aports](https://github.com/mixtile-rockchip/aports) | Application APK examples, including `drm-firefox` |
| [rockchip-flash-tool](https://github.com/mixtile-rockchip/rockchip-flash-tool) | Host tool for writing Rockchip images |

The NAOS build also clones these repositories:

| Repository | Used for |
| --- | --- |
| [rkbin](https://github.com/mixtile-rockchip/rkbin) | Rockchip boot binaries |
| [u-boot](https://github.com/mixtile-rockchip/u-boot) | U-Boot, branch `next-dev` |
| [mixtile-sdk-rk-kernel](https://github.com/mixtile-rockchip/mixtile-sdk-rk-kernel) | Linux 6.1 kernel, branch `rk3588-linux-6.1-rkr6` |

## Design documents

| Document | Contents |
| --- | --- |
| [Software Design Specification](https://github.com/mixtile-rockchip/naos/blob/main/doc/software-design.md) | Architecture, design goals and document index |
| [System Design Overview](https://github.com/mixtile-rockchip/naos/blob/main/doc/detailed-design/system-design-overview.md) | Design principles |
| [Lightweight Design](https://github.com/mixtile-rockchip/naos/blob/main/doc/detailed-design/lightweight-design.md) | Alpine root filesystem, minimization and kernel optimization |
| [Security and Compliance Design](https://github.com/mixtile-rockchip/naos/blob/main/doc/detailed-design/security-and-compliance-design.md) | Secure boot, encryption, UART and SSH |
| [System Stability and Reliability Design](https://github.com/mixtile-rockchip/naos/blob/main/doc/detailed-design/system-stability-and-reliability-design.md) | A/B updates, watchdog and recovery |
| [Modular Build and Operations](https://github.com/mixtile-rockchip/naos/blob/main/doc/detailed-design/modular-build-and-operations.md) | Build flow, APK management, CI/CD and GPIO abstraction |

## Guides

| Guide | Contents |
| --- | --- |
| [Image Generator Guide](https://github.com/mixtile-rockchip/naos/blob/main/doc/user-guide/image-generator-guide.md) | Upstream image generator usage |
| [APK Package Build Example](https://github.com/mixtile-rockchip/naos/blob/main/doc/user-guide/apk-package-build-example.md) | `drm-firefox` package walkthrough |

## Upstream references

| Reference | Contents |
| --- | --- |
| [Alpine APKBUILD reference](https://wiki.alpinelinux.org/wiki/APKBUILD_Reference) | APKBUILD fields |
| [Creating an Alpine package](https://wiki.alpinelinux.org/wiki/Creating_an_Alpine_package) | `abuild` workflow |
| [OpenRC](https://wiki.alpinelinux.org/wiki/OpenRC) | Service management |
| [HawkBit](https://eclipse.dev/hawkbit/) | OTA server and rollout management |
| [Mixtile Core 3588E](/core-3588e/) | Hardware documentation for the Core 3588E module |

## Related documentation

- [Building NAOS](/naos/getting-started/build-naos)
- [Build System](/naos/system-development/build-system)
- [Image Generation](/naos/system-development/image-generation)
- [System Updates](/naos/system-management/system-updates)
