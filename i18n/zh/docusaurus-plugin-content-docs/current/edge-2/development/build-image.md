---
sidebar_position: 1
description: Build a Mixtile OS image for Edge 2 from source with build.sh.
---

# Building a Mixtile OS Image

:::info
内容翻译同步中，以下为英文原文。
:::

The Mixtile OS image sources are public, and one script builds any combination of board, distribution and edition. This page covers Edge 2; the same repository builds the other supported boards.

## What you need

- An x86_64 computer running Ubuntu 24.04, with root access
- An internet connection: the build downloads the kernel, U-Boot and all packages

:::note
The build host must be x86_64. Building on the board itself is not supported.
:::

## Install the build dependencies

```bash title="Host PC"
sudo apt-get update
sudo apt-get install -y --no-install-recommends \
    ca-certificates curl wget git file xz-utils zstd bzip2 patch lsb-release \
    dctrl-tools mmdebstrap arch-test qemu-user-static binfmt-support \
    debian-archive-keyring ubuntu-keyring gpg gpg-agent dirmngr apt-utils \
    build-essential debhelper devscripts dpkg-dev fakeroot quilt \
    gcc-aarch64-linux-gnu bc bison flex libssl-dev libelf-dev dwarves kmod \
    cpio rsync python3 python3-dev python3-setuptools python3-pyelftools \
    python-is-python3 swig libpython3-dev u-boot-tools device-tree-compiler \
    libfdt-dev libgnutls28-dev uuid-dev parted fdisk gdisk dosfstools \
    e2fsprogs uuid-runtime util-linux udev
```

## Get the sources

```bash title="Host PC"
git clone https://github.com/mixtile-rockchip/mixtile-os.git
cd mixtile-os
```

## Build

```bash title="Host PC"
sudo ./build.sh --board=mixtile-edge2 --suite=noble --flavor=server
```

`--board`, `--suite` and `--flavor` are all required.

| Option | Values |
| --- | --- |
| `--board` | `mixtile-edge2`, `mixtile-blade3`, `mixtile-core3588e` |
| `--suite` | `noble` (Ubuntu 24.04 LTS), `resolute` (Ubuntu 26.04 LTS), `bookworm` (Debian 12), `trixie` (Debian 13) |
| `--flavor` | `server`, `desktop` |

Additional flags:

| Flag | What it does |
| --- | --- |
| `-c`, `--clean` | Start from a clean tree |
| `-uo`, `--uboot-only` | Build U-Boot only |
| `-ko`, `--kernel-only` | Build the kernel only |
| `-ro`, `--rootfs-only` | Build the root filesystem only |
| `-v`, `--verbose` | Verbose output |
| `-h`, `--help` | Show the usage text |

## Output

The image and its checksum are written to `images/`, with the same names as the published releases:

```text
images/ubuntu-24.04-server-arm64-mixtile-edge2.img.xz
images/ubuntu-24.04-server-arm64-mixtile-edge2.img.xz.sha256
```

Extract the archive and write it to the board as described in [Flashing a Firmware Image](/edge-2/getting-started/install-os).
