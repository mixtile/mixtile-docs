---
sidebar_position: 1
description: Local, USB and HawkBit updates for A/B slots.
---

# System Updates

NAOS uses A/B slots: an update is written to the inactive slot, the bootloader switches to it on the next boot, and the previous slot remains available for rollback.

## A/B slots

| Partition pair | Contents |
| --- | --- |
| `uboot_a`, `uboot_b` | U-Boot |
| `boot_a`, `boot_b` | FIT kernel, DTB and ramdisk |
| `system_a`, `system_b` | Encrypted read-only root filesystem |

`misc` stores the active slot, boot counters and, on first boot, the temporary encryption key. If a new slot fails to boot, the boot logic returns to the previous slot. The `fix-solt` service repairs the failed slot from the healthy one after a 10-minute delay.

## Local update

Copy the update image to the device and run `upgrade-system`:

```bash title="Device"
upgrade-system -p /userdata/update.img -r
```

| Option | Description |
| --- | --- |
| `-p`, `--path` | Image path; default `/userdata/update.img` |
| `-r`, `--reboot` | Reboot after the update |
| `-t`, `--timeout` | Timeout in seconds; the default comes from `upgrade_timeout` in `/etc/update-config.conf`, or 9999 seconds |

`upgrade-system` calls `updateEngine`, writes progress to `/var/log/updater.log` and the console, and removes the image after a successful update.

:::note
The commands and paths on this page come from the NAOS update scripts. Test the complete update path on your hardware before a production rollout.
:::

## USB offline update

The device watches for a USB drive with an `update/` directory and runs the update automatically.

### Create the USB package

On the build host, from the NAOS source:

```bash title="Build host"
cd tools/upgrade_key
./make_update.sh /path/to/update.img
```

This writes `update/firmware.enc`, `update/firmware.sig` and `update/iv.bin`. Copy the whole `update/` directory to the root of a USB drive:

```text
USB drive/
└── update/
    ├── firmware.enc
    ├── firmware.sig
    └── iv.bin
```

The script uses `aes.key` and `private.pem` in `tools/upgrade_key/`. The device verifies the signature with `/etc/upgrade/public.pem`, decrypts with `/etc/upgrade/aes.key`, and calls `upgrade-system`. The keys on the build host and in the image must match; replace the development keys before deployment.

### Insert the drive

Insert the USB drive. The udev rule `99-usb-mount-umount.rules` calls `mount_usb.sh`, which mounts the drive read-only, checks for the three files, verifies the signature, decrypts the image to `/root/update.img`, and starts the update. The device reboots after a successful update.

## HawkBit OTA

NAOS includes the `hawkbit-updater` service. The base and Core 3588E root filesystems enable it at boot; it reads `/etc/update-config.conf` and polls the HawkBit server for a software module assigned to the device. When an update is available, it downloads the bundle and runs `upgrade-system -p <bundle>`.

| Setting | Purpose |
| --- | --- |
| `hawkbit_server` | HawkBit server address, with optional port |
| `ssl`, `ssl_verify` | Enable HTTPS and certificate verification |
| `tenant_id` | HawkBit tenant, usually `DEFAULT` |
| `target_name` | Controller ID of the device |
| `auth_token` | Security token for the target |
| `bundle_download_location` | Temporary file for the downloaded update |
| `post_update_reboot` | Reboot after a successful update |

The repository file contains development values. Set the server, controller ID and token for your deployment; do not reuse the development token.

Deploy a HawkBit server before enabling the client. The NAOS repository includes a reference container setup under `misc-tools/hawkbit/`; see the [HawkBit documentation](https://eclipse.dev/hawkbit/) for the server workflow.

## Reset user data

`wipe_userdata` clears the writable overlay directories on the encrypted `userdata` partition, returning the system to its read-only base:

```bash title="Device"
wipe_userdata
```

Without options it asks for confirmation and reboots after deleting the overlay data. `wipe_userdata -f` skips the confirmation and does not reboot.

:::warning
`wipe_userdata` removes changes stored in the overlay. Back up anything you need first.
:::
