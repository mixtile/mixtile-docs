---
sidebar_position: 5
---

# Using the Z-Wave Region Configurator

After installing MIXTILE Z-Wave Region Configurator (see [Installing Mixtile Add-ons](/edge-2/accessories/addons)), you can follow this guide to change the region.

## Disabling Z-Wave services and add-ons

Before using MIXTILE Z-Wave Region Configurator, you need to disable Z-Wave services and add-ons as follows:

1.  Click **Settings > Devices & services > Z-Wave**. On the **Z-Wave JS** row, click **⋮ > Disable** to disable the Z-Wave service:

![disable-z-wave](/img/docs/using-mixtile-z-wave-region-configurator/haos-disable-z-wave.webp)

2.  Click **Settings > Apps > Z-Wave JS** and click **Stop** to stop the Z-Wave JS app:

![stop-z-wave-js](/img/docs/using-mixtile-z-wave-region-configurator/haos-stop-z-wave-js.webp)

## Utilizing MIXTILE Z-Wave Region Configurator

Now you can use MIXTILE Z-Wave Region Configurator to change the region:

1.  Click **Settings > Apps > MIXTILE Z-Wave Region Configurator**.

2.  Choose the **Configuration** tab, set **Device** to the `USB Dual_Serial` device whose path ends in `-if00` and **Region** to the region you want to use (for example, `Europe`), and click **Save**:

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
