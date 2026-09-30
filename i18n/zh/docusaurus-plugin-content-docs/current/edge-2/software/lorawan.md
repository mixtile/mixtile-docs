---
sidebar_position: 6

---

# Configuring LoRaWAN Gateways

:::info
内容翻译同步中，以下为英文原文。
:::

## Overview

Mixtile Edge 2 has a mini-PCIe interface that can be used to integrate the LoRaWAN gateway for IoT application design. This tutorial describes how to configure a LoRaWAN gateway on Mixtile Edge 2 that runs a Linux distribution.

## Prerequisites

Before you start, make sure you have:

1.  Installed a LoRaWAN gateway to Mixtile Edge 2 as follows:

![lora_on_edge_2_with_screws](/img/docs/configuring-lorawan-gateways-on-mixtile-edge-2-kit-running-linux/67f64879199a.webp)

2.  Installed a Linux distribution on Mixtile Edge 2. For details, see [Installing an Operating System on Mixtile Edge 2](/edge-2/getting-started/install-os).

3.  Connected Mixtile Edge 2 to the Internet.

4.  Connected to Mixtile Edge 2 as a standard user via SSH.

> This guide takes LoRaWAN gateway SW8031 and Debian 11 (download the image [here](https://downloads.mixtile.com/edge2/debian_image/image-release-rockchip-format-mixtile-edge2-debian11-20240909.img.zip), username `mixtile`, password `mixtile`) to illustrate the configuration process. If you use a different Linux distribution, steps might vary slightly.

## Setting up Chirpstack and LoRaWAN gateway

Mixtile provides a script to help you easily set up Chirpstack and the LoRaWAN gateway. You can run the script as follows:

1.  Download the script to Mixtile Edge 2 and run it:

    ```bash
    cd ~
    wget https://downloads.mixtile.com/doc-files/lora_linux.sh
    bash lora_linux.sh
    ```

    > Note:
    >
    > This script has only been tested on Debian 11. If you use another OS, you might need to modify the script accordingly.

2.  Input `yes` and then your password (`mixtile` in this case) when the messages below are prompted:

    ```bash

    Are you sure you want to continue connecting (yes/no/[fingerprint])? # Input yes

    mixtile@localhost's password:   # Input your password
    ```

3.  Select a region for the LoRaWAN gateway based on the LoRaWAN module and devices you intend to use:

    ```sh
    Please select a region file:
    1. AS923
    2. CN490
    3. EU868
    4. US915
    Enter the option number:
    ```

4.  Decide if you want to start the LoRaWAN gateway on boot:

    ```sh
    Do you want the LoRaWAN gateway to start on boot? (y/n)
    ```

5.  Select a Chirpstack configuration option based on your region. This region needs to match the one configured for the LoRaWAN gateway in Step 3 (otherwise, the communication may fail)：

    ```sh
    Please select an option:
    1. as923
    2. as923_2
    3. as923_3
    4. as923_4
    5. au915_0
    6. au915_1
    7. au915_2
    8. au915_3
    9. au915_4
    10. au915_5
    11. au915_6
    12. au915_7
    13. cn470_0
    14. cn470_1
    15. cn470_10
    16. cn470_11
    17. cn470_2
    18. cn470_3
    19. cn470_4
    20. cn470_5
    21. cn470_6
    22. cn470_7
    23. cn470_8
    24. cn470_9
    25. cn779
    26. eu433
    27. eu868
    28. in865
    29. ism2400
    30. kr920
    31. ru864
    32. us915_0
    33. us915_1
    34. us915_2
    35. us915_3
    36. us915_4
    37. us915_5
    38. us915_6
    39. us915_7
    Enter the option number:
    ```

    > Some regions may have more than one configuration option. In this case, the `*_0` option (for example, `us915_0` for US and `cn470_0` for CN) is recommended.

6.  Wait about 10 minutes for the script to complete. When it’s done, it returns the LoRaWAN gateway ID (`0016c001f160f372` in this example) and the `Script completed successfully` message as follows:

![](/img/docs/configuring-lorawan-gateways-on-mixtile-edge-2-kit-running-linux/9004b5aa9211.webp)

    > Copy this ID somewhere convenient, as it’s needed in later steps.

## Adding the LoRaWAN gateway to ChirpStack

1.  Open a browser to access `<IP-address>:8080` (replace `<IP-address>` with the IP of your Mixtile Edge 2) and log into Chirpstack (username: `admin`; password: `admin`):

![login-chirpstack](/img/docs/configuring-lorawan-gateways-on-mixtile-edge-2-kit-running-linux/bb8ebea0b676.webp)

2.  Click **Gateways** in the side navigation bar and click **Add gateway**:

![add-gateway-in-chirpstack](/img/docs/configuring-lorawan-gateways-on-mixtile-edge-2-kit-running-linux/9bc625c123f0.webp)

3.  In the **Name** field, set a name for the LoRaWAN gateway as you like, set **Gateway ID** to the EUI obtained during the LoRaWAN gateway configuration (in this example, `0016c001f160f372`), and then scroll down to click **Submit**:

![add-chirpstack-gateway-config](/img/docs/configuring-lorawan-gateways-on-mixtile-edge-2-kit-running-linux/b7d8b552b922.webp)

You have now added the LoRaWAN gateway to Chirpstack. You can go to the **Dashboard** or **Gateways > Dashboard** page to check the gateway status. If the gateway status is `online`, it’s configured successfully.

![chirpstack-dashboard](/img/docs/configuring-lorawan-gateways-on-mixtile-edge-2-kit-running-linux/57f349ff6b8d.webp)

![chirpstack-gateways-dashboard](/img/docs/configuring-lorawan-gateways-on-mixtile-edge-2-kit-running-linux/1f45e5232b1c.webp)
