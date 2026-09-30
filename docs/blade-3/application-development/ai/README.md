---
description: The ways to run AI workloads on Blade 3, what runs on a computer and what on the board, and what Mixtile OS already provides.
---

# AI Overview

Blade 3 runs AI inference on the NPU built into its RK3588 SoC. Mixtile OS includes the Rockchip runtime that the examples in this section use.

## AI paths

| Path | Hardware | Runtime on Blade 3 |
| --- | --- | --- |
| RKNN, for vision models such as object detection | Built-in RK3588 NPU | `librknnrt`, included in Mixtile OS |
| RKLLM, for large language models | Built-in RK3588 NPU | `librkllmrt`, from Rockchip's rknn-llm repository |

## What runs where

Rockchip's model conversion toolkits run on an x86-64 Linux computer. Blade 3 loads the converted model and runs it on the NPU.

| Path | On a computer | On Blade 3 |
| --- | --- | --- |
| RKNN | Convert a model, for example from ONNX, to `.rknn` with RKNN-Toolkit2, for the `rk3588` target | Load the `.rknn` model with `librknnrt` and run inference |
| RKLLM | Convert a model to `.rkllm` with RKLLM-Toolkit | Load the `.rkllm` model with `librkllmrt` and run inference |

The example programs are built on Blade 3 itself, so no cross-compiler is needed. The YOLOv8 example downloads a model that is already converted, so you can run it without a computer.

## On Mixtile OS

- The NPU is enabled and `librknnrt` is installed. You do not need to install an NPU driver or runtime package first. To check the NPU driver:

  ```bash title="Blade 3"
  sudo cat /sys/kernel/debug/rknpu/version
  ```

  The output looks like `RKNPU driver: v0.9.8`.

- The RKLLM runtime is not part of Mixtile OS. The RKLLM example uses the copy in Rockchip's rknn-llm repository.
- The examples use Rockchip's C/C++ API. Rockchip's Python package for on-board inference, RKNN-Toolkit-Lite2, is provided for Python 3.12 and earlier. The Ubuntu 26.04 edition of Mixtile OS has Python 3.14, so that package cannot be installed there.
- Guides written for other RK3588 boards often install vendor packages or enable the NPU with a board-specific tool. Those steps do not apply to Mixtile OS.

Mixtile OS also includes Rockchip multimedia components, such as RGA, MPP, FFmpeg and GStreamer, used by some application workflows.

:::warning[Keep versions compatible]
The Rockchip runtime, the toolkit a model was converted with, and the model must be compatible versions. On Blade 3, RKLLM runtime 1.1.4 could not load a model converted with RKLLM-Toolkit 1.3, while runtime 1.3.1 loaded it.
:::

## Start with a verified example

### Run YOLOv8 on the Blade 3 NPU

Build Rockchip's YOLOv8 example with the RKNN C/C++ runtime and detect objects in an image. See [Run YOLOv8 on the Blade 3 NPU](/blade-3/application-development/ai/yolov8).
