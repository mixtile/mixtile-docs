---
sidebar_position: 7
sidebar_label: "Model Conversion"
format: mdx
---

# Model Conversion

Use ONNX as the portable source model. Build a TensorRT engine for Jetson or an RKNN model for Core3588E. TensorRT engines cannot be converted directly to RKNN.

The benchmark labels the floating-point baseline as FP16. The packaged converter disables INT8 quantization and uses RKNN-Toolkit2's default floating-point setting; it does not explicitly set `float_dtype`. Individual operators may use other precisions.

## Build and Deployment Platforms

<div className="migration-table">

| Stage | Jetson Orin Nano | Core3588E |
| --- | --- | --- |
| Build environment | Target Jetson: ARM64 Linux with TensorRT and CUDA compatible with JetPack | ARM64 Docker on Core3588E, or the supplied x86_64 converter image |
| Inference hardware | Jetson GPU | Core3588E NPU, accessed through RKNN Runtime |
| Conversion input | ONNX | ONNX; adapt unsupported operators if needed |
| Build tool | TensorRT: trtexec / Builder | RKNN-Toolkit2 |
| Model file | `.engine` / `.plan` | `.rknn` |
| Runtime interface | TensorRT Runtime + CUDA | RKNN Runtime + NPU |

</div>

## Jetson: ONNX → TensorRT engine

Parse ONNX → optimize the network → save the engine → load and run inference. **Run these commands on the target Jetson Orin Nano**, using TensorRT and CUDA versions compatible with JetPack. This example uses TensorRT 10.x and a fixed input shape. Replace `model.onnx` with your ONNX path.

```bash
mkdir -p models logs
TRTEXEC=/usr/src/tensorrt/bin/trtexec
"$TRTEXEC" --onnx=model.onnx --saveEngine=models/model.engine --skipInference > logs/build.log 2>&1
"$TRTEXEC" --loadEngine=models/model.engine --warmUp=1000 --duration=10 > logs/inference.log 2>&1
```

For FP16, add `--fp16` in a TensorRT 10.x environment that supports it and save a separate engine. For dynamic inputs, specify the actual input name with `--minShapes`, `--optShapes`, and `--maxShapes`. Rebuild engines when the GPU or TensorRT environment changes.

<div className="migration-table">

| Task | Official interface |
| --- | --- |
| Import and build | OnnxParser.parse → Builder.build_serialized_network |
| Load a model | Runtime.deserialize_cuda_engine → create_execution_context |
| Submit inference | set_tensor_address → execute_async_v3; CUDA manages device memory, copies, and synchronization |

</div>

`trtexec` builds engines and benchmarks inference. Your application still needs preprocessing, output parsing, and annotation. References: [ONNX deployment](https://docs.nvidia.com/deeplearning/tensorrt/latest/getting-started/quick-start-onnx-deployment.html) · [TensorRT 10.x Python API](https://docs.nvidia.com/deeplearning/tensorrt/10.x.x/_static/python-api/parsers/Onnx/pyOnnx.html).

### Jetson INT8: Calibrate and Build the Engine

The SDK's `jetson/build_int8.py` expects exactly 20 `.jpg` calibration images and uses TensorRT entropy calibration with FP16 fallback. It targets the documented CUDA 13 environment (`libcudart.so.13`). Enabling `--int8` alone is not sufficient for valid calibration; choose representative images for your model and deployment scene.

```bash
cd demo-sdk
python3 jetson/build_int8.py --onnx model-conversion/model.onnx \
  --calibration model-conversion/COCO/subset --output "$PWD/models/int8"
```

The script targets this fixed-input model. Adjust paths as needed, then use `models/int8/yolov8n_int8.engine` with `sudo ./benchmark/run.sh jetson int8 --model "$PWD/models/int8/yolov8n_int8.engine"`. Check Builder API compatibility when changing TensorRT major versions.

## Core3588E: Convert ONNX to RKNN on the Board

**Convert on Core3588E → save `.rknn` → run on the NPU.** Both converter images use Ubuntu 22.04, Python 3.10, and RKNN-Toolkit2 2.5.0. The ARM64 environment also includes RKNN-Toolkit-Lite2 and RKNN Runtime 2.5.0.

### Download the Converter and Examples

Environment and source: [Quick Start: Docker + Demo SDK](/core-3588e/application-development/jetson-migration/implementation/quick-start/).

The Docker package includes ARM64 and x86_64 converter images. Source code, ONNX models, calibration images, and validation results are in `demo-sdk/model-conversion/`.

### Run on Core3588E

Complete the Quick Start setup first. Replace `/absolute/extracted/path` with the extraction directory; if you are already in `demo-sdk/`, run `cd model-conversion`. Python dependencies are included in the container.

```bash
cd /absolute/extracted/path/demo-sdk/model-conversion
# Complete the environment setup in Quick Start first.
sudo ./run_convert.sh fp16
sudo ./run_convert.sh int8
```

Each run saves `model.rknn` and `model.json` in `results/<precision>-<id>/`. On ARM64, the launcher also maps NPU devices and the device tree into the container, runs a reference-image check, and saves `validation.json` and `validation.png`. On x86_64, it performs conversion only, without NPU validation or a preview.

### Conversion API Calls

```python
from rknn.api import RKNN
rknn = RKNN()
rknn.config(target_platform="rk3588", mean_values=[[0, 0, 0]], std_values=[[255, 255, 255]])
rknn.load_onnx(model="model.onnx")
rknn.build(do_quantization=False)  # For INT8, set True and supply a calibration dataset.
rknn.export_rknn("model.rknn")
rknn.release()
```

The full implementation in `convert_model.py` checks every return value. This model expects RGB with mean=0 and std=255; update preprocessing settings when changing models. Calibration lists must use paths inside the container. TensorRT calibration caches cannot be reused for RKNN conversion.

RKNN Runtime API: `rknn_init → rknn_query → rknn_inputs_set → rknn_run → rknn_outputs_get → rknn_outputs_release → rknn_destroy`.

## Application Changes

<div className="migration-table">

| Item | Example requirement |
| --- | --- |
| Input | Use the same 640×640 RGB pixels and resize method on both platforms |
| Jetson | Submit FP32 tensors in NCHW layout, with pixel values divided by 255 |
| Core3588E | Submit UINT8 tensors in NHWC layout; std=255 is configured during conversion, so do not normalize again |
| Output | Match tensor shapes, class labels, box decoding, NMS, and mapping to original-image coordinates |

</div>

UINT8 is the input data type, not proof that the model is INT8-quantized. Custom TensorRT or CUDA plugins require porting. If the ONNX output structure changes, update the postprocessor to match.

## Validate the Migration

1. Load and run the model on each platform. Save build logs and model checksums.
2. Compare classes, confidence scores, and boxes against ONNX using identical input images.
3. Evaluate accuracy on an independent labeled dataset. Measure throughput separately and state whether preprocessing and postprocessing are included.

FP16 and INT8 models built on Core3588E with RKNN-Toolkit2 2.5.0 were tested with RKNN Runtime / RKNN-Toolkit-Lite2 2.5.0. Both matched 5/5 ONNX reference detections, with minimum IoU values of about 0.9986 and 0.9670, respectively. This single-image check does not establish dataset accuracy. The performance and 500-image accuracy tables retain the same models built with 2.3.2 and run with RKNN Runtime 2.5.0.

For image and video integration, see [Core3588E Video Interfaces](/core-3588e/application-development/jetson-migration/video-pipeline/core3588e/).

**Dataset evaluation:** A fixed 500-image COCO val2017 subset, excluding calibration images, compares the ONNX baseline with Jetson TensorRT FP16 / INT8 and Core3588E FP16 / INT8. [See accuracy changes and evaluation results](/core-3588e/application-development/jetson-migration/performance-benchmark/).

## Converter Validation

<div className="migration-table">

| Image | Completed validation |
| --- | --- |
| ARM64: Core3588E | Image build, offline Docker image loading, SDK setup, floating-point / INT8 conversion, and NPU inference for both models passed |
| x86_64: AMD / Intel | RKNN-Toolkit2 2.5.0 FP16 / INT8 conversion passed; an image archive is included for offline loading. The on-board demo uses ARM64. |

</div>

Each architecture has a separate RKNN-Toolkit2 2.5.0 image with pinned dependencies. Conversion and inference use separate containers.

Load the supplied image archives for offline use. Rebuilding from the Dockerfiles requires internet access to download base images and dependencies; the package does not include everything needed for an offline rebuild.

## Essential Official Repositories

<div className="migration-table">

| Repository | Purpose | Start here |
| --- | --- | --- |
| [RKNN-Toolkit2](https://github.com/airockchip/rknn-toolkit2) | ONNX import, operator compatibility checks, floating-point / INT8 builds, RKNN export, and evaluation; distinguish simulation from on-device benchmarks | `rknn-toolkit2/packages/arm64`, Python requirements, and `doc` |
| [RKNN Model Zoo](https://github.com/airockchip/rknn_model_zoo) | Conversion and inference examples for detection, classification, segmentation, OCR, face recognition, and license plate recognition | YOLOv8, then LPRNet; check each README, `convert.py`, preprocessing, and postprocessing |
| [RKNPU2 (maintained directory)](https://github.com/airockchip/rknn-toolkit2/tree/master/rknpu2) | On-device C/C++ runtime, API documentation, and examples; RKNN-Toolkit-Lite2 is in `rknn-toolkit-lite2` in the same repository. The BSP supplies the kernel driver. | `runtime`, `examples`, and `doc`; for inference, not model conversion |

</div>

The [standalone RKNPU2 repository](https://github.com/airockchip/rknpu2) is archived; maintained code is in RKNN-Toolkit2. Pin tool and runtime versions and example commits for reproducible builds.
