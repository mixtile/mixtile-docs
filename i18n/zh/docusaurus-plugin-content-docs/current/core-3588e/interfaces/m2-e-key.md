---
sidebar_position: 5
---

# M.2 Socket (E Key)

:::info
内容翻译同步中，以下为英文原文。
:::

> In this document, we use Leetop A206 carrier board with the Wi-Fi + Bluetooth dual-band module RTL8852BE. Operations can be slightly different if you use other models of carrier boards and M.2 peripherals.

The carrier board of Mixtile Core 3588E (hereinafter referred to as Core 3588E) provides an M.2 socket (E key), through which you can install type 2230 Wi-Fi modules, Bluetooth modules, and SSDs. This document describes how to install a Wi-Fi  + Bluetooth dual-band module to the M.2 socket, and how to use the functions of this module.

## Install the module

Fix the module to the M.2 socket with notch aligned and fasten the module using a screw, as shown below.

![A Wi-Fi and Bluetooth module installed in the M.2 socket (E key)](/img/docs/core-3588e-m2-socket-e-key/d4860737fb35.webp)

_Figure 1. A Wi-Fi and Bluetooth module installed in the M.2 socket (E key)_

## Bluetooth function

1. Log in to Core 3588E using one of the following methods:
- [Login using a serial communication tool](/core-3588e/getting-started/connect#serial-console)
- [Login using SSH](/core-3588e/getting-started/connect#ssh)

2\. On the console of Core 3588E, check whether the module is recognized as a Bluetooth device by running the following command:

```bash
hciconfig
```

The output is as follows, indicating that the module is recognized as a Bluetooth device successfully.

```text
hci0: Type: Primary  Bus: USB

BD Address: EC:2E:98:4A:44:54  ACL MTU: 1021:6  SCO MTU: 255:12

UP RUNNING

RX bytes:810 acl:0 sco:0 events:64 errors:0

TX bytes:3752 acl:0 sco:0 commands:64 errors:0
```

2\. Scan Bluetooth devices nearby by running the following command:

```bash
hcitool scan
```

The output is as follows, showing Bluetooth devices nearby:

```text
Scanning ...

34:CF:F6:F3:28:1A LAPTOP-CJIUVDI1

14:7D:DA:57:EB:6B Yana's MacBook Air

3C:22:FB:10:DB:97 Bony's MacBook Pro
```

## Wi-Fi function

Operations to connect Core 3588E to network using a Wi-Fi module are the same as those for Mixtile Blade 3. Refer to [Connect Mixtile Blade 3 to network via Wi-Fi](/blade-3/getting-started/interface-usage/mini-pcie#step-2-connect-to-wi-fi-network).
