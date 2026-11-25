---
sidebar_position: 0
description: Overview of the NAOS embedded Linux system, including firmware customization, security and OTA maintenance.
---

# NAOS Overview

**NAOS helps teams customize product firmware, reduce device overhead, and protect the software and models they ship with their devices.**

NAOS is a Linux system for embedded and edge devices. Its Alpine user space, device management, container runtime, and device-side OTA updater are designed to keep resource use low. The firmware generator and self-hosted OTA platform help product teams customize firmware, deploy applications, and maintain devices in the field.

NAOS is designed for teams turning applications into device products. They need to accommodate different customer requirements while managing device resources, protecting the software they ship, and maintaining future releases. NAOS brings these tasks into one delivery workflow that teams can reuse across products.

## 1. Prepare a Working Application for Product Delivery

Once an application runs on a development board, the team still needs to prepare software and configuration for different customers, manage device resource use, protect the software and models it ships, and plan updates for deployed devices. Each of these tasks affects how reliably the product can be delivered and maintained.

NAOS provides the system and tools for that work. Teams can reuse a base release, assemble the application, configuration, and security settings into product firmware, then deliver subsequent versions through an online platform or local update packages. This reduces repeated preparation between development testing and field maintenance.

## 2. Key Benefits of NAOS

### 2.1 Build Custom Firmware from Released System Components

The NAOS Firmware Generator reuses components from released base systems. Choose a supported board and base version, add applications, models, and product files, adjust the default configuration, and set signing and encryption options. The generator produces a complete firmware image for flashing and update packages for later maintenance.

When a base release already has the hardware and drivers you need, the generator assembles the custom firmware from prebuilt components. This removes the full source build from the customization process and reduces repeated builds and build environment setup.

Teams can reuse the same base release to preinstall different applications, set customer-specific defaults, and produce both development and production firmware.

### 2.2 A Lean Software Stack for Devices with Limited Memory

Alpine provides a compact user space. The NAOS device manager, container runtime, and OTA updater focus on the functions the device needs, which limits the overhead of system software and background services.

On devices with limited memory, this design leaves more resources for applications while retaining device management and update capabilities. Product teams can allocate memory and storage to the application with less overhead from the device's own management services.

The converter can reuse applications and dependencies from existing Docker images that match the device architecture and runtime requirements. Teams can preinstall these applications in the firmware and keep their existing container development workflow while configuring persistent data and hardware access for the target device.

### 2.3 Encrypt Applications, Models, and Runtime Data

Devices often ship with application software, algorithm models, and product configuration. NAOS can pre-encrypt the system partition during firmware generation. This protects preinstalled content at rest and reduces the risk of exposure if the storage medium is read offline.

On supported platforms, the device unlocks the encrypted system partition during boot. Later updates can also use pre-encrypted system images, so teams can incorporate software protection into firmware generation, factory flashing, and field updates.

NAOS also supports data partition encryption with a device-specific key for configuration and application data generated during operation. The system and data partitions are protected separately. Persistent configuration, container data, and device keys are retained across system updates and slot changes, reducing reconfiguration and data migration work. Teams plan application data-format compatibility as part of each product release.

## 3. Manage Updates and Maintenance After Deployment

The NAOS OTA Server uses Eclipse hawkBit and can run on an organization's own servers, in its data center, or on cloud infrastructure it manages. Teams control the release schedule and manage firmware, device information, and update records under their own network, access, and backup policies.

The platform provides device grouping, version management, immediate or scheduled updates, and a view of installation results and history. Teams serving multiple customers can isolate devices, packages, and tasks by organization, and assign permissions to administrators, operators, and viewers.

Devices install signed update packages. System and bootloader packages can be released and maintained independently. The device verifies the system package signature before installing it into the inactive system slot. A/B partitioning, boot confirmation, and rollback help reduce recovery risk if an update fails. Local update packages also support devices on isolated networks and in on-site service scenarios.

Application containers can start with the device, and application readiness checks can be part of system boot confirmation. Hostnames and local network service discovery make it easier to find devices and application services in the field.

Applications can use the local device management API to read the device identity, view and control containers, and trigger updates, reboots, or recovery. Teams can integrate these maintenance operations into their own product interface. When a device needs to be redeployed, a factory reset clears runtime data and field changes and restores the defaults of the installed firmware.

## 4. Support Product Security and Ongoing Maintenance

NAOS incorporates signed updates, configurable secure boot, system and data encryption, and certificate-based login into product delivery. Development configurations support debugging and peripheral validation. Production configurations can enable security measures according to product requirements. Software bills of materials (SBOMs), component versions, verification data, and vulnerability assessment records support software traceability.

Teams can use this information to identify the software in their products, assess the impact of security issues, and link fixes to specific versions and update packages. This provides technical evidence and maintenance records to support product security requirements such as the EU Cyber Resilience Act (CRA). Each product still requires its own conformity assessment, taking into account the complete device, its applications, its risks, and its maintenance processes.

## 5. From Development Validation to Production Maintenance

**Application validation → Custom firmware → Volume deployment → Ongoing updates**

Teams first validate applications and peripheral requirements on supported hardware. They then use the firmware generator to assemble the preinstalled applications, default configuration, and security settings into a firmware image. After deployment, they retain the release information and software component records and deliver subsequent versions through a self-hosted OTA platform or local update packages.

## 6. Device Use Cases

| Product use case | What NAOS provides |
| --- | --- |
| Industrial terminals and IoT gateways | Ship a consistent application environment and default configuration, with online updates and offline maintenance for field deployment and version management. |
| Terminals with limited memory | Use a lean base system, device manager, container runtime, and OTA updater to leave more resources available for applications. |
| Edge computing and AI devices | Preinstall containerized applications and models, reduce management overhead, and protect the software shipped in the firmware. |
| Dedicated devices for multiple customers | Reuse one base release to build customer-specific firmware, then manage updates by organization and permission. |

Hardware support, security features, maintenance coverage, and support periods depend on the product.
