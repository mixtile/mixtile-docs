---
sidebar_position: 9
sidebar_label: "Performance and Value"
toc_max_heading_level: 2
format: mdx
---

# Performance and Value

Compare inference throughput, video processing, detection accuracy, and throughput per dollar. **FPS (frames per second) measures processing speed: higher is faster.**

<div className="migration-metrics">
<div><span>8GB module price</span><strong>≈42% lower</strong><small>Core3588E vs. Jetson at test prices<br/>Carrier board and accessories excluded</small></div>
<div><span>Core3588E three-core scaling</span><strong>2.80×</strong><small>INT8 inference throughput vs. one core<br/>76.44 → 213.97 FPS</small></div>
<div><span>Core3588E recording</span><strong>85.27 FPS</strong><small>INT8 · Maximum clocks · MPP encoding<br/>Jetson in this test: 75.88 FPS</small></div>
</div>

Results are specific to this example and the test conditions below.

## Published Benchmarks and Three-Core Scaling

### Published Benchmarks

YOLOv8n with 640×640 input. These tests measure model execution only, excluding video processing.

<div className="migration-table migration-benchmark">

| Platform | Precision and conditions | Published result | Measured result |
| --- | --- | --- | --- |
| Jetson Orin Nano Super | TensorRT FP16 | 3.96 ms, about 252.5 FPS | **258.04 FPS** |
| RK3588 | INT8, one NPU core | 76.3 FPS | **76.43 FPS**, Runtime 2.5.0 |

</div>

Sources: [Jetson community project](https://github.com/Manishnayak234/edge-ai-deployment-on-nvidia-jetson-orin-nano#performance) · [Rockchip Model Zoo](https://github.com/airockchip/rknn_model_zoo#model-performance-benchmarkfps). These models use different ONNX exports and serve as performance references. The video application and inference-only comparisons below use the same ONNX source on both platforms.

### Core3588E Three-Core Scaling

Using the Rockchip reference model above, each NPU core processes a separate frame with preloaded inputs. Aggregate throughput is measured over the same elapsed interval.

<div className="migration-table migration-benchmark">

| NPU cores in parallel | INT8 throughput | Speedup vs. one core | Utilization per active core |
| --- | --- | --- | --- |
| One core | 76.44 FPS | 1× | About 99% |
| Two cores | 145.74 FPS | 1.91× | About 99% |
| Three cores | **213.97 FPS** | **2.80×** | About 99% on all three cores |

</div>

Three cores deliver **2.80×** the aggregate throughput of one core. Per-frame latency remains about 14 ms.

## Video Application Comparison

Both scenarios include video decoding, inference, drawing, and result output. **Detection only** saves detection data and preview images; **detection and recording** also saves video with boxes and labels. Default settings retain each device's original clock policy; maximum performance uses the highest supported clocks.

<div className="migration-table migration-benchmark migration-video-table">

| Use case and operating mode | Precision | Jetson Orin Nano | Core3588E |
| --- | --- | --- | --- |
| Detection only (default settings) | FP16 | 67.11 FPS | 49.28 FPS |
| Detection only (default settings) | INT8 | 67.30 FPS | **111.05 FPS** |
| Detection only (maximum performance) | FP16 | 144.07 FPS | 61.21 FPS |
| Detection only (maximum performance) | INT8 | 147.35 FPS | **117.10 FPS** |
| Detection and recording (maximum performance) | FP16 | 74.12 FPS | 56.52 FPS |
| Detection and recording (maximum performance) | INT8 | 75.88 FPS | **85.27 FPS** |

</div>

**Core3588E uses hardware video encoding to save annotated video with less CPU work.** Jetson Orin Nano has no dedicated video encoder and uses CPU software encoding in this example.

Jetson Orin Nano delivers higher inference-only throughput. When detection and recording are both required, Core3588E benefits from hardware encoding: at maximum performance, the INT8 pipeline processes about **85 FPS**, compared with **76 FPS** on Jetson.

The saved video plays at 30 FPS regardless of processing speed.

## Inference-Only Throughput

Model execution only, excluding video processing and data transfers. Jetson uses Super mode; Core3588E uses maximum clocks with three NPU cores processing separate frames.

<div className="migration-table migration-benchmark">

| Precision setting | Jetson Orin Nano | Core3588E |
| --- | --- | --- |
| FP16 | **275.04 FPS** | **97.37 FPS** |
| INT8 | **465.61 FPS** | **212.88 FPS** |

</div>

## Detection Quality After Conversion

This test measures changes in detection accuracy after model conversion. **mAP50–95 is a benchmark score, not the percentage of real-world objects detected correctly.**

<div className="migration-table migration-benchmark">

| Model | mAP50–95 | Drop (percentage points) |
| --- | --- | --- |
| Original ONNX FP32 model | 34.526% | — |
| Jetson FP16 | 34.481% | 0.046 |
| Jetson INT8 | 31.743% | 2.783 |
| Core3588E FP16 | 34.530% | **-0.004** |
| Core3588E INT8 | 34.362% | **0.164** |

</div>

Drops are calculated before rounding; a value close to 0 indicates little change from the ONNX baseline. Core3588E INT8 remains close to that baseline. Check missed detections and false positives on representative footage of people and vehicles before deployment.

## Value Comparison: 8GB Modules

Prices cover modules only, excluding carrier boards, power supplies, cooling, taxes, and shipping.

<div className="migration-table migration-benchmark">

| 8GB module | Reference price |
| --- | --- |
| Jetson Orin Nano <small>(900-13767-0030-000)</small> | $449 <small>(price at the time of testing; current prices may differ)</small> |
| Core3588E | About $260 <small>(price at the time of testing; current prices may differ)</small> |

</div>

Values are **throughput per $100 of module cost (FPS / $100)**. Higher means more processing capacity for the same budget.

<div className="migration-table migration-benchmark migration-value-table">

| Use case and operating mode | Precision | Jetson | Core3588E | Core3588E vs. Jetson |
| --- | --- | --- | --- | --- |
| Inference only | FP16 | 61.26 | 37.45 | 38.9% lower |
| Inference only | INT8 | 103.70 | 81.88 | 21.0% lower |
| Detection only (maximum performance) | FP16 | 32.09 | 23.54 | 26.6% lower |
| Detection only (maximum performance) | INT8 | 32.82 | 45.04 | 37.2% higher |
| Detection and recording (maximum performance) | FP16 | 16.51 | **21.74** | **31.7% higher** |
| Detection and recording (maximum performance) | INT8 | 16.90 | **32.80** | **94.1% higher** |

</div>

<div className="migration-takeaway">

**Core3588E delivers more throughput per dollar when saving annotated video in this example.**

At the reference prices above, the Core3588E 8GB module costs about **42%** less. With detection and recording at maximum performance, it provides **31.7%** more throughput per $100 for FP16 and **94.1%** more for INT8.

Choose Core3588E when it meets your detection accuracy and speed requirements and you need the recording and cost benefits shown here.

</div>

<details>
<summary>Test conditions and how to reproduce the results</summary>

### Video Tests

Both platforms loop the same 1080p / 30 FPS clip for 1200 frames without skipping frames. Each inference instance runs 50 warm-up iterations. Results are medians of three runs; timing excludes initialization and warm-up.

Detection-only tests save JSONL and three preview images. Recording tests also save an annotated H.264 video and include encoder finalization in the elapsed time. Both platforms output 1080p / 30 FPS at about 6 Mbps, with a group-of-pictures (GOP) length of 30 frames.

Default settings: Jetson uses 25 W with automatic clock scaling; Core3588E retains its original scaling policy. Maximum-performance tests: Jetson uses Super mode and CUDA Graph, with CPU / GPU / EMC / VIC / NVDEC at their highest supported clocks. Core3588E uses RKNN Runtime 2.5.0, three NPU cores in parallel, and the highest supported CPU / DDR / NPU clocks.

Core3588E uses RGA for color conversion, OpenCV for resizing, and MPP `mpph264enc` for hardware encoding. Jetson uses `x264enc` for software encoding. In Core3588E INT8 detection-only tests, average utilization is about 53%–56% per NPU core; preprocessing and data transfers still limit throughput.

### Inference and Detection Quality

Inference-only tests use preloaded inputs and time model execution, excluding decoding, image processing, input/output transfers, and drawing. Jetson uses CUDA Graph with the best-performing concurrency setting from the tests.

Accuracy evaluation uses a fixed subset of 500 annotated COCO val2017 images, excluding the 20 calibration images. All models use identical input pixels, output parsing, and non-maximum suppression (NMS). mAP50–95 is mean average precision over intersection-over-union (IoU) thresholds from 0.50 to 0.95. IoU measures how closely a predicted box overlaps a ground-truth box. Drops are in percentage points; negative values indicate a slight score improvement on this subset, not a change in the field miss rate. The platforms use different INT8 calibration methods.

For consistent comparisons, Core3588E performance and accuracy tests use the same baseline models built with RKNN-Toolkit2 2.3.2 and run with RKNN Runtime 2.5.0. New conversion examples use RKNN-Toolkit2 2.5.0 and have separate functional validation records. FP16 / INT8 describe build settings; individual operators may use other precisions.

### Reproducing Results

The current SDK draws English labels. Drawing overhead and system state may affect video throughput when rerunning these recorded benchmarks.

Throughput per $100 = measured FPS ÷ module price × 100. Prices are reference values from testing, not current quotes.

Scripts and raw results are in `benchmark/` in the Demo SDK. Follow the [Quick Start](/core-3588e/application-development/jetson-migration/implementation/quick-start/) to load the Docker images. After a `--max` benchmark, the runner restores saved clock settings and, on Jetson, the fan service state. For an interrupted clock-setup step, see [Troubleshooting and Limits](/core-3588e/application-development/jetson-migration/migration-risks/). Thermal control remains enabled.

Key records in `benchmark/records/`: `test-summary.json` (default settings and recording), `runtime25-video-comparison/findings.json` (maximum-performance detection), `core/pure-results.json` and `jetson/pure-results.json` (inference only), and `accuracy-metrics.json` (accuracy).

Hardware encoding references: [Mixtile](https://docs.mixtile.com/core-3588e/) · [NVIDIA](https://forums.developer.nvidia.com/t/hardware-encoder-option-in-jetson-orin-nano-6-2-2-jetpack/356306).

</details>
