---
sidebar_position: 0
sidebar_label: "Jetson Migration"
format: mdx
---

# Jetson Orin Nano to Core3588E: Migration Guide and Benchmarks

Migrate a Jetson Orin Nano application to Core3588E using a tested video AI example. This guide covers hardware, system software, model conversion, and application APIs, with preconfigured Docker images, a Demo SDK, and benchmark results.

<div className="migration-actions">
<a href="/core-3588e/application-development/jetson-migration/executive-summary/"><strong>See Results</strong><span>Detection videos: people, vehicles, and a supermarket</span></a>
<a className="migration-action-primary" href="/core-3588e/application-development/jetson-migration/implementation/quick-start/"><strong>Quick Start →</strong><span>Set up, run the demos, and view results</span></a>
<a href="/core-3588e/application-development/jetson-migration/conclusion/"><strong>Migration Summary</strong><span>Feasibility, effort, schedule, and cost</span></a>
</div>

## Guide Contents

<div className="migration-table">

| Section | What you will learn |
| --- | --- |
| [Demo Results](/core-3588e/application-development/jetson-migration/executive-summary/) | See the migration results |
| [Jetson Platform](/core-3588e/application-development/jetson-migration/existing-jetson-platform/) | Check the source environment |
| [Core3588E Platform](/core-3588e/application-development/jetson-migration/core3588e-platform/) | Check the target environment |
| [Hardware Migration](/core-3588e/application-development/jetson-migration/hardware-migration/) | Review hardware compatibility |
| [System and BSP](/core-3588e/application-development/jetson-migration/software-migration/) | Install or customize the system |
| [Video Pipeline](/core-3588e/application-development/jetson-migration/video-pipeline/) | Replace platform-specific video components |
| [Model Conversion](/core-3588e/application-development/jetson-migration/ai-model-migration/) | Convert and validate models |
| [Application Migration](/core-3588e/application-development/jetson-migration/application-migration/) | Port application logic |
| [Performance and Value](/core-3588e/application-development/jetson-migration/performance-benchmark/) | Compare processing speed and cost |
| [Troubleshooting and Limits](/core-3588e/application-development/jetson-migration/migration-risks/) | Diagnose migration issues |
| [Deployment](/core-3588e/application-development/jetson-migration/implementation/) | Deploy and run the demos |
| [Migration Summary](/core-3588e/application-development/jetson-migration/conclusion/) | Assess suitability for your product |

</div>

## What's Included

<div className="migration-table">

| Component | What you can do |
| --- | --- |
| Docker images + Demo SDK | Run the people, vehicle, and supermarket demos on Core3588E; view annotated videos, images, tracks, and events |
| Model conversion containers | Convert ONNX to floating-point or INT8 RKNN models on Core3588E or an x86_64 host |
| MPP and RGA examples | Test hardware video decoding, resizing, cropping, rotation, and color conversion |
| Migration guide and benchmark results | Compare APIs, outputs, performance, and test conditions |

</div>

## Downloads and Setup

<div className="migration-table">

| Download | Contents |
| --- | --- |
| [Docker Environment](https://downloads.mixtile.com/core3588e/file/jetson-to-core3588e/docker/docker-environment-20261105.zip) | ARM64 runtime and converter images, plus an x86_64 converter image; RKNN 2.5.0 |
| [Demo SDK](https://downloads.mixtile.com/core3588e/file/jetson-to-core3588e/sdk/demo-sdk-20261106.tar.gz) | Source code, models, media, launch scripts, and test records |

</div>

Follow the [Quick Start](/core-3588e/application-development/jetson-migration/implementation/quick-start/) to download, set up, and run the demos.
