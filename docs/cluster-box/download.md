---
sidebar_position: 2
---

# Downloads

## Firmware Images

OpenWrt 23 system image for Cluster Box

- [image-release-clusterbox-openwrt23-20240422.bin](https://downloads.mixtile.com/cluster-box/image/image-release-clusterbox-openwrt23-20240422.bin)


## Release Notes

### v0.0.3

Release date: 2023-09-25

#### New features

##### 1. Support OpenWrt LuCI web interface

Using the LuCI web interface, you can easily manage Cluster Box and node devices, including checking system and node status, modifying configurations, and updating firmware.

![LuCI web interface for Cluster Box](/img/docs/cluster-box-release-notes/f5a2973511c4.webp)

_Figure 1. **LuCI web interface** for Cluster Box_

##### 2\. Support web-based firmware flashing

Compared to firmware update over TFTP or serial port, web-based firmware updates are more intuitive and simplified. For details, see [Flash firmware of the control board](/cluster-box/software/basic-commands#flash-firmware-of-the-control-board).

##### 3\. Support PCIe virtual NIC driver, allowing mounting up to four Blade 3 boards simultaneously

Cluster Box is a high-performance, high-reliability cluster consisting of up to four Blade 3 boards. It implements load balancing, failover, and disaster recovery for guaranteed system reliability and efficiency.

- High performance: Parallel computing allows faster computing speed and higher processing capability.
- Strong scalability: You can mount up to four Blade 3 boards to meet service needs.
- Cost effectiveness: Compared with a single server, a cluster server better utilizes hardware resources and reduces costs.

##### 4\. Support node control and status query by running nodectl commands

You can run **nodectl** commands to manage Blade 3 nodes, specifically:

- nodectl list: List active nodes.
- nodectl poweron/off: Power on or power off nodes.
- nodectl reboot: Reboot nodes.
- nodectl console: Enter the console of a node.

 To obtain a complete list of supported **nodectl** commands and how to use them, see [Basic Cluster Box Operations and Commands](/cluster-box/software/basic-commands).

#### Known issues

##### 1. Blade 3 node 1 cannot communicate with Blade 3 node 3

Reason: The node configuration is incorrect.

Workaround: Modify the configuration of the **miop_nodes.txt** file. Specifically:

Step 1. [Log in to Cluster Box using SSH](/cluster-box/software/basic-commands#login-via-ssh).

Step 2. Open the **/etc/miop_nodes.txt** file and edit the file as follows:

```text
6=0
5=1
3=2
4=3
```

Step 3. Save the setting and try communication between Blade 3 nodes again.

##### 2\. Cluster Box does not support hot-plug of Blade 3 through the PCIe interface

Reason: N/A

Workaround: N/A

##### 3. The PCIe driver crashes when iperf measures network bandwidth between communicating Blade 3 nodes.

Reason: The PCIe driver has a bug that is being fixed.

Workaround: Avoid using the iperf tool.
