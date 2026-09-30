---
sidebar_position: 6
description: Select whether the M.2 or Mini-PCIe socket drives an expansion module.
---

# M.2 and Mini-PCIe

:::info
内容翻译同步中，以下为英文原文。
:::

Edge 2 supports expansion modules with implementing module drivers. Support lists are modules that can be used simply by selecting the module on the system settings. These module drivers have been implemented on the system by Mixtile.

See the operation procedure below to use supporting modules directly. To support other modules that are not on the supporting list, please contact us via [Mixtile.com](https://www.mixtile.com/).

## Operation procedure

**Step 1**. Connect Edge 2 with a display and a mouse.

**Step 2**. Turn on Edge 2 and open Settings -> Connected devices -> Expansion Connector.

**Step 3**. Select supporting modules in the lists (see below figure).

**Step 4**. Power off the Edge 2, then insert the supporting module and reboot Mixtile Edge 2 to active module selection.

![select-m2-minipcie-mode](/img/docs/select-m-2-mini-pcie-mode/fb3c88434075.webp)

_Note: Cellular modules cannot be activated on both M.2 and mini-PCIe socket. Only one cellular module can be selected in the system._

## Pinout

The M.2 socket has 75 pins and the Mini-PCIe socket has 52. For their full pin assignments, see [M.2](../hardware/connectors.md#m2) and [Mini-PCIe](../hardware/connectors.md#mini-pcie) in the hardware reference.

## Support list

**Supporting modules for M.2:**

- 4G-EM06 (Quectel)
- 5G-RM500Q (Quectel)
- SSD

**Supporting modules for mini-PCIe:**
- 4G-EC25 (Quectel)

_Note: Mixtile will support more modules with functions and models in the future, such as ZigBee, Z-Wave, and Lora modules._
