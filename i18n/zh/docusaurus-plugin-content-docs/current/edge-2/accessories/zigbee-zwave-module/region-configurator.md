---
sidebar_position: 4
---

# Using the Z-Wave Region Configurator

:::info
内容翻译同步中，以下为英文原文。
:::

After installing MIXTILE Z-Wave Region Configurator (see [Installing Mixtile Add-ons for Home Assistant](/edge-2/software/home-assistant/addons)), you can follow this guide to change the region.

## Disabling Z-Wave services and add-ons

Before using MIXTILE Z-Wave Region Configurator, you need to disable Z-Wave services and add-ons as follows:

1.  Click **Settings > Devices & services > Z-Wave** and then click **┇ > Disable** to disable the Z-Wave service:

![disable-z-wave](/img/docs/using-mixtile-z-wave-region-configurator/c3d61abb683d.webp)

2.  Click **Settings > Add-ons > Z-Wave JS** to stop the Z-Wave JS add-on:

![stop-z-wave-js](/img/docs/using-mixtile-z-wave-region-configurator/595d5ec40e1e.webp)

## Utilizing MIXTILE Z-Wave Region Configurator

Now you can use MIXTILE Z-Wave Region Configurator to change the region:

1.  Click **Settings > Add-ons > MIXTILE Z-Wave Region Configurator**.

2.  Choose the **Configuration** tab, set **Device** to `/dev/ttyCH343USB0` and **Region** to the region you want to use (for example, `Europe`), and click **Save**:

![configure-region-configurator](/img/docs/using-mixtile-z-wave-region-configurator/03271ae9bcb9.webp)

3.  Go to the **Info** tab and click **START** to run the add-on:

![start-region-configurator](/img/docs/using-mixtile-z-wave-region-configurator/a44364c18cbc.webp)

4.  Go to the **Log** tab to check the status of the region update. If the log output is similar to the one below, the region has been changed successfully.

![region-changed-successfully](/img/docs/using-mixtile-z-wave-region-configurator/394ced570247.webp)

5.  MIXTILE Z-Wave Region Configurator will stop automatically. You can also go back to the **Info** tab and click **STOP** to stop the add-on manually:

![stop-region-configurator](/img/docs/using-mixtile-z-wave-region-configurator/a902f88a5a3d.webp)

## Enabling Z-Wave again

After changing the region, you can enable Z-Wave services again as follows:

1.  Click **Settings > Devices & services** and then click the **SHOW** button in the upper-right corner:

![show-disabled-services](/img/docs/using-mixtile-z-wave-region-configurator/a22a2b3d83c1.webp)

2.  Find Z-Wave and click **Enable** to enable it again (the Z-Wave JS add-on will be enabled at the same time):

![enable-z-wave-again](/img/docs/using-mixtile-z-wave-region-configurator/9cde8e578785.webp)

Now you have successfully changed the region and enabled Z-Wave again.
