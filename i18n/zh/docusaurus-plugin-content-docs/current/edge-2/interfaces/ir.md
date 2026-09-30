---
sidebar_position: 4
description: Wire an infrared receiver and map its key codes.
---

# Infrared Receiver

:::info
内容翻译同步中，以下为英文原文。
:::

Edge2 has reserved a IR connector. If you want to use an infrared remote (IR) control, you need to connect an IR receiver to Edge 2. The reference drawing is as follows:

![ir-connection](/img/docs/customize-infrared-receiver/a3ef29094459.webp)

## Android key-value mapping

This section is used to map the key value obtained in Linux to the corresponding key value on Android.

Files involved in the Android system:

```text
device/rockchip/rk356x/mixtile_edge2/fe6e0030_pwm.kl
```

The contents of the file are as follows:

```text
key 28    ENTER
key 116   POWER
key 158   BACK
key 139   MENU
key 217   SEARCH
key 232   DPAD_CENTER
key 108   DPAD_DOWN
key 103   DPAD_UP
key 102   HOME
key 105   DPAD_LEFT
key 106   DPAD_RIGHT
key 115   VOLUME_UP
key 114   VOLUME_DOWN
key 113   VOLUME_MUTE
```

## Configuring IR control

\[**Note**\]: The Android / Debian released by Mixtile already enabled the IR driver function in the kernel, so you could just ignore the below instruction. If you plan to compile your Andorid / Debian system, please remember to configure IR control as below.

This chapter mainly describes how to configure the IR control on Edge 2. The configuration steps can be divided into two parts:

- Step 1: Modify the kernel driver by modifying the kernel space(Both Linux and Android need to modify this part).
- Step 2: Modify key-value mapping by modifying the user space(Only Android needs to modify this part).

## Modifying the kernel driver

In the Linux kernel, the IR driver only supports NEC encoding format. The following is how to configure IR control in the kernel.

Files involved in the kernel:

```text
kernel/arch/arm64/boot/dts/rockchip/mixtile-edge2-evb.dtsi
kernel/drivers/input/remotectl/rockchip_pwm_remotectl.c
```

### Defining the relevant data structure

Add the supported IR control key-value in the DTS file `kernel/arch/arm64/boot/dts/rockchip/mixtile-edge2-evb.dtsi`.

To configure the key-value relevant data structure:

```dts
&pwm7 {
        status = "okay";
        compatible = "rockchip,remotectl-pwm";
        remote_pwm_id = <3>;
        handle_cpu_id = <1>;
        remote_support_psci = <0>;
        pinctrl-names = "default";
        pinctrl-0 = <&pwm7_pins>;

        ir_key4 {
          rockchip,usercode = <0xbf00>;
          rockchip,key_table =
            <0xea    KEY_BACK>,
            <0xec    KEY_UP>,
            <0xeb    KEY_DOWN>,
            <0xee    KEY_LEFT>,
            <0xed    KEY_RIGHT>,
            <0xb7    KEY_VOLUMEUP>,
            <0xb6    KEY_VOLUMEDOWN>,
            <0xff    KEY_POWER>,
            <0xfe    KEY_MUTE>,
            <0xef    KEY_ENTER>,
            <0xe9    KEY_MENU>;
        };
};
```

:::note
The first column of `rockchip,key_table` is the key value, and the second column is the key code to be responded to.
:::

### Getting user code and IR key

Refer to driver: `kernel/drivers/input/remotectl/rockchip_pwm_remotectl.c`

Get the user code and key values from `remotectl_do_something`

```bash
case RMC_USERCODE: {
                if ((RK_PWM_TIME_BIT1_MIN < ddata->period) &&
                    (ddata->period < RK_PWM_TIME_BIT1_MAX))
                        ddata->scandata |= (0x01 << ddata->count);
                ddata->count++;
                if (ddata->count == 0x10) {
                        DBG_CODE("USERCODE=0x%x\n", ddata->scandata);
                        if (remotectl_keybd_num_lookup(ddata)) {
                                ddata->state = RMC_GETDATA;
                                ddata->scandata = 0;
                                ddata->count = 0;
                        } else {
                                if (rk_remote_print_code){
                                        ddata->state = RMC_GETDATA;
                                        ddata->scandata = 0;
                                        ddata->count = 0;
                                } else
                                        ddata->state = RMC_PRELOAD;
                        }
                }
        }
```

_Note: The user can use the_ `DBG_CODE()` _function to print the user code._

Edge 2 can make DBG_CODE printing by using the following command:

```bash
echo 1 > /sys/module/rockchip_pwm_remotectl/parameters/code_print
```

### Compiling the IR driver into the kernel

Since the IR driver `rockchip_pwm_remotectl.c` already exists in the SDK, all we need to do is to compile the IR driver into the kernel. In the kernel source code, you can add the following two statements to the `kernel/arch/arm64/configs/mixtile-edge2_defconfig` file.

```text
CONFIG_ROCKCHIP_REMOTECTL=y
CONFIG_ROCKCHIP_REMOTECTL_PWM=y
```

To compile the kernel, see the [Development](/edge-2/development) chapter.

To compile Android, see the [Development](/edge-2/development) chapter.

To write boot.img and super.img, see [Installing the System](../getting-started/install-os.md).
