---
sidebar_position: 8
sidebar_label: Accessories
description: The Blade 3 Case and the Blade 3 Breakout Board.
---

# Accessories

## Blade 3 Case

The Blade 3 Case is designed specifically for the needs and functionality of the Mixtile Blade 3.

It has a button to power on/off the Blade 3 and the status is indicated by power LED. The case is designed with good heat dissipation and has built-in heatsink and cooling fan, the speed of fan would be adjusted automatically according to CPU temperature. The built-in adapter board transfers the U.2 port of Blade 3 board to M.2 Key-M connector for installing M.2 NVMe SSD, and supports PCIe Gen3 x4 for high speed.

Moreover, it reserves plastic area for ensuring the performance when installing antenna on the case.

![Mixtile Blade 3 case](/img/docs/mixtile-blade-3-case/3197998f4be4.webp)

_Figure 1. Mixtile Blade 3 case_

### Technical specifications

- Dimension (H x W x D): 27.4 mm x 112.4 mm x 89 mm
- Weight: 268 g
- Material: Aluminum Alloy
- Color: Black
- Package included: One Aluminum Case with Screws, one U.2 to M.2 NVMe Adapter Board
- Supported SSD: compatible with any _**M.2 NVMe SSD**_ with _**Key-M**_

### Product diagrams

![Exploded view of Blade 3 case](/img/docs/mixtile-blade-3-case/cb53ede7b831.webp)

_Figure 2. Exploded view of Blade 3 case_

## Blade 3 Breakout Board

The Breakout Board plugs into the U.2 edge connector of Blade 3 and brings its signals out to three connectors:

- A **12 V DCIN** connector, to power the board without USB PD. See [Power Supply](/blade-3/getting-started/power-supply).
- A pair of **SFF-8643** PCIe connectors, Port A and Port B, for linking boards into a cluster
- A **SATA** socket

![Blade 3 Breakout Board with its 12 V and GND power connector, the PCIe A and PCIe B connectors, and the SATA3 socket](/img/docs/blade-3-board/blade-3-breakout-board.webp)

_Figure 3. Blade 3 Breakout Board_

With 12 V coming in through the Breakout Board, both USB-C ports are free for other uses, such as DisplayPort output to a monitor.

### Clustering

Blade 3 boards cluster in a daisy chain: an SFF-8643 cable runs from one board's Port A to the next board's Port B. A cluster of N boards needs N Breakout Boards and N − 1 cables.

<img src="/img/docs/blade-3-board/blade-3-clustering.webp" alt="Four stacked Blade 3 boards, each fitted with a Breakout Board, linked in a daisy chain by SFF-8643 cables between neighbouring boards" width="480" />

_Figure 4. Blade 3 boards connected in a daisy chain through Breakout Boards (rendering)_

The pin assignments for making your own cable are in [U.2](/blade-3/hardware-usage/u2#pin-assignments).

### Technical specifications

| Item | Breakout Board | SFF-8643 cable |
| --- | --- | --- |
| Part number | BB-BLADE3 | SFFC-BLADE3 |
| Dimensions (W x H x D) | 104 mm x 21 mm x 24 mm | 15 cm long |
| Weight | 20 g | 20 g |
| Packaging | Anti-static bag | Anti-static bag |
