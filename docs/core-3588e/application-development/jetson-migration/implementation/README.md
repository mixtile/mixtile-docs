---
sidebar_position: 11
sidebar_label: "Deployment"
format: mdx
---

# Deployment

Start on Core3588E: set up → run the demos → view results. The Jetson and system-build guides specify when commands must run on another device.

<div className="migration-start">

**First time? Start here.**

[Quick Start → Set up · Run demos · View results](/core-3588e/application-development/jetson-migration/implementation/quick-start/)

</div>

## Choose a Task

<div className="migration-table">

| Task | Guide |
| --- | --- |
| Run people, vehicle, and supermarket demos | [Three-step Quick Start](/core-3588e/application-development/jetson-migration/implementation/quick-start/) |
| Use a different ONNX model | [Model Conversion and Validation](/core-3588e/application-development/jetson-migration/ai-model-migration/) |
| Use video or image-processing hardware | [Jetson / Core3588E Video Interfaces](/core-3588e/application-development/jetson-migration/video-pipeline/) |
| Integrate tracks and business events | [Result Fields and Application Migration](/core-3588e/application-development/jetson-migration/application-migration/) |
| Flash or customize the system | [System and BSP](/core-3588e/application-development/jetson-migration/software-migration/) |

</div>

## Package Contents

<div className="migration-table">

| Component | Purpose |
| --- | --- |
| Docker environment | Runtime and model conversion images with preinstalled dependencies; requires compatible host BSP drivers |
| Demo SDK | Source code, models, media, configuration, and launch scripts |
| `demo/results/` | Annotated videos, previews, tracks, events, and summaries for browser viewing |

</div>

The packages were tested from a new directory: all three 10-second MP4 demos, MPP and RGA examples, FP16 / INT8 conversion and inference checks, the 1200-frame benchmark, and browser viewing passed. Setup needs internet access to install missing host tools; Docker images can be loaded offline once those tools are available. Testing used the existing BSP, without flashing a fresh OS image.

A complete C++ SDK, HTTP/MQTT event delivery, automatic stream reconnection, and system OTA rollback are not included.

## Downloads and Directories

Environment and source: [Quick Start: Docker + Demo SDK](/core-3588e/application-development/jetson-migration/implementation/quick-start/).

The Docker package contains the preconfigured images. The SDK directories `demo/`, `video/`, `hardware/`, `model-conversion/`, `jetson/`, and `benchmark/` contain application demos, RTSP examples, hardware examples, model conversion, Jetson examples, and benchmarks, respectively. Reference videos are in `videos/reference-output/`.
