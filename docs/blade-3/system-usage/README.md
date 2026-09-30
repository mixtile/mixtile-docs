---
sidebar_position: 0
description: What Mixtile OS is, which edition to choose, and how to log in once it is installed.
---

# Mixtile OS

Mixtile OS is the official operating system for Blade 3: Ubuntu or Debian, set up for the board, with the GPU, the video codecs and the NPU working out of the box.

## Editions

| Distribution | Editions |
| --- | --- |
| Ubuntu 26.04 LTS | Server, Desktop (GNOME) |
| Ubuntu 24.04 LTS | Server, Desktop (GNOME) |
| Debian 13 | Server, Desktop (GNOME) |
| Debian 12 | Server, Desktop (GNOME) |

The desktop edition starts GNOME on the HDMI monitor. The server edition has no graphical session and is used over SSH or the serial console. For help choosing, see [Downloads](/blade-3/download).

## Login details

| Item | Value |
| --- | --- |
| User | `mixtile` |
| Password | `mixtile` |
| Hostname | `mixtile-blade3` |
| Serial console | 1500000 baud |

You can log in on the HDMI monitor, the serial console or over SSH. On the desktop edition, `mixtile` is logged in to GNOME automatically. Change the password with `passwd` after the first login.

## What works out of the box

- **3D graphics** on the Mali GPU, with OpenGL and Vulkan, in the desktop edition
- **Hardware video decoding and encoding**, used by the included FFmpeg and GStreamer
- **Hardware 2D acceleration**
- **NPU inference**, for the examples under [Application Development](/blade-3/application-development)

## Building it yourself

The image sources are public. See [Building a Mixtile OS Image](/blade-3/low-level-development/build-image).
