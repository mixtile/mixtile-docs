---
sidebar_position: 10
sidebar_label: "Troubleshooting and Limits"
format: mdx
---

# Troubleshooting and Limits

Start with a reference image or local MP4 before connecting a camera. Change one pipeline stage at a time.

## Common Issues

<div className="migration-table">

| Symptom | Checks and action |
| --- | --- |
| Hardware interface failure | Check the carrier, 5 V module supply, signal levels, and device tree. Core3588E follows the TX2 NX interface design; do not assume compatibility with an Orin Nano-specific carrier. |
| Model conversion or loading failure | Start from ONNX. Check the `rk3588` target, operator support, and compatibility between RKNN-Toolkit2, RKNN Runtime, and the driver. TensorRT engines cannot be converted directly to RKNN. |
| Incorrect boxes, colors, or detections | Check RGB/BGR order, NHWC/NCHW layout, normalization, resizing versus letterboxing, and NMS. Compare with the floating-point model first. |
| Misaligned decoded images | Read pixels using actual dimensions, offsets, and stride. Keep pixels and logs on separate channels. |
| Hardware unavailable in Docker | Use a matching BSP; check device mappings, AppArmor tools, and user-space libraries. Containers do not replace host drivers. |
| Interrupted clock setup or an existing clock-state backup | If saved state files remain, restore them from `demo-sdk/`: `sudo python3 benchmark/core/core_clocks.py restore` on Core3588E, or `sudo python3 benchmark/jetson/clocks.py restore` on Jetson. Then rerun the benchmark. |
| Duplicate counts or IDs changing after occlusion | The tracker uses box overlap and velocity prediction. Tune regions and thresholds, then validate events on representative footage. The tracker does not perform re-identification (ReID). |
| Stream drops or multiple streams stalling | Test one stream and the network first, then inspect queues, data transfers, and processing load. Automatic reconnection is not implemented, and sustained multi-stream operation has not been validated. |

</div>

## Resolved Issues

An earlier resize preserved the aspect ratio and produced 640×360 frames, while the next stage expected 640×640. The fix disables aspect-ratio preservation and checks frame sizes. Library logs now use a separate file descriptor to avoid corrupting raw pixel data.

## Validation Scope

Docker + Demo SDK has been tested on the existing Core3588E system. Validation does not cover a fresh OS installation, custom carrier boards, MIPI camera and ISP integration, field accuracy, or over-the-air (OTA) update rollback. Keep a known-good combination of system image, container images, model, and configuration, and retest after upgrades.

[Quick Start](/core-3588e/application-development/jetson-migration/implementation/quick-start/) · [Hardware Migration](/core-3588e/application-development/jetson-migration/hardware-migration/) · [Model Conversion](/core-3588e/application-development/jetson-migration/ai-model-migration/)
