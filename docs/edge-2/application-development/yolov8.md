---
sidebar_position: 1
description: Build Rockchip's YOLOv8 example on Edge 2 and detect objects in an image on the NPU.
---

# Run YOLOv8 on the Edge 2 NPU

This guide builds the YOLOv8 example from Rockchip's [rknn_model_zoo](https://github.com/airockchip/rknn_model_zoo) on Edge 2 and runs object detection on a sample image with the NPU. Everything is done on the board itself.

:::note
This guide has not yet been verified on Edge 2 hardware with Mixtile OS.
:::

## Before you start

- Edge 2 is running Mixtile OS (see [Flashing an OS Image](/edge-2/getting-started/install-os)) and is connected to the internet.
- You are logged in on the board, on its desktop, over [SSH](/edge-2/getting-started/connect#ssh) or on the [serial console](/edge-2/getting-started/connect#serial-console).

Mixtile OS already includes the RKNN runtime (`librknnrt`) that runs models on the NPU, so you do not need to install it.

## Step 1. Install the build tools

```bash title="Edge 2"
sudo apt update
sudo apt install -y build-essential cmake git
```

## Step 2. Download the example and the model

1. Clone rknn_model_zoo into your home directory:

   ```bash title="Edge 2"
   cd ~
   git clone https://github.com/airockchip/rknn_model_zoo
   ```

2. Download the `yolov8n.rknn` model into the example's `model` directory:

   ```bash title="Edge 2"
   cd ~/rknn_model_zoo/examples/yolov8/model
   wget https://downloads.mixtile.com/doc-files/yolov8/rk3568/yolov8n.rknn
   ```

   This model is `yolov8n.onnx` converted for the RK3568 NPU. To convert a model yourself, see [Convert to RKNN](https://github.com/airockchip/rknn_model_zoo/blob/main/examples/yolov8/README.md#4-convert-to-rknn).

## Step 3. Build the example

```bash title="Edge 2"
cd ~/rknn_model_zoo
bash build-linux.sh -t rk3568 -a aarch64 -d yolov8
```

**Expected result:** the build ends with `Built target rknn_yolov8_demo`, and the example is installed to `~/rknn_model_zoo/install/rk356x_linux_aarch64/rknn_yolov8_demo/`:

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

```bash title="Edge 2"
cd ~/rknn_model_zoo/install/rk356x_linux_aarch64/rknn_yolov8_demo
./rknn_yolov8_demo model/yolov8n.rknn model/bus.jpg
```

The input image is `model/bus.jpg`:

![A street photo of a blue city bus with several people walking in front of it](/img/docs/running-yolov8-on-mixtile-edge-2-kit/b122a18b24e9.webp)

**Expected result:** the output lists each detected object with its label, box coordinates and confidence score, and the same detections are drawn on the image and saved as `out.png` in the current directory:

![The bus photo with boxes around the bus and the people, each labelled with its class and confidence](/img/docs/running-yolov8-on-mixtile-edge-2-kit/8bda7edf2fdc.webp)

## Troubleshooting

| Problem | What to do |
| --- | --- |
| The build stops with `error: implicit declaration of function 'cos'` or `error: initialization of 'char *' from incompatible pointer type` | The GCC version in Mixtile OS treats two old patterns in the example's code as errors. Build with `CFLAGS="-Wno-error=incompatible-pointer-types -Wno-error=implicit-function-declaration" bash build-linux.sh -t rk3568 -a aarch64 -d yolov8`. |
| You are not sure which RKNN runtime the example uses | Run `ldd rknn_yolov8_demo \| grep rknnrt` in the example directory. |
