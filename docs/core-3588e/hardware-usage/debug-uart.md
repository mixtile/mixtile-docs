---
sidebar_position: 3
description: Where the Core 3588E debug UART is on the Leetop A206, its pins and how to connect to it.
---

# Debug UART

The debug UART carries the serial console of Core 3588E. It is UART2 of the module, on pins 236 and 238 of the edge connector, and the carrier board brings it to a header. On the Leetop A206, it is on the **button header**.

## Specifications

| Item | Value |
| --- | --- |
| Connector | Button header, 1 x 12 pins, 2.54 mm pitch |
| Signals | UART RXD on pin 3, UART TXD on pin 4, GND on pin 7 |
| Signal level | 3.3 V |
| Module signal | UART2, edge connector pins 236 (TXD) and 238 (RXD) |
| Settings | 1500000 baud, 8N1, no flow control, as used by the bootloader and Mixtile OS |

## Connection

Connect a 3.3 V USB to TTL converter as follows.

| Converter | Button header |
| --- | --- |
| GND | GND, pin 7 |
| TXD | UART RXD, pin 3 |
| RXD | UART TXD, pin 4 |

![Wiring between a USB to TTL converter and the button header of the Leetop A206: converter TXD to RXD pin 3, RXD to TXD pin 4, GND to GND pin 7](/img/docs/core-3588e/core-3588e-debug-uart-wiring.webp)

_Figure 1. Converter wiring_

For the complete serial-console procedure, see [Connect to Core 3588E](/core-3588e/getting-started/connect#serial-console).
