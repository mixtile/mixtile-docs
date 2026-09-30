---
sidebar_position: 2
description: How Core 3588E is powered through its carrier board, what adapter the Leetop A206 needs, and what the module requires from a carrier board.
---

# Power Supply

Core 3588E takes its power from the carrier board, never from a cable of its own. You power the carrier board, and the carrier board supplies the module.

## Powering the carrier board

Use the power input and the adapter that the carrier board's manufacturer specifies.

| Carrier board | Power input | Requirement |
| --- | --- | --- |
| Leetop A206 | DC power jack, on the rear edge | 9 V to 19 V DC, 3 A. Plug: 5.5 mm outer diameter, 2.5 mm inner diameter, center positive. |

On the Leetop A206, the micro-USB port is for data and flashing only and does not power the board.

The carrier board starts the module as soon as power is connected. On the Leetop A206, the power LED next to the micro-USB port starts blinking once the system is running.

## What the module needs

The module has a single power input: **5 V DC** on the `VDD_IN` pins of the edge connector, pins 251 to 260. It generates every other voltage it needs on the module, so the carrier board does not supply any I/O voltages.

A carrier board designed for the Jetson TX2 NX already provides this 5 V rail and the power-on sequence. If you are designing your own carrier board, see [Carrier Boards](/core-3588e/hardware-usage/carrier-boards#designing-a-carrier-board).

## Powering attached devices

The ports of the carrier board, such as USB, M.2 and the 40-pin header, are powered by the carrier board. How much each can supply is set by the carrier board. Check its documentation before you connect a device that draws a lot of current, such as a USB hard disk.
