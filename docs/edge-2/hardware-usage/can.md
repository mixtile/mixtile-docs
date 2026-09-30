---
sidebar_position: 4
description: The CAN connector of Edge 2, its pin assignments, and the external transceiver it needs.
---

# CAN

Edge 2 has one CAN controller, CAN1 of the RK3568, brought out to a four-pin, 2.0 mm connector on the top side of the board, on the edge above UART5.

The board has **no CAN transceiver**. The connector carries logic-level signals, so you need an external transceiver module, for example one based on the TJA1042, between Edge 2 and the CAN bus.

![Top view of the Edge 2 board with the CAN connector on the right edge marked](/img/docs/edge-2-board/edge-2-can-header.webp)

_Figure 1. The CAN connector_

## Pin Assignments

| Pin# | PinName | PinType | Input/Output | Signal Description |
| --- | --- | --- | --- | --- |
| 1 | 5V | Power | Output | 5 V supply for the transceiver, 200 mA maximum |
| 2 | CAN1_RX | signal | Input | CAN receive data, from the transceiver |
| 3 | CAN1_TX | signal | Output | CAN transmit data, to the transceiver |
| 4 | GND | Power | NA | Power and signal reference ground |

## Wiring

![Wiring between the Edge 2 CAN connector and a CAN transceiver: 5V to VCC, CAN1_RX to RXD, CAN1_TX to TXD, GND to GND](/img/docs/edge-2-board/edge-2-can-wiring.svg)

_Figure 2. CAN transceiver wiring_

## Software Support

Using the CAN interface needs a driver for the RK3568 CAN controller in the operating system. For the status in Mixtile OS, see [Hardware Interfaces in Mixtile OS](/edge-2/system-usage#hardware-interfaces-in-mixtile-os).
