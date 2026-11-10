---
sidebar_position: 1
sidebar_label: "Demo Results"
format: mdx
---

# Demo Results

<div className="migration-start">

**Run these examples yourself**

[Quick Start → Set up · Run demos · View results](/core-3588e/application-development/jetson-migration/implementation/quick-start/)

</div>

## Core3588E Demo Results

These reference recordings show the original demo output. The current SDK generates English labels and result pages.

The demos cover person and vehicle detection, object tracking with IDs, line crossing, region entry and exit, dwell-time alerts, and occupancy counts.

### People Detection and Events

First 10 seconds of the source · Original output: 960 × 540 · 25 FPS playback

<video controls preload="metadata" src="https://downloads.mixtile.com/core3588e/file/jetson-to-core3588e/videos/people_tracking_events_10s.mp4" style={{width: '100%', maxWidth: '960px', maxHeight: '540px', display: 'block', margin: '1rem auto', background: '#111'}} />

### Vehicle Detection and Events

First 10 seconds of the source · Original output: 1920 × 1080 · 25 FPS playback

<video controls preload="metadata" src="https://downloads.mixtile.com/core3588e/file/jetson-to-core3588e/videos/vehicle_tracking_events_10s.mp4" style={{width: '100%', maxWidth: '960px', maxHeight: '540px', display: 'block', margin: '1rem auto', background: '#111'}} />

Crossings of the blue line are counted in both directions. The yellow region shows entry, exit, and occupancy events. Red boxes mark objects that exceed the dwell-time threshold. The 2-second threshold is for demonstration; counts have not been validated against human-annotated ground truth.

### Supermarket People Detection

10 seconds · 1920 × 1080 / 30 FPS playback. Core3588E runs person detection on the NPU through RKNN Runtime. This original recording uses thin boxes, Chinese class labels, and confidence scores.

<video controls preload="metadata" src="https://downloads.mixtile.com/core3588e/file/jetson-to-core3588e/videos/core3588e_detection_10s.mp4" poster="https://downloads.mixtile.com/core3588e/file/jetson-to-core3588e/images/core3588e_detection_preview.jpg" style={{width: '100%', maxWidth: '960px', maxHeight: '540px', display: 'block', margin: '1rem auto', background: '#111'}} />

[View the supermarket pipeline and commands](/core-3588e/application-development/jetson-migration/video-pipeline/core3588e/)

## Migration Scope

This guide demonstrates how to port a Jetson Orin Nano video AI example to Core3588E. It covers camera input, video processing, model conversion, and application APIs. Reuse portable application logic and replace platform-specific components, then adapt the example to your product.

[View the full migration guide](/core-3588e/application-development/jetson-migration/)
