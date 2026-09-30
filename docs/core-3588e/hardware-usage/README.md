---
sidebar_position: 0
description: The hardware of Core 3588E, how the module and the carrier board divide the work, where the connectors of the Leetop A206 are, and the module dimensions.
---

# Hardware Information

This page is the hardware reference for Core 3588E: what is on the module, what the carrier board adds, and where each connector sits. For how to use a specific interface, see the corresponding page in Hardware Usage.

For the full specifications, see [Key Parameters](/core-3588e/#key-parameters).

## Module and Carrier Board

Core 3588E is only the module. It holds the RK3588, the memory, the eMMC, the power management, the clocks, the real-time clock and the Ethernet PHY. All of its signals, and its 5 V power input, pass through the 260-pin SO-DIMM edge connector.

Every port you plug a cable into is on the carrier board. The carrier board decides which of the module's interfaces you can reach, and with which connector.

## Module Block Diagram

![Block diagram of Core 3588E: the RK3588 with power (PMIC and discrete power), Ethernet over RGMII, display outputs, MIPI CSI camera inputs, LPDDR4 and eMMC 5.1 on one side, and I²S, I²C, SPI, USB, PCIe, UART and CAN on the other](/img/docs/core-3588e/core-3588e-block-diagram.webp)

_Figure 1. Block diagram of Core 3588E_

## Module Interfaces

The module brings these interfaces to the edge connector. The pin of each signal is in [260-pin Connector](./connector-pinout.md).

| Interface | Description |
| --- | --- |
| Power | 5 V input, and the power-on and reset signals for the carrier board |
| [Display](./display.md) | One HDMI output and one DisplayPort output |
| [MIPI CSI](./mipi-csi.md) | Camera inputs CSI0 to CSI4 |
| MIPI DSI | One two-lane display output |
| [PCIe](./m2.md) | PCIe 3.0 x4 and PCIe 2.1 x1 |
| USB | One USB 3.0 port and three USB 2.0 ports |
| Ethernet | Gigabit Ethernet, with the PHY on the module |
| [UART](./40-pin-header.md#uart) | Debug UART and two UARTs with flow control |
| [I²C](./40-pin-header.md#i2c), SPI, I²S, GPIO | For expansion headers on the carrier board |
| CAN | One CAN controller |
| SD | One SD card interface |
| [RTC](./rtc.md) | Real-time clock on the module, with a backup battery input |

## Leetop A206 Carrier Board

This documentation uses the Leetop A206, a carrier board for the Jetson TX2 NX.

### Connector Locations

The numbers in Figures 2 to 4 match the table below.

![Top side of the Leetop A206 with numbered markers 1 to 8: SO-DIMM socket, button header, CAN header, fan header, 40-pin header, two CSI camera connectors, PoE header and power LED](/img/docs/core-3588e/core-3588e-a206-locator.webp)

_Figure 2. Top side_

![Rear edge of the Leetop A206 with numbered markers 9 to 13: DC power jack, the stacked DP and HDMI connector, four USB 3.0 ports, Ethernet and micro-USB](/img/docs/core-3588e/core-3588e-a206-rear-io.webp)

_Figure 3. Rear edge_

![Bottom side of the Leetop A206 with numbered markers 14 to 16: M.2 Key E socket J10, M.2 Key M socket J11 and RTC battery holder](/img/docs/core-3588e/core-3588e-a206-bottom.webp)

_Figure 4. Bottom side_

| # | Connector | What it is for |
| ---: | --- | --- |
| 1 | SO-DIMM socket | [Holds the module](/core-3588e/getting-started/quick-start#step-1-seat-the-module-on-the-carrier-board) |
| 2 | Button header | [Debug UART](./debug-uart.md), power button and reset |
| 3 | CAN header | CAN bus |
| 4 | Fan header | [Heatsink fan](/core-3588e/accessories), 5 V PWM |
| 5 | 40-pin header | [UART, I²C, SPI, I²S and GPIO](./40-pin-header.md), at 3.3 V |
| 6 | 2 x CSI camera, CAM0 and CAM1 | [MIPI CSI cameras](./mipi-csi.md) |
| 7 | PoE header | Optional Power over Ethernet module |
| 8 | Power LED | Blinks once the system is running |
| 9 | DC power jack | [Power input](/core-3588e/getting-started/power-supply), 9 V to 19 V DC |
| 10 | DP (upper), HDMI (lower) | [Monitor](./display.md) |
| 11 | 4 x USB 3.0 | Keyboard, mouse, storage and other USB devices |
| 12 | Ethernet | Gigabit Ethernet |
| 13 | Micro-USB, J5 | [Flashing an OS image](/core-3588e/getting-started/install-os) |
| 14 | M.2 Key E, J10 | [Wi-Fi and Bluetooth card](./m2.md#wi-fi-and-bluetooth-card) |
| 15 | M.2 Key M, J11 | [NVMe SSD](./m2.md#nvme-ssd) |
| 16 | RTC battery holder | [Backup battery for the RTC](./rtc.md), CR1225 |

The carrier board also has a microSD card slot. Which interfaces an operating system sets up depends on that system; for Mixtile OS, see [Interfaces in Mixtile OS](/core-3588e/system-usage#interfaces-in-mixtile-os).

## Dimensions

![Outline drawing of Core 3588E: top view with the positions of the two screw holes and the two M2.5 nuts, side view with a 1.20 mm board thickness, and bottom view](/img/docs/core-3588e/core-3588e-dimensions.webp)

_Figure 5. Dimensions of Core 3588E, in millimetres_

The module measures 69.6 x 45 mm, the size of the Jetson TX2 NX, and the board is 1.2 mm thick. The two 2.7 mm screw holes, at the corners opposite the edge connector, fix it to the carrier board. The two M2.5 nuts on the module hold the heatsink.
