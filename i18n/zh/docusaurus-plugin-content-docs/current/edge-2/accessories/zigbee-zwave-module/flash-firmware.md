---
sidebar_position: 2
---

# Flashing Zigbee and Thread Firmware

:::info
内容翻译同步中，以下为英文原文。
:::

After installing MIXTILE Flasher (see [Installing Mixtile Add-ons for Home Assistant](/edge-2/software/home-assistant/addons)), you can follow this guide to flash the Zigbee & Thread firmware to support both Zigbee and Thread.

## Disabling Zigbee Home Automation

Before starting the flasher, disable Zigbee Home Automation first (if you haven’t installed **Zigbee Home Automation**, skip this step):

1.  Click **Settings** in the side navigation bar, and then click **Devices & services** > **Zigbee Home Automation**.

2.  Click **┇ > Disable**:

![disable_zigbee_home_automation](/img/docs/flashing-zigbee-and-thread-firmware-with-mixtile-flasher/f3d4fc97a248.webp)

## Starting Mixtile Flasher

Now use Mixtile Flasher to flash the Zigbee & Thread firmware:

1.  Click **Settings** in the side navigation bar, click **Add-ons > MIXTILE Flasher**, and choose the **Configuration** tab.

2.  Select `/dev/ttyCH343USB1` in the **Device** field, set **Firmware URL** to `https://github.com/focalcrest/Mixtile-EDGE2-Firmware/raw/main/Zigbee&Thread/Zigbee&Thread_v1.0.0.gbl`, and click **Save**:

![zigbee_flasher_config](/img/docs/flashing-zigbee-and-thread-firmware-with-mixtile-flasher/da478024b266.webp)

3.  Choose the **Info** tab and click **START** to start flashing the firmware:

![start-mixtile-flasher](/img/docs/flashing-zigbee-and-thread-firmware-with-mixtile-flasher/b0d42922f969.webp)

4.  Choose the **Log** tab to monitor the flashing process. You can scroll down to click the **REFRESH** button to update the logs. When `Update Success` is displayed, the flashing process is complete.

![firmware-flashing-success](/img/docs/flashing-zigbee-and-thread-firmware-with-mixtile-flasher/d6b8d417573c.webp)

5.  Go back to the **Info** tab and click **STOP** to stop MIXTILE Flasher:

![stop-mistile-flasher](/img/docs/flashing-zigbee-and-thread-firmware-with-mixtile-flasher/b06311794b08.webp)

## Utilizing Silicon Labs Multiprotocol

Home Assistant uses [Silicon Labs Multiprotocol](https://www.silabs.com/wireless/multiprotocol) to allow the device’s Silicon Labs chip to connect to both Zigbee and Thread networks with one radio. Configure it as follows:

1.  Click **Settings > Add-ons > ADD-ON STORE**, type "multiprotocol" in the text box, click **Silicon Labs Multiprotocol**, and click **INSTALL**:

![install-multiprotocol](/img/docs/flashing-zigbee-and-thread-firmware-with-mixtile-flasher/89daf30774ee.webp)

2.  On the **Silicon Labs Multiprotocol** page, choose the **Configuration** tab:

3.  Set **Device** to `/dev/ttyCH343USB1`, disable both **Hardware flow control** and **Automatically flash firmware**, and click **Save**:

![multiprotocol-configuration](/img/docs/flashing-zigbee-and-thread-firmware-with-mixtile-flasher/0ff7f2b0fa49.webp)

4.  Go back to the **Info** tab and click **START** to start running Silicon Labs Multiprotocol:

![start-multiprotocol](/img/docs/flashing-zigbee-and-thread-firmware-with-mixtile-flasher/e73f2354466c.webp)

    Stay on this page until it’s successfully started as shown in the image below:

![multiprotocol-started](/img/docs/flashing-zigbee-and-thread-firmware-with-mixtile-flasher/b256a99e775b.webp)

5.  When the add-on is started, click **Settings> Devices & services > Thread**, and click **Configure**:

![configure-thread](/img/docs/flashing-zigbee-and-thread-firmware-with-mixtile-flasher/36cc85e07453.webp)

6.  Make `Silicon Labs Multiprotocol` the preferred network:

![add-to-preferred-network](/img/docs/flashing-zigbee-and-thread-firmware-with-mixtile-flasher/95b4efc9e13f.webp)

## Adding Zigbee Home Automation back

1.  Click **Settings > Devices & services** and then click the **SHOW** button in the upper-right corner:

![show-disabled-services](/img/docs/flashing-zigbee-and-thread-firmware-with-mixtile-flasher/a22a2b3d83c1.webp)

2.  Find **Zigbee Home Automation** again and click **┇ > Delete**:

![delete-zigbee-home-automation](/img/docs/flashing-zigbee-and-thread-firmware-with-mixtile-flasher/826eb0f989d0.webp)

3.  Click **ADD INTEGRATION** and type "Zigbee" to find `Zigbee Home Automation` again. You should see that `Serial Device Path` can now be set to `socket://core-silabs-multiprotocol:9999 - Multiprotocol add-on - Nabu Casa` as shown below. Click **Submit**:

![select-multiprotocol-port](/img/docs/flashing-zigbee-and-thread-firmware-with-mixtile-flasher/26b58e09c9c2.webp)

4.  Click **Submit** on the radio type page:

![select-radio-type](/img/docs/flashing-zigbee-and-thread-firmware-with-mixtile-flasher/7efcce802fc8.webp)

5.  Click **Submit** on the serial port settings page:

![serial-port-settings](/img/docs/flashing-zigbee-and-thread-firmware-with-mixtile-flasher/df2b6acb8c26.webp)

6.  Set the network formation as needed:

![network-formation](/img/docs/flashing-zigbee-and-thread-firmware-with-mixtile-flasher/f1f9676067e3.webp)

    Zigbee has now been added back to Home Assistant. You can select an area for it:

![added-zigbee](/img/docs/flashing-zigbee-and-thread-firmware-with-mixtile-flasher/a25438de393d.webp)

Now your firmware should support both Zigbee and Thread. You can add Zigbee and Thread devices as you like.
