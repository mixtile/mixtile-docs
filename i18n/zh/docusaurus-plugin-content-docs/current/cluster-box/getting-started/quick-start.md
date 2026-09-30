---
sidebar_position: 2
---

# Quick Start

:::info
内容翻译同步中，以下为英文原文。
:::

Thank you for purchasing Cluster Box. This guide is designed to guide you through installation.

## Package list

Check the package and ensure that the following items are included. If any item is missing or damaged, contact your sales representative for help:

_Figure 1. Package list of Cluster Box_

## Preparations

Besides the packaged items, you also need to prepare the following items for Cluster Box installation:

![Accessories to be prepared](/img/docs/getting-started-with-cluster-box/9315b9e12142.webp)

_Figure 2. Accessories to be prepared_

## Installation steps

Step 1. Install Mixtile Blade 3 boards.

1.1 Loosen the two captive screws on the motherboard tray with the indication N1 by turning them counterclockwise. Then take out the motherboard tray from Cluster Box.

1.2 Use a Phillips screwdriver to loosen the four screws (two flat head screws + two M3\*3 round head screws) that secure the heatsink to the motherboard tray. Push the heatsink outwards and remove the heatsink from the motherboard tray.

1.3 Place the Blade 3 on the heatsink. Note that Blade 3’s MIPI CSI interface must face the heatsink’s notch and their screw holes line up.

1.4 Attach Blade 3 to the heatsink. Install two M3\*3 Phillips round head machine screws to the holes far away from the heatsink’s notch.

1.5 Slide the combined unit into the motherboard tray. Reinstall the two flat head screws to secure the heatsink on the motherboard tray, and install two M3\*5 Phillips round head machine screws to the screw holes near the heatsink’s notch.

1.6 Place the assembled Blade 3 unit to the corresponding slot on Cluster Box and secure the two captive screws by turning them clockwise.

1.7 Repeat steps 1.1 to 1.6 to install the other three Blade 3 boards in Cluster Box.

_Figure 3. Install Mixtile Blade 3_

Step 2. Connect power. Connect one end of the power adapter to the power port of Cluster Box and the other end to a power source. You’ll notice that the LED lights up blue, indicating that Cluster Box is powered on. By default, the Blade 3 boards are powered on sequentially.

Step 3. Connect to network. Connect the Ethernet cable to the RJ45 interface of Cluster Box.

_Figure 4. Connect to power and network_

Step 4. (Optional) Install SSDs.

4.1 Open the rear cover of Cluster Box.

4.2 Install the SSD into the NVMe M.2 slot using M2\*5\*5 Phillips pan head machine screws with washer.

_Figure 5. Install SSDs_

## Follow-up Procedure

After connecting the Ethernet cable to Cluster Box, obtain the IP address of Cluster Box and then log in using either GUI or SSH:

1\. Via GUI:

1.1 In your browser, enter the IP address of Cluster Box.

1.2 On the login page, retain the username **mixtile** and enter password **mixtile**. Then you are directed to the GUI of Cluster Box.

![Login to Cluster Box via GUI](/img/docs/getting-started-with-cluster-box/ef3e64da3538.webp)

_Figure 6. Login to Cluster Box via GUI_

2\. Via SSH:

2.1 In the terminal, type **ssh mixtile@**_Cluster Box IP address_.

2.2 Type password **mixtile** and press **Enter**.

```text
$ ssh mixtile@192.168.1.146
mixtile@192.168.1.146's password:
  ____ _           _              ____     Mixtile
 / ___| |_   _ ___| |_ ___ _ __  | __ )  _____  __
| |   | | | | / __| __/ _ \ '__| |  _ \ / _ \ \/ /
| |___| | |_| \__ \ ||  __/ |    | |_) | (_) >  <
 \____|_|\__,_|___/\__\___|_|    |____/ \___/_/\_\
 -----------------------------------------------------
 https://www.mixtile.com/
 -----------------------------------------------------
```

## Learn More

For more information, visit [https://www.mixtile.com/](https://www.mixtile.com/) or scan the QR code below.
