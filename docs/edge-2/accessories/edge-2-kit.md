---
sidebar_position: 1
description: "The Edge 2 Kit enclosure: its panels and antennas, and how to open it."
---

# Edge 2 Kit

The Edge 2 Kit is Edge 2 in a metal enclosure, supplied with two 2.4 GHz and 5 GHz Wi-Fi antennas. The enclosure has openings for every port on the edges of the board, and labels them on its panels.

![Edge 2 Kit in its black enclosure, front panel with the microSD slot, headphone jack, USB 3.0 port, SYS and PWR LEDs and power button, with two antennas beside it](/img/docs/edge-2-board/edge-2-kit-render.webp)

_Figure 1. Edge 2 Kit_

## Specifications

| Item | Specification |
| --- | --- |
| Dimensions | 148 x 105 x 32 mm |
| Antennas | 2 x Wi-Fi antennas, 2.4 GHz and 5 GHz |
| Hardware versions | v1.0; v1.1, which adds DIN-rail mounting and a removable back cover |
| Compliance certificates | [CE, FCC, RoHS, WEEE and RCM](https://www.mixtile.com/app/uploads/CE-FCC-ROHS-WEEE-RCM-certificates_Mixtile-Edge-2-Kit-.zip) (ZIP) |

## Panels

| Panel | Ports |
| --- | --- |
| Front | microSD slot, headphone jack, USB 3.0, SYS and PWR LEDs, power button |
| Rear | RESET, POWER (USB-C), 2 x USB 3.0, HDMI, RS-485 (G, B, A), Ethernet |
| Right side | SATA power connector, DC 12V jack |
| Left side | Opening for the U.2 connector |

![Front panel of the Edge 2 Kit: microSD slot, headphone jack, USB 3.0 port, SYS and PWR LEDs and the power button](/img/docs/edge-2-board/edge-2-front-panel.webp)

_Figure 2. Front panel_

![Rear panel of the Edge 2 Kit: RESET, POWER USB-C, two USB 3.0 ports, HDMI, the RS-485 terminal labelled G, B, A, and Ethernet](/img/docs/edge-2-board/edge-2-rear-panel.webp)

_Figure 3. Rear panel. On the RS-485 terminal, G is GND, B is 485B and A is 485A._

![Right side of the Edge 2 Kit enclosure with the SATA power connector and the DC 12V jack](/img/docs/edge-2-board/edge-2-right-side.webp)

_Figure 4. Right side_

## Fit the Antennas

Remove the protective caps from the two antenna connectors on the top of the enclosure. Screw the antennas on clockwise, and point them upwards.

## Open the Enclosure

<img src="/img/docs/edge-2-board/edge-2-kit-exploded.webp" alt="Exploded view of the Edge 2 Kit: the top cover with the two antennas, a heatsink, the Edge 2 board and the bottom of the enclosure" width="480" />

_Figure 5. Exploded view of the Edge 2 Kit_

Shut down Edge 2 and disconnect all cables before you open the enclosure.

- **Top cover**, the side with the antennas: remove it to reach the connectors on the top side of the board, including the MASKROM button, the debug UART, the UART, CAN, I²C and ADC connectors, and the RTC battery holder. Unscrew the antennas first.
- **Bottom cover**: remove it to reach the M.2 and Mini PCIe sockets and their SIM slots on the bottom side of the board.
