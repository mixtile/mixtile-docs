---
sidebar_position: 3
---

# Setting Up Zigbee and Z-Wave

:::info
内容翻译同步中，以下为英文原文。
:::

[Mixtile 2-in-1 Zigbee & Z-Wave mPCIe Interface Module](https://www.mixtile.com/store/accessory/mixtile-2-in-1-zigbee-z-wave-mpcie-interface-module/) is designed for Home Assistant users and developers. After installing Home Assistant (see [Using Home Assistant in Mixtile Edge 2](/edge-2/software/home-assistant/)), you can follow this tutorial to install and configure the module in Home Assistant.

## Installing the module on Mixtile Edge 2

Before you start, install the module to the mini-PCIe interface of Mixtile Edge 2 as follows:

![zigbee-zwave-2in1-on-edge-2-with-screws](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/3b5a6f712b53.webp)

![240628 E2K 2in1 Model Antennas 安装 1600](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/58be379f39bc.webp)

> Important: Make sure you follow this image to connect the Zigbee and Z-Wave antennas to the right ports.

## Setting up Zigbee

1.  In the Home Assistant dashboard (`http://homeassistant.local:8123` or `http://[your_IP_address]:8123`), click **Settings** in the side navigation bar and then click **Devices & services**.

![Settings](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/d8b7ca983df4.webp)

2.  Click **ADD INTEGRATION** at the bottom-right corner.

![add-integration](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/9080bd64bbd4.webp)

3.  Type "Zigbee" in the text box and then select `Zigbee Home Automation`.

![Zigbee-Home-Automation](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/46785c6b9995.webp)

4.  Select `EZSP = Silicon Labs EmberZNet Protocol: Elelabs, HUSBZB-1, Telegesis` as the Zigbee radio type and then click **Submit**.

![Zigbee-Radio-Type](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/f0024f60a8ff.webp)

5.  On the **Serial Port Settings** page, set **Serial device path** to `/dev/ttyCH343USB1` and keep the rest unchanged, and click **Submit**.

![Zigbee-Serial-Port-Setting](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/7fbc6bb1d020.webp)

6.  On the **Network Formation** page, select `Create a network`.

![Zigbee-Newwork-Formation-New](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/316908a658db.webp)

You should see that Zigbee has been successfully set up in Home Assistant. You can select an area for it now.

![Zigbee-Success](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/ce031760a523.webp)

## Setting up Z-Wave

1.  In the Home Assistant dashboard, click **Settings** in the side navigation bar and then click **Devices & services**.

![Settings](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/d8b7ca983df4.webp)

2.  Click **ADD INTEGRATION** at the bottom-right corner.

![add-integration](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/9080bd64bbd4.webp)

3.  Type "Z-Wave" in the text box and then select `Z-Wave`.

![Z-Wave-Search](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/2510f0b50ba5.webp)

4.  On the **Select connection method** page, check the `Use the Z-Wave JS Supervisor add-on` box and then click **Submit**.

![Z-Wave-Connection](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/ffe7446f39f6.webp)

5.  Close the **Enter the Z-Wave JS add-on configuration** page that is shown.

![Jclose-z-wave-js-supervisor-addon](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/f032cfdf1663.webp)

6.  Click **Settings** in the side navigation bar again, click **Add-ons** and then choose **Z-Wave JS**.

![z-wave-js-in-add-on](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/e1c00f8ed247.webp)

7.  Click the **Configuration** tab, select `/dev/ttyCH343USB0` in the **Device** field, and then scroll down and click **Save**.

![z-wave-js-configuration-and-device](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/33618e61b553.webp)

8.  Click the **Info** tab and click **START** to start Z-Wave JS.

![Start-the-Z-Wave-JS](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/8223a92e777e.webp)

9.  Repeat steps 1-4. You should see that Z-Wave has been successfully set up in Home Assistant. You can select an area for it now.

![Z-Wave-Success-Info](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/5fc7c7ced894.webp)

## Adding Zigbee or Z-Wave devices

1.  In the Home Assistant dashboard, click **Settings** in the side navigation bar and then click **Devices & services**.

![Settings](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/d8b7ca983df4.webp)

2.  Select the **Devices** tab and click **ADD DEVICE** at the bottom-right corner.

![add-device-button](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/079d3d846b41.webp)

3.  Select `Add Zigbee device` or `Add Z-Wave device` as needed and add your device as instructed.

![Add-Zigbee-and-Z-Wave](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/9af14e407911.webp)

![Add-Zigbee-Light](/img/docs/setting-up-zigbee-and-z-wave-in-home-assistant/c2cb796a289a.webp)
