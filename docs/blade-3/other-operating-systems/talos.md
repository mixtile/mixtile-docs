---
title: Talos Linux
sidebar_position: 3
description: Install the experimental Mixtile port of Talos Linux on Blade 3 and bootstrap a single-node Kubernetes cluster.
---

# Talos Linux

## Overview

Talos Linux is an operating system for running Kubernetes. Mixtile maintains an experimental port of it for Blade 3 in the [mixtile-talos](https://github.com/mixtile-rockchip/mixtile-talos) repository.

:::warning
The Blade 3 port is an alpha release based on **Talos v1.7.4**, not on the current Talos release. Sidero Labs, the developer of Talos, does not support Blade 3, and the port is not available from the Talos Image Factory.
:::

## Download

The current release of the port is [v0.2-alpha](https://github.com/mixtile-rockchip/mixtile-talos/releases/tag/v0.2-alpha). Download its image:

[metal-arm64.raw.xz](https://github.com/mixtile-rockchip/mixtile-talos/releases/download/v0.2-alpha/metal-arm64.raw.xz)

## Prerequisites

- `talosctl` **v1.7.4**, to match the Talos version of the image. Newer versions can generate configurations that Talos v1.7.4 does not accept. Download it from the [Talos v1.7.4 release](https://github.com/siderolabs/talos/releases/tag/v1.7.4), and see the [Talos v1.7 documentation](https://docs.siderolabs.com/talos/v1.7/getting-started/talosctl) for how to install it.
- `kubectl`, to use the cluster once it is running.
- A [serial console](/blade-3/getting-started/connect#serial-console), to see the board's IP address and the maintenance messages.

## Install

The image is a complete disk image with U-Boot included. Extract `metal-arm64.raw` from the archive, then write it to the eMMC as described in [Flashing an OS Image](/blade-3/getting-started/install-os).

This procedure has not yet been verified with the Talos image.

## Bootstrap

The steps below follow the release notes of v0.2-alpha. They have not been verified by running them on a board.

1. Power on Blade 3 and wait until the serial console shows the maintenance-mode messages and the board's IP address.
2. On your computer, generate a configuration. Replace `<node-ip>` with the board's IP address:

   ```bash title="Host PC"
   talosctl gen config blade3 https://<node-ip>:6443 --install-disk /dev/mmcblk0
   ```

   The cluster endpoint, here `https://<node-ip>:6443`, must match the node's IP address, or the virtual IP or DNS name you intend to use for the control plane.

3. Apply the control-plane configuration to the board:

   ```bash title="Host PC"
   talosctl apply-config --insecure --nodes <node-ip> --file controlplane.yaml
   ```

4. Bootstrap the cluster:

   ```bash title="Host PC"
   talosctl --talosconfig ./talosconfig bootstrap --nodes <node-ip> --endpoints <node-ip>
   ```

5. Retrieve the `kubeconfig`:

   ```bash title="Host PC"
   talosctl --talosconfig ./talosconfig kubeconfig --nodes <node-ip> --endpoints <node-ip>
   ```

If your network needs a proxy to pull container images, set `http_proxy`, `https_proxy` and `no_proxy` in the machine configuration before you apply it.

## Build from Source

The build script compiles the Blade 3 kernel and U-Boot and builds Talos v1.7.4, the version the port is based on. The versions are fixed in the script, so do not update them to a newer Talos release.

These steps follow the build script in the `main` branch of the repository. They have not been tested as written here.

:::warning
The current build script produces a Talos installer image, not the `metal-arm64.raw.xz` disk image published in the release. The step that creates the disk image is commented out in `build.sh` and is not maintained. A self-built installer image cannot be flashed with [Flashing an OS Image](/blade-3/getting-started/install-os).
:::

### Prerequisites

- An x86_64 computer running Linux, with Docker and the Docker Buildx plugin. The build runs privileged containers.
- A GitHub account and a personal access token with the **read:packages** and **write:packages** scopes. The build pushes its container images to the GitHub Container Registry, and it cannot run without pushing.

Log in to the registry:

```bash title="Host PC"
echo "<token>" | docker login ghcr.io -u <github-username> --password-stdin
```

### Get the source

```bash title="Host PC"
git clone https://github.com/mixtile-rockchip/mixtile-talos.git
cd mixtile-talos
```

### Configure the build

`build.sh` sets `USERNAME` to the GitHub account the images are pushed to. It is set in two places in the script. Change both to your own GitHub user name.

### Build

```bash title="Host PC"
./build.sh
```

The script downloads the kernel, U-Boot, the Rockchip firmware and the Talos source, builds them in containers, and pushes the resulting images.

### Build output

- `output/_out/installer-arm64.tar`, the Talos installer image for Blade 3
- The kernel, board overlay, imager and installer images, in `ghcr.io/<github-username>/`

## Known Limitations

- Only a single-node control plane, with the Flannel network plugin, has been validated. Multi-node clusters have not been tested.
- The port stays on Talos v1.7.4, which no longer receives updates from Sidero Labs.
