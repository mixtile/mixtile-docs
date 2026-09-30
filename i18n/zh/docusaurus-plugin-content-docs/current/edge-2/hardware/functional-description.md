---
sidebar_position: 2
description: What each functional block of Edge 2 does.
---

# Functional Description

:::info
内容翻译同步中，以下为英文原文。
:::

This section provides a detailed description to the following components of Edge 2:

- Mixtile Core 3568
- Wi-Fi 6/Bluetooth
- MicroSD socket
- M.2 socket
- Mini PCIe socket
- Gigabit Ethernet port
- USB-C port
- DC power port
- USB2.0 and USB3.0 host ports
- RS485 port
- Display: HDMI, eDP, MIPI-DSI
- U.2
- Power buttons and LEDs

## Mixtile Core 3568

Core 3568 is an SoM that expands all CPU functions to pins with an innovative connector. The Rockchip RK3568 ARM64 CPU contains many peripherals to support multiple purposes.

- Quad Cortex-A55 processing cores
- Up to 2.0 GHz core operating frequency
- Up to 0.8 TOPS NPU processing performance
- 4k@60fps H.265/H.264/VP9 decoder; 1080P@100fps H.265/H.264 encoder
- Up to 8 GB LPDDR4 SDRAM

SDRAM has a 32-bit data bus width. It supports 4-rank LPDDR4 memory configurations, with capacities ranging from 2 GB to 8 GB. System storage supports eMMC 5.1 flash memory with capacities ranging from 16 GB to 256 GB. Edge 2 comes with two memory and storage configuration options by default:

- 2GB LPDDR4 RAM + 16GB eMMC storage
- 4GB LPDDR4 RAM + 32GB eMMC storage

## Wi-Fi 6/Bluetooth

Edge 2 integrates a Wi-Fi and Bluetooth module AP6275S, which can wake up the device from sleep mode. The AP6275S supports Wi-Fi 6 and dual-mode Bluetooth 5.0. It is interoperable with 802.11a/b/g/n/ac/ax 2×2 Access Points from different vendors that use MIMO technology. With dual stream, it can reach wireless speeds up to 1200 Mbps. The Wi-Fi wake and enable signals are connected to the GPIO0 pin of the processor, allowing the Wi-Fi module to operate while the device is in sleep mode.

## MicroSD Socket

The MicroSD socket accepts standard 11mm x 15mm Micro-SD cards with capacities up to 64 GB. The 4-bit data interface supports the SDMMC3.0 protocol. Edge 2 boots from eMMC flash by default and can be changed to boot from a MicroSD card.

## M.2 Socket

M.2, Next Generation Form Factor (NGFF), is specified for expansion modules. The M.2 interface uses a standard 75-pin B key socket, which supports USB3.0-based WWAN modules, PCIe-based WWAN modules, and PCIe-based SSD modules. The M.2 socket supports the module sizes of 2242, 3042, and 3052.

The module supporting configuration, including power, reset, and interrupt signals, is under software control by Core 3568. Since each module needs specific configuration definitions, check the configuration setting before connecting the module.

#### SIM Support

The M.2 socket includes a SIM socket with a _SIM_M.2_ mark, which supports 12 mm x 15 mm micro-SIM cards for 4G/5G cellular function. This socket does not support dual SIM.

#### USB Support

The M.2 socket supports one USB 3.0 interface. Because the USB 3.0 data signals share the same set of pins with one lane of the two-lane PCIe 3.0 interface, a GPIO is used to switch between the USB 3.0 and PCIe signals.

#### PCIe Support

The M.2 socket supports a two-lane PCIe 3.0 interface. Edge 2 uses PI6C557-03BLE as a clock generator to provide a 100-MHz clock signal for the CPU and M.2 socket. To enable the full functionality of the two-lane PCIe interface, set the **PCIE_USB_SEL_GPIO1_D0** selection GPIO pin to **LOW**.

## Mini-PCIe Socket

The mini-PCIe is a small form factor PCI card interface, which uses a standard 52-pin mini-PCIe socket. It contains a USB 2.0 interface with SIM signal support. The socket is compatible with mini-PCIe modules in the 3052 pinout size.

The module supporting configuration, including power, reset, and interrupt signals, is under software control by Core 3568. Since each module needs specific configuration definitions, check the configuration setting before connecting the module.

#### SIM Support

The mini-PCIe socket includes a SIM socket with a _SIM_Mini_ mark, which supports 12 mm x 15 mm micro-SIM cards for 4G cellular function. This socket does not support dual SIM.

#### USB Support

The mini-PCIe socket supports a standard USB 2.0 interface.

## Gigabit Ethernet

The Ethernet port is compliant with IEEE 802.3 standard, supporting auto-negotiation of 10/100/1000 Mbps in both half and full duplex modes. It connects to an external RTL8211F-CG PHY chip through the processor’s RGMII interface. The RJ45 connector has status and speed lights:

- Steady green: Network is connected
- Flashing green: Data is being transmitted.
- Steady yellow: The data rate is about 1000 Mbps.
- Off: The data rate is 10/100 Mbps.

## Power Input

**Power Delivery (PD)**

The power port uses a USB-C port, which supports USB PD 3.0. An on-board Power Delivery controller allows the maximum power input of 20 V@3 A. The Edge 2, as device mode, can be communicated by USB-C, which supports USB 2.0 for ADB debugging, firmware update.

The power input uses a USB-C port that supports USB PD 3.0. The on-board Power Delivery controller supports power input up to 20 V@3 A. When Edge 2 is powered via 12 V DC input, the USB-C port provides USB 2.0 connectivity for ADB debugging and firmware updates.

**12 V DC**

Edge 2 supports 12 V@3 A power input through either a DC jack or a SATA power connector.

## USB 2.0/3.0 Host Ports

Edge 2 provides three USB 2.0/3.0 Type-A host ports and one USB 2.0/3.0 port on the M.2 connector. These ports are implemented through a VL817 USB 3.0 hub controller. The Type-A ports can supply 5 V/1 A power to external devices, with software control for power enabling/disabling.

## RS485

The 3-pin RS485 connector consists of pins A, B and GND for communication. It connects to the UART4 interface of the CPU through a SP485REN-L transceiver chip, providing half-duplex communication over the RS485 bus. The bus operates in receive mode by default, and automatically switches to transmit mode when needed. Isolation is implemented between the RS485 signals and the module circuitry on board – separate power/ground planes and optocoupler isolation on the data signals.

## Display Support

The video output processor supports resolution ranging from 1920 x 1080@60 Hz to 4096 x 2304@60 Hz, with the ability to output to three displays simultaneously. The supported interfaces include HDMI (default), eDP, and MIPI-DSI.

**HDMI**

The HDMI display is compliant with HDMI 1.4 and HDMI 2.0 standards. It supports resolutions up to 1920 x 1080@120 Hz and 4096 x 2304@60 Hz.

**eDP**

The eDP display supports resolutions up to 2560 x 1600@60 Hz, with a maximum bandwidth of 4 lanes at 2.7 Gbps per lane. The 30-pin FPC connector provides the eDP interface as well as backlight control signals.

**MIPI-DSI**

The MIPI-DSI display interface provides two DSI channels, each supporting up to 2.5 Gbps per lane. In single-channel mode, resolutions up to 1920 x 1080@60 Hz are supported. In dual-channel mode, resolutions up to 2560 x 1440@60 Hz can be achieved. The two 30-pin FPC connectors for the MIPI-DSI0 and MIPI-DSI1 channels contain one DSI link and one touch panel (TP) signal each. The following figure shows the connectivity.

## U.2 Connector

The 68-pin U.2 connector provides multiple interfaces: SATA 3.0 with 5 V/3 A power, PCIe 2.0, USB 2.0, and a dedicated RGMII for Ethernet.

## Buttons & LEDs

**POWER Button**

The POWER button toggles the device between three states – on, off, and sleep.

- Short press the POWER button to turn on device when the device is off
- Press and hold the POWER button to turn off device.
- Short press the POWER button to enter sleep mode when the device is on.

**RESET Button**

Short press RESET button to reset Edge 2.

**RECOVERY Button**

When Edge 2 is on, press the RECOVERY button and hold. Edge 2 restarts and restores factory settings.

**MASKROM Button**

The MASKROM button is for development only. Hold the MASKROM button and power up (or reset). The system enters MaskROM mode for firmware development.

LEDs

The power and system LEDs indicate the state of the power supply and system operating. And two small LEDs on the front side of board indicate the network status of M.2 and mini-PCIe modules.

