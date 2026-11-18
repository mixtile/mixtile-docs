---
description: How AI workloads run on Core 3588E, what runs on a computer and what on the module, and what Mixtile OS already provides.
---

# AI Overview

Core 3588E runs AI inference on the NPU built into its RK3588 SoC. Mixtile OS includes the Rockchip runtime that runs models on it.

The NPU is programmed with Rockchip's RKNN toolkits. Models and applications made for NVIDIA Jetson, with CUDA, TensorRT or DeepStream, do not run on Core 3588E; a model has to be converted to the RKNN format first.

## What runs where

Rockchip's model conversion toolkit can run on an x86-64 Linux computer or in a separate ARM64 Docker environment on Core 3588E. The conversion environment needs a supported Python version; it is separate from the module's host Python. Core 3588E loads the converted model and runs it on the NPU.

| Model conversion (x86-64 computer or ARM64 Docker on Core 3588E) | Inference on Core 3588E |
| --- | --- |
| Convert a model, for example from ONNX, to `.rknn` with [RKNN-Toolkit2](https://github.com/airockchip/rknn-toolkit2), for the `rk3588` target | Load the `.rknn` model with the RKNN runtime, `librknnrt`, and run inference |

Example programs can be built on Core 3588E itself, so no cross-compiler is needed. The migration Demo SDK includes converted models for on-board inference.

## On Mixtile OS

- The NPU is enabled and `librknnrt` is installed. You do not need to install an NPU driver or runtime package first. To check the NPU driver:

  ```bash title="Core 3588E"
  sudo cat /sys/kernel/debug/rknpu/version
  ```

  The output looks like `RKNPU driver: v0.9.8`.

- The examples use Rockchip's C/C++ API. Rockchip's Python package for on-board inference, RKNN-Toolkit-Lite2, is provided for Python 3.12 and earlier, which matches the Ubuntu 24.04 and Debian 12 editions of Mixtile OS. Debian 13 has Python 3.13 and Ubuntu 26.04 has Python 3.14, so the package cannot be installed there.
- Guides written for other RK3588 boards often install vendor packages or enable the NPU with a board-specific tool. Those steps do not apply to Mixtile OS.

Mixtile OS also includes Rockchip multimedia components, such as RGA, MPP, FFmpeg and GStreamer, used by some application workflows.

:::warning[Keep versions compatible]
The RKNN runtime on the module and the RKNN-Toolkit2 version a model was converted with must be compatible. Mixtile OS has `librknnrt` 2.3.2. If a model you converted does not load, convert it again with RKNN-Toolkit2 2.3.2.
:::

## Migrating from Jetson

For hardware, system and application changes, see the separate [Jetson Migration guide](/core-3588e/application-development/jetson-migration/). To try the supplied video AI examples, use its [Docker + Demo SDK quick start](/core-3588e/application-development/jetson-migration/implementation/quick-start/).
