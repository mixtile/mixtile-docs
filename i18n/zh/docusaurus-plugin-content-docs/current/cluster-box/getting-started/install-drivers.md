---
sidebar_position: 3
---

# Installing Drivers for Blade 3 Boards

:::info
内容翻译同步中，以下为英文原文。
:::

To successfully operate Blade 3 boards after installing them into Cluster Box, you must update the boot image file and install a driver for the Blade 3 boards. This document provides you guidance on how to update the boot image file and install the driver.

You can watch the following video to get a quick start.

## Preparations

- Download boot image file: [boot.img](https://downloads.mixtile.com/boot.img)
- Download driver: [miop-control-arm64.deb](https://downloads.mixtile.com/miop-control-arm64.deb)
- Install ADB tool by referring to the Android SDK platform tools.
- Prepare a USB-C cable.
- Make sure you are using the Debian system for Blade 3 boards. There are some issues when using the Ubuntu system.

## Steps

### Step 1. Download the boot image file and driver and put them to the Blade 3 board

1.1 Connect your PC or Mac to the USB-C port (near HDMI) of Blade 3 indicated by N1 using the USB-C cable.

1.2 Download the boot image file and driver to your PC or Mac. Under the directory of the two files, run the following adb command to push them to the Blade 3 board:

```bash
adb push boot.img miop-control-arm64.deb /home/mixtile
```

:::note
You can also download the files to the Blade 3 board directly, or upload them to Blade 3 remotely by running the command: **scp boot.img** **miop-control-arm64.deb mixtile@_blade 3 IP address_: /home/mixtile**.
:::

### Step 2. Update the boot image file and install the driver

2.1 Run **adb shell** to navigate to the console of Blade 3.

2.2 Update the boot image file:

```bash
sudo dd if=boot.img of=/dev/mmcblk1p3 conv=sync
```

2.3 Install the driver:

```bash
sudo dpkg -i miop-control-arm64.deb
```

### Step 3. Install the driver to other Blade 3 boards

Repeat the preceding steps to update the boot image file and install the driver to the other three Blade 3 boards.

### Step 4. Reboot Cluster Box

### Step 5. Check whether Blade 3 boards are displayed either via SSH or via GUI

Method 1: Via SSH

1.  Log in to Cluster Box by running the **ssh mixtile**@_Cluster Box IP address_ command.
2.  List active Blade 3 boards by running the **nodectl list** command.
    If the command output shows the four Blade 3 boards as shown below, they have been started properly.

```text
If no device is found, run the rescan command and then the list command to view the device.

03:00.0 Network controller: Mixtile Limited Blade 3 (rev 01)

04:00.0 Network controller: Mixtile Limited Blade 3 (rev 01)

05:00.0 Network controller: Mixtile Limited Blade 3 (rev 01)

06:00.0 Network controller: Mixtile Limited Blade 3 (rev 01)
```

Method 2: Via GUI:

1.  Log in to the web page of Cluster Box.
2.  Scroll the page to the **Active DHCP Leases** area.
    If the four Blade 3 boards are displayed as shown below, they have been started properly.

![](/img/docs/installing-drivers-for-blade-3-boards/41e0a8b29b46.webp)
