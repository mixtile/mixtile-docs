---
sidebar_position: 0
description: Operating systems other than Mixtile OS that are available for Blade 3, who maintains each one, and how far it is supported.
---

# Other Operating Systems

Besides Mixtile OS, the following operating systems are available for Blade 3. They differ in who maintains them and in how much of the board they have been verified on, so check the status before you choose one.

| Operating system | Maintainer | Status | Description |
| --- | --- | --- | --- |
| [OpenWrt](./openwrt.md) | Mixtile | Hardware support not fully verified | Router and network appliance system, built by Mixtile from OpenWrt releases |
| [Yocto](./yocto.md) | Mixtile | Bring-up image | Yocto-based system image with a mainline kernel, for BSP work, hardware bring-up and system customization |
| [Talos Linux](./talos.md) | Mixtile | Experimental | Kubernetes operating system, a Mixtile port of Talos Linux v1.7.4 |
| [Armbian](https://armbian.com/boards/mixtile-blade3) | Armbian community | Community-maintained | Debian and Ubuntu images from the Armbian project; downloads and instructions are on the Armbian site |

To write any of these images to Blade 3, follow [Flashing an OS Image](/blade-3/getting-started/install-os). The OpenWrt, Yocto and Talos Linux pages also describe how to build the system from source.
