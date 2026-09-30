---
sidebar_position: 5
description: Monitor parking space occupancy with YOLO on a Hailo-8L accelerator.
---

# Monitoring Parking Space Occupancy with YOLO on Hailo-8L

:::info
内容翻译同步中，以下为英文原文。
:::

## Story

![](/img/docs/monitoring-parking-space-occupancy-with-yolo-on-hailo-8l/3e8ef0cf6cac.webp)

Monitoring parking space occupancy is crucial for effective parking management. Object detection techniques make it possible to detect whether a vehicle has occupied a specific parking space in real time, all without human intervention, speeding up and streamlining parking space management.

You Only Look Once (YOLO) is a state-of-the-art, real-time object detection algorithm. YOLO models have been popular for their performance and accuracy in object detection in images and videos.

YOLO models can detect cars and some vehicles out of the box. Therefore, with the power of YOLO object detection, we can easily get a parking space’s status like this:

![](/img/docs/monitoring-parking-space-occupancy-with-yolo-on-hailo-8l/dce14b03bb28.webp)

![](/img/docs/monitoring-parking-space-occupancy-with-yolo-on-hailo-8l/f44412df5978.webp)

## Things used in this project

**Hardware:**

- Mixtile Blade 3
- Hailo-8L
- USB camera

**Software:**

- AI Software Suite
- YOLOv8m model

## How it works

Mixtile Blade 3 (also known as Blade 3), designed for edge AI applications, is a high-performance single-board computer with 6-TOPS NPU. With its expandable U.2 interface, it can integrate with a Hailo AI accelerator for higher AI performance.

In this document, we run a YOLO model on Blade 3 powered by Hailo-8L to detect if a car is in a parking space in real time to get a parking space’s occupancy.

For easier implementation, this document uses a ready-to-use YOLOv8m model pre-trained and compiled by Hailo. If you need more specific customizations and higher accuracy, you can train and compile your own model.

**Model performance:**

| Network Name | mAP | Quantized | FPS (Batch Size=1) | FPS (Batch Size=8) | Input Resolution (HxWxC) | Params (M) | OPS (G) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| yolov8m | 49.91 | 0.74 | 38 | 60 | 640x640x3 | 25.9 | 78.93 |

> Note:
>
> For other ready-to-use models, go to [hailo_model_zoo](https://github.com/hailo-ai/hailo_model_zoo/tree/master/docs/public_models). This guide uses Hailo-8L. If you use another Hailo AI accelerator, use a model compatible with your product.

## Getting started

### Preparations

- Install [Ubuntu 22.04 Desktop](https://downloads.mixtile.com/blade3/image/image-release-rockchip-format-mixtile-blade3-ubuntu22.04-desktop-240327.img.zip) to Blade 3 (see [Installing an Operating System on Mixtile Blade 3](/blade-3/getting-started/install-os)).

- Connect Blade 3 to the Internet.

- Connect Blade 3 to a monitor.

- Connect Blade 3 to a USB camera (a USB-C hub is needed).

- Install Hailo-8L to Blade 3 (a U.2 to M.2 NVMe adapter is needed) as follows:

![](/img/docs/monitoring-parking-space-occupancy-with-yolo-on-hailo-8l/6489a50cbcb2.webp)

### Setting up Hailo and YOLO environments

#### Setting up Hailo environments

To integrate a Hailo AI accelerator with Blade 3, install HailoRT, PCIe Driver, and TAPPAS.

##### Installing HailoRT and PCIe Driver

1.  Log in to Blade 3 as a standard user.

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

5.  Reboot Blade 3.

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
    gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio python-gi-dev python3-gi python3-gi-cairo gir1.2-gtk-3.0 v4l-utils
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
    git clone https://github.com/hailo-ai/hailo-rpi5-examples.git
    git checkout 123e675 # The main branch currently has an unfixed bug. Checkout to this tested commit as a workaround.
    cd hailo-rpi5-examples
    ```

2.  Download the YOLOv8m model:

    ```sh
    wget https://hailo-model-zoo.s3.eu-west-2.amazonaws.com/ModelZoo/Compiled/v2.13.0/hailo8l/yolov8m.hef
    ```

3.  Set up environments:

    ```sh
    source setup_env.sh
    ```

4.  Install dependencies:

    ```sh
    pip install -r requirements.txt
    ```

### Detecting cars

After all the setup, now let’s get into the most exciting part: detecting cars in the parking space!

1.  (Optional) If you have performed the operations above from remote access such as SSH, before detecting cars, you need to connect Blade 3 to a monitor, open Blade 3’s terminal, and run the commands below to set up the environments again. Otherwise, errors will occur.

    ```sh
    cd hailo-rpi5-examples
    source setup_env.sh
    ```

    > If you have restarted Blade 3 or opened a new terminal, also perform this step to set up the environments.

2.  Find your USB camera device:

    ```sh
    v4l2-ctl --list-devices
    ```

    The output is similar to the one below:

    ```text
    2K USB Camera: 2K USB Camera (usb-xhci-hcd.10.auto-1.4.1):
        /dev/video1
        /dev/video2
        /dev/media0
    ```

    In most cases, the first device `/dev/video1` is your USB camera.

3.  Perform inference:

    **Option 1: perform inference on a USB camera source:**

    ```bash
    python basic_pipelines/detection.py --hef-path yolov8m.hef --input /dev/video1
    ```

    **Option 2: perform inference on a video file:**

    1.  Put the input video file to a desired directory. To quickly try out the detection feature, you can download the example video below:

        ```sh
        wget https://downloads.mixtile.com/doc-files/hailo/parking_space.mp4
        ```

    2.  Start inference:

        ```sh
        python basic_pipelines/detection.py --hef-path yolov8m.hef --input parking_space.mp4
        ```

  - `--hef-path` (optional): path to the pre-trained hef model. If not set, `YOLOv6n` is used by default.
  - `--input` (required): path to the input video source to perform inference on. It can be a USB camera or video file.

    You should see an output video as follows:

![](/img/docs/monitoring-parking-space-occupancy-with-yolo-on-hailo-8l/8de6663a258f.webp)

    From the output video, you can easily determine a parking space’s status:

  - If a car is detected in the parking space: occupied
  - If no car is detected in the parking space: available

## Next steps

This document only uses a pre-trained and compiled model provided by Hailo, meaning that it still has a lot of limitations. You can further train your own model to detect specific items, configure alerts for the results, and do so much more based on your needs. There are a lot of possibilities for you to find out, and here are some:

- Count cars entering a parking space.
- Monitor vehicle movement in a parking space.
- Count available parking spaces.
- Detect whether cars are well-parked in restricted areas.
- …
