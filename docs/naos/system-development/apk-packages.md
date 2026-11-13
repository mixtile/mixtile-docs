---
sidebar_position: 3
description: Build application and system APKs.
---

# APK Packages

NAOS uses Alpine's APK package manager and `abuild` to package applications and system components. The same package format is used for U-Boot, the kernel, the root filesystem and application software.

There are two packaging workflows:

- **Application packages** are built with the Alpine SDK in an aarch64 environment and installed into the image.
- **System component packages** are built from the artifacts in `build/output/` and published to the APK repository used by the image generator.

## Build an application package

The [aports](https://github.com/mixtile-rockchip/aports) repository contains application package examples. The `drm-firefox` package shows the layout:

```bash title="Build host"
git clone https://github.com/mixtile-rockchip/aports.git
cd aports/drm-firefox
```

Its `APKBUILD` declares the package metadata, dependencies and files to install:

```bash title="APKBUILD"
pkgname=drm-firefox
pkgver=0.1
pkgrel=0
pkgdesc="support drm firefox for naos"
url="focalcrest.com"
arch="aarch64"
license="MIT"
options="!check"

depends="weston weston-backend-drm seatd font-dejavu firefox-esr font-wqy-zenhei"

source="start-firefox start-firefox-exec"

build() {
        :
}

check() {
        :
}

package() {
    install -Dm755 "$srcdir"/start-firefox "$pkgdir"/etc/init.d/start-firefox
    install -Dm755 "$srcdir"/start-firefox-exec "$pkgdir"/usr/bin/start-firefox
}
```

| Field | Purpose |
| --- | --- |
| `pkgname`, `pkgver`, `pkgrel` | Package name and version; the output is `<pkgname>-<pkgver>-r<pkgrel>.apk` |
| `arch` | `aarch64` for NAOS devices |
| `depends` | Packages installed with the application |
| `source` | Files copied from the package directory |
| `package()` | Installation rules; use `install -Dm755` for executables and `install -Dm644` for data files |

Generate the checksums and build the package:

```bash title="Build host (aarch64 Alpine)"
abuild checksum
abuild -r
```

Build application packages in an aarch64 Alpine environment, because the package declares `arch="aarch64"` and contains aarch64 binaries. The `alpine-build` container in `misc-tools/alpine-build/` is used for the system component packages, whose APKBUILDs use `arch="all"`.

The package is written under the build user's `packages/` directory; the upstream example uses `../packages/$USER/aarch64/`. The `.apk` file is named `drm-firefox-0.1-r0.apk`.

### Signing

`abuild` signs packages with the key in `~/.abuild/`. Generate a key pair if you do not have one:

```bash title="Build host"
abuild-keygen -a
```

Deploy the public key to `/etc/apk/keys/` on the target, or into the image, so `apk` can verify packages. Replace the development keys in `.abuild/` before publishing a repository.

### Test on a device

```bash title="Device"
apk add --allow-untrusted ./myapp-1.0-r0.apk
rc-service myapp start
```

To start the application automatically, install an OpenRC service script to `/etc/init.d/` and add it to the default runlevel:

```bash title="Device"
rc-update add myapp default
```

## Build system component packages

The `apk/` directory contains templates for the system components. Use the Alpine build container:

```bash title="Build host"
docker build -t alpine-build misc-tools/alpine-build
docker run -v $PWD/build:/home/builder/build \
           -v $PWD/apk:/home/builder/apk \
           -v $PWD/.abuild:/home/builder/.abuild \
           --name alpine-build -it alpine-build
```

Inside the container, package U-Boot:

```bash title="Container"
cp apk/ubootAPKBUILD APKBUILD
sed -i "s/pkgver=0.1/pkgver=1.0.0/" APKBUILD
sed -i "s/board/core3588e-nano/g" APKBUILD
cp build/output/MiniLoaderAll.bin .
cp build/output/uboot.img .
cp -r .abuild/ /home/builder/
sudo cp .abuild/*.pub /etc/apk/keys/
abuild checksum
abuild -r
```

The `sed` command replaces the `board` prefix in the template with the board name. The resulting package is `core3588e-nano-uboot-1.0.0-r0.apk`.

Package the kernel the same way with `apk/kernelAPKBUILD` and `build/output/boot.img`, and the root filesystem with `apk/rootfsAPKBUILD` and `build/output/alpine-rootfs.tar.gz`.

| Template | Input artifact | Package name |
| --- | --- | --- |
| `apk/ubootAPKBUILD` | `MiniLoaderAll.bin`, `uboot.img` | `<board>-uboot` |
| `apk/kernelAPKBUILD` | `boot.img` | `<board>-kernel` |
| `apk/rootfsAPKBUILD` | `alpine-rootfs.tar.gz` | `<board>-alpine-rootfs` |

The image generator requests packages with the exact version `<version>-r0`. Keep the `pkgver` and `pkgrel` values in the APKBUILD in sync with the version passed to `genimage.sh`.

## Publish the packages

Place the component APKs in the repository under `alpine/x86_64/` and regenerate the index:

```bash title="Repository host"
apk index -o APKINDEX.tar.gz *.apk
```

The repository must be reachable from the image generator at the URL set in `genimage.sh`, for example `http://your-server/alpine/`. The `misc-tools/alpine-repo/` directory contains a reference nginx container for serving the repository.

:::note
`genimage.sh` installs packages with `--allow-untrusted`. Restrict access to the repository and validate the APKs you publish; the generator does not enforce package signatures.
:::

## Install packages during image generation

Add application APKs to `genimage-tools/packages/` and add any setup commands to `genimage-tools/commands`, as described in [Image Generation](/naos/system-development/image-generation).
