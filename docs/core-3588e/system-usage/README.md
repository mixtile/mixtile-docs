---
sidebar_position: 0
description: What Mixtile OS is, which edition to choose, and how to log in once it is installed on Core 3588E.
---

# Mixtile OS

Mixtile OS is the official operating system for Core 3588E: Ubuntu or Debian, set up for the module, with the GPU, the video codecs and the NPU working out of the box.

## Editions

| Distribution | Editions |
| --- | --- |
| Ubuntu 26.04 LTS | Server, Desktop (GNOME) |
| Ubuntu 24.04 LTS | Server, Desktop (GNOME) |
| Debian 13 | Server, Desktop (GNOME) |
| Debian 12 | Server, Desktop (GNOME) |

The desktop edition starts GNOME on the monitor. The server edition has no graphical session and is used over SSH or the serial console. For help choosing, see [Downloads](/core-3588e/download).

## Login details

| Item | Value |
| --- | --- |
| User | `mixtile` |
| Password | `mixtile` |
| Hostname | `mixtile-core3588e` |
| Serial console | 1500000 baud |

You can log in on the monitor, the serial console or over SSH. On the desktop edition, `mixtile` is logged in to GNOME automatically. Change the password with `passwd` after the first login.

The Ethernet port gets its address by DHCP. Networks, including Wi-Fi, are managed by NetworkManager, with `nmcli` or the network settings of the desktop.

## What works out of the box

- **3D graphics** on the Mali GPU, with OpenGL and Vulkan, in the desktop edition
- **Hardware video decoding and encoding**, used by the included FFmpeg and GStreamer
- **Hardware 2D acceleration**
- **NPU inference**, for the examples under [Application Development](/core-3588e/application-development)

## Interfaces in Mixtile OS

The hardware of each interface is described in [Hardware Usage](/core-3588e/hardware-usage). The table below lists which of them Mixtile OS sets up, and their device names. Interfaces that are not set up are still present on the module; using them needs a system configured for them.

| Interface | In Mixtile OS |
| --- | --- |
| HDMI output | Set up. See [Display](/core-3588e/hardware-usage/display). |
| DisplayPort output | Set up. See [Display](/core-3588e/hardware-usage/display). |
| PCIe 3.0 | Set up, up to four lanes. See [M.2](/core-3588e/hardware-usage/m2). |
| PCIe 2.1 | Set up, one lane. See [M.2](/core-3588e/hardware-usage/m2). |
| USB 3.0, USB 2.0 | USB 3.0, USB 2.0 port 0 and one further USB 2.0 port are set up. USB 2.0 port 0 is also the flashing port. |
| Gigabit Ethernet | Set up as `end0` |
| Debug UART, UART2 | Serial console, 1500000 baud |
| UART0 | `/dev/ttyS7` |
| UART1 | `/dev/ttyS1`. See [40-pin Header](/core-3588e/hardware-usage/40-pin-header#uart). |
| I2C0 | `/dev/i2c-0`. The RTC on the module is at address `0x51`. |
| I2C1 | `/dev/i2c-1`. See [40-pin Header](/core-3588e/hardware-usage/40-pin-header#i2c). |
| SPI0, SPI1 | `/dev/spidev0.0`, `/dev/spidev1.1` |
| GPIO | Named lines for pins 7, 15, 29, 31, 32 and 33 of the 40-pin header. See [40-pin Header](/core-3588e/hardware-usage/40-pin-header#gpio). |
| SD card | Set up, for storage |
| Fan | Fan speed follows the SoC temperature. See [Accessories](/core-3588e/accessories). |
| RTC | Set up. See [RTC](/core-3588e/hardware-usage/rtc). |
| MIPI CSI | Not set up by default. See [MIPI CSI](/core-3588e/hardware-usage/mipi-csi). |
| MIPI DSI, CAN, I²S | Not set up |

Mixtile OS always starts from the eMMC. A microSD card or an NVMe SSD is used for data.

## Building it yourself

The image sources are public. See [Building a Mixtile OS Image](/core-3588e/low-level-development/build-image).
