---
sidebar_position: 2
description: Bring up the CAN interface and test it with can-utils.
---

# CAN

:::info
内容翻译同步中，以下为英文原文。
:::


The Edge 2 board has a CAN interface, and the CAN pin specification is already stated in the **Connectors and Pinouts** section. User must first read the CAN chip specification before configuring CAN. Edge 2 does not have a CAN chip, and the user must develop their own board in order to use the CAN interface.. The CAN chip **TJA1042**, for example, can be deployed.

If necessary, you could follow the below steps to test CAN communication.

Step 1:

Type the below information in the serial console:

```bash
ip link set can0 down
ip link set can0 type can bitrate 500000 dbitrate 500000 fd on
ip link set can0 up
```

Step 2:

Type the below command in ADB (Android Debug Bridge)

```text
candump can0
```

Step 3:

Type the below information in the serial console:

```text
cansend can0 7DF#0201000000000000
```

Then you could see the output in ADB (Android Debug Bridge) as below:

```text
can0  7DF   [8]  02 01 00 00 00 00 00 00
can0  7E8   [8]  06 41 00 FF FF FF FF 00
```

## Pinout

| Pin | Name | Type | Direction | Description |
| --- | --- | --- | --- | --- |
| 1 | 5V | PWR | Output | 5 V at 200 mA max |
| 2 | CAN1_RX | IO | Input | CAN receive data, connect to a CAN transceiver |
| 3 | CAN1_TX | IO | Output | CAN transmit data, connect to a CAN transceiver |
| 4 | GND | GND | – | Power and signal reference ground |

For every connector on the board, see [Connectors and Pin Assignments](../hardware/connectors.md) in the hardware reference.
