---
sidebar_position: 1
description: Technical specifications, block diagram and dimensions of Core 3568 and Core 3568J.
hide_table_of_contents: true
---

# Specifications

<Tabs queryString="model">

<TabItem value="Core 3568" label="Core 3568">
## Technical specifications

### Basic specifications

- CPU: Quad-core ARM Cortex-A55, Neon and FPU
- GPU: G52 2EE
- NPU: RK NN, 1Tops
- DDR: 2/4GB 32-bit LPDDR4
- Storage: 16/32GB eMMC 5.1

### Hardware

- Supply: 3.3 VDC and 5.0 VDC, recommended supply current is 2A
- Temperature range: 0 to +60℃ operating
- Dimensions: 50mm x 50mm x 5mm
- Total interfaces on BGA: 536 pins
- Video Decoder: 4KP60 H.264/H.265/VP9
- Video Encoder: 1080P60 H.264/H.265
- ISP: 8M ISP, HDR
- MIPI_CSI: MIPI-CSI2, 1×4-lane/2×2-lane, 2.5Gbps/lane
- DVP/CIF: IO: 150MHz, Support BT.656/601/1120
- Display: RGB, LVDS/MIPI DSI, HDMI, eDP, Eink
- SDIO: SDIO 3.0 x3
- Peripheral:
  - USB 2.0 HOST, USB2.0 OTG
  - USB3.0 OTG, USB3.0 HOST, SATA 3.0 x3, PCIE 2.1(1x1Lane), QSGMII x1, Combo with 3 Serdes Lanes
  - PCIE3.0 1 ×2Lanes/2 ×1Lane@8Gbps
- Ethernet: 2x GMAC (10/100/1000M)
- Audio: 1x 8ch I2S/TDM, 2x2ch I2S 8ch PDM, 1x SPDIF OUT
- Others: 10x UART, 4x SPI, 16x PWM,6x I2C,3x CAN FD,8x SAR-ADC
- OTP: OTP (Size 8K)
- Crypto: SM3/4, TEE, Trustzone

### System

- System: Historical software support listed in the data sheet: Android 11.0, Ubuntu 18.04, Ubuntu 20.04. Current Mixtile OS images are built for the Edge 2 board; see the [Edge 2 downloads page](/edge-2/download).
- Advanced functions: Provide Linux container on Android, deploy Linux applications seamlessly on Android

## Block diagram

![Block diagram of Core 3568: the RK3568 with the PMU, LPDDR4 and eMMC on the module, and the interfaces it brings out to the carrier board](/img/docs/core-3568/core-3568-block-diagram.webp)

## Product dimensions

Core 3568 size: 50 mm x 50 mm x 5 mm

### Top view of Core 3568

![Top view drawing of Core 3568, 50.0 mm x 50.0 mm, with the 1.5 mm chamfered corner at the upper right](/img/docs/core-3568/core-3568-module-top.webp)

### Bottom view of Core 3568

![Bottom view drawing of Core 3568, 50.0 mm x 50.0 mm, with the pads along the edges and the 1.5 mm chamfered corner at the upper left](/img/docs/core-3568/core-3568-module-bottom.webp)

### Top view of carrier board for Core 3568

Carrier board size: 50 mm x 50 mm x 1.6 mm

![Top view drawing of the carrier board: 50 mm x 50 mm outline, 42 mm inner dimension with 1.0 mm corner radius, 1.5 mm chamfer, and 0.5 mm, 1 mm and 1.3 mm pad dimensions](/img/docs/core-3568/core-3568-b2b-board-top.webp)

### Bottom view of carrier board

![Bottom view drawing of the carrier board: 50 mm x 50 mm outline, 42 mm x 42 mm inner dimensions with R = 1.0 mm corners, and 1.5 mm chamfer](/img/docs/core-3568/core-3568-b2b-board-bottom.webp)

</TabItem>

<TabItem value="Core 3568J" label="Core 3568J">
## Technical specifications

### Basic specifications

- CPU: Quad-core ARM Cortex-A55, Neon and FPU, up to 1.4GHz
- GPU: G52 2EE
- NPU: RK NN, 1Tops
- DDR: 2/4GB 32-bit LPDDR4
- Storage: 16/32GB eMMC 5.1

### Hardware

- Supply: 3.3 VDC / 5.0 VDC
- Temperature range: -40 to +85℃ operating
- Dimensions: 50mm x 50mm x 5mm
- Total interfaces on BGA: 536 pins
- Video Decoder: 4KP60 H.264/H.265/VP9
- Video Encoder: 1080P60 H.264/H.265
- ISP: 8M ISP, HDR
- MIPI_CSI: MIPI-CSI2, 1×4-lane/2×2-lane, 2.5Gbps/lane
- DVP/CIF: IO:150MHz, Support BT.656/601/1120
- Display: RGB, LVDS/MIPI DSI, HDMI, eDP, Eink
- SDIO: SDIO 3.0 x3
- Peripheral:
  - USB 2.0 HOST, USB2.0 OTG
  - USB3.0 OTG, USB3.0 HOST, SATA 3.0 x3, PCIE 2.1(1x1Lane), QSGMII x1, Combo with 3 Serdes Lanes
  - PCIE3.0 1 ×2Lanes/2 ×1Lane@8Gbps
- Ethernet: 2x GMAC (10/100/1000M)
- Audio: 1x 8ch I2S/TDM, 2x2ch I2S 8ch PDM, 1x SPDIF OUT
- Others: 10x UART, 4x SPI, 16x PWM,6x I2C,3x CAN FD,8x SAR-ADC
- OTP: OTP (Size 8K)
- Crypto: SM3/4, TEE, Trustzone

### System

- System: Historical software support listed in the data sheet: Android 11.0, Debian 10. Current Mixtile OS images are built for the Edge 2 board; see the [Edge 2 downloads page](/edge-2/download).
- Advanced functions: Provide Linux container on Android, deploy Linux applications seamlessly on Android

## Block diagram

![Block diagram of Core 3568J: the RK3568J with the PMU, LPDDR4 and eMMC on the module, and the interfaces it brings out to the carrier board](/img/docs/core-3568/core-3568j-block-diagram.webp)

## Product dimensions

### Top view of Core 3568J

Core 3568J size: 50 mm x 50mm x 5 mm

![Top view drawing of Core 3568J, 50.0 mm x 50.0 mm, with the 1.5 mm chamfered corner at the upper right](/img/docs/core-3568/core-3568j-module-top.webp)

### Bottom view of Core 3568J

![Bottom view drawing of Core 3568J, 50 mm x 50 mm, with the pads along the edges and the 1.5 mm chamfered corner at the upper left](/img/docs/core-3568/core-3568j-module-bottom.webp)

### Top view of carrier board for Core 3568J

Carrier board size: 50 mm x 50 mm x 1.6 mm

![Top view drawing of the carrier board: 50 mm x 50 mm outline, 42 mm inner dimension with 1.0 mm corner radius, 1.5 mm chamfer, and 0.5 mm, 1 mm and 1.3 mm pad dimensions](/img/docs/core-3568/core-3568j-b2b-board-top.webp)

### Bottom view of carrier board for Core 3568J

![Bottom view drawing of the carrier board: 50 mm x 50 mm outline, 42 mm x 42 mm inner dimensions with R = 1.0 mm corners, and 1.5 mm chamfer](/img/docs/core-3568/core-3568j-b2b-board-bottom.webp)

</TabItem>

</Tabs>
