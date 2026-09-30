---
sidebar_position: 4
---

# MIPI CSI Camera

:::info
内容翻译同步中，以下为英文原文。
:::

> In this document, we use Leetop A206 carrier board and a 15-pin IMX219 camera. Operations can be slightly different if you use other models of carrier boards and cameras.

The carrier board of Mixtile Core 3588E (hereinafter referred to as Core 3588E) provides two MIPI CSI connectors, through which you can connect two camera modules. Currently, the carrier board we use only supports the camera module IMX219. If you use other types of camera modules, you need to configure drivers accordingly.

![MIPI-CSI connectors](/img/docs/mipi-csi/b6e7153e76bf.webp)

_Figure 1. MIPI-CSI connectors_

![A camera module installed in the MIPI-CSI connector of Core 3588E](/img/docs/mipi-csi/a18450f72dfa.webp)

_Figure 2. A camera module installed in the MIPI-CSI connector of Core 3588E_

## Install a camera module

To install a camera module, connect its flex ribbon cable into the camera connector. Follow these steps:

1.  Gently lift up the connector latch. See Figure 3.
2.  Insert the camera ribbon cable. Ensure that the connectors at the bottom of the ribbon cable are facing the contacts in the connector. See Figure 4.
3.  Gently push the connector latch back into place. This may require two fingers, each at one end of the latch. Do not use excessive force.

![Gently lift the connector latch](/img/docs/mipi-csi/6ad0bde1a61d.webp)

_Figure 3. Gently lift the connector latch_

![Installing a camera module to the CSI connector](/img/docs/mipi-csi/d49a96420fbf.webp)

_Figure 4. Installing a camera module to the CSI connector_

## Use the camera

In our use cases, we use a script file to enable the camera function. The following are the detailed procedure.

1. Log in to Core 3588E using one of the following methods:
- [Login using a serial communication tool](/core-3588e/getting-started/connect#serial-console)
- [Login using SSH](/core-3588e/getting-started/connect#ssh)

2. Prepare the script file.

2.1 Save the following content to a script file.

```text
#!/bin/bash

cd /sys/class/video4linux/

for folder in v4l-subdev*; do
    if [ -d "$folder" ]; then
        name_file="$folder/name"
        if grep -q "imx219" "$name_file"; then
            dev_file="${folder}"
            v4l2-ctl -d  "/dev/$dev_file" --set-ctrl gain=10000,exposure=1024,analogue_gain=2000
        fi
    fi
done

for media_device in /dev/media*; do
    output=$(media-ctl -d $media_device -e "rkisp_mainpath" 2>&1)
    if [ -n "$output" ]; then
        device_number=$(echo $media_device | sed 's/[^0-9]*//g')
        echo "Found rkisp_mainpath on $media_device"
        echo "Launching gst-launch-1.0 for device $output"
        gst-launch-1.0 v4l2src device=$output ! video/x-raw,format=NV12,width=1920,height=1080,framerate=30/1 ! xvimagesink
    fi
done
```

2.2 Copy the script file to the **/tmp** directory of Core 3588E by running the `adb push` command (assume that you log in to Core 3588E using the ADB tool):

```bash
adb push [script name].sh /tmp
```

3\. On the console of Core 3588E, navigate to the **/tmp** directory of the script and execute the script:

```bash
cd /tmp
```

```bash
bash [script name].sh
```

You can see that the camera window is opened. Use a camera software to take photos or record videos. This document uses FFmpeg as an example.

### Take a photo

```text
ffmpeg -f v4l2 -i /dev/video31 -vframes 1 [photo name]
```

Example:

```text
ffmpeg -f v4l2 -i /dev/video31 -vframes 1 output.jpg
```

This command takes a photo and names it **output.jpg**.

### Capture a video

```text
ffmpeg -f v4l2 -i /dev/video31 -t [video length] [video name]
```

Example:

```text
ffmpeg -f v4l2 -i /dev/video31 -t 10 output.mkv
```

This command captures a video that is 10s long and names it **output.mkv**.

For more usage of FFmpeg, see the [official documentation of FFmpeg](https://ffmpeg.org/ffmpeg.html).

To exit the camera window, press **Ctl**+**C**.
