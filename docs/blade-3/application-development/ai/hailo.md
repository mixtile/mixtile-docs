---
sidebar_position: 3
draft: true
description: Using a Hailo-8 or Hailo-8L M.2 AI accelerator with Blade 3. This guide is being updated for Mixtile OS.
---

# Hailo AI Accelerator

A Hailo-8 or Hailo-8L M.2 module adds a dedicated AI accelerator to Blade 3, alongside the RK3588's own NPU.

:::note[Being updated for Mixtile OS]
This guide is pending validation against the current Hailo-8 software stack. Full verification on Mixtile OS requires a Hailo accelerator and a supported current software stack. Until then, this page has no installation steps.

To run AI models on Blade 3 now, use the built-in NPU, see [Run YOLOv8 on the Blade 3 NPU](./yolov8.md).
:::

## Hardware

The module connects to the [U.2](/blade-3/hardware-usage/u2) connector of Blade 3 through a U.2 to M.2 adapter.

## Software

A Hailo accelerator needs two parts from Hailo: the PCIe driver, built for the running kernel, and the HailoRT runtime.

Hailo-8 and Hailo-8L use HailoRT 4. HailoRT 5 supports only Hailo-10 and Hailo-15. The sources for Hailo-8 and Hailo-8L are on the `hailo8` branch of [hailort](https://github.com/hailo-ai/hailort/tree/hailo8) and [hailort-drivers](https://github.com/hailo-ai/hailort-drivers/tree/hailo8).
