---
sidebar_position: 1
description: What Jetson TX2 NX compatibility means for Core 3588E, which carrier boards it runs on, and what a carrier board design must provide.
---

# Carrier Boards

Core 3588E needs a carrier board. This page explains which carrier boards it works with, what "compatible with the Jetson TX2 NX" does and does not mean, and what to check when you choose or design a carrier board.

## Jetson TX2 NX Compatibility

Core 3588E is built to the Jetson TX2 NX module standard, so it drops into carrier boards made for that module. It is not a Jetson: it has a Rockchip SoC and runs Rockchip software.

| Aspect | Core 3588E |
| --- | --- |
| Size and mounting | Same as the Jetson TX2 NX: 69.6 x 45 mm, with the mounting holes in the same places |
| Connector | 260-pin SO-DIMM edge connector, same as the Jetson TX2 NX |
| Pin assignment | Every signal of the Jetson TX2 NX is on the same pin. Core 3588E also uses pins 148 to 157, which are reserved on the Jetson TX2 NX, for PCIe lanes 2 and 3. |
| Carrier boards | Carrier boards that support the Jetson TX2 NX |
| Software | Mixtile OS, or another system built for Core 3588E. NVIDIA software, such as JetPack, L4T, CUDA, TensorRT and DeepStream, does not run on it. |
| AI acceleration | The RK3588 NPU, programmed with Rockchip's RKNN toolkits. See [AI](/core-3588e/application-development/ai). |

For every pin, see [260-pin Connector](./connector-pinout.md) and the [pin comparison with the Jetson TX2 NX and the Jetson Orin Nano](pathname:///files/core-3588e/core3588e_jetson_pin_comparison_rev01.pdf) (PDF).

## Choosing a Carrier Board

Use a carrier board whose manufacturer lists the Jetson TX2 NX as a supported module. Carrier boards made only for other Jetson modules may use some pins differently. The Jetson Orin Nano, for example, has USB and PCIe on pins where Core 3588E has DisplayPort, camera and SD card signals.

This documentation is written and tested on the **Leetop A206**. Its connectors are shown in [Hardware Information](./README.md#leetop-a206-carrier-board). On another carrier board, the interfaces of the module are the same, but they may reach different connectors, or none at all. Check the carrier board's documentation for:

- The power input and the adapter it needs, see [Power Supply](/core-3588e/getting-started/power-supply)
- The USB port connected to USB 2.0 port 0 of the module, which is used for [flashing](/core-3588e/getting-started/install-os)
- The header connected to the debug UART, UART2, for the [serial console](/core-3588e/getting-started/connect#serial-console)

## Software Support

The interfaces on the edge connector are hardware features of the module. Which of them an operating system sets up, and under which device names, depends on that system. For Mixtile OS, see [Interfaces in Mixtile OS](/core-3588e/system-usage#interfaces-in-mixtile-os).

## Designing a Carrier Board

If you design your own carrier board, follow a Jetson TX2 NX carrier board design, and check these points for Core 3588E:

- **Power.** Supply 5 V on `VDD_IN`, pins 251 to 260, and follow the [power sequence](./connector-pinout.md#power-sequence) with `POWER_EN` and `SYS_RESET*`.
- **HDMI hot-plug detect.** The module passes the HDMI hot-plug signal on pin 96 straight to the SoC. Jetson carrier board designs invert it in their level shifter, and Mixtile OS is configured for that inverted signal. With a non-inverting level shifter, Mixtile OS reports a monitor when none is connected, and no monitor when one is. The DisplayPort hot-plug signal on pin 88 is not inverted.
- **PCIe polarity.** Do not swap the positive and negative lines of a PCIe pair. The RK3588 cannot correct swapped polarity, and the link fails.
- **PCIe 3.0 lanes.** For four lanes, connect pins 148 to 157. A design that follows the Jetson TX2 NX leaves them unconnected and gets two lanes.
- **Flashing and recovery.** Bring USB 2.0 port 0, pins 109 and 111, to a USB device connector, and `FORCE_RECOVERY*`, pin 214, to a jumper or a button to ground.
- **Debug UART.** Bring UART2, pins 236 and 238, to a header.
- **Boot device.** The eMMC is on the module, and Mixtile OS starts from it, so the carrier board needs no boot media.
