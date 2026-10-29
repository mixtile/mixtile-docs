---
sidebar_position: 0
description: What Mixtile OS is, which edition to choose, how to log in, how to get Edge 2 onto a network, and how Mixtile OS exposes the board's interfaces.
---

# Mixtile OS

Mixtile OS is the official operating system for Edge 2: Ubuntu or Debian, set up for the board, with the GPU, the video codecs and the NPU working out of the box.

## Editions

| Distribution | Editions |
| --- | --- |
| Ubuntu 26.04 LTS | Server, Desktop (GNOME) |
| Ubuntu 24.04 LTS | Server, Desktop (GNOME) |
| Debian 13 | Server, Desktop (GNOME) |
| Debian 12 | Server, Desktop (GNOME) |

The desktop edition starts GNOME on the HDMI monitor. The server edition has no graphical session and is used over SSH or the serial console. For help choosing, see [Downloads](/edge-2/download).

## Login details

| Item | Value |
| --- | --- |
| User | `mixtile` |
| Password | `mixtile` |
| Hostname | `mixtile-edge2` |
| Serial console | 1500000 baud, on the [debug UART](/edge-2/hardware-usage/debug-uart) |

You can log in on the HDMI monitor, the serial console or over SSH. On the desktop edition, `mixtile` is logged in to GNOME automatically. Change the password with `passwd` after the first login.

The `mixtile` user can use `sudo`, and is a member of the `dialout` group, so it can open the serial ports without `sudo`.

## Networking

Networking is managed by NetworkManager.

- **Ethernet** gets its address by DHCP as soon as a cable is connected. The Ethernet interface is named `end1`.
- **Wi-Fi**: connect two Wi-Fi antennas to the antenna connectors on the bottom side of the board, then connect with `nmcli` on the server edition, or in **Settings** on the desktop edition:

  ```bash title="Edge 2"
  nmcli device wifi list
  sudo nmcli device wifi connect "<network-name>" password "<password>"
  ```

- **Bluetooth**: the Bluetooth controller is available as `hci0`. The server edition does not include the Bluetooth tools, such as `bluetoothctl`.

:::note
Connecting to a Wi-Fi network and using Bluetooth devices have not yet been verified on Edge 2.
:::

## What works out of the box

- **3D graphics** on the Mali GPU, with OpenGL and Vulkan through Mesa, in the desktop edition
- **Hardware video decoding and encoding**, used by the included FFmpeg and GStreamer
- **Hardware 2D acceleration**
- **NPU inference**, for the example under [Application Development](/edge-2/application-development)

## Hardware Interfaces in Mixtile OS

This is how Mixtile OS exposes the interfaces of Edge 2. For the connectors themselves, see [Hardware Usage](/edge-2/hardware-usage).

| Interface | In Mixtile OS |
| --- | --- |
| [Debug UART](/edge-2/hardware-usage/debug-uart) | Serial console with a login prompt, at 1500000 baud |
| [UART3 and UART5](/edge-2/hardware-usage/uart) | `/dev/ttyS3` and `/dev/ttyS5` |
| [RS-485](/edge-2/hardware-usage/rs485) (UART4) | `/dev/ttyS4` |
| [I²C connector](/edge-2/hardware-usage/other-connectors#i2c) (I2C3) | `/dev/i2c-3` |
| [ADC connector](/edge-2/hardware-usage/other-connectors#adc) | `in_voltage4_raw` to `in_voltage7_raw` under `/sys/bus/iio/devices/iio:device0/`. A raw value of 1023 corresponds to 1.8 V. |
| [IR connector](/edge-2/hardware-usage/other-connectors#ir) | IR remote-control receiver for NEC-format remotes; key presses arrive as input events from `fe6e0030.pwm` |
| [M.2 socket](/edge-2/hardware-usage/m2-mini-pcie) | Both PCIe lanes are used for PCIe. Routing the second lane to USB 3.0 is not offered. Cellular modules use USB 2.0. |
| [Mini PCIe socket](/edge-2/hardware-usage/m2-mini-pcie) | USB 2.0. See [Cellular Modules](/edge-2/accessories/cellular-modules). |
| [CAN](/edge-2/hardware-usage/can) | Not available. The kernel does not include a driver for the RK3568 CAN controller, so no CAN network interface appears. |
| [eDP, MIPI-DSI, MIPI-CSI](/edge-2/hardware-usage/display-camera) | Not enabled in the device tree. Only the HDMI output is used. To use a panel or camera, add it to the kernel device tree and rebuild the image, see [Building a Mixtile OS Image](/edge-2/low-level-development/build-image). |
| [U.2](/edge-2/hardware-usage/u2) | SATA, PCIe 2.0 and GMAC0 are not enabled in the device tree |
| [S/PDIF and digital microphone](/edge-2/hardware-usage/other-connectors) | Not enabled |
| RECOVERY button | Not used |
| System LED | Blinks in a heartbeat pattern |

To list the devices on the I²C bus, install `i2c-tools` and run `sudo i2cdetect -y 3`. The on-board real-time clock answers at address `0x51`.

## Real-Time Clocks

Mixtile OS registers two real-time clocks:

| Device | Clock | Kept without power | Used at startup |
| --- | --- | --- | --- |
| `/dev/rtc0` | RTC of the RK809 power-management chip | No | Yes |
| `/dev/rtc1` | HYM8563, with the [coin cell](/edge-2/hardware-usage/rtc) | Yes | No |

At startup, Mixtile OS sets the system time from `/dev/rtc0`, which does not keep the time while the board has no power. Once the board is on the network, the system time is corrected over NTP. The HYM8563 is not read automatically, so without a network connection the system time is wrong after a power cycle.

To check which device is which:

```bash title="Edge 2"
grep . /sys/class/rtc/rtc*/name
```

**Expected result:**

```text
/sys/class/rtc/rtc0/name:rk808-rtc rk817-rtc
/sys/class/rtc/rtc1/name:rtc-hym8563 3-0051
```

Read the HYM8563:

```bash title="Edge 2"
sudo hwclock -r -f /dev/rtc1
```

When the system time is correct, for example after it has synchronized over the network, write it to the HYM8563:

```bash title="Edge 2"
sudo hwclock -w -f /dev/rtc1
```

To set the system time from the HYM8563, for example on a board without a network connection:

```bash title="Edge 2"
sudo hwclock -s -f /dev/rtc1
```

:::note
Writing to the HYM8563 and setting the system time from it have not yet been verified on Edge 2.
:::

## Building it yourself

The image sources are public. See [Building a Mixtile OS Image](/edge-2/low-level-development/build-image).
