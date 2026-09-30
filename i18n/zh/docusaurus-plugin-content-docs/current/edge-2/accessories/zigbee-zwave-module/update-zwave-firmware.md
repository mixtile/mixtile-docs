---
sidebar_position: 3
---

# Updating Z-Wave Firmware

:::info
内容翻译同步中，以下为英文原文。
:::

This tutorial describes how to update your Z-Wave firmware in Home Assistant. Before you start, make sure you have set up Z-Wave in Home Assistant (see [Setting up Zigbee and Z-Wave in Home Assistant](/edge-2/software/home-assistant/zigbee-zwave)).

1.  Click [here](https://github.com/focalcrest/Mixtile-EDGE2-Firmware/tree/main/Z-wave) to download the firmware for your region. If your region is not available, use `ZWave_v1.1.0_EU-OTW.gbl`.

![](/img/docs/updating-z-wave-firmware/c6be8fa512b3.webp)

2.  In the Home Assistant dashboard (`<IP-address>:8123`), click **Settings > Device & services**.

3.  Find and click **Z-Wave** and click **1 device** (if you have added devices, the number might differ).

![](/img/docs/updating-z-wave-firmware/760e19d83fc4.webp)

4.  Select `Node 1` (`Node 1` is your Z-Wave module and the other nodes are your Z-Wave devices) and click **UPDATE**. If you haven’t added Z-Wave devices, click **UPDATE** directly:

![](/img/docs/updating-z-wave-firmware/ec865a7c0862.webp)

![](/img/docs/updating-z-wave-firmware/3577c1839cc4.webp)

5.  On the page that is displayed, click **YES**.

![](/img/docs/updating-z-wave-firmware/0ae45b6ebe3a.webp)

6.  Click **UPLOAD FIRMWARE**, select the firmware downloaded in step 1, and then click **BEGIN FIRMWARE UPDATE**.

![](/img/docs/updating-z-wave-firmware/08f307d54f91.webp)

![](/img/docs/updating-z-wave-firmware/845cc543e852.webp)

    If you see the page below, your Z-Wave firmware has been updated successfully. It will become unavailable for about 5 minutes and then restart automatically. You can ignore the Z-Wave JS errors reported during this period.

![](/img/docs/updating-z-wave-firmware/b4ab14dab572.webp)
