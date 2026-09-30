---
sidebar_position: 1
description: Technical specifications, block diagram and dimensions of Core 3568 and Core 3568J.
---

# Specifications

:::info
内容翻译同步中，以下为英文原文。
:::

<Tabs queryString="model">

<TabItem value="Core 3568" label="Core 3568">
## Technical specifications

### Basic specifications

- CPU: Quad-core ARM Cortex-A55, Neon and FPU
- GPU: G52 2EE
- NPU: RK NN, 0.8Tops
- DDR: 2/4GB 32-bit LPDDR4
- Storage: 16/32GB eMMC 5.1

### Hardware

- Supply: 3.3 VDC / 5.0 VDC
- Temperature range: 0 to +80℃ operating
- Dimensions: 50mm x 50mm x 5mm
- Total interfaces on BGA: 536 pins
- Video Decoder: 4KP60 H.264/H.265/VP9
- Video Encoder: 1080P60 H.264/H.265
- ISP: 8M ISP, HDR
- MIPI_CSI: MIPI-CSI2, 1×4-lane/2×2-lane@2.5Gbps/lane
- DVP/CIF: IO: 150MHz, Support BT.656/601/1120
- Display: RGB, LVDS/MIPI DSI, HDMI, eDP, Eink
- SDIO: SDIO 3.0 x3
- Peripheral:
  - USB 2.0 HOST, USB2.0 OTG
  - USB3.0 OTG, USB3.0 HOT, SATA 3.0 x3, PCIE 2.1(1x1Lane), QSGMII x1, Combo with 3 Serdes Lanes
  - PCIE3.0 1 ×2Lanes/2 ×1Lane@8Gbps

- Ethernet: 2x GMAC (10/100/1000M)
- Audio: 1x 8ch I2S/TDM, 2x2ch I2S 8ch PDM, 1x SPDIF OUT
- Others: 10x UART, 4x SPI, 16x PWM,6x I2C,3x CAN FD,8x SAR-ADC
- OTP: OTP (Size 8K)
- Crypto: SM3/4, TEE, Trustzone

### System

- System: Support Android 11.0, Ubuntu 18.04 System, Ubuntu 20.04 System
- Advanced functions: Provide Linux container on Android, deploy Linux applications seamlessly on Android

## Block diagram

## Product dimensions

Core 3568 size: 50 mm x 50 mm x 5 mm

### Top view of Core 3568

### Bottom view of Core 3568

### Top view of carrier board for Core 3568

Carrier board size: 50 mm x 50 mm x 1.6 mm

### Bottom view of carrier board

</TabItem>

<TabItem value="Core 3568J" label="Core 3568J">
## Technical specifications

### Basic specification

- CPU: Quad-core ARM Cortex-A55, Neon and FPU, up to 1.4GHz GPU G52 2EE
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
- MIPI_CSI: MIPI-CSI2, 1×4-lane/2×2-lane@2.5Gbps/lane
- DVP/CIF: IO:150MHz, Support BT.656/601/1120
- Display: RGB, LVDS/MIPI DSI, HDMI, eDP, Eink
- SDIO: SDIO 3.0 x3
- Peripheral:
  - USB 2.0 HOST, USB2.0 OTG
  - USB3.0 OTG, USB3.0 HOT, SATA 3.0 x3, PCIE 2.1(1x1Lane), QSGMII x1, Combo with 3 Serdes Lanes
  - PCIE3.0 1 ×2Lanes/2 ×1Lane@8Gbps
- Ethernet: 2x GMAC (10/100/1000M)
- Audio: 1x 8ch I2S/TDM, 2x2ch I2S 8ch PDM, 1x SPDIF OUT
- Others: 10x UART, 4x SPI, 16x PWM,6x I2C,3x CAN FD,8x SAR-ADC
- OTP: OTP (Size 8K)
- Crypto: SM3/4, TEE, Trustzone

### System

- System: Support Android 11.0, Debian 10 System
- Advanced function: Provide Linux container on Android, deploy Linux applications seamlessly on Android

## Block diagram

## Product dimensions

### Top view of Core 3568J

Core 3568J size: 50 mm x 50mm x 5 mm

### Bottom view of Core 3568J

### Top view of carrier board for Core 3568J

Carrier board size: 50 mm x 50 mm x 1.6 mm

### Bottom view of carrier board for Core 3568J

</TabItem>

</Tabs>
