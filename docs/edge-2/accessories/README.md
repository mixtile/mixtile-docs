---
sidebar_position: 0
description: The Edge 2 Kit enclosure and the Mixtile 2-in-1 Zigbee and Z-Wave module for Edge 2.
---

# Accessories

## Edge 2 Kit Enclosure

The Edge 2 Kit is Edge 2 in a metal enclosure, supplied with two 2.4 GHz and 5 GHz Wi-Fi antennas. The enclosure has openings for every port on the edges of the board, and labels them on its panels.

![Edge 2 Kit in its black enclosure, front panel with the microSD slot, headphone jack, USB 3.0 port, SYS and PWR LEDs and power button, with two antennas beside it](/img/docs/edge-2-board/edge-2-kit-render.webp)

_Figure 1. Edge 2 Kit_

### Specifications

| Item | Specification |
| --- | --- |
| Dimensions | 148 x 105 x 32 mm |
| Antennas | 2 x Wi-Fi antennas, 2.4 GHz and 5 GHz |
| Hardware versions | v1.0; v1.1, which adds DIN-rail mounting and a removable back cover |
| Compliance certificates | [CE, FCC, RoHS, WEEE and RCM](https://www.mixtile.com/app/uploads/CE-FCC-ROHS-WEEE-RCM-certificates_Mixtile-Edge-2-Kit-.zip) (ZIP) |

### Panels

| Panel | Ports |
| --- | --- |
| Front | microSD slot, headphone jack, USB 3.0, SYS and PWR LEDs, power button |
| Rear | RESET, POWER (USB-C), 2 x USB 3.0, HDMI, RS-485 (G, B, A), Ethernet |
| Right side | SATA power connector, DC 12V jack |
| Left side | Opening for the U.2 connector |

![Front panel of the Edge 2 Kit: microSD slot, headphone jack, USB 3.0 port, SYS and PWR LEDs and the power button](/img/docs/edge-2-board/edge-2-front-panel.webp)

_Figure 2. Front panel_

![Rear panel of the Edge 2 Kit: RESET, POWER USB-C, two USB 3.0 ports, HDMI, the RS-485 terminal labelled G, B, A, and Ethernet](/img/docs/edge-2-board/edge-2-rear-panel.webp)

_Figure 3. Rear panel. On the RS-485 terminal, G is GND, B is 485B and A is 485A._

![Right side of the Edge 2 Kit enclosure with the SATA power connector and the DC 12V jack](/img/docs/edge-2-board/edge-2-right-side.webp)

_Figure 4. Right side_

### Fit the Antennas

Remove the protective caps from the two antenna connectors on the top of the enclosure. Screw the antennas on clockwise, and point them upwards.

### Open the Enclosure

<img src="/img/docs/edge-2-board/edge-2-kit-exploded.webp" alt="Exploded view of the Edge 2 Kit: the top cover with the two antennas, a heatsink, the Edge 2 board and the bottom of the enclosure" width="480" />

_Figure 5. Exploded view of the Edge 2 Kit_

Shut down Edge 2 and disconnect all cables before you open the enclosure.

- **Top cover**, the side with the antennas: remove it to reach the connectors on the top side of the board, including the MASKROM button, the debug UART, the UART, CAN, I²C and ADC connectors, and the RTC battery holder. Unscrew the antennas first.
- **Bottom cover**: remove it to reach the M.2 and Mini PCIe sockets and their SIM slots on the bottom side of the board.

## 2-in-1 Zigbee and Z-Wave Module

The [Mixtile 2-in-1 Zigbee and Z-Wave mPCIe interface module](https://www.mixtile.com/store/accessory/mixtile-2-in-1-zigbee-z-wave-mpcie-interface-module/) adds a Zigbee radio and a Z-Wave radio to Edge 2, so that Edge 2 can act as a smart-home hub. It goes into the [Mini PCIe socket](/edge-2/hardware-usage/m2-mini-pcie) and is designed for [Home Assistant OS](/edge-2/other-operating-systems/home-assistant-os).

The module connects to the board over USB, and each radio appears as its own serial port. In Home Assistant OS on Edge 2 they are:

| Radio | Serial port |
| --- | --- |
| Z-Wave | `/dev/serial/by-id/usb-1a86_USB_Dual_Serial_<serial>-if00` |
| Zigbee | `/dev/serial/by-id/usb-1a86_USB_Dual_Serial_<serial>-if02` |

`<serial>` is the serial number of your module. In Home Assistant, both ports are listed as `USB Dual_Serial`; tell them apart by the end of the path.

### Install the Module

1. Shut down Edge 2 and disconnect the power supply.
2. Turn the board over. If it is in the Edge 2 Kit enclosure, remove the bottom cover.
3. Insert the module into the Mini PCIe socket at an angle, press it down flat, and secure it with its two screws.

   ![The Zigbee and Z-Wave module installed in the Mini PCIe socket of an Edge 2 Kit with the bottom cover removed](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/3b5a6f712b53.webp)

   _Figure 6. The module in the Mini PCIe socket_

4. Connect the module's two antenna connectors to the Zigbee antenna and the Z-Wave antenna exactly as shown in Figure 7. Each radio needs its own antenna.

   ![The module with one antenna connector cabled to the Zigbee antenna and the other to the Z-Wave antenna](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/58be379f39bc.webp)

   _Figure 7. Antenna connections_

5. Refit the bottom cover, if you removed it, and reconnect the power supply.

### Use the Module

| Task | Guide |
| --- | --- |
| Set up Zigbee and Z-Wave in Home Assistant | [Setting Up Zigbee and Z-Wave](./home-assistant-setup.md) |
| Install the Mixtile add-ons for Home Assistant | [Installing Mixtile Add-ons](./addons.md) |
| Switch the Zigbee radio to Zigbee and Thread firmware | [Flashing Zigbee and Thread Firmware](./flash-firmware.md) |
| Update the Z-Wave firmware | [Updating Z-Wave Firmware](./update-zwave-firmware.md) |
| Change the Z-Wave region | [Using the Z-Wave Region Configurator](./region-configurator.md) |
| Use the module on a Raspberry Pi | [Using the Module on a Raspberry Pi](./raspberry-pi.md) |
