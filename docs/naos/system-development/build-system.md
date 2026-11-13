---
sidebar_position: 1
description: Build targets, board configuration and partition layout.
---

# Build System

`build.sh` is the top-level entry point. It selects a board from `board/`, calls the component scripts in `scripts/`, and collects the artifacts in `build/output/`.

## Repository layout

| Path | Contents |
| --- | --- |
| `build.sh` | Top-level build entry point and target dispatch |
| `board/<board>/` | Kernel and U-Boot device trees and defconfigs |
| `apk/` | APKBUILD templates for U-Boot, kernel, root filesystem and factory images |
| `packages/` | Root filesystem overlay, partition configuration, keys and ramdisk init |
| `scripts/` | Component build scripts |
| `tools/` | Rockchip packaging, encryption and key tools |
| `misc-tools/` | Build containers and server-side reference configuration |
| `.gitlab-ci.yml`, `.gitlab-ci/` | Reference GitLab CI pipeline |

The build creates `build/` on the first run. `build/output/` holds the artifacts.

## Targets

| Target | What it builds | Main outputs |
| --- | --- | --- |
| `uboot` | U-Boot and the Rockchip loader | `MiniLoaderAll.bin`, `uboot.img` |
| `kernel` | Kernel, board DTB and resource image | `Image`, `<board>.dtb`, `resource.img` |
| `ramdisk` | Initramfs and the misc image | `ramdisk.img`, `misc.img` |
| `fit-boot` | FIT boot image | `boot.img` |
| `sign-boot` | Signs the FIT boot image | signed `boot.img` |
| `alpine` | Alpine root filesystem | `build/alpine/` |
| `rootfs` | ext4 root filesystem image | `rootfs.img` |
| `encryption` | Encrypted system and userdata images | `encrypted.img`, `encrypted_userdata.img` |
| `update` | Rockchip firmware package | `update.img` |
| `raw` | Full-disk image from an existing `update.img` | `raw.img` |
| `all` | Everything needed for a complete image | `update.img` |
| `packages` | Artifacts for APK packaging | `MiniLoaderAll.bin`, `uboot.img`, `boot.img`, `ramdisk.img`, `misc.img`, `alpine-rootfs.tar.gz` |

Run a target with:

```bash title="Build host"
sudo ./build.sh --target <target> --board <board>
```

Use `--package true` with `alpine` or `packages` to write `alpine-rootfs.tar.gz`; the `packages` target sets it automatically.

Targets other than `all` and `packages` expect the earlier stages to have run. For example, `encryption` reads `rootfs.img`, and `update` reads the files in `build/output/`.

:::note
`build.sh` accepts the `raw` target, but `build.sh --help` does not list it.
:::

## Board configuration

```text
board/
└── mixtile-core3588e-nano/
    ├── kernel/6.1/
    │   ├── mixtile-core3588e-nano_defconfig
    │   └── mixtile-core3588e-nano.dts
    └── uboot/
        ├── mixtile-core3588e-nano_defconfig
        └── mixtile-core3588e-nano.dts
```

- The directory name is the `--board` value.
- The DTS and defconfig file names must match the directory name.
- The kernel version directory must match `KERNEL_VERSION`; the current default is `6.1`.
- The U-Boot build calls `make.sh <board>`, so the board needs a `<board>_defconfig` under `board/<board>/uboot/`.

The U-Boot defconfig must enable the secure boot and A/B options:

```config
CONFIG_OPTEE_CLIENT=y
CONFIG_OPTEE_V2=y
CONFIG_OPTEE_ALWAYS_USE_SECURITY_PARTITION=y
CONFIG_FIT_SIGNATURE=y
CONFIG_SPL_FIT_SIGNATURE=y
CONFIG_SPL_AB=y
```

The kernel defconfig must enable the device-mapper and pstore options:

```config
CONFIG_BLK_DEV_DM=y
CONFIG_DM_CRYPT=y
CONFIG_BLK_DEV_CRYPTOLOOP=y
CONFIG_DM_VERITY=y
CONFIG_PSTORE=y
CONFIG_PSTORE_CONSOLE=y
CONFIG_PSTORE_RAM=y
```

To use the hardware watchdog, enable it in the board device tree:

```dts
&wdt {
    status = "okay";
};
```

The build does not build or install loadable kernel modules into the root filesystem; drivers used by the image must be built into the kernel (`=y`).

To add a board, create `board/<board>/` with the kernel and U-Boot files. If the board needs a different root filesystem package set, add `scripts/build_alpinefs_<board>.sh`; otherwise the build uses `scripts/build_alpinefs_base.sh`.

## Partition layout

The default GPT layout is defined in `packages/configs/parameter_ab.txt`; `packages/configs/package-file` maps each partition to an image.

| Partition | Default size | Contents |
| --- | --- | --- |
| `uboot_a` | 4 MiB | U-Boot, slot A |
| `uboot_b` | 4 MiB | U-Boot, slot B |
| `misc` | 4 MiB | A/B boot state and first-boot key storage |
| `boot_a` | 96 MiB | FIT kernel, DTB and ramdisk, slot A |
| `boot_b` | 96 MiB | FIT kernel, DTB and ramdisk, slot B |
| `system_a` | 2 GiB | Encrypted read-only root filesystem, slot A |
| `system_b` | 2 GiB | Encrypted read-only root filesystem, slot B |
| `userdata` | Remaining space | Encrypted writable data and overlay |

The Rockchip loader `MiniLoaderAll.bin` is written by the firmware package. It is not one of the GPT partitions in `parameter_ab.txt`.

The `system_a` and `system_b` images contain an encrypted squashfs root filesystem. The `userdata` image contains an encrypted f2fs filesystem.

## Boot flow

1. The Rockchip loader starts U-Boot from `uboot_a` or `uboot_b`.
2. U-Boot selects the active slot and boots the matching `boot_a` or `boot_b` FIT image.
3. The FIT image contains the kernel, DTB and ramdisk.
4. The ramdisk finds the `system` and `userdata` partitions by name and obtains the encryption key from RPMB, or from `misc` on first boot.
5. The ramdisk creates the dm-crypt mappings, mounts the read-only system filesystem, mounts the writable userdata filesystem, and starts an overlay root.

## Customization points

| What to change | Where |
| --- | --- |
| Board device tree and defconfig | `board/<board>/kernel/6.1/` and `board/<board>/uboot/` |
| Kernel version | `KERNEL_VERSION` in `scripts/build_kernel.sh`; only `6.1` is currently defined |
| Root filesystem packages | `scripts/build_alpinefs_base.sh` or a board-specific script |
| Root filesystem overlay | `packages/alpine/`; board extras in `packages/alpine-extras/<board>/` |
| Partition layout | `packages/configs/parameter_ab.txt` and `packages/configs/package-file` |
| Boot arguments | The `chosen` node in the board kernel DTS |
| Encryption key | `tools/linux_securitydm/encrypted_key` |
