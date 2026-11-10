---
sidebar_position: 1
sidebar_label: "MPP Hardware Decoding"
format: mdx
---

# MPP Hardware Decoding

## Decoded Output

![First hardware-decoded frame from the MPP C API, 1920×1080](https://downloads.mixtile.com/core3588e/file/jetson-to-core3588e/images/mpp_decoded_1920x1080.png)

The image above is the first frame decoded through the native MPP C API. The full-resolution PNG is hosted on the Mixtile download site; open it to inspect detail.

Workflow: local MP4 → MPP hardware decoding → save a frame → process with RGA. The native example decoded 30 frames from the same clip's H.264 elementary stream. The visible frame is 1920×1080; the buffer layout is 1920×1088, including bottom padding that is removed when saving. An RTSP example is included below.

## Download and Setup

Environment and source: [Quick Start: Docker + Demo SDK](/core-3588e/application-development/jetson-migration/implementation/quick-start/).

Complete the Quick Start setup, then replace `/absolute/extracted/path` with the extraction directory. If you are already in `demo-sdk/`, run `cd hardware`.

```bash
cd /absolute/extracted/path/demo-sdk/hardware
```

Run the remaining commands in this directory. Scripts, C++ source, and executables are in `public/`; sample MP4 and H.264 files are in `material/`. Dependencies are preinstalled in the container; the host must provide compatible BSP drivers.

## Run the Examples

After setup, execute the following in `demo-sdk/hardware/`.

The package includes MP4 and H.264 Annex B versions of the same supermarket clip. To use your own video, supply H.264 input in the format required by the command. Use a new output directory for each run; existing results are not overwritten.

```bash
# MP4: GStreamer demuxing, MPP decoding, and first-frame capture.
sudo ./public/run_hw_demo.sh decode-file \
  --input "$PWD/material/input.mp4" --output "$PWD/results/decode-file"

# Native MPP API: decode 30 raw-stream frames and save the first NV12 frame.
sudo ./public/run_hw_demo.sh mpp-api \
  --input "$PWD/material/input.h264" --output "$PWD/results/mpp-api" --frames 30
```

`decode-file` captures one frame. `--frames` controls the number of frames decoded by `mpp-api`.

## Pipeline and APIs

```text
Read video → Extract bitstream → Hardware decode → Access pixels → Save image
Local MP4    GStreamer          MPP              appsink/C API  CPU
```

<div className="migration-table">

| Step | Example interface | Input → output / execution |
| --- | --- | --- |
| Input and demux | Files: `filesrc → qtdemux`; streams: `rtspsrc → rtph264depay`; then `h264parse` | MP4 / RTP → H.264; CPU |
| Hardware decode | GStreamer `mppvideodec`, or the native MPP C API | H.264 → decoded frames; video decoder hardware |
| Access decoded frames | GStreamer `appsink`, `GstVideo.VideoInfo`, `buffer.map`; native `MppFrame` | Read visible pixels using the buffer's format, offset, and stride |
| Convert and save | GStreamer: `videoconvert`; native path: NumPy NV12 to RGB; Pillow image encoding | CPU color conversion and image encoding |

</div>

The GStreamer path is `h264parse → mppvideodec → videoconvert → RGB → appsink`. Missing plugins or hardware errors fail explicitly; software video decoding is not substituted.

## Native C++ Integration

After creating a decoder instance, submit compressed packets with [`decode_put_packet`](https://github.com/rockchip-linux/mpp/blob/958803d74e4b53a56fedc1104408bf32a71e22c8/inc/rk_mpi.h#L90-L107) and retrieve frames with `decode_get_frame`. The snippet shows the core sequence; the complete loop is in `public/mpp_decode_demo.cc`.

```cpp
MppCtx ctx = nullptr;
MppApi *mpi = nullptr;
if (mpp_create(&ctx, &mpi) != MPP_OK)
    throw std::runtime_error("mpp_create failed");
if (mpp_init(ctx, MPP_CTX_DEC, MPP_VIDEO_CodingAVC) != MPP_OK) {
    mpp_destroy(ctx);
    throw std::runtime_error("mpp_init failed");
}
// packet contains H.264 data; check each return value and handle retries.
MPP_RET put_status = mpi->decode_put_packet(ctx, packet);
MppFrame frame = nullptr;
MPP_RET get_status = mpi->decode_get_frame(ctx, &frame);
```

A submitted packet may not produce a frame immediately. Handle full queues, `info_change`, output buffer groups, and end-of-stream (EOS) draining. No output yet does not mean decoding has finished. Demux MP4 or depayload RTP before submitting compressed packets to MPP. See the official `mpi_dec_test.c` implementation.

Read dimensions with [`mpp_frame_get_width` / `mpp_frame_get_height`](https://github.com/rockchip-linux/mpp/blob/958803d74e4b53a56fedc1104408bf32a71e22c8/inc/mpp_frame.h#L335-L434), stride with [`mpp_frame_get_hor_stride` / `mpp_frame_get_ver_stride`](https://github.com/rockchip-linux/mpp/blob/958803d74e4b53a56fedc1104408bf32a71e22c8/inc/mpp_frame.h#L335-L434), and format with [`mpp_frame_get_fmt`](https://github.com/rockchip-linux/mpp/blob/958803d74e4b53a56fedc1104408bf32a71e22c8/inc/mpp_frame.h#L335-L434). Use `mpp_frame_get_buffer` to access the buffer. Its file descriptor can be passed to RGA; retain frame and buffer references until processing finishes. Only 1080 of the 1088 buffer rows contain visible image data.

## Output Files

Each output directory contains `frame.png`, `frame.jpg`, `summary.json`, and `demo_summary.json`. GStreamer also saves `frame.rgb`; native MPP saves `frame-000.nv12` and `process.log`. JSON records interfaces, dimensions, stride, status, and checksums. Images support visual inspection; raw files support downstream processing. Background: [Rockchip MPP Developer Guide (English)](https://github.com/rockchip-linux/mpp/blob/958803d74e4b53a56fedc1104408bf32a71e22c8/doc/Rockchip_Developer_Guide_MPP_EN.md).

From `demo-sdk/hardware/`, serve the results:

```bash
python3 -m http.server 8001 --bind 0.0.0.0 --directory results
```

Open `http://<Core3588E_IP>:8001/` from a computer on the same network. Select `decode-file/` or `mpp-api/`, then open `frame.png`. Press Ctrl+C to stop the server before running more commands. If port 8001 is in use, choose another port in both the command and URL.

## Optional: RTSP Camera Input

After the MP4 example, substitute a camera or stream server. This mode captures one frame over TCP and uses the same MPP hardware decoder.

```bash
RTSP_URL='rtsp://<RTSP_SERVER_IP>:8554/supermarket'
sudo ./public/run_hw_demo.sh decode-rtsp \
  --rtsp "$RTSP_URL" --output "$PWD/results/decode-rtsp"
```

## Validation and Limits

Local MP4 and RTSP inputs produced 1920×1080 frames through `mppvideodec`. The native MPP C API decoded 30 frames and saved the first as NV12. The example supports H.264 and linear 8-bit NV12 only; unsupported formats fail. Different RGB conversion paths in GStreamer and C API examples may produce small rounding differences.

The first NV12 frame has visible dimensions of 1920×1080 in a 1920×1088 buffer. The example saves visible pixels row by row using the actual stride and calls `mpp_buffer_sync_ro_begin/end` around CPU reads. MPP allocates buffers internally; the example acknowledges `info_change` without configuring an external buffer group.

Next, pass the RGB image to the [RGA Image Processing examples](/core-3588e/application-development/jetson-migration/video-pipeline/core3588e/rga/).
