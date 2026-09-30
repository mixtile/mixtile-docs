---
sidebar_position: 2
---

# Quick Start

:::info
内容翻译同步中，以下为英文原文。
:::

Mixtile Core 3588E (hereinafter referred to as Core 3588E)  is a compact SoM powered by Rockchip RK3588. This document helps you get a quick start.

## Overview

As an SoM, Core 3588E is used with a carrier board. In our use cases, we use Leetop A206 carrier board. You can choose a carrier board that suits your requirements.

![Front view of Core 3588E](/img/docs/getting-started-with-core-3588e/2d6fd8fb0af2.webp)

_Figure 1. Front view of Core 3588E_

![Rear view of Core 3588E](/img/docs/getting-started-with-core-3588e/e6813ded92b3.webp)

_Figure 2. Rear view of Core 3588E_

![Front view of the carrier board](/img/docs/getting-started-with-core-3588e/c837caf52d83.webp)

_Figure 3. Front view of the carrier board_

## Preparations

Besides Core 3588E, you need to prepare the following items to get started:

- A computer: Windows, macOS, or Ubuntu
- A carrier board that is compatible with Jetson TX2 NX
- A display device with HDMI or DP input, for example, a computer monitor
- An HDMI cable, DP cable, or HDMI to DP cable
- A mouse and a keyboard
- An Ethernet cable

## Set up connections

### Install Core 3588E to the carrier board

Fix Core 3588E onto the carrier board with the notch aligned. Then fasten the two screws.

![Installing Core 3588E onto the carrier board](/img/docs/getting-started-with-core-3588e/be6107992b22.webp)

_Figure 4. Installing Core 3588E onto the carrier board_

### Connect to a display

#### (Recommended) Connect to a display with an HDMI port

Connect one end of the HDMI cable to the HDMI port of Core 3588E and the other end to the monitor.

#### Connect to a display with a DP port

Connect one end of the DP cable to the DP port of Core 3588E and the other end to the monitor. Alternatively, use a HDMI to DP cable for connection.

:::note
For monitors with a DVI port, you can use an HDMI-to-DVI cable or an HDMI cable with a DVI adapter. In addition, you can use an HDMI-to-VGA adapter for older monitors that only support VGA. Unlike HDMI, the DVI and VGA standards do not support audio.
:::

### Connect a mouse and a keyboard

Core 3588E has four USB 3.0 interfaces. You can connect a mouse and a keyboard to any of the two USB interfaces.

### Connect to network

Connect the Ethernet cable to the Ethernet port of Core 3588E.

### Connect power

Connect one end of the power adapter to Core 3588E and the other end to a live power outlet.

![Core 3588E with all hardware connected](/img/docs/getting-started-with-core-3588e/5283c4705c32.webp)

_Figure 5. Core 3588E with all hardware connected_

## Configure on first boot

After Core 3588E is connected to power, it starts automatically. Then a wizard appears, prompting you to configure initial settings.

Configure the user name, password, language, and time zone as prompted. After configuration is done, the main window of Core 3588E is displayed, as shown in the following figure.

_Figure 6. Main window of Core 3588E_
