---
sidebar_position: 4
---

# Updating the MIOP Driver

:::info
内容翻译同步中，以下为英文原文。
:::

## ClusterBox MIOP Driver Update:

1.  Fix random driver collapse.
2.  Resolve issue of full PCIe queue.

Below instructions describe how to install the **MIOP driver** on **ClusterBox Controller Board** and how to update the **Blade3 firmware**.

* * *

## 1\. Installing the MIOP Driver on Controller Board

### 1.1 Firmware Download Link

You can download the latest OpenWrt ipk package from the following link:

- [miop_xx_mipsel_24kc.ipk Download Link](https://downloads.mixtile.com/cluster-box/mt7620a-driver/miop_1.0_mipsel_24kc.ipk)

### 1.2 Upload the IPK File to the ClusterBox Controller Board

Transfer the `miop_1.0_mipsel_24kc.ipk` file to the `/tmp` directory on the Controller Board device over the network (for example, using the `scp` command).

Example command (executed on your PC):

```bash
scp miop_1.0_mipsel_24kc.ipk root@<Controller_Board_IP>:/tmp/
```

Or use ssh to transfer the file:

```bash
cat /your/path/miop_1.0_mipsel_24kc.ipk | ssh root@<Controller_Board_IP> "cat > /tmp/miop_1.0_mipsel_24kc.ipk"
```

Replace `<Controller_Board_IP>` with the actual IP address of your Controller Board device.

### 1.3 Install the MIOP Driver on the Device

Log in to the Controller Board (using `ssh`), then execute the following commands:

```bash
cd /tmp
opkg install miop_1.0_mipsel_24kc.ipk
```

Once installation is complete, the MIOP driver will be successfully deployed.

* * *

## 2\. Updating Blade3 Firmware

### 2.1 Firmware Download Link

You can download the latest Blade3 firmware from the following link:

- [Blade3 Firmware Download Link](https://downloads.mixtile.com/cluster-box/blade3-ubuntu-images/ubuntu-24.04-preinstalled-desktop-arm64-mixtile-blade3-rockchip-format.zip)

> **Note:** Please replace the link with the actual firmware URL as needed.

### 2.2 Firmware Flashing Method

Refer to the documentation in the following link for detailed flashing instructions:

- [Blade3 Firmware Flashing Guide](/blade-3/getting-started/install-os)

* * *

## 3\. Restart and Verify

After installation, reboot the device and wait for a short while. Then execute the following command to verify:

```bash
root@ClusterBox:/# nodectl list
If no device is found, run the rescan command and then the list command to view the device.
03:00.0 Network controller: Mixtile Limited Blade 3 (rev 01)
04:00.0 Network controller: Mixtile Limited Blade 3 (rev 01)
05:00.0 Network controller: Mixtile Limited Blade 3 (rev 01)
06:00.0 Network controller: Mixtile Limited Blade 3 (rev 01)

root@ClusterBox:/# arp
IP address       HW type     Flags       HW address            Mask     Device
10.20.0.22       0x1         0x2         02:0d:36:6d:66:0a     *        pci0
10.20.0.116      0x1         0x2         02:22:86:9a:fc:0a     *        pci0
10.20.0.71       0x1         0x2         02:b3:e8:44:62:0a     *        pci0
10.20.0.148      0x1         0x2         02:78:f7:9e:07:0a     *        pci0
...
```

## 4\. Appendix

- `opkg` is the package manager for OpenWrt-based systems.
- All the operations above require **root** privileges.
