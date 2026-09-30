---
sidebar_position: 3
description: Write a Mixtile OS image to Edge 2 with Rockchip Flash Tool.
---

# Flashing a Firmware Image

:::info
内容翻译同步中，以下为英文原文。
:::

Edge 2 is flashed with Rockchip Flash Tool, which runs on Windows, macOS and Linux. Flashing takes two steps: select an image, then click **Start Flash**. The tool works out which chip is attached, which mode it is in, which bootloader it needs, and how the image has to be written.

:::warning
Back up your data first. Flashing deletes all user data on the board.
:::

## What you need

- A Mixtile Edge 2 board, or an Edge 2 Kit with the enclosure opened so that the buttons are reachable
- A computer running Windows, macOS or Linux
- A USB-C cable
- A Mixtile OS image from [Downloads](/edge-2/download), extracted from its `.img.xz` archive

## Install Rockchip Flash Tool

Download the package for your operating system from [the latest release](https://github.com/mixtile-rockchip/rockchip-flash-tool/releases/latest).

| Operating system | File |
| --- | --- |
| Windows 10 or 11 | `Rockchip-Flash-Tool-windows-x64.zip` |
| macOS 13 or later | `Rockchip-Flash-Tool-macOS-universal.dmg` |
| Linux x86_64 | `Rockchip-Flash-Tool-linux-x86_64.AppImage` |

The macOS package is universal and runs on both Apple silicon and Intel.

### Windows: install the USB driver

On the first run the tool offers to install the Rockchip USB driver. Accept it. The installer needs administrator rights. Start the tool again once the driver is installed.

### macOS: allow the app to open

If macOS blocks the app:

1. In Finder, right-click the app and choose **Open**, then click **Open** again in the dialog.
2. If it is still blocked, open **System Settings** > **Privacy & Security**, find the message about the blocked app, and click **Open Anyway**.

If it still refuses to start, clear the quarantine attribute:

```bash title="Host PC (macOS)"
xattr -dr com.apple.quarantine "/Applications/Rockchip Flash Tool.app"
```

### Linux: install the FUSE2 runtime

The AppImage needs FUSE2. Install it for your distribution:

| Distribution | Command |
| --- | --- |
| Ubuntu or Debian, 22.04 and earlier | `sudo apt install libfuse2` |
| Ubuntu 24.04 and later | `sudo apt install libfuse2t64` |
| Fedora | `sudo dnf install fuse-libs` |
| Arch Linux | `sudo pacman -S fuse2` |
| openSUSE | `sudo zypper install libfuse2` |

If you cannot install FUSE2, run the AppImage in extract mode instead:

```bash title="Host PC (Linux)"
APPIMAGE_EXTRACT_AND_RUN=1 ./Rockchip-Flash-Tool-linux-x86_64.AppImage
```

## Prepare the image

Mixtile OS images are distributed as `.img.xz` archives. Extract the archive before flashing:

```bash title="Host PC"
xz -d {image}.img.xz
```

Optionally verify the download against the `.sha256` file published beside it:

```bash title="Host PC"
sha256sum -c {image}.img.xz.sha256
```

:::warning
The tool does not unpack `.xz`, `.zip` or `.7z` archives, and it writes a file it cannot recognise as a raw image, so selecting an archive by mistake writes the archive itself to the board.
:::

## Boot modes

Edge 2 has three boot modes. Normal mode is the ordinary startup path; the other two accept a firmware image.

| Mode | When to use it | How to enter it |
| --- | --- | --- |
| Loader | Recommended for a working board | Press and hold the **RECOVERY** button, then power on the board. Keep holding until the tool reports Loader mode. |
| MaskROM | When the bootloader or U-Boot is broken | Press and hold the **MASKROM** button, then power on the board. Keep holding until the tool reports MaskROM mode. |

## Flash the board

1. Put Edge 2 into Loader or MaskROM mode, then connect it to the computer with the USB-C cable.
2. Start the tool. The board appears in the **Device** panel with its chip model, mode, port ID and serial number. Click **Refresh** if it does not appear.

   Edge 2 reports its chip model as **RK3568**. A board in MaskROM mode does not report a serial number.

3. Click **Browse** and select the extracted `.img` file. The tool shows the format it detected and the file size.
4. Click **Start Flash**, and wait for `Flash completed successfully.`

### Flashing one of several boards

With more than one board attached, the **Device** panel lists them all and you pick the one to write. Every command is then sent only to that board. This needs version 1.2.0 or later.

A board is identified by the USB port path it is plugged into, because that is the only identifier a board in MaskROM exposes. Moving a board to another port therefore changes how it is listed, and two boards swapped between the same two ports cannot be told apart. If two attached boards report the same port path, the tool refuses to start flashing rather than guess.

## What the tool decides for you

You do not need to choose a write method or download a bootloader.

- A **Rockchip firmware package** is written as a package, and the board restarts by itself when it is done.
- A **raw disk image** is written sector by sector, and the tool resets the board afterwards. If the board is in MaskROM mode, the tool first sends the bootloader for that chip, which it carries for every chip listed above.

## First boot

Disconnect the USB cable, restore the normal boot settings, and power the board on.

Mixtile OS logs in as the user `mixtile` with the password `mixtile`, and the hostname follows the board name, `mixtile-edge2`. Change the password with `passwd` on first login. For how to reach the shell, see [Connect to Edge 2](./connect.md).

## Troubleshooting

| Message | What to do |
| --- | --- |
| No Rockchip device found | Connect the board and put it into Loader or MaskROM mode. Click **Refresh**. |
| More than one device matches | Move one board to a different USB port, then click **Refresh**. |
| `No partition table found; writing as a raw image.` | Check that you selected an extracted image and not an archive or an unrelated file. |
| No bootloader found for the chip | The attached chip is not one of the supported chips listed above. |
| `Flashing failed.` | Reconnect the board, re-enter Loader or MaskROM mode, and try again. |
| The board does not confirm the reset | Power-cycle the board by hand. |
