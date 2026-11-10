---
sidebar_position: 8
sidebar_label: "Application Migration"
format: mdx
---

# Application Migration

## What Needs to Change

Reuse portable application logic and external APIs. Replace NVIDIA-specific video processing, inference, and metadata handling.

The table maps equivalent functions. The tested Jetson example uses GStreamer and TensorRT directly; DeepStream components are integration references.

<div className="migration-table">

| Jetson component | Core3588E implementation |
| --- | --- |
| TensorRT / CUDA inference | RKNN Runtime / NPU |
| NVIDIA video and image processing | MPP decoding; RGA or CPU image processing |
| `NvDsObjectMeta` / `object_id` | Detection result structure / `track_id` |
| `nvtracker`, line-crossing and region logic | Tracking module and configurable event rules |
| `nvdsosd` and recording | Box, track, and label rendering with MP4 output |

</div>

## Implemented Features

Person and vehicle detection → object IDs and tracks → line crossing, region entry and exit, intrusion, and dwell-time alerts → counts, annotated video, and JSONL.

All three MP4 demos (people, vehicles, and supermarket) ran successfully on Core3588E in `core3588e/runtime:2.5.0-arm64`. The lightweight tracker uses box overlap, velocity prediction, and Hungarian matching; it does not implement ByteTrack. Occlusion can cause ID switches, and counting accuracy still needs validation. [View demo results](/core-3588e/application-development/jetson-migration/executive-summary/).

## Run the Demos

[Deploy Docker + Demo SDK using the Quick Start](/core-3588e/application-development/jetson-migration/implementation/quick-start/)

After setup, run `sudo ./run-demo.sh all` from `demo-sdk/`. Edit code in `demo-sdk/demo/src/` or rules in `demo-sdk/demo/assets/*.json`, then rerun without rebuilding the Docker image.

## Application Output Files

<div className="migration-table">

| File | Contents |
| --- | --- |
| `annotated.mp4` | Video with boxes, IDs, tracks, counts, and event indicators |
| `tracks.jsonl` | Per-frame `track_id`, class, confidence score, boxes in original-image pixels, and region counts |
| `events.jsonl` | Event type, `event_id`, `track_id`, timestamp, and line-crossing direction |
| `summary.json` | Model and media checksums, configuration, frame count, and event counters |

</div>

`source_seconds` is elapsed time within the source video; `box` uses original-image pixel coordinates `[x1,y1,x2,y2]`. Each `event_id` is unique within a run. Add camera and job IDs when integrating with your application. Directional counters break down `line_cross` events; they are not additional events. Entry and intrusion events can describe the same action; do not add both to a person count.

HTTP/MQTT event delivery, automatic stream reconnection, and a complete C++ SDK are not included. See [Model Conversion](/core-3588e/application-development/jetson-migration/ai-model-migration/) and [Video Pipeline](/core-3588e/application-development/jetson-migration/video-pipeline/) for integration details.

## Downloads

Environment and source: [Quick Start: Docker + Demo SDK](/core-3588e/application-development/jetson-migration/implementation/quick-start/).

Source and rule configuration are under `demo-sdk/demo/`.
