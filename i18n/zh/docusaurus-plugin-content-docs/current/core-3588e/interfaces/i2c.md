---
sidebar_position: 2
---

# I2C

:::info
内容翻译同步中，以下为英文原文。
:::

> In this document, we use Leetop A206 carrier board. Operations can be slightly different if you use other models of carrier boards.

The carrier board of Mixtile Core 3588E (hereinafter referred to as Core 3588E) provides access to several peripheral interfaces through the 40-pin expansion header, including VCC, GND, GPIO, I2C, I2S, UART, and SPI interfaces. The following figure shows the pin layout.

![40-pin expansion header of Core 3588E](/img/docs/core-3588e-i2c/db03ac95bfd7.webp)

_Figure 1. 40-pin expansion header of Core 3588E_

This document describes how to connect an OLED display module via the I2C interfaces.

For more information about pin assignment and definitions of Core 3588E, see [Core 3588E Pin Definition](/core-3588e/hardware/pinout#pin-definition).

## Preparations

- [Set up connections for Core 3588E](/core-3588e/getting-started/quick-start#set-up-connections).
- Log in to Core 3588E using one of the following methods:
  - [Login using a serial communication tool](/core-3588e/getting-started/connect#serial-console)
  - [Login using SSH](/core-3588e/getting-started/connect#ssh)
- An OLED display module
- An OLED I2C file: [oled-i2c](https://downloads.mixtile.com/core3588e/file/oled-i2c)

## Steps

Step 1. Connect the OLED display module to the 40-pin header. The pin matching is as follows:

![](/img/docs/core-3588e-i2c/f5de899b5863.webp)

![Pin matching for I2C](/img/docs/core-3588e-i2c/386b7641ed49.webp)

_Figure 2. Pin matching for I2C_

Step 2. Download the **oled-i2c** file and copy it to the Core 3588E directory.

- Using the ADB tool:

```bash
adb push oled-i2c /home/mixtile
```

- Using the serial communication tool or SSH:

```bash
scp oled-i2c mixtile@Core 3588E IP address:/home/mixtile
```

Step 3. Navigate to the Core 3588E console.

Step 4. Enter the directory **/home/mixtile** and grant permission to access **oled-i2c**:

```bash
sudo chmod +x oled-i2c
```

Step 5. Under the directory **/home/mixtile**, run the following command:

```bash
sudo ./oled-i2c /dev/i2c-1
```

:::note
If you connect the display module to I2C0, run `sudo ./oled-i2c /dev/i2c-0`.
:::

You can see that the OLED display module shows text **Core3588E**, as shown below.

![OLED display via the I2C interface](/img/docs/core-3588e-i2c/fa7d70494ed8.webp)

_Figure 3. OLED display via the I2C interface_
