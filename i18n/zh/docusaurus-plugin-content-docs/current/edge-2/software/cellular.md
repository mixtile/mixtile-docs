---
sidebar_position: 3

---

# Setting Up 4G Connectivity

:::info
内容翻译同步中，以下为英文原文。
:::

This document explains how to set up internet connectivity over 4G on the Edge 2 board running the Debian Linux system. Follow the steps below to download the latest OS image, upgrade the firmware, select the cellular module, and connect to a 4G mobile network.

## Steps

### Step 1 Download the latest Debian system image

Download the latest Debian OS image for Edge 2 from the [Firmware Images](/blade-3/download) page.

### Step 2 Update the Edge 2 firmware

Follow [Installing an Operating System on Mixtile Edge 2](/edge-2/getting-started/install-os) to upgrade Edge 2 with the Debian system image downloaded in step 1.

### Step 3 Select the cellular module

Open a terminal and run the module selection script:

```bash
cd /usr/local/bin
./module_select.sh
```

Follow the prompts to choose the correct modem module.

![Selecting the module](/img/docs/set-up-4g-connectivity-on-edge2/65b9f26bff48.webp)

_Figure 1. Selecting the module_

### Step 4. Connect to 4G Network

After Edge 2 restarts, run the dialer script to connect to the mobile network:

```bash
cd /etc/init.d
./quectel-CM
```

Edge 2 will now connect to the internet over the 4G network.

![Edge 2 connected to internet](/img/docs/set-up-4g-connectivity-on-edge2/a3507924ef76.webp)

_Figure 2. Edge 2 connected to internet_
