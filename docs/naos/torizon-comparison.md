---
sidebar_position: 2
description: Compare NAOS and Torizon for firmware customization, device-side software, updates and product security.
---

# NAOS and Torizon Comparison

NAOS and Torizon both target embedded Linux devices and support application deployment and runtime, image customization, and software updates. For product teams, practical considerations include the integration work required to build product firmware, the resources consumed by device-side management, and how software protection and ongoing maintenance fit into the delivery process.

NAOS focuses on firmware customization without a full system rebuild, a lean device-side software stack based on Alpine, and system partition pre-encryption. Organizations can host the associated OTA platform on their own infrastructure, giving teams control over firmware contents and release schedules.

## 1. Key Advantages of NAOS

### 1.1 Build Custom Firmware In-House

Start with released base components for the target hardware. Add applications, models, and default settings, then choose the signing and encryption settings to generate flashable firmware and update bundles. Reusing released components for routine customization reduces the need to maintain a full system build environment and repeat integration work.

This workflow suits teams that assemble different software configurations for different customers or produce development and production variants. Teams can also convert existing Docker applications for standalone installation or preinstallation in firmware.

TorizonCore Builder also supports customization from an existing image, including configuration changes, device tree changes, and container preinstallation. Both platforms reduce the source build work for routine customization. NAOS handles device-specific security materials and image generation within the same delivery workflow. [TorizonCore Builder documentation](https://developer.toradex.com/torizon/os-customization/torizoncore-builder-overview/)

### 1.2 A Lean Device-Side Stack for Memory-Constrained Devices

NAOS keeps the Alpine user space, Core device management, container runtime, and device-side OTA components lean. Limiting the overhead of base software and background services leaves more resources for applications while supporting operation and maintenance on devices with limited memory.

Torizon commonly uses Docker and Docker Compose for application workloads and provides associated development tools and documentation. The platforms differ in how they organize device-side components and deliver applications. Measure resource usage on the target hardware with the intended features and workload enabled. [Installing applications on Torizon OS](https://developer.toradex.com/torizon/application-development/application-software-installation-on-torizon-os/)

### 1.3 Protect Applications and Models During Firmware Generation

NAOS can pre-encrypt the system partition during image generation, protecting the applications, models, and configuration shipped with the system while they are stored on the device. Subsequent updates can use pre-encrypted system images. Runtime data can also be encrypted with a unique key per device.

Teams can use the supplied tools to incorporate software protection into firmware generation, flashing, and updates. This reduces the work of integrating encryption and delivery tools on their own.

Torizon also supports encryption at rest. Its documented integration workflow involves a Yocto build, and feature availability depends on the hardware. When comparing the platforms, consider which options are available on the target hardware and what configuration work each requires. [Torizon encryption documentation](https://developer.toradex.com/torizon/security/encryption-on-torizon/)

## 2. Self-Hosted OTA and Operating Costs

NAOS OTA uses Eclipse hawkBit as its update service and provides organization-level permissions, device grouping, firmware version management, and update task management. Organizations can deploy it on their own servers, in a data center, or on cloud infrastructure and manage firmware and device data according to their network, access, and backup requirements. [Eclipse hawkBit](https://hawkbit.eclipse.dev/)

Organizations can size the platform for their fleet, plan server, storage, and operating costs, and manage maintenance within their budget.

Torizon OS and its development tools are free, and Torizon Cloud OTA is available through service plans. The free Maker plan supports remote updates for up to five devices. A paid plan is required for larger fleets or features such as scheduled updates, offline updates, and API access. On-premises deployment is a custom commercial offering that requires a quote. [Torizon pricing](https://www.torizon.io/pricing)

## 3. Key Capabilities

| Area | NAOS | Torizon |
| --- | --- | --- |
| Routine firmware customization | Reuse released components and combine applications, configuration, and security materials to generate full firmware images and update bundles. | TorizonCore Builder supports routine customization and container preinstallation using an existing image. |
| Device-side software stack | A lean Alpine base, Core device management, container runtime, and OTA update components limit overhead on memory-constrained devices. | Torizon OS works with Docker and Docker Compose to run and manage applications. Resource requirements depend on the image and configured services. |
| Existing container applications | Convert Docker images into NAOS packages for installation on devices or preinstallation in firmware. Applications run on a lightweight container stack. | Run and deploy applications with Docker and Docker Compose using the supplied development tools. |
| Protection for delivered software and data | Supports system partition pre-encryption and data partition encryption with a unique key per device. | Supports encryption at rest. The scope and build process depend on the hardware. |
| Updates and field maintenance | Supports signed system updates, A/B boot confirmation and rollback, and both online and local updates. Preinstalled applications can ship with the firmware. | Supports updates to system and application components, synchronized updates, and offline delivery. |
| OTA deployment and costs | Self-hosted OTA based on hawkBit. Organizations plan their own server, storage, and operating costs. | Offers a free plan for small fleets and paid subscriptions. On-premises deployment requires a custom quote. |
| Software traceability and security maintenance | Provides component and version information, SBOMs, and vulnerability assessment records. Can incorporate application SBOMs supplied by users. | Provides system SBOMs and tools or services for vulnerability analysis and security updates. |

NAOS uses A/B slots to protect system updates. Verify application data compatibility across versions and rollback behavior with the actual container workloads and product configuration.

## 4. How NAOS Helps Products Meet EU Cyber Resilience Act (CRA) Requirements

| Key CRA Requirement | NAOS Capabilities and Current Status |
| --- | --- |
| Secure design and secure defaults | Depending on the board model, production configurations can enable secure boot, disk encryption, and SSH certificate authentication. |
| Document software components and provide a machine-readable SBOM | When SBOM generation is enabled, NAOS produces an SPDX SBOM and a version manifest for each firmware build. It can also incorporate SBOMs from application suppliers. [Build outputs](https://github.com/mixtile-rockchip/naos-base-system-build/blob/main/doc/build.md) |
| Track and fix vulnerabilities during the support period | NAOS continuously tracks vulnerabilities and patches, identifies affected versions, integrates fixes, and validates them on hardware before release. The corresponding firmware's SPDX SBOM uses VEX to record assessed CVEs, including those fixed in that version. NAOS plans to provide at least five years of security maintenance. |
| Distribute and install updates securely | NAOS supports signed OTA updates, device-side signature verification, and A/B system updates with rollback. |
| Coordinate vulnerability disclosure and reporting | NAOS records affected system versions, versions containing fixes, and validation results to support vulnerability disclosure and reporting by equipment manufacturers. |
| Assess product risks and support technical documentation and conformity assessment | NAOS can provide version manifests, SBOMs, and hardware validation records for end-product risk assessment and technical documentation. [European Commission guidance on CRA obligations for manufacturers](https://digital-strategy.ec.europa.eu/en/policies/cra-manufacturers) |
