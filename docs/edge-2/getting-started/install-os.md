---
sidebar_position: 3
description: Write an operating system image to the eMMC of Edge 2 over USB, in MaskROM mode, with Rockchip Flash Tool.
---

# Flashing an OS Image

Edge 2 runs its operating system from the on-board eMMC. To install or replace the system, you put the board into MaskROM mode, connect it to a computer over USB, and write an image to the eMMC with Rockchip Flash Tool.

This page describes how to use Rockchip Flash Tool to write a system image to Edge 2.

:::warning
Flashing replaces everything on the eMMC. Back up anything you want to keep.
:::

## What you need

- An Edge 2 board
- A computer running Windows 10 or 11, macOS 13 or later, or 64-bit x86 Linux
- A USB-A to USB-C data cable, to connect the board to a USB-A port on the computer
- A 12 V DC adapter, see [Power Supply](./power-supply.md)
- An OS image for Edge 2

## Step 1. Get an OS image

Download the image for the system you want to run. Mixtile OS is the officially supported system; its images are available from [Downloads](/edge-2/download).

If the image is compressed, for example as `.xz` or `.gz`, extract it first. On Windows, use an archive tool such as [7-Zip](https://www.7-zip.org/); on macOS and Linux, run `xz -d <file>.img.xz` for an `.xz` image.

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

## Step 3. Find the MASKROM button

In MaskROM mode the board does not start any system. Instead, it waits for a computer to write to its eMMC over USB. This works whatever is on the eMMC, including a board that no longer boots.

The **MASKROM** button is on the top side of the board, near the buzzer and the coin-cell holder.

Disconnect all power from the board before you continue. If the board is in the Edge 2 Kit enclosure, open its top cover first, see [Edge 2 Kit Enclosure](/edge-2/accessories#edge-2-kit-enclosure).

![Top view of the Edge 2 board with the MASKROM button marked near the upper right corner](/img/docs/edge-2-board/edge-2-maskrom-button.webp)

_Figure 1. The MASKROM button_

## Step 4. Connect the board in MaskROM mode

Flashing uses the **POWER** USB-C port for data, and the DC 12V jack for power. The USB cable can also power the board as soon as it is connected, so press and hold **MASKROM** before you connect either cable.

![Top view of the Edge 2 board: the POWER USB-C port goes to the computer through a USB-A to USB-C cable, the DC 12V jack goes to a 12 V adapter, and MASKROM is held down](/img/docs/edge-2-board/edge-2-flash-connections.webp)

_Figure 2. The connections for flashing_

1. Make sure that neither the USB cable nor the 12 V adapter is connected to the board.
2. Press and hold the **MASKROM** button.
3. While you hold the button, connect **POWER**, the USB-C port at the corner of the board, to a USB-A port on the computer with the USB-A to USB-C cable.
4. Still holding the button, connect the 12 V adapter to **DC 12V**.
5. Keep holding the button for about two seconds, then release it.

## Step 5. Check that the tool sees the board

Start Rockchip Flash Tool. The **Device** area shows the board as **Connected**, with the chip **RK3568** and the mode **Maskrom**. If it shows `No device connected`, click **Refresh**.

![Rockchip Flash Tool showing Connected, RK3568, Maskrom, a Firmware field with a Browse button, and the Start Flash button](/img/docs/edge-2-board/rockchip-flash-tool-rk3568-maskrom.webp)

_Figure 3. Edge 2 detected as RK3568 in Maskrom mode._

## Step 6. Flash the image

1. Under **Firmware**, click **Browse** and select the extracted image file. The tool shows its format and size.
2. Click **Start Flash**. The status bar shows the progress.

**Expected result:** a **Success** dialog reports `Flash completed.`

:::tip
With several boards connected, the **Device** area lists them all. Select the Edge 2 board you want to flash and do not change the USB connection during flashing.
:::

## Step 7. Boot the new system

1. Disconnect the 12 V adapter and the USB-A to USB-C cable.
2. Connect a monitor, keyboard and power as in [Quick Start](./quick-start.md#wiring-and-powering-up), or a [serial console](./connect.md#serial-console).

**Expected result:** the system you flashed starts successfully. What you see after booting and how you log in depend on the operating system. For Mixtile OS, see [Connect to Edge 2](./connect.md).

## Troubleshooting

| Problem | What to do |
| --- | --- |
| The **Device** area shows `No device connected` | Check that the USB-A to USB-C cable is a data cable, not a charge-only one, and that its USB-C end is in the **POWER** port. Disconnect both the USB cable and the 12 V adapter, then repeat step 4. Click **Refresh**. On Windows, make sure the USB driver is installed. |
| On Windows, **Driver Not Detected** appears after the driver is installed | Close the tool, then start it again with **Run as administrator**. |
| The mode shows **Loader** instead of **Maskrom** | The board is in Loader mode, which the tool also accepts. You can flash as normal. |
| `No partition table found; writing as a raw image.` | You selected an archive or an unrelated file. Select the extracted image file. |
| More than one device matches | Move one board to a different USB port, then click **Refresh**. |
| A **Flash Failed** dialog reports `Flashing failed.` | Disconnect both the USB cable and the 12 V adapter, repeat step 4, and flash again. |
| `Device reset did not confirm; power-cycle the board.` | Disconnect both the USB cable and the 12 V adapter, then reconnect them. |
