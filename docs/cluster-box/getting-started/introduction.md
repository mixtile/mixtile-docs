---
sidebar_position: 1
---

# Product Introduction

## 4-node Cluster Box with a built-in PCIe switch

Mixtile Cluster Box is a PCIe switcher that can connect up to four Mixtile Blade 3 boards through PCIe interfaces, which allows for multi-node computation. Comparing with a single Blade 3 board, this 4-node clustering provides boosted computing performance, faster networking, and expansive storage capacity.

The switcher consists of a backplane and a control board enclosed in a customized chassis with dual cooling fans. Thanks to the ASM2824 PCIe switch chip, the quad-channel PCIe 3.0 backplane enables seamless data transmission between Blade 3 boards for robust, uninterrupted performance.

Cluster Box also features four NVMe M.2 slots that support PCIe 3.0 x2, which are fully compatible with NVMe SSDs. Therefore, you can scale out storage capacity as your needs grow, ensuring that you never have to compromise on storing critical data or large-scale projects.

![Front and rear views of Cluster Box](/img/docs/introduction-to-mixtile-cluster-box/028c72bea76f.webp)

_Figure 1. Cluster Box_

![Exploded view of Cluster Box: rear panel with two fans, control board, backplane with M.2 slots, chassis, and Blade 3 boards in their trays](/img/docs/introduction-to-mixtile-cluster-box/b44289065eb5.webp)

_Figure 2. Exploded view of Cluster Box_

## Highlights

- **Boosted computational performance**<br />
    A 4-node cluster enhances computational capabilities, which enables you to easily tackle complex tasks, process data-intensive applications, and accelerate your workflows.
- **Seamless connectivity and uninterruptible data transmission**<br />
    Driven by the ASM2824 PCIe Packet Switch chip, the cutting-edge backplane ensures seamless connectivity and continuous data transmission of Blade 3 boards.
- **Expanded storage capacity**<br />
    Four NVMe M.2 slots support PCIe 3.0 x2, which are fully compatible with SSDs. You can scale out storage without compromising on storing critical data or large-scale projects.
- **Compact size with efficient cooling system**<br />
    A customized small chassis equipped with two 60 mm fans ensures that your system runs stably and smoothly in a very small format.

## Block diagram

![Block diagram of Cluster Box](/img/docs/introduction-to-mixtile-cluster-box/95eb611e3dcb.webp)

_Figure 3. Block diagram of Cluster Box_

## Technical specifications

| Item | Specification |
| --- | --- |
| **Switch** | ASMedia ASM2824, support four PCIe 3.0 4-lane ports |
| **Storage interfaces** | – 4x NVMe M.2 M-Key slots (PCIe 3.0 x2 each slot, connecting to Blade 3)<br />– 4x SATA 3.0 ports (connecting to Blade 3) |
| **Connectivity** | 4x U.2 interfaces (connecting to Blade 3) |
| **Network** | 1x 100/1000 Mbps Ethernet port |
| **PCIe expansion** | 2x SFF-8643 ports (support PCIe 3.0 x4 each, upstream) |
| **Fan** | 2x 60 mm fans |
| **Software support** | Preloaded customized Linux system and Kubernetes |
| **Power** | – 1x DC jack port, 19~19.5 V 4.74 A power input<br />– Power button with a blue LED indicator |
| **Material** | Metal case, SGCC steel |
| **Dimensions** | 213 mm x 190 mm x 129 mm |
| **Temperature** | – Operating: 0°C to 80°C<br />– Storage: -20°C to 85°C |
| **Relative humidity** | – Operating: 10% to 90%<br />– Storage: 5% to 95% |
