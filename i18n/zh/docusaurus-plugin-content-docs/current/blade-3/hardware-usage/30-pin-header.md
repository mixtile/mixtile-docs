---
sidebar_position: 1
description: Use the I2C, SPI and PWM pins of the 30-pin header.
---

# 30-pin Header

:::info
内容翻译同步中，以下为英文原文。
:::

Mixtile Blade 3 provides a row of GPIO (general-purpose input/output) pins along the same edge of the board as the U.2 connector, for extended interfacing. These pins can be used for a wide range of applications. Among these pins, some are defined as I2C, I2S, USB, SPI, ADC, and PWM interfaces. 

![Top view of Blade 3 with the 30-pin header and its pin 1 outlined, beside a map of all 30 pins](/img/docs/blade-3-board/blade-3-30-pin-header.webp)

_Figure 1. Layout of Blade 3’s 30 pins_

This document describes how to use some of the pins for specific tasks, including:

-   Connect an OLED display module via the I2C interface.
-   Connect an OLED display module via the SPI interface.
-   Connect a fan module.

For the signal name, type, direction and description of all 30 pins, see [30-Pin Header](./README.md#30-pin-header) in the hardware reference.

## I2C

This section describes how to connect an OLED display module via the I2C interface.

### Preparations

-   [Set up connections of Blade 3](../getting-started/quick-start.md#wiring-and-powering-up).
-   Log in to Blade 3 using one of the following methods:
    -   [using a serial communication tool](../getting-started/connect.md#serial-console)
    
    -   [via SSH](../getting-started/connect.md#ssh)
-   An OLED display module
-   An OLED package: [oled.tar](https://downloads.mixtile.com/blade3/file/blade3_oled.tar)

### Steps

Step 1. Connect the OLED display module to the 30-pin header. The pin matching is as follows:

![](/img/docs/usage-of-blade-3-30-pins/d5fc71a75340.webp)

_Figure 2. Mapping between OLED display module and Blade 3_

![](/img/docs/usage-of-blade-3-30-pins/81cd92019f80.webp)

_Figure 3. OLED display module connected to I2C interface_

Step 2. Check whether the OLED module has been connected to Blade 3 by running the following command:

```bash
i2cdetect -y -r 5
```

The command output is as follows. **0x3c** is the address of the OLED display module. 

```text
0 1 2 3 4 5 6 7 8 9 a b c d e f00: -- -- -- -- -- -- -- --
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- -- -- -- -- 3c -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- --
```

Step 3. Install a compilation tool by running the following command:

```bash
apt update && apt install build-essential
```

Step 4. Download the **[oled.tar](https://downloads.mixtile.com/blade3/file/blade3_oled.tar)** file, decompress it, and copy it to the Blade 3 directory.

Copy it from your computer over SSH:

```bash title="Host PC"
scp oled.tar mixtile@<board-ip>:/home/mixtile
```

Step 5. Configure the OLED module and generate an executable file.

Navigate to the **oled** folder and open the **sources/oled.c** file by using the vim editor.

5.1 Locate the line **//#define IIC\_MODE** and change it as **#define IIC\_MODE**. Save and exit the vim editor.

5.2 Under the **oled** directory, run the **make** command to generate an executable file.

Step 6. Execute the file that is generated in the previous step by running the following command:

```text
./oled
```

You can see that the OLED display module shows text **blade3**, as shown below.

![](/img/docs/usage-of-blade-3-30-pins/beb638eb73f6.webp)

_Figure 4. OLED display_

## SPI

### Preparations

-   [Set up connections of Blade 3](../getting-started/quick-start.md#wiring-and-powering-up).
-   Log in to Blade 3 using one of the following methods:
    
    -   [using a serial communication tool](../getting-started/connect.md#serial-console)
    
    -   [via SSH](../getting-started/connect.md#ssh)
-   An OLED display module
-   OLED package: [oled.tar](https://downloads.mixtile.com/blade3/file/blade3_oled.tar)

### Steps

Step 1. Connect the OLED display module to the 30-pin header. The pin matching is as follows:

![](/img/docs/usage-of-blade-3-30-pins/5e81a62c48e3.webp)

_Figure 5. Mapping between OLED display module and Blade 3_

![](/img/docs/usage-of-blade-3-30-pins/1c2c24450d47.webp)

_Figure 6. OLED display module connected to SPI interface_

Step 2. Install the compilation tool by running the following command:

```bash
apt update && apt install build-essential
```

Step 3. Download the **[oled.tar](https://downloads.mixtile.com/blade3/file/blade3_oled.tar)** file, decompress it, and copy it to the Blade 3 directory.

Copy it from your computer over SSH:

```bash title="Host PC"
scp oled.tar mixtile@<board-ip>:/home/mixtile
```

Step 4. Configure the OLED module and generate an executable file.

4.1 Navigate to the **oled** folder and open the **sources/oled.c** file by using the vim editor.

4.2 Locate the line /**/#define SPI\_MODE** and change it as **#define SPI\_MODE**. Save and exit the vim editor.

4.3 Under the **oled** directory, run the **make** command to generate an executable file.

Step 5. Execute the file that is generated in the previous step by running the following command:

```text
./oled
```

You can see that the OLED display module shows text **blade3**, as shown below.

![](/img/docs/usage-of-blade-3-30-pins/beb638eb73f6.webp)

_Figure 7. OLED display_

## Connect a fan module

### Preparations

-   [Set up connections of Blade 3](../getting-started/quick-start.md#wiring-and-powering-up).
-   Log in to Blade 3 using one of the following methods:
    -   [using a serial communication tool](../getting-started/connect.md#serial-console)
    -   [via SSH](../getting-started/connect.md#ssh)

-   A fan module

### Steps

Connect the fan module to Blade 3. The pin matching is as follows:

![](/img/docs/usage-of-blade-3-30-pins/d91fbd4da739.webp)

_Figure 8. Mapping fan and PWM interface_

:::note
You can connect the pwm pin to PWM14 or PWM15.
:::

![](/img/docs/usage-of-blade-3-30-pins/196eaa2aa244.webp)

_Figure 9. Fan connected to the PWM interface_

After connection is done, the fan starts running.

(Optional) Adjust the running speed of the fan.

1.  Under the Blade 3 directory, run the following command:

```bash
    cd /sys/class/pwm/pwmchip1/
```

:::note
If you connect the pwm pin of the fan to PWM14, the directory is **/sys/class/pwm/pwmchip1/**. If you connect the pwm pin of the fan to PWM15, the directory is **/sys/class/pwm/pwmchip2/**.
:::

2\. Enable PWM timer 0 by running the following command:

```bash
echo 0 > export
```

3\. Navigate to PWM timer 0 by running the following command:

```bash
cd pwm0
```

4\. Configure parameters of PWM timer 0 and make the parameters effective:

```bash
echo 20000 > period #Set PWM period to 20 ms.
echo 10000 > duty_cycle #Set the duty cycle of the fan to 50%.
echo normal > polarity #Two parameters are available: normal or inversed, indicating whether the output pin level is inverted.
```

```bash
echo 1 > enable #Enable PWM.
```

5\. To increase the fan speed, change **duty\_cycle** to a greater value. The following command makes the fan run at full speed:

```bash
echo 20000 > duty_cycle
```

6\. To reduce the fan speed, change **duty\_cycle** to a smaller value. The following command makes the fun run 20% of the full speed:

```bash
echo 5000 > duty_cycle
```
