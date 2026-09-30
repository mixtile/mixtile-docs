---
sidebar_position: 1
description: Build a Mixtile OS image for Core 3588E from source with build.sh.
---

# Building a Mixtile OS Image

The Mixtile OS image sources are public, and one script builds any combination of board, distribution and edition. This page covers Core 3588E; the same repository builds the other supported boards.

## What you need

- An x86_64 computer running Ubuntu 24.04, with root access
- An internet connection: the build downloads the kernel, U-Boot and all packages

:::note
The build host must be x86_64. Building on the module itself is not supported.
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
sudo ./build.sh --board=mixtile-core3588e --suite=noble --flavor=server
```

All three options are required to build an image. To list the values an option accepts, pass `help` to it, for example:

```bash title="Host PC"
sudo ./build.sh --suite=help
```

| Option | Values |
| --- | --- |
| `--board` | `mixtile-core3588e` for Core 3588E. The same repository also builds `mixtile-blade3` and `mixtile-edge2`. |
| `--suite` | `noble` (Ubuntu 24.04 LTS), `resolute` (Ubuntu 26.04 LTS), `bookworm` (Debian 12), `trixie` (Debian 13) |
| `--flavor` | `server`, `desktop` |

Additional flags:

| Flag | What it does |
| --- | --- |
| `-c`, `--clean` | Remove the existing `build/` directory and build again from the start |
| `-v`, `--verbose` | Print every command as it runs |
| `-h`, `--help` | Show all options |

`sudo ./build.sh --help` also lists options that build only the kernel, U-Boot or the root filesystem. They build parts of the image and are not needed to build a complete image.

Without `--clean`, a new build reuses the kernel, U-Boot and root filesystem already in `build/`. To pick up a newer kernel, build with `--clean`.

## Output

The image and its checksum are written to `images/`. They are named `<distribution>-<version>-<flavor>-arm64-mixtile-core3588e.img.xz`, the same as the published releases. For the command above:

```text
images/ubuntu-24.04-server-arm64-mixtile-core3588e.img.xz
images/ubuntu-24.04-server-arm64-mixtile-core3588e.img.xz.sha256
```

A log of each build is kept in `build/logs/`.

Extract the archive and write it to the module as described in [Flashing an OS Image](/core-3588e/getting-started/install-os).
