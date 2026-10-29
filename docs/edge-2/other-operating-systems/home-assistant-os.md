---
title: Home Assistant OS
sidebar_position: 1
description: Download Home Assistant OS for Edge 2, write it to the eMMC, and open the Home Assistant dashboard for the first time.
---

# Home Assistant OS

## Overview

Home Assistant OS turns Edge 2 into a dedicated Home Assistant hub. Mixtile builds it for Edge 2 from the stable releases of the official [Home Assistant Operating System](https://github.com/home-assistant/operating-system), with the Edge 2 board support added, and publishes it in the [mixtile-rockchip/mixtile-haos](https://github.com/mixtile-rockchip/mixtile-haos) repository.

With the [Mixtile 2-in-1 Zigbee and Z-Wave module](/edge-2/accessories/zigbee-zwave-module) in the Mini PCIe socket, Edge 2 can control Zigbee and Z-Wave devices directly.

:::warning
Hardware support has not been fully verified on Edge 2. Test the interfaces you need before you rely on the system.
:::

## Download

Open the [latest release](https://github.com/mixtile-rockchip/mixtile-haos/releases/latest) and download the file named `haos_mixtile-edge2-<version>.img.xz`. The `.raucb` file in the same release is an update bundle for a system that is already installed, and is not needed for a new installation.

Earlier releases are on the [releases page](https://github.com/mixtile-rockchip/mixtile-haos/releases).

## Install

The file is a complete disk image compressed with xz. Extract the `.img` file, then write it to the eMMC as described in [Flashing an OS Image](/edge-2/getting-started/install-os).

This procedure has not yet been verified with the Home Assistant OS images.

## First Boot

1. Connect Edge 2 to your network with an Ethernet cable.
2. Optionally, connect a monitor to HDMI. It shows the Home Assistant CLI and the board's IP address.
3. Connect the power supply, see [Quick Start](/edge-2/getting-started/quick-start#wiring-and-powering-up).

   ![The Home Assistant CLI on the monitor, with the board's IP address](/img/docs/using-home-assistant-in-mixtile-edge-2-kit/a48e88fe70f3.webp)

4. On a computer in the same network, open `http://homeassistant.local:8123`. If more than one Home Assistant system is on the network, or the name does not resolve, open `http://<board-ip>:8123` instead.

At the first startup, Home Assistant prepares itself, which can take about 20 minutes. The page shows its progress:

![The Home Assistant page showing that Home Assistant is being prepared](/img/docs/using-home-assistant-in-mixtile-edge-2-kit/27ac4903666b.webp)

When it is ready, the onboarding page appears. Create your Home Assistant account and follow the steps on the page:

![The Welcome to Home Assistant onboarding page](/img/docs/using-home-assistant-in-mixtile-edge-2-kit/129eaf473133.webp)

For how to use Home Assistant, see the [Home Assistant documentation](https://www.home-assistant.io/docs/). To set up the Zigbee and Z-Wave module, see [Zigbee and Z-Wave Module](/edge-2/accessories/zigbee-zwave-module).
