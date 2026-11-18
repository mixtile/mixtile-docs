---
sidebar_position: 6
sidebar_label: "Video Pipeline"
format: mdx
---

# Video Pipeline

Both examples use GStreamer for video input. Migration replaces NVIDIA-specific decoding and TensorRT/CUDA inference with Core3588E interfaces. DeepStream is included as an integration reference; it is not used by the tested pipeline.

Choose a platform for its processing pipeline, hardware APIs, and commands.

<div className="migration-actions migration-actions-two">
<a href="/core-3588e/application-development/jetson-migration/video-pipeline/jetson/"><strong>Jetson Video Interfaces</strong><span>NVIDIA hardware decoding · TensorRT / CUDA · Commands</span></a>
<a href="/core-3588e/application-development/jetson-migration/video-pipeline/core3588e/"><strong>Core3588E Video Interfaces</strong><span>MPP · RGA · RKNN · Docker examples</span></a>
</div>

## Next Steps

Compare decoding, image processing, and inference interfaces, then run the Core3588E [MPP decoding](/core-3588e/application-development/jetson-migration/video-pipeline/core3588e/mpp/) and [RGA image-processing](/core-3588e/application-development/jetson-migration/video-pipeline/core3588e/rga/) examples. See [Model Conversion](/core-3588e/application-development/jetson-migration/ai-model-migration/) for model builds and the [Quick Start](/core-3588e/application-development/jetson-migration/implementation/quick-start/) for demo deployment.
