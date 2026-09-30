---
sidebar_position: 1
description: Build Rockchip's YOLOv8 example on Core 3588E and detect objects in an image on the NPU.
---

# Run YOLOv8 on the Core 3588E NPU

This guide builds the YOLOv8 example from Rockchip's [rknn_model_zoo](https://github.com/airockchip/rknn_model_zoo) on Core 3588E and runs object detection on a sample image with the NPU. Everything is done on the module itself.

## Before you start

- Core 3588E is running Mixtile OS (see [Flashing an OS Image](/core-3588e/getting-started/install-os)) and is connected to the internet.
- You are logged in on the desktop, over [SSH](/core-3588e/getting-started/connect#ssh) or on the [serial console](/core-3588e/getting-started/connect#serial-console).

Mixtile OS already includes the RKNN runtime (`librknnrt`) that runs models on the NPU, so you do not need to install it.

## Step 1. Install the build tools

```bash title="Core 3588E"
sudo apt update
sudo apt install -y build-essential cmake git
```

## Step 2. Download the example and the model

1. Clone rknn_model_zoo into your home directory:

   ```bash title="Core 3588E"
   cd ~
   git clone https://github.com/airockchip/rknn_model_zoo
   ```

2. Download the `yolov8n.rknn` model into the example's `model` directory:

   ```bash title="Core 3588E"
   cd ~/rknn_model_zoo/examples/yolov8/model
   wget https://downloads.mixtile.com/doc-files/yolov8/rk3588/yolov8n.rknn
   ```

   This model is `yolov8n.onnx` converted for the RK3588 NPU. To convert a model yourself, see [Convert to RKNN](https://github.com/airockchip/rknn_model_zoo/blob/main/examples/yolov8/README.md#4-convert-to-rknn).

## Step 3. Build the example

```bash title="Core 3588E"
cd ~/rknn_model_zoo
CFLAGS="-Wno-error=incompatible-pointer-types -Wno-error=implicit-function-declaration" \
bash build-linux.sh -t rk3588 -a aarch64 -d yolov8
```

The `CFLAGS` are needed because the GCC version in Mixtile OS treats two old patterns in the example's code as errors. They turn those errors back into warnings.

**Expected result:** the build ends by installing the example to `~/rknn_model_zoo/install/rk3588_linux_aarch64/rknn_yolov8_demo/`:

```text
rknn_yolov8_demo
├── lib
├── model
│   ├── bus.jpg
│   ├── coco_80_labels_list.txt
│   └── yolov8n.rknn
├── rknn_yolov8_demo
└── rknn_yolov8_demo_zero_copy
```

## Step 4. Run object detection

The example takes a model and an input image:

```bash title="Core 3588E"
cd ~/rknn_model_zoo/install/rk3588_linux_aarch64/rknn_yolov8_demo
./rknn_yolov8_demo model/yolov8n.rknn model/bus.jpg
```

The input image is `model/bus.jpg`, a street photo of a city bus with people walking in front of it.

**Expected result:** the output lists each detected object with its label, box coordinates and confidence score:

```text
person @ (211 241 282 506) 0.864
bus @ (96 136 549 449) 0.864
person @ (109 235 225 535) 0.860
person @ (477 226 560 522) 0.848
person @ (79 327 116 513) 0.306
```

The same detections are drawn on the image and saved as `out.png` in the current directory:

![The bus photo with boxes around the bus and four people, each labelled with its class and confidence](/img/docs/core-3588e/core-3588e-yolov8-result.webp)

## Troubleshooting

| Problem | What to do |
| --- | --- |
| The build stops with `error: implicit declaration of function 'cos'` or `error: initialization of 'char *' from incompatible pointer type` | Run the build command in step 3 with the `CFLAGS` shown there. |
| You are not sure which RKNN runtime the example uses | Run `ldd rknn_yolov8_demo \| grep rknnrt` in the example directory. On Mixtile OS it shows `/usr/lib/aarch64-linux-gnu/librknnrt.so`. |
