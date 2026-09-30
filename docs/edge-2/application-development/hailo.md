---
sidebar_position: 2
draft: true
description: Using a Hailo-8 or Hailo-8L M.2 AI accelerator with Edge 2. This guide is being updated for Mixtile OS.
---

# Hailo AI Accelerator

A Hailo-8 or Hailo-8L M.2 module adds a dedicated AI accelerator to Edge 2, alongside the RK3568's own NPU.

:::note[Being updated for Mixtile OS]
This guide is pending validation on Mixtile OS. Full verification requires a Hailo accelerator and a supported current software stack. Until then, this page has no installation steps.

To run AI models on Edge 2 now, use the built-in NPU, see [Run YOLOv8 on the Edge 2 NPU](./yolov8.md).
:::

## Hardware

The module goes into the [M.2 Key B socket](/edge-2/hardware-usage/m2-mini-pcie), which carries PCIe 3.0 x2. Use a module with a B key, such as a B+M key module, in the 2242 size.

## Software

A Hailo accelerator needs two parts from Hailo: the PCIe driver, built for the running kernel, and the HailoRT runtime.

Hailo-8 and Hailo-8L use HailoRT 4. The sources for Hailo-8 and Hailo-8L are on the `hailo8` branch of [hailort](https://github.com/hailo-ai/hailort/tree/hailo8) and [hailort-drivers](https://github.com/hailo-ai/hailort-drivers/tree/hailo8).
