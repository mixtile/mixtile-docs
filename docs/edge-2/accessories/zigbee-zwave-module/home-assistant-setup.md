---
sidebar_position: 1
---

# Setting Up Zigbee and Z-Wave

[Mixtile 2-in-1 Zigbee & Z-Wave mPCIe Interface Module](https://www.mixtile.com/store/accessory/mixtile-2-in-1-zigbee-z-wave-mpcie-interface-module/) is designed for Home Assistant users and developers. After installing Home Assistant (see [Home Assistant OS](/edge-2/other-operating-systems/home-assistant-os)), install the module as described in [Zigbee and Z-Wave Module](/edge-2/accessories/zigbee-zwave-module#install-the-module), then configure it in Home Assistant as described below.

## Setting up Zigbee

1.  In the Home Assistant dashboard (`http://homeassistant.local:8123` or `http://[your_IP_address]:8123`), click **Settings** in the side navigation bar and then click **Devices & services**.

![Settings](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/haos-settings.webp)

2.  Click **Add integration** at the bottom-right corner.

![add-integration](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/haos-add-integration.webp)

3.  Type "Zigbee" in the text box and then select `Zigbee Home Automation`.

![Zigbee-Home-Automation](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/haos-zha-search.webp)

4.  On the **Select a serial port** page, open **Serial device path**, select the `USB Dual_Serial` entry whose path ends in `-if02`, and click **Submit**.

![Zigbee-Serial-Port](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/haos-zha-serial-port.webp)

5.  On the **Set up Zigbee** page, select `Set up automatically (recommended)`.

![Zigbee-Setup](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/haos-zha-setup.webp)

Zigbee is now set up in Home Assistant, as `Generic Zigbee Coordinator (EZSP)`. You can select an area for it, then click **Skip and finish**.

![Zigbee-Success](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/haos-zha-success.webp)

## Setting up Z-Wave

1.  In the Home Assistant dashboard, click **Settings** in the side navigation bar, click **Devices & services**, and then click **Add integration** at the bottom-right corner.

2.  Type "Z-Wave" in the text box and then select `Z-Wave`.

![Z-Wave-Search](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/haos-zwave-search.webp)

3.  On the **Set up Z-Wave** page, select `Recommended installation`. Home Assistant installs and starts the Z-Wave JS app, which can take several minutes.

![Z-Wave-Setup](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/haos-zwave-setup.webp)

4.  On the **Enter the Z-Wave JS app configuration** page, under **USB device path**, select the `USB Dual_Serial` entry whose path ends in `-if00`, and click **Submit**.

![Z-Wave-USB-Device-Path](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/haos-zwave-device-path.webp)

5.  When Home Assistant has configured the app, the **Name and assign** page appears. You can select an area for the Z-Wave devices, then click **Skip and finish**.

The recommended installation sets the Z-Wave region automatically, from the country in the Home Assistant settings. To change the region of the module, see [Using the Z-Wave Region Configurator](./region-configurator.md).

## Adding Zigbee or Z-Wave devices

1.  In the Home Assistant dashboard, click **Settings** in the side navigation bar and then click **Devices & services**.

![Settings](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/haos-settings.webp)

2.  Select the **Devices** tab and click **Add device** at the bottom-right corner.

![add-device-button](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/haos-devices-add-device.webp)

3.  Select `Add Zigbee device` or `Add Z-Wave device` as needed and add your device as instructed.

![Add-Zigbee-and-Z-Wave](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/haos-add-zigbee-z-wave-device.webp)
