---
sidebar_position: 1
description: Host requirements and keys for a NAOS build.
---

# Prerequisites

## Build host

The reference build host is an x86_64 Linux machine. The reference environment is the container in `misc-tools/build-env/`, based on Ubuntu 22.04. It includes the aarch64 cross toolchain, QEMU user emulation and the filesystem and image tools the build needs.

The container is recommended because the build runs `chroot` into an aarch64 Alpine root filesystem and needs tools that are not installed by default on most hosts. The build scripts download the Alpine minirootfs with `wget`; make sure `wget` is available in the container or on the host.

| Requirement | Details |
| --- | --- |
| Architecture | x86_64 |
| Operating system | Linux; the provided container is Ubuntu 22.04 |
| Privileges | root, or `sudo` inside the build environment |
| Network | GitHub and the Alpine package mirrors used by the build |
| Docker | for the recommended container workflow |

## Root access and devices

The build creates loop devices and filesystems. Start the container with `--privileged` and mount `/dev`, as shown in [Building NAOS](/naos/getting-started/build-naos). A native build needs the same access.

## Choose a board

Use one of the board names in [Supported boards](/naos/#supported-boards), for example `mixtile-core3588e-nano`. The value is passed to `build.sh --board`.

## Keys

The repository contains development keys so a first image can be built. Replace them before deploying a device.

| Key | Used for | Replace at |
| --- | --- | --- |
| Secure boot key pair | Signs the FIT boot image | `packages/keys/` |
| Filesystem encryption key | Encrypts the system and userdata images | `tools/linux_securitydm/encrypted_key` |
| SSH CA public key | Authorizes SSH user certificates | `packages/alpine/etc/ssh/ssh_ca_key.pub` |
| USB offline upgrade keys | Signs and encrypts USB update packages | `tools/upgrade_key/` and `packages/alpine/etc/upgrade/` |

The commands to generate and install each key are in [Replacing keys](/naos/system-management/security#replacing-keys).

:::warning
Do not use the development keys for production. The SSH CA public key in the repository does not correspond to a private key you control, so replace it before building an image you need to log in to.
:::

## Optional: APK repository

The full-image path does not need an APK repository. The package path and [Image Generation](/naos/system-development/image-generation) do: `genimage-tools` downloads U-Boot, kernel and root filesystem APKs from a repository you host.

## Next step

[Building NAOS](/naos/getting-started/build-naos)
