---
sidebar_position: 1
description: Technical specifications and block diagram of Core 3588E.
---

# Specifications

:::info
内容翻译同步中，以下为英文原文。
:::

| **Technical items** | **Specifications** |
| --- | --- |
| CPU | Quad-core Cortex-A76 (2.4 GHz) + Quad-core Cortex-A55, Neon and FPU |
| GPU | Arm Mali-G610 MP4 with support for OpenGL ES3.2, OpenCL 2.2, Vulkan1.2 |
| NPU | RK NN, 6 TOPS NPU with support for TensorFlow, Caffe, TFLite, PyTorch, ONNX NN, Android NN |
| Memory | 4 GB, 8 GB, 16 GB, or 32 GB 64-bit LPDDR4 |
| Storage | 32 GB, 64 GB, 128, or 256 GB eMMC 5.1 flash storage |
| Supported OS | Debian 11, Android 11, Ubuntu 22.04, and Armbian 23.07 |
| Supply power | 5 V DC |
| Video codec | 8Kp60 video decoding (H.264/H.265/VP9)
8Kp30 video encoding (H.264/H.265) |
| Display | 1x HDMI interface + 1x DP/eDP combo interface, up to 7680 x 4320@60 Hz for HDMI and DP, and 3840 x 2160@60 Hz for eDP |
| Camera | 3x 4-lane or 5x 2-lane MIPI CSI interfaces @ 2.5 Gbps/lane |
| ISP | 48M ISP, HDR |
| Network | 10/100/1000 BASE-T |
| USB | 1x USB 3.0 (Gen1), 3x USB 2.0 |
| PCIe | PCIe 3.0 x4 + PCIe 2.1 x1 |
| Others | – UART DEBUG x1, UART+flow control x2
– SPI x2
– I2C x4
– CAN x1
– I2S x4
– SD 4.0, SDHOST 4.0, and SDIO 3.0
– PWM x3, GPIO x15 |
| Connector | 260-pin SO-DIMM edge connector, compatible with Jetson TX2 NX |
| OTP | Size: 8K |
| Optional accessory | [Heatsink fan](https://www.mixtile.com/store/accessory/core-3588e-heatsink/) |
| Dimensions | 69.6 mm x 45 mm |
| Temperature | – Operating: 0°C to 80°C
– Storage: -20°C to 85°C |
| Relative humidity | – Operating: 10% to 90%
– Storage: 5% to 95% |

## Block diagram

![Block diagram of Core 3588E](/img/docs/introduction-to-mixtile-core-3588e/6612a8936caf.webp)

_Figure 3. Block diagram of Core 3588E_

