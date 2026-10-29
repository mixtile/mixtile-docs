---
sidebar_position: 4
---

# Updating Z-Wave Firmware

This page describes how to update the Z-Wave firmware of the module in Home Assistant. Before you start, set up Z-Wave in Home Assistant as described in [Setting Up Zigbee and Z-Wave](/edge-2/accessories/zigbee-zwave-module/home-assistant-setup).

1.  Download the firmware for your region from the [Z-Wave firmware folder](https://github.com/focalcrest/Mixtile-EDGE2-Firmware/tree/main/Z-wave). If your region is not available, use `ZWave_v1.1.0_EU-OTW.gbl`.

![Z-Wave-firmware-folder](/img/docs/updating-z-wave-firmware/haos-firmware-folder.webp)

2.  In the Home Assistant dashboard (`<IP-address>:8123`), click **Settings > Devices & services**.

3.  Find and click **Z-Wave**, then click **Node 1**. `Node 1` is your Z-Wave module; the other nodes are your Z-Wave devices.

![Z-Wave-devices](/img/docs/updating-z-wave-firmware/haos-z-wave-devices.webp)

4.  In the **Device info** card, click **⋮ > Update**:

![Node-1-update](/img/docs/updating-z-wave-firmware/haos-node-1-update.webp)

5.  On the warning that is displayed, click **Yes**.

![Update-warning](/img/docs/updating-z-wave-firmware/haos-update-warning.webp)

6.  Click **Upload firmware**, select the firmware downloaded in step 1, and then click **Begin firmware update**.

![Upload-firmware](/img/docs/updating-z-wave-firmware/haos-upload-firmware.webp)

    If you see the page below, your Z-Wave firmware has been updated successfully. It will become unavailable for about 5 minutes and then restart automatically. You can ignore the Z-Wave JS errors reported during this period.

![The Update device firmware dialog reporting a successful firmware update on Node 1](/img/docs/updating-z-wave-firmware/b4ab14dab572.webp)
