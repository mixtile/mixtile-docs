---
sidebar_position: 0
description: Guides for developing and running applications on Edge 2 under Mixtile OS, starting with AI inference on the RK3568 NPU.
---

# Application Development

These guides start from an Edge 2 that is already running Mixtile OS and connected to the internet, see [Getting Started](/edge-2/getting-started).

## AI on the NPU

Edge 2 runs AI inference on the NPU built into its RK3568 SoC, with Rockchip's RKNN runtime.

| Item | On Mixtile OS |
| --- | --- |
| NPU driver | Built into the kernel and enabled |
| RKNN runtime | `librknnrt`, installed |
| Model format | `.rknn`, converted for the `rk3568` target |

You do not need to install an NPU driver or runtime package first. To check the NPU driver:

```bash title="Edge 2"
sudo cat /sys/kernel/debug/rknpu/version
```

The output looks like `RKNPU driver: v0.9.8`.

Models are converted to `.rknn` with Rockchip's RKNN-Toolkit2 on an x86-64 Linux computer, for the `rk3568` target. Edge 2 loads the converted model and runs it on the NPU. The example below downloads a model that is already converted, so you can run it without a computer.

:::warning[Keep versions compatible]
The RKNN runtime on the board and the RKNN-Toolkit2 version a model was converted with must be compatible. Mixtile OS includes `librknnrt` 2.3.2.
:::

### Run YOLOv8 on the Edge 2 NPU

Build Rockchip's YOLOv8 example with the RKNN C/C++ runtime and detect objects in an image. See [Run YOLOv8 on the Edge 2 NPU](./yolov8.md).

## Multimedia

Mixtile OS includes Rockchip's multimedia components: MPP for hardware video decoding and encoding, RGA for 2D image processing, and builds of FFmpeg and GStreamer that use them.

## Hardware Interfaces

Applications reach the board's interfaces through standard Linux devices: `/dev/ttyS3`, `/dev/ttyS4` and `/dev/ttyS5` for the [UARTs](/edge-2/hardware-usage/uart) and [RS-485](/edge-2/hardware-usage/rs485), and `/dev/i2c-3` for [I²C](/edge-2/hardware-usage/other-connectors#i2c).
