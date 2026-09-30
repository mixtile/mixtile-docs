---
sidebar_position: 5
description: The HDMI and DisplayPort outputs of Core 3588E, how to check that a monitor is detected, and what to do when the screen stays blank.
---

# Display

Core 3588E has two display outputs, both on the edge connector:

| Output | Connector pins | Audio |
| --- | --- | --- |
| HDMI | 63–83, and 94 to 100 for CEC, hot-plug detect and DDC | Yes |
| DisplayPort | 39–59, and 88 to 92 for hot-plug detect and AUX | Yes |

The carrier board brings them to its ports. On the Leetop A206, they are one stacked connector on the rear edge: DP on top, HDMI below. See [Hardware Information](./README.md#connector-locations).

You can use one monitor on each output at the same time. The module also has a MIPI DSI output; Mixtile OS sets up HDMI and DisplayPort, but not DSI.

## Connect a monitor

Connect the monitor with the carrier board powered off, then power it on. The desktop edition of Mixtile OS shows the GNOME desktop on every connected monitor. The resolution and the arrangement of the monitors are set in **Settings** > **Displays**.

Monitors can also be connected and disconnected while the system is running.

## Check that a monitor is detected

On Mixtile OS, each output has a status file under `/sys/class/drm`:

```bash title="Core 3588E"
cat /sys/class/drm/card0-HDMI-A-1/status
cat /sys/class/drm/card0-DP-1/status
```

**Expected result:** `connected` for an output with a monitor attached, and `disconnected` for an output without one.

To see the modes a monitor offers, run:

```bash title="Core 3588E"
cat /sys/class/drm/card0-HDMI-A-1/modes
```

## Troubleshooting

| Problem | What to do |
| --- | --- |
| The screen stays blank, and the carrier board's power LED is on | Connect the [serial console](/core-3588e/getting-started/connect#serial-console) and check that the system has started. On the server edition, the monitor shows only a login prompt. |
| The status of an output shows `connected` when no monitor is attached, and `disconnected` when one is | The carrier board passes the hot-plug signal to the module without inverting it. Mixtile OS expects the inverted signal of Jetson carrier boards, see [Designing a Carrier Board](./carrier-boards.md#designing-a-carrier-board). Use the other output, or a carrier board that supports the Jetson TX2 NX. |
| No sound through the monitor | In the sound settings, or with `aplay -l`, select the HDMI or DP audio device. |
