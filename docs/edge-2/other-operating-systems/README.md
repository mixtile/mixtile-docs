---
sidebar_position: 0
description: Operating systems other than Mixtile OS that are available for Edge 2, who maintains each one, and how far it is supported.
---

# Other Operating Systems

Besides Mixtile OS, the following operating systems are available for Edge 2. They differ in who maintains them and in how much of the board they have been verified on, so check the status before you choose one.

| Operating system | Maintainer | Status | Description |
| --- | --- | --- | --- |
| [Home Assistant OS](./home-assistant-os.md) | Mixtile | Hardware support not fully verified | Home Assistant, built by Mixtile for Edge 2 from Home Assistant OS releases |
| [OpenWrt](./openwrt.md) | Mixtile | Hardware support not fully verified | Router and network appliance system, built by Mixtile from OpenWrt releases |
| [Yocto](./yocto.md) | Mixtile | Bring-up image | Yocto-based system image with a mainline kernel, for BSP work, hardware bring-up and system customization |
| [Armbian](https://www.armbian.com/boards/mixtile-edge2) | Armbian community | Community-maintained | Debian and Ubuntu images from the Armbian project; downloads and instructions are on the Armbian site |

To write any of these images to Edge 2, follow [Flashing an OS Image](/edge-2/getting-started/install-os). The OpenWrt and Yocto pages also describe how to build the system from source.
