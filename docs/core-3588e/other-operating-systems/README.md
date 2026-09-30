---
sidebar_position: 0
description: Operating systems other than Mixtile OS that are available for Core 3588E, who maintains each one, and how far it is supported.
---

# Other Operating Systems

Besides Mixtile OS, the following operating systems are available for Core 3588E. They differ in who maintains them and in how much of the hardware they have been verified on, so check the status before you choose one.

| Operating system | Maintainer | Status | Description |
| --- | --- | --- | --- |
| [Yocto](./yocto.md) | Mixtile | Bring-up image | Yocto-based system image with a mainline kernel, for BSP work, hardware bring-up and system customization |
| [Armbian](https://www.armbian.com/boards/mixtile-core3588e) | Armbian community | Community-maintained | Debian and Ubuntu images from the Armbian project; downloads and instructions are on the Armbian site |

To write any of these images to Core 3588E, follow [Flashing an OS Image](/core-3588e/getting-started/install-os). The Yocto page also describes how to build the system from source.
