---
sidebar_position: 2
description: How to power Blade 3 over USB-C PD or 12 V, how much power its connectors supply, and which adapters have been tested.
---

# Power Supply

Blade 3 takes power in one of two ways: USB-C Power Delivery, which is the usual one, or 12 V DC through the U.2 connector.

## Requirements

| Input | Port | Requirement |
| --- | --- | --- |
| USB Power Delivery | **USB1/PD**, the USB-C port near the corner of the board | An adapter that supports USB PD 2.0 or PD 3.0, connected with a USB-C to USB-C cable. The on-board PD controller accepts up to 20 V at 3 A. |
| 12 V DC | U.2 connector, pins P13 to P15 (`U2_12V`) | 12 V at 3 A, for example from the 12 V DCIN connector of the [Breakout Board](/blade-3/accessories#blade-3-breakout-board) |

Only USB1/PD has the PD controller. The other USB-C port, USB0/ADB next to the HDMI ports, is the one for data, display and flashing.

The power LED lights up when the board is powered.

## Powering attached devices

The board's connectors supply power to what you attach to them, each within its own limit:

| Output | Where | Limit |
| --- | --- | --- |
| 5 V | 30-pin header, pin 1 | 500 mA, fused |
| 3.3 V | 30-pin header, pin 30 | 500 mA, fused |
| 5 V fan supply | Fan connector, pin 2 | 400 mA, with overcurrent shutdown |
| 3.3 V | Mini-PCIe socket | 3 A across all its power pins |

Devices that draw more than this need their own supply.

## Adapter compatibility

The PD negotiation between the board and the adapter is handled by the operating system kernel. With some adapters it completes late, and the board can restart repeatedly before the power level is agreed. The adapters below were tested with the earlier Ubuntu 22.04 and Debian 11 images.

### Functional Power Supply

| Type | Capability | Note |
| --- | --- | --- |
| XIAOMI AD201 | 5V/3A, 9V/2.22A, 12V/1.67A, 20W Max Output |  |
| ZMI HA712 | 5V/3A, 9V/3A, 12V/3A, 15V/3A, 20V/3.25A, 65W Max Output |  |
| Lenovo Lecoo LKD1523 | 5V/3A, 9V/3A, 12V/3A, 15V/3A, 20V/3.25A, 65W Max Output |  |
| Anker A2674 | 5V/3A, 9V/3A, 12V/3A, 15V/3A, 20V/3.35A, 67W Max Output |  |

### Malfunctioning Power Supply

| Type | Capability | Note |
| --- | --- | --- |
| ZMI HA835 | 5V/3A, 9V/3A, 12V/3A, 15V/3A, 20V/3.25A, 65W Max Output | Low probability (less than 10%) of causing a repeated restart |
| SAMSUNG EP-T2510 | 5V/3A, 9V/2.77A, 25W Max Output | Low probability (less than 10%) of causing a repeated restart |
| Apple A1882 30W | 5.2V/3A, 9V/3A, 15V/2A, 20V/1.5A, 30W Max Output | Low probability (less than 10%) of causing a repeated restart |
| Apple A1947 61W | 5.2V/3A, 9V/3A, 15V/3A, 20.3V/3A, 61W Max Output | Low probability (less than 10%) of causing a repeated restart |
| Apple A2166 96W | 5.2V/3A, 9V/3A, 15V/3A, 20.5V/4.7A, 96W Max Output | Low probability (less than 10%) of causing a repeated restart |
| Apple A2452 140W | 5.2V/3A, 9V/3A, 15V/3A, 20.5V/6.8A, 140W Max Output | Low probability (less than 10%) of causing a repeated restart |
