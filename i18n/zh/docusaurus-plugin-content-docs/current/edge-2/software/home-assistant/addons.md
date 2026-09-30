---
sidebar_position: 2
---

# Installing Mixtile Add-ons

:::info
内容翻译同步中，以下为英文原文。
:::

Mixtile offers the following two add-ons, Mixtile Flasher and MIXTILE Z-Wave Region Configurator, to enhance [Mixtile 2-in-1 Zigbee & Z-Wave mPCIe Interface Module](https://www.mixtile.com/store/accessory/mixtile-2-in-1-zigbee-z-wave-mpcie-interface-module/). This guide walks you through how to install and use them to tailor to your use cases.

## Introducing the add-ons

- **MIXTILE Flasher**: By default, the Zigbee System on Chip (SoC) supports only the Zigbee firmware option. If you need it to support both Zigbee and Thread, you can use this add-on to re-flash its firmware. In addition, you can use MIXTILE Flasher to flash the firmware back to Zigbee-only.

- **MIXTILE Z-Wave Region Configurator**: Sometimes you might want to add Z-Wave devices from other regions. In this case, you can use this add-on to change the region settings of your Z-Wave SoC.

## Installing the add-ons

> This guide assumes that you already have Home Assistant installed in your Mixtile Edge 2. If not, install it first by referring to [Using Home Assistant in Mixtile Edge 2](/edge-2/software/home-assistant/).

1.  Visit [MIXTILE_Addons GitHub](https://github.com/mixtile-rockchip/MIXTILE_Addons) and click **ADD ADD-ON REPOSITORY TO MY**:

![Add-on-from-Github](/img/docs/installing-mixtile-add-ons-for-home-assistant/169c29312124.webp)

2.  Input the URL of Home Assistant:

![modify_hom_assistant_url](/img/docs/installing-mixtile-add-ons-for-home-assistant/de95d0b03f43.webp)

3.  Click **Open link**:

![open-add-on-link](/img/docs/installing-mixtile-add-ons-for-home-assistant/03a7025e6f49.webp)

4.  On the **Manage add-on repositories** page, click **ADD**:

![Manage-Add-on](/img/docs/installing-mixtile-add-ons-for-home-assistant/adfa315cf97e.webp)

5.  Click **Settings** in the side navigation bar, choose **Add-ons**, and then click **ADD-ON STORE** at the bottom-right corner.

![add-on-store](/img/docs/installing-mixtile-add-ons-for-home-assistant/85a65bb9f869.webp)

6.  Type "Mixtile" in the search box, and you will find that the Mixtile add-ons are not displayed. Therefore, scroll down to the end of the list and click `Missing add-ons? Enable advanced mode in your user profile page`:

![missing-addons](/img/docs/installing-mixtile-add-ons-for-home-assistant/953eee1c1776.webp)

7.  Enable the **Advanced mode**:

![advanced-mode-enabled](/img/docs/installing-mixtile-add-ons-for-home-assistant/16cfd20e0bfe.webp)

8.  Repeat step 4 to go back to the **ADD-ON STORE** page again. You should now be able to see the Mixtile add-ons.

![Mixtile-Add-on](/img/docs/installing-mixtile-add-ons-for-home-assistant/919190a36ad1.webp)

9.  Click the add-on you want to install, for example, `MIXTILE Z-Wave Region Configurator`, and click **INSTALL**:

![install-region-configurator](/img/docs/installing-mixtile-add-ons-for-home-assistant/9cbae4a5755d.webp)

    It might take a while for the installation to complete.

## Using the add-ons

To use each add-on, visit the pages below as needed：

- MIXTILE Flasher: [Flashing Zigbee & Thread Firmware with MIXTILE Flasher](/edge-2/accessories/zigbee-zwave-module/flash-firmware)
- MIXTILE Z-Wave Region Configurator: [Using MIXTILE Z-Wave Region Configurator](/edge-2/accessories/zigbee-zwave-module/region-configurator)
