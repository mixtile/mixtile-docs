---
sidebar_position: 5
description: Fit a button cell and use the external HYM8563 real-time clock.
---

# External RTC

:::info
内容翻译同步中，以下为英文原文。
:::

PMU rk809 of rk3568 provides internal RTC. After edge2 is powered off, the internal RTC cannot save the system time. In order to save the system time after power failure, edge2 provides external RTC HYM8563 and button battery base. After installing button battery, edge2 can save the system time.

## Introduction

Edge 2 uses HYM8563 as RTC(_Real Time Clock_). HYM8563 provides a programmable clock output, an interrupt output and a power-down detector. All addresses and data are passed serially through the I2C bus interface. The maximum bus speed is 400Kbits/s. After each read and write, the embedded word address register will automatically increment.

- Timing can be based on 32.768kHz crystals in seconds, minutes, hours, weeks, days, months, and years
- Wide working voltage range : 1.0~5.5V
- Low resting current: Typically 0.25μA(VDD =3.0V, TA =25°C)
- Internal integrated oscillating capacitor
- Drain open circuit interrupt pin

## Using Interfaces

Linux provides three user-space call interfaces. The corresponding path in Edge 2 is:

- **SYSFS Interface :** `/sys/class/rtc/rtc1/`
- **PROCFS Interface :** `/proc/driver/rtc`
- **IOCTL Interface :** `/dev/rtc1`

### SYSFS Interface

Using the interface below `cat` and `hwclock` can directly operate `/sys/class/rtc/rtc1/`.

Such as checking the current date and time on RTC:

```bash
# cat /sys/class/rtc/rtc1/date
2021-10-14
# cat /sys/class/rtc/rtc1/time
10:30:15
```

### PROCFS Interface

Print RTC related information:

```text
# cat /proc/driver/rtc
rtc_time    : 10:33:58
rtc_date    : 2021-10-14
alrm_time    : 11:06:00
alrm_date    : 2021-10-14
alarm_IRQ    : no
alrm_pending    : no
update IRQ enabled    : no
periodic IRQ enabled    : no
periodic IRQ frequency    : 1
max user IRQ frequency    : 64
24hr        : yes
```

### IOCTL Interface

Using the interface below `ioctl` and `hwclock` can directly operate `/dev/rtc1`, you have to run the below command as root account.

```bash
# hwclock -f /dev/rtc1
Thu Oct 14 10:36:21 2021  0.000000 seconds
```

## FAQs

Q1: Why is the time out of sync after the development board is powered on? A1: check whether the RTC button battery is connected correctly.

## RTC Driver

\[**Note**\]: The Android / Debian released by Mixtile already enabled the RTC function in the kernel, so you could just ignore the below instruction. If you plan to compile your Andorid / Debian system, please remember to configure RTC driver as below.

The kernel DTS configuration reference:`kernel/arch/arm64/boot/dts/rockchip/mixtile-edge2-evb.dtsi`

```dts
&i2c3 {
        status = "okay";
    hym8563: hym8563@51 {
        compatible = "haoyu,hym8563";
        reg = <0x51>;
        pinctrl-names = "default";
        pinctrl-0 = <&rtc_int>;
        interrupt-parent = <&gpio0>;
        interrupts = <RK_PD3 IRQ_TYPE_LEVEL_LOW>;
        status = "okay";
    };
};

&pinctrl {
    rtc {
        rtc_int: rtc-int {
            rockchip,pins = <0 RK_PD3 RK_FUNC_GPIO &pcfg_pull_up>;
        };
    };
}
```

Drive reference: `kernel/drivers/rtc/rtc-hym8563.c`

## Activating RTC

The internal RTC of RK809 is used by default in the kernel if the external RTC HYM8563 is enabled and the system time is enabled to synchronize the time of the HYM8563, the system needs to be modified as follows:

### Modifying kernel

- Modifying DTS

Refer to [RTC Driver](#rtc-driver)

- Modifying config

The modified file is:

```text
kernel/arch/arm64/configs/mixtile_edge2_defconfig
```

Add the following configuration:

```text
CONFIG_RTC_DRV_HYM8563=y
CONFIG_RTC_HCTOSYS_DEVICE="rtc1"
CONFIG_RTC_SYSTOHC_DEVICE="rtc1"
```

To compile the kernel, see the [Development](/edge-2/development) chapter.

To write the image, see [Installing the System](../getting-started/install-os.md).

### Modifying Android

The external RTC HYM8563 exists in the system as the node `/dev/rtc1` in the kernel, Android needs to obtain the permission of `/dev/rtc1`

Modifying file 1: `device/rockchip/rk356x/mixtile_edge2/init.mixtile_edge2.rc`

Add the following configuration:

```bash
on boot
    chown system system /dev/rtc1
    chmod 0640 /dev/rtc1
```

Modifying file 2: `device/rockchip/rk356x/mixtile_edge2/sepolicy/genfs_contexts`

Add the following configuration:

```text
genfscon sysfs /devices/platform/fe5c0000.i2c/i2c-3/3-0051/power/wakeup     u:object_r:sysfs_wakeup:s0
genfscon sysfs /devices/platform/fe5c0000.i2c/i2c-3/3-0051/rtc/rtc1/hctosys  u:object_r:sysfs_hctosys:s0
```

To compile Android, see the [Development](/edge-2/development) chapter.

To write the image, see [Installing the System](../getting-started/install-os.md).
