---
sidebar_position: 2
description: Install a Wi-Fi card in the mini PCIe socket and connect to a network.
---

# Mini PCIe

:::info
内容翻译同步中，以下为英文原文。
:::

Mixtile Blade 3 provides a mini PCIe interface, which is a smaller form-factor for PCI Express (Peripheral Component Interconnect Express). This interface provides both the standard PCI Express and USB 2.0 signals, allowing flexibility in peripheral design.

![Top view of Blade 3 with a callout pointing to the Mini PCIe slot on the right side of the board](/img/docs/blade-3-board/blade-3-mini-pcie-slot.webp)

_Figure 1. Mini PCIe slot of Blade 3_

Specifically, this interface supports integrating the following devices:

-   Wi-Fi modules
-   Bluetooth cards
-   Mobile network (4G, LTE, 5G) cards
-   Storage drives
-   Internal USB headers or adapters

This document describes how to connect a Wi-Fi module to Blade 3 using the mini PCIe interface. For the pin assignments of the socket, see [Mini-PCIe](./README.md#mini-pcie) in the hardware reference.

:::note
Blade 3 works with Intel Wi-Fi modules, such as 6E AX411, 6E AX211, and 6 AX200 (used in this document). On the Ubuntu editions of Mixtile OS they work as soon as they are installed. On the Debian editions, install their firmware first. If you use Wi-Fi modules produced by other vendors, ensure that you install compatible drivers.
:::

## Preparations

-   [Set up connections of Blade 3](../getting-started/quick-start.md#wiring-and-powering-up) without connecting the Ethernet cable.
-   [Log in to Blade 3 using a serial communication tool](../getting-started/connect.md#serial-console).

## Steps

### Step 1. Install the Wi-Fi module

Fix the module to the mini PCIe socket with notch aligned and fasten the module using a screw, as shown in the following figure.

![](/img/docs/connect-a-wi-fi-module-to-blade-3/a9d4f2718a39.webp)

_Figure 2. Wi-Fi module installed in Blade 3_

### Step 2. Connect to Wi-Fi network

You can connect to Wi-Fi network either via GUI or via command-line interface (CLI).

Via GUI (recommended):

1\. On the main window of Blade 3, click the network connection icon in the upper right corner. Available networks are listed, as shown in the following figure. 

![](/img/docs/connect-a-wi-fi-module-to-blade-3/4bb39f28fccc.webp)

_Figure 3. Listing available networks_

2\. Select a network. Enter the password for connection.

![](/img/docs/connect-a-wi-fi-module-to-blade-3/ceb9089f1a5b.webp)

_Figure 4. Connecting to a network_

Via CLI:

Step 1. Check Wi-Fi connection and configuration. 

1.1 Enter Blade 3 console and check whether the Wi-Fi module has been connected by running the following command:

```text
lspci
```

The command output is as follows. The last line indicates the Wi-Fi module.

```text
0002:20:00.0 PCI bridge: Fuzhou Rockchip Electronics Co., Ltd Device 3588 (rev 01)

0002:21:00.0 PCI bridge: ASMedia Technology Inc. Device 1182

0002:22:03.0 PCI bridge: ASMedia Technology Inc. Device 1182

0002:22:07.0 PCI bridge: ASMedia Technology Inc. Device 1182

0002:23:00.0 Ethernet controller: Realtek Semiconductor Co., Ltd. RTL8125 2.5GbE Controller (rev 05)

0002:24:00.0 Ethernet controller: Realtek Semiconductor Co., Ltd. RTL8125 2.5GbE Controller (rev 05)

0003:30:00.0 PCI bridge: Fuzhou Rockchip Electronics Co., Ltd Device 3588 (rev 01)

0003:31:00.0 Network controller: Intel Corporation Wi-Fi 6 AX200 (rev 1a)
```

1.2 Find the network interface of the Wi-Fi module:

```bash
nmcli device status
```

The Wi-Fi module is the row whose `TYPE` is `wifi`. The name in its `DEVICE` column, for example **wlP3p49s0**, is the network interface.

Step 2. List available Wi-Fi networks by running the following command:

```bash
sudo nmcli dev wifi
```

Step 3. Connect to a Wi-Fi network by running the following command. Replace **\[Wi-Fi name\]** and **\[password\]** with the actual value. Set **network interface** to the value obtained in Step 1 (**wlP3p49s0** in this example).

```bash
sudo nmcli dev wifi connect [Wi-Fi name] password '[password]' ifname [network interface]
```

After successful connection upon the first time, you can run the following command to log in directly the next time:

```bash
sudo nmcli dev wifi connect test-1
```

Step 4. Check whether Blade 3 is connected to network successfully by running the following command:

```bash
ping www.google.com
```

If there is traffic, network connection is successful.
