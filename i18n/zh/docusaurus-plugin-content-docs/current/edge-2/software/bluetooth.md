---
sidebar_position: 2

---

# Using Bluetooth

:::info
内容翻译同步中，以下为英文原文。
:::

Edge 2 uses AMPAK AP6275S module which supports Wi-Fi and Bluetooth. This instruction will introduce you how to use Bluetooth on Edge 2 when use Debian 10 system.

Step 1: Load the driver of Bluetooth via below command:

```text
brcm_patchram_plus1 -d --enable_hci --no2bytes --tosleep 200000 --baudrate 1500000 --patchram /system/etc/firmware/BCM4362A2.hcd /dev/ttyS8 &
```

Step 2: Open the Bluetooth

```bash
hciconfig hci0 up
```

Step 3: Check the status of Bluetooth

```bash
hciconfig -a
```

Step 4: Scan the Bluetooth device around

```bash
hcitool scan
```

Step 5 (Option): Install bluez for more functions:

```bash
sudo apt-get install bluez bluez-hcidump
```

If you want to enable bluetooth when system start up, you need to set up more as following:

Step 6: Download and put this script **“[enablebluetooth.sh](https://downloads.mixtile.com/edge2/file/enablebluetooth.sh)“** to **/etc/init.d/** folder.

Step 7: Download and put this file **“[rc.local](https://downloads.mixtile.com/edge2/file/rc.local)“** to **/etc/** folder.

Or you could add below content

```text
/etc/init.d/enablebluetooth.sh start
```

to this file “/etc/rc.local” manually, after adding it will be like this:

```bash
#!/bin/sh -e
#
# rc.local
#
# This script is executed at the end of each multiuser runlevel.
# Make sure that the script will "exit 0" on success or any other
# value on error.
#
# In order to enable or disable this script just change the execution
# bits.
#
# By default this script does nothing.

# Generate the SSH keys if non-existent

if [ ! -f /etc/ssh/ssh_host_rsa_key ]
then
# else ssh service start in dpkg-reconfigure will fail
systemctl stop ssh.socket||true
dpkg-reconfigure openssh-server
fi

/etc/init.d/enablebluetooth.sh start

exit 0
```

Step 8: Give execute permission to the files “**enablebluetooth.sh**” and “**rc.local**” by using below commands:

```bash
sudo -i

chmod +x /etc/rc.local

chmod +x /etc/init.d/enablebluetooth.sh

reboot
```
