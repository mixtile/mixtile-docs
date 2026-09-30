---
sidebar_position: 1
---

# Home Assistant

:::info
内容翻译同步中，以下为英文原文。
:::

Mixtile Edge 2 can run a huge possibility of applications, and Home Assistant is one of them. This document describes how to install Home Assistant to Mixtile Edge 2 and access its dashboard.

## Installing Home Assistant

> Note: If your Mixtile Edge 2 already has Home Assistant pre-installed, skip this step.

> Important: Before you start, make sure you have backed up all important data.

1.  Download the following files:

  - upgrade_tool (macOS: [upgrade_tool_v2.13_for_mac](https://downloads.mixtile.com/tools/upgrade_tool_v2.13_for_mac.zip); Ubuntu: [upgrade_tool_v2.22_for_linux](https://downloads.mixtile.com/tools/upgrade_tool_v2.22_for_linux.zip))
  - [Home Assistant image](https://downloads.mixtile.com/edge2/homeassistant_image/image-release-raw-format-mixtile-edge2-homeassistant12.2-rc2-240822.img.zip)
  - [SPL loader file](https://downloads.mixtile.com/edge2/homeassistant_image/rk356x_spl_loader_v1.13.112.bin?_ga=2.38096291.1068717537.1724920075-1975792596.1724920075): required only for the MaskRom mode.

> Note: This document takes macOS as an example to illustrate the installation process. If you use Windows or Ubuntu, see [/edge-2/getting-started/install-os](/edge-2/getting-started/install-os) for more information.

2.  Enter a boot mode as needed:

  - Loader mode: Press and hold the **Recovery** button, power on Mixtile Edge 2 by connecting it to a PC via a USB-C cable, and then wait about 2 seconds before releasing the **Recovery** button.
  - MaskRom mode: Press and hold the **MaskRom** button, power on Mixtile Edge 2 by connecting it to a PC via a USB-C cable, and then wait about 2 seconds before releasing the **MaskRom** button.

    > Note:
    >
    > -   If the connection fails, try another cable or add a 12V power adapter.
    > -   To find the **Recovery** and **MaskRom** buttons, remove the screws and then the body shell of Mixtile Edge 2.

3.  Unzip the `upgrade_tool_v2.13_for_mac` package. Then go to the directory where you have unzipped the package and run the command below to make `upgrade_tool` executable. Enter your admin password if prompted.

    ```bash
    sudo chmod u+x upgrade_tool
    ```

    > If you are alerted that the app developer cannot be verified:
    >
    > 1.  Open **System Settings**.
    > 2.  Click **Privacy & Security**, scroll down, and click the **Open Anyway** button to confirm your intent to open or install the app.
    >
    >     ![The Open Anyway button in Privacy & Security](/img/docs/using-home-assistant-in-mixtile-edge-2-kit/macos-open-app-anyway.png)
    >

4.  (Optional) Run the command below to flash the SPL loader to Mixtile Edge 2 (required only for the MaskRom mode). Replace `[your_folder_path]` with the actual location of the SPL loader file.

    ```bash
    ./upgrade_tool db /[your_folder_path]/rk356x_spl_loader_v1.13.112.bin
    ```

5.  Run the command below to write the Home Assistant image to Mixtile Edge 2. Replace `[your_folder_path]` with the actual location of the image.

    ```bash
    ./upgrade_tool wl 0 /[your_folder_path]/image-release-raw-format-mixtile-edge2-homeassistant12.2-rc2-240822.img
    ```

    It may take about 2 minutes for the installation to complete. Once it’s done, you have successfully installed Home Assistant to Mixtile Edge 2.

## Booting up Home Assistant

Once the installation is complete, reboot Mixtile Edge 2 as follows:

1.  Connect Mixtile Edge 2 to the Internet via an Ethernet cable.
2.  Connect Mixtile Edge 2 to a monitor via an HDMI cable. If you are using only one Mixtile Edge 2, you may skip this step.
3.  Power on Mixtile Edge 2 by connecting the USB-C cable to the device’s USB-C port and to a compatible power adapter. Then plug the adapter into a wall outlet.

If your Mixtile Edge 2 is connected to a monitor, you can see the Home Assistant CLI similar to the one below on its startup:

![Home-Assistant-CLI](/img/docs/using-home-assistant-in-mixtile-edge-2-kit/a48e88fe70f3.webp)

You can now access Home Assistant as follows:

- If you have only one Mixtile Edge 2 in your network, access `http://homeassistant.local:8123`.
- If you have more than one Mixtile Edge 2 in your network, get the IP address of Mixtile Edge 2 from the monitor connected, and access Home Assistant at `http://[your_IP_address]:8123` (replace `[your_IP_address]` with the actual one).

It might take about 20 minutes for Home Assistant to be initialized at the first startup.

![preparing_home_assistant](/img/docs/using-home-assistant-in-mixtile-edge-2-kit/27ac4903666b.webp)

![welcome_to_home_assistant](/img/docs/using-home-assistant-in-mixtile-edge-2-kit/129eaf473133.webp)

Congratulations! You can now explore Home Assistant’s features and configure it as you want!
