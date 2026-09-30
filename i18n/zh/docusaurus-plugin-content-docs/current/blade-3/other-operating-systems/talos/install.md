---
sidebar_position: 1
---

# Installing Talos Linux

:::info
内容翻译同步中，以下为英文原文。
:::

## Prerequisites

Before you start, ensure you have:

- follow [instuctions](https://www.talos.dev/v1.9/talos-guides/install/talosctl/#recommended) to intall `talosctl`

Download the latest `talosctl`.

- rkdeveloptool

Visit [rkdeveloptool](https://github.com/mixtile-rockchip/rkdeveloptool) and install it.

- spl loader

After building mixtile-talos, rk3588_spl_loader_xxxx.bin is generated in the output/uboot/ directory

## Download the Image

Go to [mixtile-talos releases](https://github.com/mixtile-rockchip/mixtile-talos/releases) select `metal-arm64.raw.xz` and download it.

## Boot options

You can boot Talos from:

1.  booting from eMMC

### Booting from eMMC

Flash the image to the eMMC and power on the node:

```bash
xz -d metal-arm64.raw.xz
rkdeveloptool db rk3588_spl_loader_xxxx.bin
rkdeveloptool wl 0 metal-arm64.raw
```

Proceed to [bootstrapping the node](https://github.com/siderolabs/talos/blob/bb973373121b0d55d614497a6f9b244a0201b149/website/content/v1.10/talos-guides/install/single-board-computers/mixtile_blade3.md#bootstrapping-the-node).

## Bootstrapping the Node

To monitor boot messages Wait until instructions for bootstrapping appear. Follow the UART instructions to connect to the interactive installer:

```bash
talosctl apply-config --insecure --mode=interactive --nodes <node IP or DNS name>
```

Alternatively, generate and apply a configuration:

```bash
talosctl gen config
talosctl apply-config --insecure --nodes <node IP or DNS name> -f <worker/controlplane>.yaml
```

Copy your `talosconfig` to `~/.talos/config` and fill in the `node` field with the IP address of the node and endpoints.

Once applied, the cluster will form, and you can use `kubectl`.

## Retrieve the `kubeconfig`

Retrieve the admin `kubeconfig` by running:

```bash
talosctl kubeconfig
```
