---
sidebar_position: 5
sidebar_label: "System and BSP"
format: mdx
---

# System and BSP

## Core3588E and Mixtile OS

Core3588E is based on RK3588 and runs Mixtile OS, available in Ubuntu and Debian desktop and server editions. When migrating from Jetson Linux and JetPack, use a system image built for Core3588E.

Product, interface, and development information: [Core3588E documentation](/core-3588e/).

## Download and Flash

Download a system image and the Rockchip flashing tool, then follow the flashing guide to connect the board, write the image, and reboot. Choose Desktop for a graphical environment or Server for headless deployment.

Images, tools, and flashing instructions: [Downloads](/core-3588e/download/). This project uses the Ubuntu 26.04 LTS Desktop image.

## BSP and System Builds

Use the [Mixtile OS build system](https://github.com/mixtile-rockchip/mixtile-os) to customize the board support package (BSP), including the kernel and drivers, or to build a system image. The build host runs Ubuntu 24.04 x86_64; the target image runs Ubuntu 26.04. Install dependencies following the [official build instructions](/core-3588e/low-level-development/build-image/), then run:

```bash
git clone https://github.com/mixtile-rockchip/mixtile-os.git
cd mixtile-os
git rev-parse HEAD
sudo ./build.sh --board=mixtile-core3588e --suite=resolute --flavor=server
```

The command builds a Core3588E Ubuntu 26.04 Server image. Output images and checksums are in `images/`; logs are in `build/logs/`. Flash the resulting image using the guide above. This project has not validated a full system image build.

## Essential Official Repositories

<div className="migration-table">

| Repository | Purpose | Start here |
| --- | --- | --- |
| [RKNN-Toolkit2](https://github.com/airockchip/rknn-toolkit2) | ONNX import, operator compatibility checks, floating-point / INT8 builds, RKNN export, and evaluation; distinguish simulation from on-device benchmarks | `rknn-toolkit2/packages/arm64`, Python requirements, and `doc` |
| [RKNN Model Zoo](https://github.com/airockchip/rknn_model_zoo) | Conversion and inference examples for detection, classification, segmentation, OCR, face recognition, and license plate recognition | YOLOv8, then LPRNet; check each README, `convert.py`, preprocessing, and postprocessing |
| [RKNPU2 (maintained directory)](https://github.com/airockchip/rknn-toolkit2/tree/master/rknpu2) | On-device C/C++ runtime, API documentation, and examples; RKNN-Toolkit-Lite2 is in `rknn-toolkit-lite2` in the same repository. The BSP supplies the kernel driver. | `runtime`, `examples`, and `doc`; for inference, not model conversion |

</div>

For application deployment, use [Docker + Demo SDK](/core-3588e/application-development/jetson-migration/implementation/quick-start/).
