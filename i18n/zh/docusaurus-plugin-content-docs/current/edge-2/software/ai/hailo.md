---
sidebar_position: 1
description: Install a Hailo-8L M.2 accelerator on Edge 2 and run YOLO demos.
---

# Using a Hailo AI Accelerator

:::info
内容翻译同步中，以下为英文原文。
:::

Mixtile Edge 2 has an M.2 interface that is ideal to integrate with a Hailo AI accelerator for higher AI performance.

This document describes how to install a Hailo-8L M.2 AI accelerator to Edge 2 and run YOLO demos on Hailo-8L.

## Prerequisites

Before you start, make sure you have:

- Installed [Ubuntu 22.04 Desktop](https://downloads.mixtile.com/edge2/ubuntu_image/image-release-raw-format-mixtile-edge2-ubuntu-22.04-desktop.img.zip) on Edge 2 (see [Installing an Operating System](/edge-2/getting-started/install-os)).
- Connected Edge 2 to the Internet and to a monitor.

- Installed the Hailo AI accelerator on Edge 2:

    ![The Hailo accelerator installed on Edge 2](/img/docs/using-a-hailo-ai-accelerator-on-mixtile-edge-2-kit/d98d48beac78.webp)

:::note
To avoid an insufficient power supply, install the operating system before installing the Hailo AI accelerator.
:::

## Setting up Hailo environments

To integrate a Hailo AI accelerator with Edge 2, install HailoRT, PCIe Driver, and TAPPAS.

### Installing HailoRT and PCIe Driver

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

    If messages below are prompted, input `y`:

    ```sh
    Do you wish to activate hailort service? (required for most pyHailoRT use cases) [y/N]:
    Do you wish to use DKMS? [Y/n]:
    ```

5.  Reboot Edge 2.

6.  Verify if the Hailo AI accelerator is recognized by the system:

    ```sh
    hailortcli fw-control identify
    ```

    If you see an output similar to the one below, the Hailo AI accelerator is recognized successfully:

    ```sh
    Executing on device: 0002:21:00.0
    Identifying board
    Control Protocol Version: 2
    Firmware Version: 4.19.0 (release,app,extended context switch buffer)
    Logger Version: 0
    Board Name: Hailo-8
    Device Architecture: HAILO8L
    Serial Number: HLDDLBB242602797
    Part Number: HM21LB1C2LAE
    Product Name: HAILO-8L AI ACC M.2 B+M KEY MODULE EXT TMP
    ```

### Installing TAPPAS

TAPPAS is Hailo’s set of full application examples, implementing pipeline elements and pre-trained AI tasks. You can install it as follows:

1.  Install dependencies:

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

    If you see an output similar to the one below, TAPPAS is installed successfully:

    ```sh
    mixtile@mixtile-ubuntu:~$ gst-inspect-1.0 hailotools
    Plugin Details:
    Name                     hailotools
    Description              hailo tools plugin
    Filename                 /opt/hailo/tappas/lib/aarch64-linux-gnu/gstreamer-1.0/libgsthailotools.so
    Version                  3.29.0
    License                  unknown
    Source module            gst-hailo-tools
    Binary package           gst-hailo-tools
    Origin URL               https://hailo.ai/

    hailoaggregator: hailoaggregator - Cascading
    hailocounter: hailocounter - postprocessing element
    hailocropper: hailocropper
    hailoexportfile: hailoexportfile - export element
    hailoexportzmq: hailoexportzmq - export element
    hailofilter: hailofilter - postprocessing element
    hailogallery: Hailo gallery element
    hailograytonv12: hailograytonv12 - postprocessing element
    hailoimportzmq: hailoimportzmq - import element
    hailomuxer: Muxer pipeline merging
    hailonv12togray: hailonv12togray - postprocessing element
    hailonvalve: HailoNValve element
    hailooverlay: hailooverlay - overlay element
    hailoroundrobin: Input Round Robin element
    hailostreamrouter: Hailo Stream Router
    hailotileaggregator: hailotileaggregator
    hailotilecropper: hailotilecropper - Tiling
    hailotracker: Hailo object tracking element

    18 features:
    +-- 18 elements
    ```

## Running Hailo demos

1.  Download the Hailo demo project to a desired directory (let’s say the home directory):

    ```sh
    cd ~
    git clone https://github.com/hailo-ai/hailo-rpi5-examples.git
    git checkout 123e675 # The main branch currently has an unfixed bug. Checkout to this tested commit as a workaround.
    cd hailo-rpi5-examples
    ```

2.  Set up environments:

    ```sh
    source setup_env.sh
    ```

3.  Install dependencies:

    ```sh
    pip install -r requirements.txt
    ```

4.  Download resources:

    ```sh
    ./download_resources.sh
    ```

5.  Run the demos below as needed:

    > Important:
    >
    > -   If you have performed the operations above from remote access such as SSH, before running the demos below, you need to connect Edge 2 to a monitor, open Edge 2’s terminal, and perform steps 1-2 again to set up the environments. Otherwise, errors will occur.
    >
    > -   If you have restarted Edge 2 or opened a new terminal, also perform steps 1-2 again to set up the environments.
    >

    1.  Object detection (YOLOv6n):

        ```sh
        python basic_pipelines/detection.py --input resources/detection0.mp4
        ```

        You should see an output video similar to the one below:

![](/img/docs/using-a-hailo-ai-accelerator-on-mixtile-edge-2-kit/738745634d44.webp)

    2.  Instance segmentation (YOLOv5n):

        ```sh
        python basic_pipelines/instance_segmentation.py --input resources/detection0.mp4
        ```

        You should see an output video similar to the one below:

![](/img/docs/using-a-hailo-ai-accelerator-on-mixtile-edge-2-kit/b68f5cae2c87.webp)

    3.  Pose estimation (YOLOv8s pose):

        ```sh
        python basic_pipelines/pose_estimation.py --input resources/detection0.mp4
        ```

        You should see an output video similar to the one below:

![](/img/docs/using-a-hailo-ai-accelerator-on-mixtile-edge-2-kit/c8360e546b1d.webp)
