---
sidebar_position: 3
sidebar_label: "Core3588E Platform"
format: mdx
---

# Core3588E Platform

## Software Versions on the Test Device

<div className="migration-table">

| Component | Installed version |
| --- | --- |
| Ubuntu | 26.04.1 LTS |
| Linux kernel | 6.1.172-rockchip-vendor |
| Architecture | aarch64 (ARM64) |
| RKNN Runtime (runtime image) | 2.5.0 |
| RKNPU driver | 0.9.8 |
| RGA system package | 2.2.0 |
| MPP system package | 1.5.0 |
| GStreamer | 1.28.2 |
| FFmpeg Rockchip | 8.0.3 |
| Python | 3.14.4 |
| GCC / G++ | 15.2.0 |
| CMake | 4.2.3 |
| Docker CE | 29.9.2 |
| Docker Compose | 5.7.0 |

</div>

Docker and Docker Compose have been tested on this device. The demos run Docker with `sudo`; follow the [Quick Start](/core-3588e/application-development/jetson-migration/implementation/quick-start/) to set up the containers.

## Model Conversion Environment

The demo converts ONNX to RKNN in an ARM64 Docker container on Core3588E. The launcher exposes the board's NPU devices to the container automatically. Floating-point and INT8 conversion, followed by on-device inference, have been tested. An x86_64 converter image is also provided for AMD and Intel hosts.

<div className="migration-table">

| Component | Version in the ARM64 converter container |
| --- | --- |
| Ubuntu | 22.04 LTS |
| Architecture | aarch64 (ARM64) |
| Python | 3.10 |
| RKNN-Toolkit2 / RKNN-Toolkit-Lite2 | 2.5.0 |
| ONNX | 1.16.1 |
| ONNX Runtime | 1.20.1 |
| NumPy | 1.26.4 |

</div>

Image: `core3588e/converter:2.5.0-arm64`. The container's Python 3.10 environment is isolated from the host's Python 3.14 environment. See [Model Conversion](/core-3588e/application-development/jetson-migration/ai-model-migration/) for commands and downloads.

See [Hardware Migration](/core-3588e/application-development/jetson-migration/hardware-migration/) for specifications, diagrams, and pinout, and [System and BSP](/core-3588e/application-development/jetson-migration/software-migration/) for Ubuntu 26.04 flashing and BSP builds.

The runtime image, `core3588e/runtime:2.5.0-arm64`, includes RKNN Runtime and the libraries needed for detection, MPP video processing, and RGA image processing. The host must provide compatible BSP drivers.
