---
sidebar_position: 0
description: What Mixtile Edge 2 is, its main features, a look at the board and its enclosure, and its main specifications.
---

# Mixtile Edge 2

Mixtile Edge 2 is a single-board computer for IoT gateways and edge computing, based on the Rockchip RK3568 on a Mixtile Core 3568 system-on-module. Around a quad-core CPU and a 1 TOPS NPU it combines Gigabit Ethernet, Wi-Fi 6 and Bluetooth, M.2 and Mini PCIe sockets for cellular, LoRa and Zigbee modules, and isolated RS-485, CAN and UART connectors for field equipment.

Typical uses include:

- IoT and smart-home gateways, for example running Home Assistant with a Zigbee and Z-Wave module
- Cellular and LoRaWAN gateways with a module in the M.2 or Mini PCIe socket
- Industrial controllers that talk to equipment over RS-485, CAN or UART
- Small edge servers and network appliances

## Key Features

### RK3568 with a 1 TOPS NPU

The RK3568 has four Cortex-A55 cores at up to 2.0 GHz, an Arm Mali-G52 GPU and an NPU with 1 TOPS for neural-network inference on the board.

### Wireless and module expansion

- Wi-Fi 6 (802.11ax) and Bluetooth 5.0 from an on-board AP6275S module, with two antenna connectors
- An M.2 Key B socket with PCIe 3.0 and USB 2.0, for 4G and 5G modems or an NVMe SSD, with its own SIM slot
- A Mini PCIe socket with USB 2.0, for LoRa concentrators, Zigbee and Z-Wave modules and 4G modems, with its own SIM slot

### Industrial connectors

An isolated RS-485 terminal block on the board edge, plus connectors for CAN, two UARTs, I²C, four ADC inputs and an IR receiver. A real-time clock with a coin-cell holder keeps the time while the board is off.

### Display and multimedia

- HDMI 2.0 output
- eDP, two MIPI-DSI and one MIPI-CSI connectors on the board
- Hardware video decoding up to 4K at 60 fps, and encoding up to 1080p
- A 3.5 mm headphone jack

### Power

Edge 2 is powered over USB-C Power Delivery, from 5 V to 20 V, or with 12 V from a DC adapter. See [Power Supply](/edge-2/getting-started/power-supply).

### Operating systems

Edge 2 runs Mixtile OS, Mixtile's official operating system for the board:

| Distribution | Editions |
| --- | --- |
| Ubuntu 26.04 LTS | Server, Desktop (GNOME) |
| Ubuntu 24.04 LTS | Server, Desktop (GNOME) |
| Debian 13 | Server, Desktop (GNOME) |
| Debian 12 | Server, Desktop (GNOME) |

Other systems are also available for Edge 2:

| System | Suited to | Maintained by |
| --- | --- | --- |
| Home Assistant OS | Smart-home hubs, with the Mixtile Zigbee and Z-Wave module | Mixtile |
| OpenWrt | Routers and network appliances | Mixtile |
| Yocto | BSP work and hardware bring-up, with the mainline kernel | Mixtile |
| Armbian | Debian and Ubuntu from the Armbian project | Armbian community |

For the status of each system, see [Other Operating Systems](/edge-2/other-operating-systems).

## Board Preview

![Mixtile Edge 2 board with the Core 3568 module in the middle, the USB, HDMI, RS-485 and Ethernet ports along the front edge, and the U.2 connector on the right edge](/img/docs/edge-2-board/edge-2-board-render.webp)

_Figure 1. Mixtile Edge 2_

![Top and bottom sides of the Edge 2 board with every connector labelled](/img/docs/edge-2-board/edge-2-board-overview.webp)

_Figure 2. Connector layout, top and bottom sides_

One long edge of the board has the **POWER** USB-C port, two USB 3.0 ports, HDMI, the RS-485 terminal block and Ethernet. The opposite edge has the power button, the power and system LEDs, a third USB 3.0 port, the headphone jack and the microSD slot. The DC 12V jack and the SATA power connector are on one short edge, and the U.2 connector on the other. The bottom side has the M.2 and Mini PCIe sockets with a micro-SIM slot for each, the eDP, MIPI-DSI and MIPI-CSI connectors, the Wi-Fi and Bluetooth module with its two antenna connectors, and the RECOVERY button. For every connector, see [Hardware Information](/edge-2/hardware-usage).

An enclosure with two Wi-Fi antennas is available as the Edge 2 Kit, see [Accessories](/edge-2/accessories#edge-2-kit-enclosure).

## Key Parameters

| Item | Specification |
| --- | --- |
| SoC | Rockchip RK3568, on the Mixtile Core 3568 system-on-module |
| CPU | Quad-core Cortex-A55, up to 2.0 GHz |
| GPU | Arm Mali-G52 |
| NPU | 1 TOPS |
| Memory and storage | 2 GB LPDDR4 with 16 GB eMMC, or 4 GB LPDDR4 with 32 GB eMMC |
| microSD | 1 x slot, SD 3.0 |
| Display output | 1 x HDMI 2.0; 1 x eDP and 2 x MIPI-DSI connectors |
| Camera | 1 x MIPI-CSI connector |
| Video decoding | H.265, H.264 and VP9, up to 4K at 60 fps |
| Video encoding | H.264 and H.265, up to 1080p |
| Ethernet | 1 x Gigabit Ethernet |
| Wireless | Wi-Fi 6 (802.11ax) and Bluetooth 5.0, AP6275S module, two antenna connectors |
| USB | 3 x USB 3.0 Type-A; 1 x USB-C with USB 2.0, shared with the power input |
| Expansion | M.2 Key B socket with PCIe 3.0 x2, USB 2.0 and SIM; Mini PCIe socket with USB 2.0 and SIM; U.2 connector with SATA, PCIe 2.0, RGMII and USB 2.0 |
| Industrial I/O | 1 x isolated RS-485, 1 x CAN, 2 x UART, 1 x I²C, 4 x ADC, 1 x IR |
| Audio | 3.5 mm headphone jack; speaker, S/PDIF and digital microphone connectors |
| Real-time clock | HYM8563, with a coin-cell holder |
| Power input | USB-C PD 2.0 or 3.0, 5 to 20 V, up to 20 V at 3 A; or 12 V at 3 A through the DC jack or the SATA power connector |
| Operating temperature | 0 to 80 °C |
| Dimensions | 100 x 140 mm |

Some interfaces on the board cannot be used with Mixtile OS yet, including CAN, eDP, MIPI-DSI, MIPI-CSI, S/PDIF, the digital microphone input and U.2. Each connector's page in [Hardware Usage](/edge-2/hardware-usage) gives its status.

## Documentation

<ChapterCards />
