---
sidebar_position: 1
description: The Edge 2 debug UART header, its pin assignments and wiring.
---

# Debug UART

The debug UART is a three-pin, 2.54 mm header that carries the serial console. It is on the top side of the board, near the corner next to the POWER USB-C port. Pin 1, RXD, is marked with a triangle on the board.

![Top view of the Edge 2 board with the debug UART header marked near the lower left corner, and a close-up of its three pins: 1 RXD, 2 TXD, 3 GND](/img/docs/edge-2-board/edge-2-debug-uart.webp)

_Figure 1. The debug UART header_

## Specifications

- Three pins: RXD, TXD, GND
- 3.3 V logic
- The bootloader and Mixtile OS use it at 1500000 baud, 8N1, no flow control

## Pin Assignments

| Pin# | PinName | PinType | Input/Output | Signal Description |
| --- | --- | --- | --- | --- |
| 1 | UART2_RXD | signal | Input | UART2 receive data, for debug |
| 2 | UART2_TXD | signal | Output | UART2 transmit data, for debug |
| 3 | GND | Power | NA | Power and signal reference ground |

## Wiring

Connect a USB to TTL converter's GND to pin 3, its TXD to RXD (pin 1), and its RXD to TXD (pin 2). Do not connect the converter's VCC.

![Wiring between a USB to TTL converter and the Edge 2 debug UART: GND to GND, TXD to RXD, RXD to TXD, VCC not connected](/img/docs/edge-2-board/edge-2-debug-uart-wiring.webp)

_Figure 2. Converter wiring_

For the complete serial-console connection procedure, see [Connect to Edge 2](/edge-2/getting-started/connect#serial-console).
