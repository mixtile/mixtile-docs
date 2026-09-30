---
sidebar_position: 1
description: Wire and test the UART3 and UART5 connectors.
---

# UART

:::info
内容翻译同步中，以下为英文原文。
:::

Edge 2 has two UART interfaces, UART3 and UART5.

## Connecting hardware

Port the USB to UART converter to the PC, and connect the cable to the edge2 UART3/UART5 connector. Refer to the following wire sequence connection diagram:

![uart-connection](/img/docs/use-uart/96a74bff1eed.webp)

## Pinout

Both connectors use the same layout.

| Pin | Name | Type | Direction | Description |
| --- | --- | --- | --- | --- |
| 1 | 3.3V | PWR | Output | 3.3 V at 100 mA max |
| 2 | UART3_RX / UART5_RX | IO | Input | Serial data input |
| 3 | UART3_TX / UART5_TX | IO | Output | Serial data output |
| 4 | GND | GND | – | Power and signal reference ground |

For every connector on the board, see [Connectors and Pin Assignments](../hardware/connectors.md) in the hardware reference.

## Testing UART

### Open the PC serial port

Taking macOS as an example, the USB to UART converter node `tty.usbserial-AQ01C9CC%` exists in the system, and the command to open it through the `picocom` tool is as follows:

```bash
$ picocom -b 9600 /dev/tty.usbserial-AQ01C9CC%
```

The USB to UART converter node exists in the Ubuntu in the form of `/dev/ttyUSB[1, 2, 3.....]`.

The USB to UART converter node exists in the Windows in the form of `COM[1、2、3....]`.

For more details, please refer to the **Serial Debugging**.

### Sending data from Edge 2

The Edge 2 UART5 device file is `/dev/ttyS5`. Run the following commands on Edge 2:

```bash
echo "edge2 UART5 test..." > /dev/ttyS5
```

The PC serial terminal (`picocom`) should receive the string `"edge2 UART5 test..."`.

### Receiving data with Edge 2

Run the following command on edge2:

```bash
cat /dev/ttyS5
```

Send a string, e.g. `“edge2 UART5 test…”`, using the PC serial terminal (`picocom`) to test the connection. Edge 2 should see the same string.

:::note
UART3 usage is the same as UART5.
:::

## Configuring UART

\[**Note**\]: The Android / Debian released by Mixtile already enabled the UART function in the kernel, so you could just ignore the below instruction. If you plan to compile your Andorid / Debian system, please remember to configure UART as below.

To use Edge 2 UART3 and UART5, you need to enable UART3 and UART5 in the dts of the kernel.

The following file is involved in the kernel:

```text
kernel/arch/arm64/boot/dts/rockchip/mixtile-edge2.dts
```

To enable UART3 and UART5:

```dts
&uart3 {
    status = "okay";
    pinctrl-0 = <&uart3m1_xfer>;
};

&uart5 {
    status = "okay";
    pinctrl-0 = <&uart5m1_xfer>;
};
```

To compile the kernel, see the [Development](/edge-2/development) chapter.

To write the image, see [Installing the System](../getting-started/install-os.md).
