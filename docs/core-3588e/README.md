---
sidebar_position: 0
description: What Mixtile Core 3588E is, what it needs to run, its Jetson TX2 NX compatibility, and its main specifications.
---

# Mixtile Core 3588E

Mixtile Core 3588E is a system-on-module based on the Rockchip RK3588. It fits the 69.6 x 45 mm, 260-pin SO-DIMM form factor of the NVIDIA Jetson TX2 NX and uses the same pin assignment, so it runs on carrier boards made for the Jetson TX2 NX. The module combines an eight-core CPU, a Mali GPU and a 6 TOPS NPU with memory and eMMC storage, for embedded and edge AI products built on a carrier board.

![Mixtile Core 3588E module, showing the RK3588, the memory and the gold edge connector](/img/docs/core-3588e/core-3588e-module.webp)

_Figure 1. Mixtile Core 3588E_

## What You Need to Use It

Core 3588E is a module, not a complete computer. It has no connectors for cables: power, display, USB, network and every other interface reach it through the edge connector. To use it, you need:

- **A carrier board** that supports the Jetson TX2 NX. The carrier board has the power input and all the ports. This documentation uses the Leetop A206.
- **A power adapter** for the carrier board. The carrier board turns it into the 5 V the module needs. See [Power Supply](/core-3588e/getting-started/power-supply).
- **Cooling.** The optional [Core 3588E Heatsink](/core-3588e/accessories) mounts on the module.

How the module and the carrier board divide the work is shown in [Hardware Information](/core-3588e/hardware-usage/#module-and-carrier-board).

## Key Features

### RK3588 with a 6 TOPS NPU

The RK3588 has four Cortex-A76 and four Cortex-A55 cores, an Arm Mali-G610 MP4 GPU and an NPU with up to 6 TOPS. The NPU runs neural-network inference on the module, for example object detection with RKNN models. See [AI](/core-3588e/application-development/ai).

### Jetson TX2 NX form factor

The module has the size, the mounting holes and the 260-pin SO-DIMM edge connector of the Jetson TX2 NX, and its signals are on the same pins. A carrier board designed for the Jetson TX2 NX can therefore host Core 3588E. The software is not NVIDIA's: Core 3588E runs Mixtile OS with Rockchip drivers, not JetPack. For what is compatible and what to check on a carrier board, see [Carrier Boards](/core-3588e/hardware-usage/carrier-boards).

### Interfaces on the edge connector

- HDMI and DisplayPort outputs
- PCIe 3.0 x4, for an NVMe SSD, and PCIe 2.1 x1, for a Wi-Fi card
- MIPI CSI-2 camera inputs
- Gigabit Ethernet, with the PHY on the module
- One USB 3.0 and three USB 2.0 ports
- UART, I²C, SPI, I²S, CAN and GPIO

Which of them you can use, and with which connector, depends on the carrier board.

### Operating systems

Core 3588E runs Mixtile OS, Mixtile's official operating system for the module:

| Distribution | Editions |
| --- | --- |
| Ubuntu 26.04 LTS | Server, Desktop (GNOME) |
| Ubuntu 24.04 LTS | Server, Desktop (GNOME) |
| Debian 13 | Server, Desktop (GNOME) |
| Debian 12 | Server, Desktop (GNOME) |

Hardware video decoding and encoding and the NPU work out of the box, and the desktop edition uses the GPU for 3D graphics.

Other systems are also available for Core 3588E:

| System | Suited to | Maintained by |
| --- | --- | --- |
| Yocto | BSP work, hardware bring-up and system customization, with the mainline kernel | Mixtile |
| Armbian | Debian and Ubuntu from the Armbian project | Armbian community |

For the status of each system, see [Other Operating Systems](/core-3588e/other-operating-systems).

## Module Preview

![Top side of Core 3588E: the RK3588, the memory, the eMMC and the power circuitry, with the 260-pin edge connector along the top](/img/docs/core-3588e/core-3588e-module-top.webp)

_Figure 2. Top side_

![Bottom side of Core 3588E](/img/docs/core-3588e/core-3588e-module-bottom.webp)

_Figure 3. Bottom side_

## Key Parameters

| Item | Specification |
| --- | --- |
| SoC | Rockchip RK3588 |
| CPU | Octa-core: 4 x Cortex-A76 and 4 x Cortex-A55 |
| GPU | Arm Mali-G610 MP4, with OpenGL ES, OpenCL and Vulkan |
| NPU | Up to 6 TOPS |
| Memory | 4 GB, 8 GB, 16 GB or 32 GB |
| Storage | 32 GB, 64 GB, 128 GB or 256 GB eMMC 5.1 |
| Display output | 1 x HDMI, 1 x DisplayPort |
| Video decoding | H.265 and VP9, up to 8K at 60 fps |
| Video encoding | H.264 and H.265, up to 8K at 30 fps |
| Camera | MIPI CSI-2: 3 x four-lane or 5 x two-lane |
| Ethernet | 1 x Gigabit Ethernet |
| USB | 1 x USB 3.0, 3 x USB 2.0 |
| PCIe | PCIe 3.0 x4, PCIe 2.1 x1 |
| Other interfaces | 3 x UART, 2 x SPI, 4 x I²C, 4 x I²S, 1 x CAN, SD, PWM, GPIO |
| Power input | 5 V DC, from the carrier board |
| Connector | 260-pin SO-DIMM edge connector, Jetson TX2 NX pin assignment |
| Dimensions | 69.6 x 45 mm |

## Documentation

<ChapterCards />
