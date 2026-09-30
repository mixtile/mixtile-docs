---
sidebar_position: 0
description: The main hardware, connectors and layout of Blade 3.
---

# Hardware Information

This page is the hardware reference for Blade 3: its main components and where each connector sits. For the details of a specific connector, including its pin assignments, and how to use it, see the corresponding page in Hardware Usage.

For the full specifications, see [Key Parameters](/blade-3/#key-parameters).

## Block Diagram

### Chip Block Diagram

![Block diagram of the Rockchip RK3588: the CPU clusters, NPU, multimedia processor, memory interfaces, multimedia interfaces, connectivity and system peripherals](/img/docs/blade-3-board/rk3588-chip-block-diagram.webp)

_Figure 1. RK3588 block diagram. Source: Rockchip RK3588 Brief Datasheet_

### System Block Diagram

![Blade 3 system block diagram: the RK3588 connected to the U.2 socket, LPDDR4, eMMC, microSD, MIPI-CSI, HDMI, USB-C, Ethernet, debug UART, Mini PCIe and the 30-pin connector](/img/docs/blade-3-board/blade-3-block-diagram.webp)

_Figure 2. System block diagram of Blade 3_

## Interface Information

![Top and bottom views of Blade 3 with every connector labelled](/img/docs/blade-3-board/blade-3-overview.webp)

_Figure 3. Connector layout, top and bottom_

| Interface | Qty | Description |
| --- | ---: | --- |
| Rockchip RK3588 | 1 | SoC, on the bottom side |
| [30-pin Header](./30-pin-header.md) | 1 | GPIO, I²C, I²S, SPI, CAN, ADC, PWM, USB 2.0 |
| [Mini PCIe](./mini-pcie.md) | 1 | PCIe 2.0 and USB 2.0, for Wi-Fi, cellular and similar modules |
| [MIPI-CSI](./mipi-csi.md) | 1 | Four-lane camera connector, on the bottom side |
| [U.2](./u2.md) | 1 | Edge connector with PCIe 3.0 x4, SATA 3.0 and 12 V input |
| [Fan](./fan.md) | 1 | Four-pin 5 V fan connector |
| [Debug UART](./debug-uart.md) | 1 | Three-pin serial console header |
| Boot mode switch | 1 | Four positions that select the boot device. Position 1: eMMC, 2: microSD, 3: SPI flash, 4: [MaskROM](/blade-3/getting-started/install-os#step-3-set-the-boot-switch-to-maskrom) |
| microSD card slot | 1 | SD 3.0 |
| [USB-C](/blade-3/getting-started/quick-start#wiring-and-powering-up) | 2 | USB0/ADB: OTG, DisplayPort, flashing. USB1/PD: [power input](/blade-3/getting-started/power-supply), DisplayPort |
| [HDMI](/blade-3/getting-started/quick-start#wiring-and-powering-up) | 2 | Upper: HDMI 2.1 output. Lower: HDMI 2.0 input |
| 2.5 Gigabit Ethernet | 2 | RJ45 |
| Power LED | 1 | Lights up when the board is powered |

## Dimensions

![Top, bottom and side outline drawings of Blade 3 with its overall dimensions](/img/docs/blade-3-board/blade-3-dimensions.webp)

_Figure 4. Dimensions of Blade 3_

The board is 100 x 72 mm, in the 2.5-inch Pico-ITX form factor. Each corner has a 3.2 mm mounting hole for M3 screws.
