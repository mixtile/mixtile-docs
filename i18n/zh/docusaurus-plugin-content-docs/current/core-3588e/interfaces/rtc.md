---
sidebar_position: 3
---

# External RTC

:::info
内容翻译同步中，以下为英文原文。
:::

> In this document, we use LEETOP A206 carrier board, which provides an RTC slot. Some other models of carrier boards may not provide this slot.

After Mixtile Core 3588E (hereinafter referred to as Core 3588E) is powered off, the system time stops updating. In order to maintain accurate timekeeping, the carrier board provides external Real Time Clock (RTC) slot, through which you can connect a button cell to track time after power outage.

![A button cell installed in the RTC slot](/img/docs/core-3588e-external-rtc/f6737714d3c7.webp)

_Figure 1. A button cell installed in the RTC slot_

## Preparations

- [Set up connections for Core 3588E](/core-3588e/getting-started/quick-start#set-up-connections).
- Log in to Core 3588E using one of the following methods:
  - [Login using a serial communication tool](/core-3588e/getting-started/connect#serial-console)
  - [Login using SSH](/core-3588e/getting-started/connect#ssh)

- A button cell

### Step 1. Install a button cell

1.1 Remove the power adapter from the carrier board.

1.2 Locate the RTC slot on the carrier board. Press the button cell into the RTC slot until the button cell is fully seated on the carrier board.

1.3 Connect the power adapter to the carrier board again.

### Step 2. Calibrate system time

With an Ethernet cable connected, system time is automatically updated. If system time is not correct, you can manually update system time. For details, see [Ubuntu Time Management.](https://help.ubuntu.com/community/UbuntuTime)

### Step 3. Synchronize system time to hardware

- Check system time by running the following command:

```bash
date
```

The command output is as follows:

```text
Wed Nov 22 01:55:21 AM EST 2023
```

- Check hardware time by running the following command:

```bash
hwclock
```

The command output is as follows:

```text
2021-01-01 07:00:44.337625-05:00
```

It can be seen that the hardware time is different from system time. Synchronize hardware time from system time by running the following command:

```bash
sudo hwclock -w
```

Then, run the `hwclock` command again. You can see that the hardware time is the same as the system time.

After Core 3588E is powered off and powered again next time, the system time will be the latest time, thanks to the RTC feature.

### Other methods to check hardware time

You can check the current date and time set on the hardware clock using two methods:

Method 1: Using cat commands

To check the date, enter:

```bash
sudo cat /sys/class/rtc/rtc0/date
```

This prints out the current hardware date.

To check the time, enter:

```bash
sudo cat /sys/class/rtc/rtc0/time
```

This prints out the current hardware time.

Method 2: Using the hwclock utility

Enter the command:

```bash
sudo hwclock -f /dev/rtc0
```

This prints out the current date and time from the hardware clock.
