---
sidebar_position: 12
sidebar_label: "Migration Summary"
format: mdx
toc_max_heading_level: 2
---

# Migration Summary

<div className="migration-takeaway">

**This migration demonstrates NPU inference and hardware video encoding on Core3588E for a Jetson Orin Nano video AI application.**

Reuse portable application logic, convert ONNX to RKNN, and replace platform-specific video and inference APIs. Adapt the demos to your models, footage, and rules.

</div>

## What Customers Gain

<div className="migration-table">

| Benefit | What you get |
| --- | --- |
| **Start evaluating sooner** | Preconfigured Docker images and a Demo SDK with video, image, and event output |
| **Reuse application logic** | Reference implementations for detection, tracking, line crossing, region events, and counting |
| **Use hardware acceleration** | RKNN NPU inference, MPP video decoding and encoding, and RGA image-processing examples |
| **Better value for recorded video** | Hardware encoding reduces CPU work; lower module cost improves throughput per dollar |
| **Adapt to your product** | Conversion tools, API examples, source code, configuration, and test results |

</div>

## Why Choose Core3588E

**Core3588E is a strong option for AI detection with annotated video recording.** MPP hardware encoding offloads compression from the CPU; combined with a lower module price, it delivers more throughput per dollar in this example.

Jetson Orin Nano has higher inference-only throughput. When Core3588E meets your accuracy and speed requirements, its recording and cost advantages offer a practical alternative. [Compare performance and value](/core-3588e/application-development/jetson-migration/performance-benchmark/).

## Migration Steps

<div className="migration-table">

| Step | Action | Outcome |
| --- | --- | --- |
| Run the examples | Load the Docker images and run the demos | Verify setup and view the results |
| Integrate your model | Convert ONNX to RKNN and match preprocessing and postprocessing | Run your model on the NPU |
| Port application logic | Integrate tracking, rules, and result APIs | Build the application pipeline |
| Validate the product | Test representative footage and peripherals | Check speed, missed detections, false positives, and deployment requirements |

</div>

<div className="migration-start">

[**Quick Start → Set up, run demos, and view results**](/core-3588e/application-development/jetson-migration/implementation/quick-start/)

[See Demo Results](/core-3588e/application-development/jetson-migration/executive-summary/)

</div>

<details>
<summary>Migration effort, estimated schedule, and scope</summary>

ONNX models with supported operators and portable C++ or Python code are the most straightforward to port. DeepStream dependencies require video and metadata API changes. Custom CUDA code, closed-source plugins, unsupported operators, and peripheral drivers need separate assessment.

### Estimated Migration Schedule

These estimates assume a working Core3588E system, an exportable ONNX model, application source code, test footage, and one engineer familiar with Linux and AI deployment.

<div className="migration-table">

| Stage | Estimated effort | Completion criteria |
| --- | --- | --- |
| Run the supplied examples | Half a day to 1 day | Load the images and verify video and detection output |
| Integrate your model and footage | 2–5 working days | Convert the model and match preprocessing and postprocessing |
| Port application logic and APIs | 3–10 working days | Integrate rules, result APIs, and annotated video recording |
| Test target scenes and prepare deployment | 3–10 working days | Check speed, missed detections, false positives, and error handling |

</div>

**Plan for approximately 2–5 weeks to port and validate a standard video AI application.** Stages may overlap. These are engineering estimates, not measured effort or a delivery commitment. Custom carrier boards, drivers, operators, and production deployment need separate scheduling.

Tracking, events, and counting are reference implementations that need validation in your deployment. Add HTTP/MQTT delivery, stream reconnection, a complete C++ SDK, and production services as needed. Some RGA examples are standalone and are not integrated into the full video pipeline.

</details>
