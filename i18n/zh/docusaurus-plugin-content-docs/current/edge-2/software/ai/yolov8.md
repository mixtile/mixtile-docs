---
sidebar_position: 2
description: Deploy YOLOv8 with rknn_model_zoo on Edge 2 and run inference on the NPU.
---

# Running YOLOv8

:::info
内容翻译同步中，以下为英文原文。
:::

YOLOv8 is suitable for deployment on edge devices and real-time applications due to its speed and efficiency. This tutorial uses [rknn_model_zoo](https://github.com/airockchip/rknn_model_zoo) to describe how to deploy YOLOv8 on Mixtile Edge 2 and perform inference.

## Prerequisites

Before you start, make sure you have:

- Installed a Linux distribution on Edge 2 (see [Installing an Operating System](/edge-2/getting-started/install-os)).
- Connected Edge 2 to the Internet.

> This guide has been tested with [Debian 11](https://downloads.mixtile.com/edge2/debian_image/image-release-rockchip-format-mixtile-edge2-debian11-20240909.img.zip).

## Install dependencies

```bash
sudo apt update
sudo apt install -y libopencv-dev cmake build-essential
```

## Download the demo and model

1.  Download the demo to a desired directory on Edge 2 (let's say the home directory):

    ```bash
    cd ~
    git clone https://github.com/airockchip/rknn_model_zoo
    ```

2.  Download the `yolov8n.rknn` model:

        ```bash
    cd rknn_model_zoo/examples/yolov8/model
    wget https://downloads.mixtile.com/doc-files/yolov8/rk3568/yolov8n.rknn
    ```

    > The `yolov8n.rknn` model above is converted from `yolov8n.onnx` for your convenience (see [Convert to RKNN](https://github.com/airockchip/rknn_model_zoo/blob/main/examples/yolov8/README.md#4-convert-to-rknn)). You can also use other models as needed.

## Compile the demo

```bash
# go to the rknn_model_zoo directory
cd ~/rknn_model_zoo

# grant permission to build-linux.sh
chmod 777 build-linux.sh

# compile the demo
./build-linux.sh -t rk3568 -a aarch64 -d yolov8
```

Once the demo is compiled, the executable file `rknn_yolov8_demo` is output to `rknn_model_zoo/install/rk356x_linux_aarch64/rknn_yolov8_demo`:

```bash
install
└── rk356x_linux_aarch64
    └── rknn_yolov8_demo
        ├── lib
        │   ├── librga.so
        │   └── librknnrt.so
        ├── model
        │   ├── bus.jpg
        │   ├── coco_80_labels_list.txt
        │   └── yolov8n.rknn
        ├── rknn_yolov8_demo
        └── rknn_yolov8_demo_zero_copy
```

## Perform inference

**Usage:**

```bash
./rknn_yolov8_demo <model> <input-image>
```

**Example:** The example below performs inference on the following `model/bus.jpg` input image with the `model/yolov8n.rknn` model:

![The bus.jpg input image](/img/docs/running-yolov8-on-mixtile-edge-2-kit/b122a18b24e9.webp)

```bash
# go to the directory of the executable file
cd ~/rknn_model_zoo/install/rk356x_linux_aarch64/rknn_yolov8_demo/

# set LD_LIBRARY_PATH
export LD_LIBRARY_PATH=./lib

# perform inference
./rknn_yolov8_demo model/yolov8n.rknn model/bus.jpg
```

## Expected results

The output contains information similar to the one below, including the labels, coordinates, and their corresponding scores:

```bash
person @ (211 241 282 506) 0.864
bus @ (96 136 549 449) 0.864
person @ (109 235 225 535) 0.860
person @ (477 226 560 522) 0.848
person @ (79 327 116 513) 0.306
```

The output image is saved as `out.png` in the same directory as the executable:

![yolov8-inference-bus-output](/img/docs/running-yolov8-on-mixtile-edge-2-kit/8bda7edf2fdc.webp)
