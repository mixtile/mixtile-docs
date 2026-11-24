---
sidebar_position: 1
description: Generate and customize NAOS firmware, preinstall applications, and deploy system updates.
---

# NAOS User Guide

NAOS uses Alpine for its base user space and keeps device management, the container runtime, and on-device OTA updates lightweight. It suits products with limited memory and storage.

This guide walks through building a NAOS image for your product. Start by generating flashable firmware, then add your application, configuration, and security materials. Validate the image on a device and release updates as needed. Build from source when you need to change the underlying system.

The examples use the supported Mixtile Core3588E (RK3588) board. The GitHub documentation for each project covers detailed parameters and settings.

**Generate an image → Customize it for your product → Flash and verify → Release updates**

## 1. Quick Start (Generate Your First Image)

### 1.1 Prepare the Build Host and Generator

We recommend Ubuntu 24.04 x86_64 and Python 3.11 or later. Run the following commands on the build host.

```bash
git clone https://github.com/mixtile-rockchip/naos-firmware-generator.git
cd naos-firmware-generator
sudo apt-get install python3 python3-yaml python3-pycryptodome qemu-user-static binfmt-support
```

The host must support unprivileged user namespaces and run ARM64 binaries through QEMU and binfmt. The generator checks the required tools and environment at startup. For the full requirements, see the [Firmware Generator README](https://github.com/mixtile-rockchip/naos-firmware-generator/blob/main/README.md).

### 1.2 Prepare Development Signing Materials

Start with a development build. Prepare the OTA signing private key and certificate, then place them in the generator's `key/ota/` directory. If you already have signing materials, use the files that match your product's release process. See the [OTA signing instructions](https://github.com/mixtile-rockchip/naos-firmware-generator/blob/main/key/ota/README).

Production builds also require materials for secure boot, system encryption, and SSH certificate authentication. You can prepare them after validating the development build. For the full list, see [Firmware Generator keys and certificates](https://github.com/mixtile-rockchip/naos-firmware-generator/blob/main/README.md#keys-and-certificates).

### 1.3 Select a Base Release and Generate the Image

Run the generator as a regular user from its directory.

```bash
./naos-image-generator.py
```

Follow the menu in order.

1. Select **Development** for initial setup and application validation.
2. Select **Full firmware image**. To test updates as well, choose the option that includes system and bootloader update bundles.
3. Select a supported board and a published base release. Adjust the device tree, partition sizes, and output options as needed.
4. Review the **Summary** and confirm to start.

The generator downloads the published artifacts it needs and assembles the image without a full system build from source. Save the command shown under `Command:` in the summary to regenerate the image with the same settings.

The video shows how to prepare the OTA signing materials and generate an `.img` file from the interactive menu.

<video controls preload="metadata" src="/video/naos/generate-development-firmware.webm" aria-label="Generate development firmware" style={{width: '100%', maxWidth: '960px', maxHeight: '540px', display: 'block', margin: '1rem auto', background: '#111'}} />

### 1.4 Find the Outputs

The generator writes to this directory by default.

```text
output/<board>/<development-or-production>/<version>/
```

| Output | Purpose |
| --- | --- |
| Full `.img` image | Installs the system on the device using the board's flashing procedure. |
| System `.raucb` bundle | Updates the system on existing devices. Available when you select update bundles. |
| Bootloader `.raucb` bundle | Updates the device's boot components separately. Available when you select update bundles. |
| SBOM and release manifest | Record the software and artifacts in the release. Software bill of materials (SBOM) generation depends on the selected configuration. |

Generate a base image first, then add your application and configuration so you can verify the result of each change.

## 2. Customize Your Product Image

Place your product files in the following directories within the generator.

| Directory | Contents |
| --- | --- |
| `apks/` | Packages to preinstall, including container APKs created by the converter. Use `aarch64` or `noarch` packages. |
| `files/` | Configuration and application files organized by their destination paths on the device. Files at the same paths are overwritten. |
| `board/` | Device tree blobs (DTBs) compatible with the selected board and kernel. |
| `key/` | Signing, encryption, and authentication materials that match the product's release configuration. |

For example, `files/etc/motd` maps to `/etc/motd` on the device, and `files/etc/naos-core/device.ini` sets the default device management configuration. Adjust the configuration files supplied by the generator to suit your product.

To replace the device tree, place a compiled DTB in `board/`. Use a DTB compatible with the base release's ARM64 (`aarch64`) kernel, the selected board, and its peripherals. For example, run the following commands from the generator directory.

```sh
cp /path/to/custom-board.dtb board/
./naos-image-generator.py
```

After selecting the board and base release, choose **custom-board** from the **Device tree** menu. The menu shows filenames without the `.dtb` extension. Review the **Summary** and continue to generate firmware with the selected device tree. The first option uses the device tree supplied with the base image. The menu appears only when `board/` contains a DTB. See [Replace the device tree](https://github.com/mixtile-rockchip/naos-firmware-generator/blob/main/README.md#replace-the-device-tree).

Once the files are ready, run the generator again or reuse the command you saved earlier. For application package dependencies, device tree selection, security materials, and command-line options, see the [Firmware Generator usage instructions](https://github.com/mixtile-rockchip/naos-firmware-generator/blob/main/README.md).

For larger preinstalled applications, manually increase the system partition size in the generator menu.

## 3. Preinstall an Existing Docker Application

Run these steps on the build host. The example uses the public nginx image. You can substitute your own application image. Make sure the Docker CLI is available and can connect to a Docker service. Clone the converter alongside the firmware generator. See the [Docker Image Converter documentation](https://github.com/mixtile-rockchip/naos-docker-image-converter/blob/main/README.md).

```sh
cd ..
git clone https://github.com/mixtile-rockchip/naos-docker-image-converter.git
cd naos-docker-image-converter
```

Convert the ARM64 image from the converter directory.

```sh
./naos-docker-converter --pull --platform linux/arm64 nginx:alpine \
  --id nginx --apk -o output/nginx-preinstall.apk
```

Use `--apk` to create a package for firmware preinstallation. Omit the flag to create a ZIP for standalone installation on a device. The converter prints the path to the default manifest when it finishes.

<video controls preload="metadata" src="/video/naos/convert-nginx-image-to-apk.webm" aria-label="Convert an nginx image to APK" style={{width: '100%', maxWidth: '960px', maxHeight: '540px', display: 'block', margin: '1rem auto', background: '#111'}} />

To change startup commands, environment variables, or mounts, edit the manifest and provide its path when repackaging the application.

```sh
./naos-docker-converter nginx:alpine --id nginx --apk \
  --manifest output/nginx-preinstall.manifest.yml -o output/nginx-custom.apk
```

With `--manifest`, the converter uses the specified file directly and skips default manifest generation and the prompt about reusing it. If you already have an application SBOM, add `--sbom /path/to/app.spdx.json` to include the supplier's existing SPDX 2.3 JSON file in the APK.

Copy the final APK into the generator's `apks/` directory. The example uses the first package created above. If you repackaged the application, substitute the new filename. Include one version of each application.

```sh
cp output/nginx-preinstall.apk ../naos-firmware-generator/apks/
cd ../naos-firmware-generator
./naos-image-generator.py
```

The generator sets the startup manifest for the default preinstalled container and enables it to start at boot. It preserves any custom manifest configuration. If you preinstall multiple containers, explicitly select the startup manifest. When SBOM generation is enabled for the full image, it can incorporate supplier information bundled with the APK. See the [Firmware Generator README](https://github.com/mixtile-rockchip/naos-firmware-generator/blob/main/README.md).

## 4. Generate Production Firmware and Update Bundles

After validating the application, prepare the security materials for your product's secure boot, encryption, and certificate-based login. Run the same generator and select **Production**. The production configuration enables the applicable security features and SBOM generation by default. Available features depend on the selected hardware.

To maintain devices in the field, select the output option that includes system and bootloader update bundles. Continue using signing, trust, and encryption materials that match those devices when generating new firmware and bundles. For preparation instructions, see [Keys and certificates](https://github.com/mixtile-rockchip/naos-firmware-generator/blob/main/README.md#keys-and-certificates).

The development example places the nginx APK in `apks/`, reuses the OTA signing materials trusted by the device, and generates a system update bundle from the interactive menu.

<video controls preload="metadata" src="/video/naos/generate-rauc-system-update-with-nginx.webm" aria-label="Generate a RAUC system update with nginx" style={{width: '100%', maxWidth: '960px', maxHeight: '540px', display: 'block', margin: '1rem auto', background: '#111'}} />

## 5. Verify the Device After Flashing

Flash the full firmware using the procedure for your board. The examples use `192.0.2.10` as the device address. The development build uses `naos` as both the username and password. Sign in from the host.

```sh
ssh naos@192.0.2.10
```

Run the following commands on the device.

```sh
cat /usr/lib/naos/version.json
sudo naos-core oem
sudo naos-core containers
sudo rauc status
```

To test a ZIP separately, transfer the package to the device, then run `sudo naos install PACKAGE_PATH` with its path, followed by `sudo naos start nginx`. The converter uses host networking by default. Choose an application port that is available on the device.

Device management settings are in `/etc/naos-core/device.ini`. Restart Core after editing the file to apply the changes. For production certificate sign-in, configuration, and log inspection, see the [Runtime documentation](https://github.com/mixtile-rockchip/naos-base-system-build/blob/main/doc/runtime.md).

## 6. Release Updates and Maintain Devices

Transfer a signed `.raucb` bundle that matches the device to `/userdata/update.raucb`. Run the following commands on the device.

```sh
sudo naos-core update /userdata/update.raucb
sudo naos-core tasks
sudo naos-core task TASK_ID
```

Replace `TASK_ID` with the returned task ID. The device reboots after a successful installation. For a system update, verify boot confirmation after the reboot. The A/B layout protects the system slots. Validate how containers and application data behave across versions for your product. A factory reset erases persistent data. Back it up before running `sudo naos-core recovery`. See [Updates and recovery](https://github.com/mixtile-rockchip/naos-base-system-build/blob/main/doc/updates.md).

For centralized device management, deploy NAOS OTA Server.

```sh
git clone https://github.com/mixtile-rockchip/naos-ota-server.git
cd naos-ota-server/docker
docker-compose up -d
# Open http://<server-address>:3000 in your browser
```

The default username and password are both `admin`. Under **Devices → Register device**, copy the registration command and run it on the device. Upload a bundle under **Packages** and check the results under **Updates** after dispatching it. For organization and task settings, see the [OTA Server README](https://github.com/mixtile-rockchip/naos-ota-server/blob/main/README.md).

The video shows how to upload and deploy a system update bundle to one device, then check the boot slot and nginx's HTTP response after reboot.

<video controls preload="metadata" src="/video/naos/deploy-ota-system-update-and-verify-nginx.webm" aria-label="Deploy an OTA system update and verify nginx" style={{width: '100%', maxWidth: '960px', maxHeight: '540px', display: 'block', margin: '1rem auto', background: '#111'}} />

## 7. Build the System from Source (Optional)

Use the firmware generator workflow above to preinstall applications, change configuration, or replace a compatible device tree on a published release. Use `naos-base-system-build` to build a new base release when you need to change the BSP, kernel configuration, drivers, or base system components.

### 7.1 Prepare the Build Host and Checkout

Use Ubuntu 24.04 x86_64, Python 3.11 or later, and a version of kas that supports configuration format 14. Install the dependencies and confirm that the host supports unprivileged user namespaces and QEMU/binfmt for the target architecture. Run kas and BitBake as a regular user. See [Prepare the build host](https://github.com/mixtile-rockchip/naos-base-system-build/blob/main/doc/build.md#prepare-the-host).

Clone the repository in your working directory.

```bash
git clone https://github.com/mixtile-rockchip/naos-base-system-build.git
cd naos-base-system-build
```

kas fetches the build layers and pinned source versions defined by the project. The project records the exact upstream commits for the BSP and system security tools so you can reproduce the base release on another prepared host. Before building, prepare the materials for your development or production build. See [Keys and certificates](https://github.com/mixtile-rockchip/naos-base-system-build/blob/main/doc/keys.md).

### 7.2 Build Full Firmware

The example selects the supported Mixtile Core3588E board and builds development firmware.

```bash
export MACHINE=mixtile-core3588e-v2
kas build kas/development.yml
```

Use development firmware for application debugging and peripheral validation. Once your production security materials are ready, run the production build.

```bash
kas build kas/production.yml
```

The full firmware for this board is in `build/tmp/deploy/images/mixtile-core3588e-v2/`. Use the `.img` file for flashing and `MiniLoaderAll.bin` for the corresponding USB loader. Partition information and the release manifest are in the same directory. To generate signed update bundles as well, prepare the OTA signing materials and run the following command.

```bash
NAOS_OTA=1 kas build kas/development.yml
```

You can also set `NAOS_OTA=1` before the production build command. For output names, version settings, build caching, and routine maintenance, see the [Build instructions](https://github.com/mixtile-rockchip/naos-base-system-build/blob/main/doc/build.md).

Validate peripherals, container applications, and the update process with development firmware first. Use the production configuration to build the firmware you deliver.

### 7.3 Export a Base Release for the Firmware Generator

To build your own base system and reuse the firmware generator to customize it for different products, enable the export mode.

```bash
NAOS_PACKAGE=1 kas build kas/development.yml
```

Development inputs are exported to `package/development/mixtile-core3588e-v2/`. To export production inputs, use `kas/production.yml`. The output goes to `package/production/mixtile-core3588e-v2/`. These directories contain the intermediate artifacts the generator needs to preinstall applications, assemble images, encrypt and sign them, and generate update bundles.

For example, if both repositories are in the same working directory, run the following command from the generator directory to use your development inputs.

```bash
./naos-image-generator.py build \
  ../naos-base-system-build/package/development/mixtile-core3588e-v2 \
  --output output/local-build
```

Use `--config` to specify configuration for locally exported inputs. You can reuse the same base release to build different product images for different customers. For configuration overrides, signing materials, and output options, see the [Firmware Generator README](https://github.com/mixtile-rockchip/naos-firmware-generator/blob/main/README.md).

### 7.4 How the Build Integrates Core and the Container Runtime

The Yocto build fetches the binary release archives for Core and the container runtime pinned in the recipes, verifies their checksums, and installs them in the system. To change Core, build a release package in its own repository, then update the archive and checksum the system uses. The container runtime is likewise integrated as a separate release package. Rebuild the firmware or export the generator inputs to include the component updates in product releases. See the [NAOS Device Manager README](https://github.com/mixtile-rockchip/naos-device-manager/blob/main/README.md) and the [NAOS Container Runtime README](https://github.com/mixtile-rockchip/naos-container-runtime/blob/main/README.md).

## 8. Project Components and Their Roles

### 8.1 NAOS Firmware Generator (Customize and Generate Firmware)

The firmware generator runs on the build host. It combines published base components with applications, configuration, device trees, and security materials to produce full firmware and update bundles. Start here for routine customization and to build images for different application combinations or customers.

For detailed instructions, see the [NAOS Firmware Generator project documentation](https://github.com/mixtile-rockchip/naos-firmware-generator/blob/main/README.md).

### 8.2 NAOS Docker Image Converter (Convert Docker Images to NAOS Packages)

The converter preserves application files and dependencies from Docker images and lets you customize startup settings. Use ZIP packages for standalone installation and validation on the device, and APK packages for preinstallation with the firmware generator. You can also include an existing application SBOM in the APK.

For detailed instructions, see the [NAOS Docker Image Converter project documentation](https://github.com/mixtile-rockchip/naos-docker-image-converter/blob/main/README.md).

### 8.3 NAOS Base System Build (Build the Base System)

This project builds and integrates the BSP, kernel, boot components, and Alpine user space. Use it to build a new base release when changing drivers, kernel settings, or base system components. It can produce full firmware or export inputs for further customization with the firmware generator.

For detailed instructions, see the [NAOS Base System Build project documentation](https://github.com/mixtile-rockchip/naos-base-system-build/blob/main/README.md).

### 8.4 NAOS Device Manager (Manage Devices Locally)

`naos-core` provides local management on the device. It can read the device identity, inspect and control containers, schedule updates, reboot the device, and perform recovery. Applications can access these functions through commands or APIs. `naosd` runs the containers. Consult this project for interfaces and settings when changing device management behavior or integrating it into your own interface.

For detailed instructions, see the [NAOS Device Manager project documentation](https://github.com/mixtile-rockchip/naos-device-manager/blob/main/README.md).

### 8.5 NAOS Container Runtime (Install and Run Containers on the Device)

The runtime provides `naosd` to run containers, `naos` to install and manage them, and `naos-exec` to run commands inside them. Applications define the runtime environment and startup behavior through their root file system and manifest. The public repository provides binary releases and usage instructions. NAOS firmware integrates pinned versions of these tools.

For detailed instructions, see the [NAOS Container Runtime project documentation](https://github.com/mixtile-rockchip/naos-container-runtime/blob/main/README.md).

### 8.6 NAOS OTA Server (Deploy Updates Centrally)

The server uses hawkBit as its update backend and manages organization permissions, device groups, update bundles, and tasks. Operators can deploy updates immediately or schedule them from the web interface, then view the results. On each device, Core works with the update components to register and install updates.

For detailed instructions, see the [NAOS OTA Server project documentation](https://github.com/mixtile-rockchip/naos-ota-server/blob/main/README.md).

### 8.7 RK3588 Development Containers (GPU, RKNN, RGA, and MPP)

`rkdev-containers` provides four development environments that run with Docker on RK3588 devices. Each includes the corresponding SDK tools and examples. You can also convert the images to NAOS installation packages using NAOS Docker Image Converter. Set the required device access permissions in `manifest.yml` and use the NAOS container runtime to install and start the containers.

| Container | Purpose |
| --- | --- |
| GPU | Develop applications that use OpenGL ES or OpenCL. |
| RKNN | Run and validate RKNN models on the NPU. |
| RGA | Use hardware acceleration for image scaling, rotation, and format conversion. |
| MPP | Develop and validate hardware video encoding and decoding. |

For startup commands, required device nodes, and examples, see the [RK3588 Development Containers project documentation](https://github.com/mixtile-rockchip/rkdev-containers/blob/main/README.md).
