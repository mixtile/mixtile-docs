---
sidebar_position: 3
description: Set up the Mixtile AI box project and run object detection on Edge 2.
---

# Edge AI Box

:::info
内容翻译同步中，以下为英文原文。
:::

Mixtile provides an [AI box](https://github.com/Buyuliang/aiBox) project that allows you perform object detection for the use cases below at a time:

- Detect fire/smoke.
- Detect falldown.
- Count people.

You can follow this tutorial to set up the Mixtile AI box project on Edge 2 and perform inference.

## Prerequisites

1.  Install Ubuntu 22.04 Desktop on Edge 2 (see [Installing an Operating System](/edge-2/getting-started/install-os)).
2.  Connect Edge 2 to the Internet.

## Setting up AI box

1.  Install dependencies:

    ```sh
    sudo apt update && sudo apt install -y build-essential cmake libopencv-dev libjsoncpp-dev
    ```

2.  Clone project repository:

    ```sh
    git clone https://github.com/Buyuliang/aiBox.git
    ```

3.  Build the `aibox` executable file:

    ```sh
    cd aiBox
    bash build.sh
    ```

    If `Build and installation completed successfully` is displayed, the `aibox` executable file is built to the `install` directory successfully:

    ```sh
    install
    ├── aibox
    ├── lib
    │   ├── librga.so
    │   └── librknnrt.so
    └── model
        ├── coco_80_labels_list.txt
        ├── falldet.rknn
        ├── firesmoke.rknn
        └── perdet.rknn
    ```

## Performing inference

Now that you have compiled the `aibox` executable file, you can run it as follows:

```sh
cd install
./aibox video-input # replace video-input with the actual video source.

# Example:
./aibox ../sources/fire.mp4
```

### Input description

`video-input`: video source to perform inference on. Supported values:

- Video file
- USB camera (e.g., `/dev/video1`)
- RTSP camera (e.g., `rtsp://camera-ip-address:554/stream1`)

### Output description

This command outputs PNG images and relevant JSON files to `install/output`:

```bash
install/output/
├── falldet # people falldown results
├── firesmokedet # fire and smoke results
│   ├── 20241029111828.json # inference results in json
│   ├── 20241029111828.png # inference results in png
│   ├── 20241029111829.json
│   ├── 20241029111829.png
│   ├── 20241029111830.json
│   ├── 20241029111830.png
│   ├── 20241029111831.json
│   ├── 20241029111831.png
│   ├── 20241029111832.json
│   └── 20241029111832.png
├── perdet # people count results
└── result # unified results for falldown, fire and smoke, and people count
    ├── 20241029111828.json
    ├── 20241029111828.png
    ├── 20241029111829.json
    ├── 20241029111829.png
    ├── 20241029111830.json
    ├── 20241029111830.png
    ├── 20241029111831.json
    ├── 20241029111831.png
    ├── 20241029111832.json
    └── 20241029111832.png
```

You can go to these directories to look at the output images and JSON files. For more information about the output, see [Inference examples](#inference-examples).

> Note
>
> If your source is from a USB or RTSP camera, it keeps outputting files to the `output` folder until you stop the terminal.

## Inference examples

> Note:
>
> Commands below perform inference on video files. You can use other video sources, such as a USB camera videos, as you like.

### Counting people

Run this command to try out the people count feature:

```sh
./aibox ../sources/people.mp4
```

If people appear in the pre-configured green area, results will be saved to `install/output/perdet`, including images with the count numbers and the corresponding JSON files.

**Output image:**

![](/img/docs/edge-ai-box-powered-by-mixtile-edge-2/7eea3eebba21.webp)

> Note: `Count: 3` indicates three people appear in the green area.

**Snippet of an output JSON:**

```json
[
    {
        "height": 77.448562622070312,
        "id": 1,
        "width": 40.873950958251953,
        "x": 621.55810546875,
        "y": 363.69189453125
    },
    {
        "height": 88.120887756347656,
        "id": 2,
        "width": 46.946933746337891,
        "x": 763.70953369140625,
        "y": 310.00149536132812
    },
    {
        "height": 91.801826477050781,
        "id": 3,
        "width": 43.065662384033203,
        "x": 542.39923095703125,
        "y": 360.87911987304688
    }
]
```

### Detecting fire and smoke

Run this command to try out fire and smoke detection:

```sh
./aibox ../sources/fire.mp4
```

If smoke or fire is detected, results will be saved to `install/output/firesmokedet`, including images with fire or smoke, and the corresponding JSON files.

**Output image:**

![](/img/docs/edge-ai-box-powered-by-mixtile-edge-2/dce8fc10eb00.webp)

**Output JSON:**

```json
[
    {
        "height": 150.0,
        "id": "fire",
        "width": 211.0,
        "x": 46.0,
        "y": 219.0
    },
    {
        "height": 121.0,
        "id": "smoke",
        "width": 226.0,
        "x": 320.0,
        "y": 220.0
    }
]
```

### Detecting falldown

Run this command to try out falldown detection:

```sh
./aibox ../sources/falldown.mp4
```

If someone falls, results will be saved to `install/output/falldet`, including the falldown images and the corresponding JSON files.

**Output image:**

![](/img/docs/edge-ai-box-powered-by-mixtile-edge-2/ecff5e91f84a.webp)

> Note: The black rectangle with the number `0` indicates falldown is detected.

**Output JSON:**

```json
[
    {
        "height": 229.0,
        "id": 0,
        "width": 440.0,
        "x": 13.0,
        "y": 293.0
    }
]
```

### Unified inference: count people and detect falldown

In the [Detecting falldown](#detecting-falldown) example above, the `falldown.mp4` video actually **has people to count** and **people falldown** at the same time. In this case, Mixtile AI box detects falldown and also counts people, and then not only outputs the results to the standalone `install/output/falldet` and `install/output/perdet` directories, but also provides unified results in `install/output/result` as follows:

**Unified output image:**

![](/img/docs/edge-ai-box-powered-by-mixtile-edge-2/8d7f33e1384c.webp)

This image contains results for both people count and falldown:

- The black rectangle with the number `0` indicates falldown is detected.
- `Count: 1` indicates 1 person appears in the specified green area.

**Unified output JSON:**

```json
{
    "RegionCoun" : 1,
    "fallDetections" :
    [
        {
            "height" : 244.0,
            "id" : 0,
            "width" : 627.0,
            "x" : 197.0,
            "y" : 256.0
        }
    ],
    "frameID" : 246,
    "personDetections" :
    [
        {
            "height" : 295.62838745117188,
            "id" : 1,
            "width" : 524.926513671875,
            "x" : 221.60183715820312,
            "y" : 235.85356140136719
        }
    ]
}
```
