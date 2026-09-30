---
sidebar_position: 3
description: Write an operating system image to the eMMC of Core 3588E over USB, in MaskROM mode, with Rockchip Flash Tool.
---

# Flashing an OS Image

Core 3588E runs its operating system from the eMMC on the module. To install or replace the system, you put the module into MaskROM mode, connect the carrier board to a computer over USB, and write an image to the eMMC with Rockchip Flash Tool.

The steps use the Leetop A206 carrier board. On another carrier board, the USB port is in a different place; see its documentation.

:::warning
Flashing replaces everything on the eMMC. Back up anything you want to keep.
:::

## What you need

- Core 3588E seated on its carrier board, see [Quick Start](./quick-start.md#step-1-seat-the-module-on-the-carrier-board)
- A computer running Windows 10 or 11, macOS 13 or later, or 64-bit x86 Linux
- A micro-USB data cable, to connect the carrier board to the computer
- Metal tweezers, to short the two MaskROM pads on the module
- The carrier board's power adapter, see [Power Supply](./power-supply.md)
- An OS image for Core 3588E

## Step 1. Get an OS image

Download the image for the system you want to run. Mixtile OS is the officially supported system; its images are available from [Downloads](/core-3588e/download).

If the image is compressed, for example as `.xz` or `.zip`, extract it first. On Windows, use an archive tool such as [7-Zip](https://www.7-zip.org/); on macOS and Linux, run `xz -d <file>.img.xz` for an `.xz` image.

## Step 2. Install Rockchip Flash Tool

Follow the steps for your computer's operating system. The download links always point to the latest release.

<Tabs queryString="host">
<TabItem value="windows" label="Windows">

1. Download [Rockchip-Flash-Tool-windows-x64.zip](https://github.com/mixtile-rockchip/rockchip-flash-tool/releases/latest/download/Rockchip-Flash-Tool-windows-x64.zip) and extract it.
2. Start the tool. On the first run it asks **Install driver now?** for the Rockchip USB driver. Click **Yes**, and allow the installer administrator rights. The status bar shows `Rockchip driver ready.` when it is done.

</TabItem>
<TabItem value="macos" label="macOS">

1. Download [Rockchip-Flash-Tool-macOS-universal.dmg](https://github.com/mixtile-rockchip/rockchip-flash-tool/releases/latest/download/Rockchip-Flash-Tool-macOS-universal.dmg), open it and drag the app to **Applications**. It runs on both Apple silicon and Intel Macs.
2. If macOS blocks the app, right-click it in Finder, choose **Open**, then click **Open** again.
3. If it is still blocked, open **System Settings** > **Privacy & Security** and click **Open Anyway**.

If it still does not start, clear the quarantine attribute:

```bash title="Host PC (macOS)"
xattr -dr com.apple.quarantine "/Applications/Rockchip Flash Tool.app"
```

</TabItem>
<TabItem value="linux" label="Linux">

1. Download [Rockchip-Flash-Tool-linux-x86_64.AppImage](https://github.com/mixtile-rockchip/rockchip-flash-tool/releases/latest/download/Rockchip-Flash-Tool-linux-x86_64.AppImage) and make it executable:

   ```bash title="Host PC (Linux)"
   chmod +x Rockchip-Flash-Tool-linux-x86_64.AppImage
   ```

2. Install FUSE2, which the AppImage needs:

   | Distribution | Command |
   | --- | --- |
   | Ubuntu 24.04 and later | `sudo apt install libfuse2t64` |
   | Ubuntu 22.04 and earlier, Debian | `sudo apt install libfuse2` |
   | Fedora | `sudo dnf install fuse-libs` |
   | Arch Linux | `sudo pacman -S fuse2` |
   | openSUSE | `sudo zypper install libfuse2` |

   If you cannot install FUSE2, start the AppImage in extract mode instead:

   ```bash title="Host PC (Linux)"
   APPIMAGE_EXTRACT_AND_RUN=1 ./Rockchip-Flash-Tool-linux-x86_64.AppImage
   ```

</TabItem>
</Tabs>

## Step 3. Enter MaskROM mode

In MaskROM mode, the module runs nothing from the eMMC and waits for the computer to write to it. This works whatever is on the eMMC, including a module that no longer boots.

You enter it by shorting two round test pads on the module while the board powers up. The pads sit between the RK3588 and the gold edge connector.

![Top side of Core 3588E with the two MaskROM pads between the RK3588 and the edge connector marked, and an enlarged view of the two pads](/img/docs/core-3588e/core-3588e-maskrom-pads.webp)

_Figure 1. The MaskROM pads on Core 3588E_

1. Disconnect the power adapter if the carrier board is on.
2. Connect the carrier board's **micro-USB** port, J5, to the computer with a micro-USB data cable. The port is on the rear edge, next to Ethernet, see [Hardware Information](/core-3588e/hardware-usage/#connector-locations).
3. Touch both pads at the same time with the tweezers, so that they are shorted.
4. Keep them shorted while you connect the power adapter to the **DC power jack**, then release them.

:::warning
Touch only the two pads. Shorting anything else on the powered module can damage it.
:::

## Step 4. Check that the tool sees the board

Start Rockchip Flash Tool. The **Device** area shows the board as **Connected**, with the chip **RK3588** and the mode **Maskrom**. If it shows `No device connected`, click **Refresh**.

![Rockchip Flash Tool showing Connected, RK3588, Maskrom, a Firmware field with a Browse button, and the Start Flash button](/img/docs/blade-3-board/rockchip-flash-tool-maskrom.webp)

_Figure 2. The board detected as RK3588 in Maskrom mode_

## Step 5. Flash the image

1. Under **Firmware**, click **Browse** and select the extracted image file. The tool shows its format and size.
2. Click **Start Flash**. The status bar shows the progress.

**Expected result:** a **Success** dialog reports `Flash completed.`

:::tip
With several boards connected, the **Device** area lists them all. Select the board you want to flash and do not change the USB connection during flashing.
:::

## Step 6. Boot the new system

1. Disconnect the power adapter and the micro-USB cable.
2. Connect a monitor and keyboard as in [Quick Start](./quick-start.md#step-2-connect-the-cables), or a [serial console](./connect.md#serial-console).
3. Connect the power adapter. Do not touch the MaskROM pads this time.

**Expected result:** the system you flashed starts successfully. What you see after booting and how you log in depend on the operating system. For Mixtile OS, see [Connect to Core 3588E](./connect.md).

## Troubleshooting

| Problem | What to do |
| --- | --- |
| The **Device** area shows `No device connected` | Check that the cable is in the **micro-USB** port and that it is a data cable, not a charge-only one. Disconnect the power adapter and enter [MaskROM mode](#step-3-enter-maskrom-mode) again, keeping both pads shorted until the power adapter is connected. Click **Refresh**. On Windows, make sure the USB driver is installed. |
| On Windows, **Driver Not Detected** appears after the driver is installed | Close the tool, then start it again with **Run as administrator**. |
| `No partition table found; writing as a raw image.` | You selected an archive or an unrelated file. Select the extracted image file. |
| More than one device matches | Move one board to a different USB port, then click **Refresh**. |
| A **Flash Failed** dialog reports `Flashing failed.` | Disconnect the power adapter, enter MaskROM mode again, and flash again. |
| `Device reset did not confirm; power-cycle the board.` | Disconnect and reconnect the power adapter. |
| After flashing, nothing appears on the monitor | Check the monitor cable, then connect the [serial console](./connect.md#serial-console) to see whether the system is starting. |
