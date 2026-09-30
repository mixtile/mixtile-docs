---
sidebar_position: 6
---

# M.2 Socket (M Key)

:::info
内容翻译同步中，以下为英文原文。
:::

> In this document, we use Leetop A206 carrier board. Operations can be slightly different if you use other models of carrier boards.

Mixtile Core 3588E (hereinafter referred to as Core 3588E) supports PCIe 3.0, and the carrier board provides an M.2 socket (M Key) socket for you to use this feature. The socket supports M.2 PCI Express module up to Gen3 x4 (32 Gb/s) and can be installed with a wide variety of PCIe devices, including solid-state drives (SSDs).

This document describes how to install an SSD to this socket to expand flash storage and access fast transfer speeds.

![An SSD installed in the M.2 socket (M key)](/img/docs/core-3588e-m2-socket-key-m/fba1fd09c2b1.webp)

_Figure 1. An SSD installed in the M.2 socket (M key)_

## Preparations

- An SSD compatible with M.2 socket (M key)
- A screwdriver

## Steps

1\. Unplug the power adapter from the carrier board.

2\. Line up the SSD’s PCIe connector with the carrier board’s M.2 socket. The notch in the connector should line up with the missing pin on the socket.

3\. Carefully press the SSD’s connector into the socket. Apply even pressure to ensure full insertion.

4\. Use a Philips screwdriver to install and tighten the board-lock screw attached to the SSD.

5\. Plug the power adapter to the carrier board.

6\. Check whether the SSD is detected.

- Via GUI (recommended)

Enter the Ubuntu main window of Core 3588E. Click the applications icon in the lower left corner. Then choose **Utilities** > **Disks**. On the **Disks** page, you can see the SSD you have installed. See the following two figures.

![Selecting disks](/img/docs/core-3588e-m2-socket-key-m/055e939e2f68.webp)

_Figure 2. Selecting disks_

![SSD display](/img/docs/core-3588e-m2-socket-key-m/b227b2f8e26a.webp)

_Figure 3. SSD display_

- Via CLI:

1. Log in to Core 3588E using one of the following methods:
- [Login using a serial communication tool](/core-3588e/getting-started/connect#serial-console)
- [Login using SSH](/core-3588e/getting-started/connect#ssh)

2\. Under the console of Core 3588E, run the **fdisk -l** command. You can see information about the SSD in the command output. In this document, **/dev/nvme0n1** is the SSD we use.

```text
root@mixtile-desktop:/# fdisk -l
Disk /dev/ram0: 4 MiB, 4194304 bytes, 8192 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes

Disk /dev/mmcblk0: 29.13 GiB, 31272730624 bytes, 61079552 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 3EA8604C-E91B-4540-BA32-E6AFEB94A3B9

Device           Start      End  Sectors  Size Type
/dev/mmcblk0p1   32768  1081343  1048576  512M Microsoft basic data
/dev/mmcblk0p2 1081344 61079518 59998175 28.6G Linux filesystem

Disk /dev/nvme0n1: 238.47 GiB, 256060514304 bytes, 500118192 sectors
Disk model: GLOWAY Basic+256NVMe-M.2/80
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

However, if you insert a new SSD, you need to format and mount it first. Follow instructions in the next section [Format and mount an SSD](/core-3588e/interfaces/m2-m-key#format-and-mount-an-ssd).

### Format and mount an SSD

An SSD can be used on a variety of platforms like Windows, Mac, Linux and so on. A new SSD comes unformatted. In this case, you need to format it to different file systems like NTFS, HFS+, Ext3, Ext4, etc. for use on your system so that it can be mounted as a usable storage volume on your system.

This section describes how to format and mount an SSD via GUI and CLI.

#### Via GUI (recommended)

**Format an SSD**

1\. On the **Disks** page, select the target SSD from left, click the settings icon, and choose **Format Partition** from the short-cut menu.

![Formatting the disk](/img/docs/core-3588e-m2-socket-key-m/23310554ae5d.webp)

_Figure 4. Formatting the disk_

3\. In the dialog box that is displayed, specify **Volume Name** and select desired **Type**. Click **Next**.

![Specifying formation settings](/img/docs/core-3588e-m2-socket-key-m/54269b94bc53.webp)

_Figure 5. Specifying formation settings_

The **Confirm Details** page is displayed. Check the details and click **Format** if information is correct.

![Confirm details](/img/docs/core-3588e-m2-socket-key-m/e86f84de3874.webp)

_Figure 6. Confirm details_

**Mount an SSD**

After formatting the SSD, click the icon shown below to mount it.

![Mounting the disk](/img/docs/core-3588e-m2-socket-key-m/6fde169ecd3c.webp)

_Figure 7. Mounting the disk_

#### Via CLI

**Format an SSD**

1\. List disk drives on your computer by running the following command:

```bash
sudo fdisk -l
```

2\. Locate the SSD from the command output. The following is an example:

```text
Disk /dev/nvme0n1: 119.24 GiB, 128035676160 bytes, 250069680 sectors
Disk model: GLOWAY Basic128GNVMe-M.2/80
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
```

3\. Format the SSD by running the **sudo mkfs** _\[options\] device_ command. You can format the SSD to use it in different systems:

- ext4: Linux
- ntfs: Windows
- fat: All systems and devices

For example, to use the SSD (device name: /dev/nvme0n1) on Linux only, run the following command:

```bash
sudo mkfs.ext4 /dev/nvme0n1
```

**Mount an SSD**

After formatting an SSD, you can mount it to the system so as to access it.

Mount an SSD by running the following command:

```bash
sudo mount /dev/nvme0n1 /[mounting point]
```

**\[mounting point\]** indicates where you are going to mount the disk and must be specified.

With the SSD now physically connected and accessible through software, it is ready to provide low-latency storage to the system. Take care not to bump or move the carrier board to prevent damaging the PCIe connector.
