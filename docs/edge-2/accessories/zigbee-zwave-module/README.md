---
sidebar_position: 0
description: "The Mixtile 2-in-1 Zigbee and Z-Wave module for Edge 2: serial ports, installation, and guides."
---

# 2-in-1 Zigbee and Z-Wave Module

The [Mixtile 2-in-1 Zigbee and Z-Wave mPCIe interface module](https://www.mixtile.com/store/accessory/mixtile-2-in-1-zigbee-z-wave-mpcie-interface-module/) adds a Zigbee radio and a Z-Wave radio to Edge 2, so that Edge 2 can act as a smart-home hub. It goes into the [Mini PCIe socket](/edge-2/hardware-usage/m2-mini-pcie) and is designed for [Home Assistant OS](/edge-2/other-operating-systems/home-assistant-os).

The module connects to the board over USB, and each radio appears as its own serial port. In Home Assistant OS on Edge 2 they are:

| Radio | Serial port |
| --- | --- |
| Z-Wave | `/dev/serial/by-id/usb-1a86_USB_Dual_Serial_<serial>-if00` |
| Zigbee | `/dev/serial/by-id/usb-1a86_USB_Dual_Serial_<serial>-if02` |

`<serial>` is the serial number of your module. In Home Assistant, both ports are listed as `USB Dual_Serial`; tell them apart by the end of the path.

## Install the Module

1. Shut down Edge 2 and disconnect the power supply.
2. Turn the board over. If it is in the [Edge 2 Kit](/edge-2/accessories/edge-2-kit#open-the-enclosure), remove the bottom cover.
3. Insert the module into the Mini PCIe socket at an angle, press it down flat, and secure it with its two screws.

   ![The Zigbee and Z-Wave module installed in the Mini PCIe socket of an Edge 2 Kit with the bottom cover removed](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/3b5a6f712b53.webp)

   _Figure 1. The module in the Mini PCIe socket_

4. Connect the module's two antenna connectors to the Zigbee antenna and the Z-Wave antenna exactly as shown in Figure 2. Each radio needs its own antenna.

   ![The module with one antenna connector cabled to the Zigbee antenna and the other to the Z-Wave antenna](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/58be379f39bc.webp)

   _Figure 2. Antenna connections_

5. Refit the bottom cover, if you removed it, and reconnect the power supply.

## Use the Module

| Task | Guide |
| --- | --- |
| Set up Zigbee and Z-Wave in Home Assistant | [Setting Up Zigbee and Z-Wave](./home-assistant-setup.md) |
| Install the Mixtile add-ons for Home Assistant | [Installing Mixtile Add-ons](./addons.md) |
| Switch the Zigbee radio to Zigbee and Thread firmware | [Flashing Zigbee and Thread Firmware](./flash-firmware.md) |
| Update the Z-Wave firmware | [Updating Z-Wave Firmware](./update-zwave-firmware.md) |
| Change the Z-Wave region | [Using the Z-Wave Region Configurator](./region-configurator.md) |
| Use the module on a Raspberry Pi | [Using the Module on a Raspberry Pi](./raspberry-pi.md) |
