---
sidebar_position: 2
description: How to power Edge 2 over USB-C PD or 12 V DC, and how much power its connectors supply to attached devices.
---

# Power Supply

Edge 2 takes power in one of three ways: USB-C Power Delivery, a 12 V DC adapter, or 12 V through the SATA power connector. Use one input at a time.

## Requirements

| Input | Where | Requirement |
| --- | --- | --- |
| USB Power Delivery | **POWER**, the USB-C port at the corner of the board | A USB PD 2.0 or PD 3.0 adapter, connected with a USB-C to USB-C cable such as the one in the box. The board accepts 5 V to 20 V, up to 20 V at 3 A. |
| 12 V DC | **DC 12V**, the round jack on the short edge | A 12 V adapter that supplies at least 2 A. The board draws up to 3 A. |
| 12 V through SATA power | The SATA power connector next to the DC jack, pins 13 to 15 | 12 V at up to 3 A, for example from the power supply of an enclosure |

For USB-C power, the adapter must support USB PD and the cable must be USB-C to USB-C. A USB-A to USB-C cable does not negotiate PD.

The **POWER** port also carries USB 2.0 data. While the board is powered from the DC jack, the same port connects Edge 2 to a computer for [flashing](/edge-2/getting-started/install-os).

![Top view of the Edge 2 board with the POWER USB-C port, the DC 12V jack and the SATA power connector marked](/img/docs/edge-2-board/edge-2-power-inputs.webp)

_Figure 1. The three power inputs_

The green power LED lights up when the board is powered.

## Powering attached devices

The board's connectors supply power to what you attach to them, each within its own limit:

| Output | Where | Limit |
| --- | --- | --- |
| 5 V | Each USB 3.0 Type-A port | 1 A |
| 5 V | [5V output connector](/edge-2/hardware-usage/other-connectors#5v-output) | 2 A in total |
| 5 V | [CAN connector](/edge-2/hardware-usage/can), pin 1 | 200 mA |
| 3.3 V | [UART3 and UART5 connectors](/edge-2/hardware-usage/uart), pin 1 | 100 mA each |
| 3.3 V | [I²C connector](/edge-2/hardware-usage/other-connectors#i2c), pin 1 | 100 mA |
| 3.8 V | [M.2 and Mini PCIe sockets](/edge-2/hardware-usage/m2-mini-pcie) | 3 A in total |

Devices that draw more than this need their own supply.
