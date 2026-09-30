---
sidebar_position: 4
description: Monitor restaurant table status with YOLO on a Hailo-8L accelerator.
---

# Monitoring Restaurant Table Status with YOLO on Hailo-8L

:::info
内容翻译同步中，以下为英文原文。
:::

## Story

![](/img/docs/monitoring-restaurant-table-status-with-yolo-on-hailo-8l/f7cf36c776f9.webp)

In today’s fast-paced restaurant industry, delivering exceptional service and maximizing operational efficiency are key to success. Imagine a smart system that can detect whether customers are ready to order or to be served, and whether tableware is ready to be cleared — all without staff intervention. AI-powered object detection makes this possible. This technology not only speeds up table service but also streamlines operations to provide an elevated dining experience for customers.

You Only Look Once (YOLO) is a state-of-the-art, real-time object detection algorithm. YOLO models have been popular for their performance and accuracy in object detection in images and videos.

YOLO models can detect people and some tableware out of the box. Therefore, with the power of YOLO object detection, we can easily get a table’s status as follows:

![](/img/docs/monitoring-restaurant-table-status-with-yolo-on-hailo-8l/9cdcc569d90c.webp)

![](/img/docs/monitoring-restaurant-table-status-with-yolo-on-hailo-8l/7be984aa8416.webp)

## Things used in this project

**Hardware:**

- Mixtile Edge 2
- Hailo-8L

**Software:**

- AI Software Suite
- YOLOv7e6 model

## How it works

Mixtile Edge 2 is a high-performance, low-power ARM SBC (single-board computer) that comes with a Linux OS pre-installed. It’s capable of running AI tasks on the edge. Moreover, its M.2 interface makes it possible to integrate with a Hailo AI accelerator for higher AI performance.

In this document, we run a YOLO model on Edge 2 powered by Hailo-8L to detect if customers and tableware are around a table to get the table’s status.

For easier implementation, this document uses a ready-to-use YOLOv7e6 model pre-trained and compiled by Hailo. If you need more specific customizations and higher accuracy, you can train and compile your own model.

**Model performance:**

| Network Name | mAP | Quantized | FPS (Batch Size=1) | FPS (Batch Size=8) | Input Resolution (HxWxC) | Params (M) | OPS (G) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| yolov7e6 | 55.37 | 2.19 | 4 | 5 | 1280x1280x3 | 97.20 | 515.12 |

> Note:
>
> For other ready-to-use models, go to [hailo_model_zoo](https://github.com/hailo-ai/hailo_model_zoo/tree/master/docs/public_models). This guide uses Hailo-8L. If you use another Hailo AI accelerator, use a model compatible with your product.

## Getting started

### Preparations

- Install [Ubuntu 22.04 Desktop](https://downloads.mixtile.com/edge2/ubuntu_image/image-release-raw-format-mixtile-edge2-ubuntu-22.04-desktop.img.zip) on Edge 2 (see [Installing an Operating System on Mixtile Edge 2](/edge-2/getting-started/install-os)).
- Connect Edge 2 to the Internet.
- Connect Edge 2 to a monitor.
- Install Hailo-8L to Edge 2 as follows:

![](/img/docs/monitoring-restaurant-table-status-with-yolo-on-hailo-8l/d98d48beac78.webp)

### Setting up Hailo and YOLO environments

#### Setting up Hailo environments

To integrate a Hailo AI accelerator with Edge 2, install HailoRT, PCIe Driver, and TAPPAS.

##### Installing HailoRT and PCIe Driver

1.  Log in to Edge 2 as a standard user.

2.  Install `dkms`:

    ```sh
    sudo apt-get update -y && sudo apt-get install -y dkms
    ```

3.  Download HailoRT and PCIe Driver to a desired directory:

    ```sh
    wget https://downloads.mixtile.com/doc-files/hailo/hailort-pcie-driver_4.19.0_all.deb \
    https://downloads.mixtile.com/doc-files/hailo/hailort_4.19.0_arm64.deb
    ```

4.  Install HailoRT and PCIe Driver:

    ```sh
    sudo apt install ./hailort-pcie-driver_4.19.0_all.deb ./hailort_4.19.0_arm64.deb
    ```

    :::note
    If messages below are prompted, input `y`:
    :::

    ```sh
    Do you wish to activate hailort service? (required for most pyHailoRT use cases) [y/N]:
    Do you wish to use DKMS? [Y/n]:
    ```

5.  Reboot Edge 2.

6.  Verify if the Hailo AI accelerator is recognized by the system:

    ```sh
    hailortcli fw-control identify
    ```

    If successfully recognized, it returns device details such as the board name and serial number.

##### Installing TAPPAS

1.  Install dependencies, which might take about several minutes:

    ```sh
    sudo apt-get install -y rsync ffmpeg x11-utils python3-dev python3-pip python3-setuptools python3-virtualenv python-gi-dev \
    libgirepository1.0-dev gcc-12 g++-12 cmake git libzmq3-dev librga-dev libopencv-dev python3-opencv libcairo2-dev libgirepository1.0-dev \
    libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good \
    gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl \
    gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio python-gi-dev python3-gi python3-gi-cairo gir1.2-gtk-3.0
    ```

2.  Install TAPPAS:

    ```sh
    git clone https://github.com/hailo-ai/tappas -b v3.29.0
    cd tappas
    ./install.sh --skip-hailort
    ```

    > Note:
    >
    > 1.  The installation may take about an hour to complete.
    > 2.  Enter the password when prompted.

3.  Verify TAPPAS installation:

    ```sh
    gst-inspect-1.0 hailotools
    ```

    If the installation is successful, it returns information about hailotools, including its filename and version.

#### Setting up YOLO environments

1.  Clone the repository:

    ```sh
    cd ~
    git clone https://github.com/hailo-ai/Hailo-Application-Code-Examples/
    cd Hailo-Application-Code-Examples/runtime/python/object_detection
    ```

2.  Download the YOLOv7e6 model:

    ```sh
    wget https://hailo-model-zoo.s3.eu-west-2.amazonaws.com/ModelZoo/Compiled/v2.13.0/hailo8l/yolov7e6.hef
    ```

3.  Set up environments:

    ```sh
    wget https://github.com/hailo-ai/hailo-rpi5-examples/raw/refs/heads/main/setup_env.sh
    source setup_env.sh
    ```

4.  Install dependencies:

    ```sh
    pip install -r requirements.txt
    ```

5.  Copy `utils.py` to the `object_detection` directory:

    ```sh
    cp ../utils.py .
    ```

6.  Install PyHailoRT:

    ```sh
    wget https://downloads.mixtile.com/doc-files/hailo/hailort-4.19.0-cp310-cp310-linux_aarch64.whl
    pip install hailort-4.19.0-cp310-cp310-linux_aarch64.whl
    ```

### Detecting customers and tableware

After all the setup, now let’s get into the most exciting part: detecting customers and tableware in the restaurant images!

1.  Let’s say your camera has taken pictures of your restaurants. You can put them in the `input-images` folder or other folders as you like (supported format: `.jpg`, `.jpeg`, `.png`, `.bmp`). To quickly try out the object detection feature, you can also download input images used in this document with:

    ```sh
    wget https://downloads.mixtile.com/doc-files/hailo/input-images.zip
    unzip input-images.zip
    ```

    Necessary files in the `object_detection` directory will be:

    ```bash
    ├── coco.txt
    ├── input-images
    │   ├── input_image0.jpeg
    │   ├── input_image1.jpg
    │   └── input_image2.jpg
    ├── object_detection.py
    ├── object_detection_utils.py
    ├── README.md
    ├── requirements.txt
    ├── setup_env.sh
    ├── utils.py
    └── yolov7e6.hef
    ```

2.  (Optional) Switch to the virtual environment (this step is required if you have restarted Edge 2 or opened a new terminal):

    ```sh
    source setup_env.sh
    ```

3.  Perform inference:

    ```sh
    ./object_detection.py -n yolov7e6.hef -i input-images/
    ```

  - `-n`: path to the pre-trained hef model.
  - `-i`: path to input images to perform inference on.

    Successful inference returns:

    ```sh
    2024-10-17 07:37:09.335 | INFO     | __main__:infer:181 - Inference was successful! Results have been saved in output_images
    ```

    The results will be output to `output_images`:

![](/img/docs/monitoring-restaurant-table-status-with-yolo-on-hailo-8l/c57ce96009c1.webp)

![](/img/docs/monitoring-restaurant-table-status-with-yolo-on-hailo-8l/d8988e933cb7.webp)

![](/img/docs/monitoring-restaurant-table-status-with-yolo-on-hailo-8l/224882e6b7bf.webp)

    From the output image, you can see persons and tableware are detected successfully. You can easily determine a table’s status:

  - Person: yes; tableware: no: table ready to take order or serve food
  - Person: yes; tableware: yes: table in use
  - Person: no; tableware: yes: table ready to be cleared up
  - Person: no; tableware: no: table available

## Next steps

This document only uses a pre-trained and compiled model provided by Hailo, meaning that it still has a lot of limitations. You can further train your own model to detect specific items, configure alerts for the results, and do so much more based on your needs. There are a lot of possibilities for you to find out, and here are some:

- Detect and manage inventory.
- Count customers.
- Count tableware usage.
- Analyze customers’ order preferences.
- …
