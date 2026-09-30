---
sidebar_position: 0
description: What Mixtile Blade 3 is, its key features, a look at the board, and its main specifications.
---

# Mixtile Blade 3

Mixtile Blade 3 is a single-board computer based on the Rockchip RK3588, in the 100 x 72 mm Pico-ITX form factor. It combines an eight-core CPU, a 6 TOPS NPU, dual 2.5 Gigabit Ethernet and 8K display output with a U.2 edge connector that carries PCIe Gen3 x4 and SATA, so a single board can run AI and video workloads at the edge, and several boards can be stacked into a cluster.

Typical uses include:

- Edge AI inference on images and video
- Compute clusters built from several Blade 3 boards
- Video capture, transcoding and multi-display output
- Network appliances and servers that need two fast Ethernet ports

## Key Features

### RK3588 with a 6 TOPS NPU

The RK3588 has four Cortex-A76 and four Cortex-A55 cores, a Mali GPU and an NPU with up to 6 TOPS. The NPU runs neural-network inference on the board itself, so object detection and small language models can run without a separate accelerator.

### Clustering and fast storage over U.2

The U.2 edge connector carries four lanes of PCIe Gen3, a SATA 3.0 channel and a 12 V power input. With the adapter included in the Blade 3 Case, it takes an M.2 NVMe SSD. With the Blade 3 Breakout Board and SFF-8643 cables, several boards are linked into a cluster over PCIe and powered from 12 V.

### Dual 2.5 Gigabit Ethernet

Two 2.5 Gigabit Ethernet ports, each with its own controller, let the board connect to two networks at once, for example as a router, firewall or gateway.

### Display and video

- HDMI 2.1 output up to 8K at 60 fps
- Two DisplayPort 1.4 outputs over the USB-C ports, up to 8K at 30 fps
- HDMI 2.0 input for capturing a 4K at 60 fps source
- Hardware H.265 and VP9 decoding up to 8K at 60 fps, and H.264 and H.265 encoding up to 8K at 30 fps
- A four-lane MIPI-CSI camera connector

Up to three monitors can be driven at once, through HDMI and the two USB-C ports, each at up to 4K.

### Expansion

- A Mini PCIe socket, with PCIe 2.0 and USB 2.0, for Wi-Fi, Bluetooth, cellular modems and similar cards
- A 30-pin header with GPIO, I²C, I²S, SPI, CAN, ADC, PWM and USB 2.0
- A four-pin connector for a 5 V cooling fan

### Compact Pico-ITX board

At 100 x 72 mm, Blade 3 follows the 2.5-inch Pico-ITX form factor. It ships with a heatsink installed, and the Blade 3 Case adds an aluminium enclosure with a fan.

### Operating systems

Blade 3 runs Mixtile OS, Mixtile's official operating system for the board:

| Distribution | Editions |
| --- | --- |
| Ubuntu 26.04 LTS | Server, Desktop (GNOME) |
| Ubuntu 24.04 LTS | Server, Desktop (GNOME) |
| Debian 13 | Server, Desktop (GNOME) |
| Debian 12 | Server, Desktop (GNOME) |

Hardware video decoding and encoding and the NPU work out of the box, and the desktop edition uses the GPU for 3D graphics.

Other systems are also available for Blade 3:

| System | Suited to | Maintained by |
| --- | --- | --- |
| OpenWrt | Routers, firewalls and network appliances, using the two 2.5 Gigabit Ethernet ports | Mixtile |
| Yocto | BSP work, hardware bring-up and system customization, with the mainline kernel | Mixtile |
| Talos Linux | Kubernetes clusters, as an experimental port based on Talos v1.7.4 | Mixtile |
| Armbian | Debian and Ubuntu from the Armbian project, with desktop and minimal editions | Armbian community |

For the status of each system, see [Other Operating Systems](/blade-3/other-operating-systems).

## Board Preview

![Mixtile Blade 3 with its heatsink, showing the Ethernet, HDMI and USB-C ports](/img/docs/blade-3-board/blade-3-render-heatsink.webp)

_Figure 1. Mixtile Blade 3_

![Top and bottom views of Blade 3 with every connector labelled](/img/docs/blade-3-board/blade-3-overview.webp)

_Figure 2. Connector layout_

Along one edge are the two Ethernet ports, HDMI OUT above HDMI IN, and the two USB-C ports: **USB0** for data, display and flashing, and **USB1** for power. The U.2 edge connector runs along the opposite side. The microSD slot, the Mini PCIe socket, the 30-pin header, the debug UART and the boot switch are on the top face of the board.

## Key Parameters

| Item | Specification |
| --- | --- |
| SoC | Rockchip RK3588 |
| CPU | Octa-core: 4 x Cortex-A76 and 4 x Cortex-A55 |
| GPU | Arm Mali-G610 MP4, with OpenGL and Vulkan |
| NPU | Up to 6 TOPS |
| Memory | 32 GB LPDDR4 |
| Storage | 256 GB eMMC, microSD slot (SD 3.0) |
| Display output | 1 x HDMI 2.1, up to 8K at 60 fps or 4K at 120 fps; 2 x DisplayPort 1.4 over USB-C, up to 8K at 30 fps |
| Display input | 1 x HDMI 2.0, up to 4K at 60 fps |
| Video decoding | H.265 and VP9, up to 8K at 60 fps |
| Video encoding | H.264 and H.265, up to 8K at 30 fps |
| Camera | 1 x MIPI-CSI, four lanes |
| Ethernet | 2 x 2.5 Gigabit Ethernet |
| USB | 2 x USB 3.2 Gen 1 Type-C: USB0 with OTG, USB1 with power input |
| Expansion | U.2 edge connector with PCIe Gen3 x4, SATA 3.0 and 12 V input; Mini PCIe socket with PCIe 2.0 and USB 2.0; 30-pin header |
| Power input | USB PD 2.0 or 3.0 on USB1, up to 20 V at 3 A; or 12 V at 3 A through the U.2 connector |
| Operating temperature | 0 to 80 °C |
| Dimensions | 100 x 72 mm, Pico-ITX |

## Documentation

<ChapterCards />
