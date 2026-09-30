---
sidebar_position: 3
description: Signal groups and the full 260-pin definition of Core 3588E.
---

# Signals and Pin Definition

:::info
内容翻译同步中，以下为英文原文。
:::
## Connectivity

- SDIO interface
  - Compatible with SDIO3.0 protocol
  - 4-bit data bus width

| **Pin #** | **Pin name** | **Signal description** | **Direction** | **Pin type** |
| --- | --- | --- | --- | --- |
| 229 | SDMMC_CLK | SD Card or SDIO Clock | Output | CMOS – 1.8V/3.3V |
| 227 | SDMMC_CMD | SD Card or SDIO Command | Bidir | CMOS – 1.8V/3.3V |
| 219 | SDMMC_DAT0 | SD Card or SDIO Data 0 | Bidir | CMOS – 1.8V/3.3V |
| 221 | SDMMC_DAT1 | SD Card or SDIO Data 1 | Bidir | CMOS – 1.8V/3.3V |
| 223 | SDMMC_DAT2 | SD Card or SDIO Data 2 | Bidir | CMOS – 1.8V/3.3V |
| 225 | SDMMC_DAT3 | SD Card or SDIO Data 3 | Bidir | CMOS – 1.8V/3.3V |

Table 6. SDIO pin descriptions

- GMAC 10/100/1000M Ethernet controller
  - Support two Ethernet controllers
  - Support 10/100/1000-Mbps data transfer rates with the RGMII interfaces
  - Support 10/100-Mbps data transfer rates with the RMII interfaces
  - Support both full-duplex and half-duplex operation

| **Pin #** | **Pin name** | **Signal description** | **Direction** | **Pin type** |
| --- | --- | --- | --- | --- |
| 184 | GBE_MDI0_N | GbE Transformer Data 0– | Bidir | MDI |
| 186 | GBE_MDI0_P | GbE Transformer Data 0+ | Bidir | MDI |
| 190 | GBE_MDI1_N | GbE Transformer Data 1– | Bidir | MDI |
| 192 | GBE_MDI1_P | GbE Transformer Data 1+ | Bidir | MDI |
| 196 | GBE_MDI2_N | GbE Transformer Data 2– | Bidir | MDI |
| 198 | GBE_MDI2_P | GbE Transformer Data 2+ | Bidir | MDI |
| 202 | GBE_MDI3_N | GbE Transformer Data 3– | Bidir | MDI |
| 204 | GBE_MDI3_P | GbE Transformer Data 3+ | Bidir | MDI |
| 188 | GBE_LED_LINK | Ethernet Link LED (Green) | Output | – |
| 194 | GBE_LED_ACT | Ethernet Activity LED (Yellow) | Output | – |

Table 7. Gigabit Ethernet pin descriptions

- USB 3.0
  - Embedded two USB 3.0 OTG interfaces which combo with DP TX (USB3OTG_0 and USB3OTG_1)
  - Embedded one USB 3.0 Host interface which combos with Combo PIPE PHY2 (USB3OTG_2)
  - Compatible Specification
    - Universal Serial Bus 3.0 Specification, Revision 1.0
    - Universal Serial Bus Specification, Revision 2.0 (exclude USB3OTG_2)
    - eXtensible Host Controller Interface for Universal Serial Bus (xHCI), Revision 1.1
  - Support Control/Bulk (including stream)/Interrupt/Isochronous Transfer
  - Simultaneous IN and OUT transfer for USB 3.0, up to 8 Gbps bandwidth
  - Descriptor caching and data pre-fetching used to improve system performance in high-latency systems
  - LPM protocol in USB 2.0 (exclude USB3OTG_2) and U0, U1, U2, and U3 states for USB 3.0
  - USB 3.0 device features
    - Up to 10 IN endpoints, including control endpoint 0
    - Up to 6 OUT endpoints, including control endpoint 0
    - Up to 16 endpoint transfer resources, each one for each endpoint
    - Flexible endpoint configuration for multiple applications/USB set-configuration modes
    - Hardware handles ERDY and burst
    - Stream-based bulk endpoints with controller automatically initiating data movement
    - Isochronous endpoints with isochronous data in data buffers
    - Flexible Descriptor with rich set of features to support buffer interrupt moderation, multiple transfers, isochronous, control, and scattered buffering support
  - USB 3.0 xHCI host features
    - Support up to 64 devices
    - Support one interrupter
    - Support one USB 2.0 port (exclude USB3OTG_2) and one Super-Speed port
    - Support standard or open-source xHCI and class driver
  - USB 3.0 dual-role device (DRD) features
    - Static device operation
    - Static host operation
    - USB 3.0/USB 2.0 OTG A device and B device basing on ID, USB3OTG_2 only support USB 3.0
    - Not Support USB 3.0/USB 2.0 OTG session request protocol (SRP), host negotiation protocol (HNP) and Role Swap Protocol (RSP)
  - Miscellaneous features
    - USB 2.0 PHY support battery charge detection
    - USB3OTG_0 and USB3OTG_1 support USB Type-C and DP Alt Mode
    - USB3OTG_2 PHY combos with PCIE and SATA

| **Pin #** | **Pin name** | **Signal description** | **Direction** | **Pin type** |
| --- | --- | --- | --- | --- |
| 161 | USBSS_RX_N | USB SS Receive– (USB 3.0 Ctrl #0) | Input | USB SS PHY |
| 163 | USBSS_RX_P | USB SS Receive+ (USB 3.0 Ctrl #0) | Input | USB SS PHY |
| 166 | USBSS_TX_N | USB SS Transmit– (USB 3.0 Ctrl #0) | Output | USB SS PHY |
| 168 | USBSS_TX_P | USB SS Transmit+ (USB 3.0 Ctrl #0) | Output | USB SS PHY |

Table 8. USB 3.0 GEN1 pin descriptions

- USB 2.0 Host
  - Compatible with USB 2.0 specification
  - Support two USB 2.0 Hosts
  - Supports high-speed (480 Mbps), full-speed (12 Mbps) and low-speed (1.5 Mbps) mode
  - Support Enhanced Host Controller Interface Specification (EHCI), Revision 1.0
  - Support Open Host Controller Interface Specification (OHCI), Revision 1.0a

| **Pin #** | **Pin name** | **Signal description** | **Direction** | **Pin type** |
| --- | --- | --- | --- | --- |
| 109 | USB0_D_N | USB2.0 Port 0 Data– | Bidir | USB PHY |
| 111 | USB0_D_P | USB2.0 Port 0 Data+ | Bidir | USB PHY |
| 115 | USB1_D_N | USB 2.0 Port 1 Data– | Bidir | USB PHY |
| 117 | USB1_D_P | USB 2.0 Port 1 Data+ | Bidir | USB PHY |
| 121 | USB2_D_N | USB 2.0 Port 2 Data– | Bidir | USB PHY |
| 123 | USB2_D_P | USB 2.0 Port 2 Data+ | Bidir | USB PHY |

Table 9. USB 2.0 pin descriptions

- Combo PIPE PHY Interface
  - Support three Combo PIPE PHYs with PCIe 2.1/SATA 3.0/USB 3.0 controller
- Combo PIPE PHY0 supports one of the following interfaces:
  - SATA
  - PCIe 2.1
- Combo PIPE PHY1 supports one of the following interfaces:
  - SATA
  - PCIe 2.1
- Combo PIPE PHY2 supports one of the following interfaces:
  - SATA
  - PCIe 2.1
  - USB 3.0
- PCIe 2.1 Interface
  - Compatible with PCI Express Base Specification Revision 2.1
  - Support one lane for each PCIe 2.1 interface
  - Support Root Complex (RC) only
  - Support 5 Gbps data rate

| **Pin #** | **Pin name** | **Signal description** | **Direction** | **Pin type** |
| --- | --- | --- | --- | --- |
| 167 | PCIE1_RX0_N | PCIe #1 Receive 0– (PCIe Ctrl #2 Lane 0) | Input | PCIe PHY |
| 169 | PCIE1_RX0_P | PCIe #1 Receive 0+ (PCIe Ctrl #2 Lane 0) | Input | PCIe PHY |
| 172 | PCIE1_TX0_N | PCIe #1 Transmit 0– (PCIe Ctrl #2 Lane 0) | Output | PCIe PHY |
| 174 | PCIE1_TX0_P | PCIe #1 Transmit 0+ (PCIe Ctrl #2 Lane 0) | Output | PCIe PHY |
| 183 | PCIE1_RST\* | PCIe #1 Reset (PCIe Ctrl #2). 4.7kΩ pull-up to 3.3V on the module. | Output | Open Drain – 3.3V |
| 182 | PCIE1_CLKREQ\* | PCIe #1 Clock Request (PCIe Ctrl #2). 47kΩ pull-up to 3.3V on the module. | Bidir | Open Drain – 3.3V |
| 173 | PCIE1_CLK_N | PCIe #1 Reference Clock– (PCIe Ctrl #2) | Output | PCIe PHY |
| 175 | PCIE1_CLK_P | PCIe #1 Reference Clock+ (PCIe Ctrl #2) | Output | PCIe PHY |
| 179 | PCIE_WAKE\* | PCIe Wake. 47kΩ pull-up to 3.3V on the module. | Input | Open Drain – 3.3V |

Table 10. PCIE 2.1 pin descriptions

- SATA interface
  - Compatible with Serial ATA 3.1 and AHCI revision 1.3.1
  - Support eSATA
  - Support one port for each SATA interface
  - Support 6 Gbps data rate
- PCIe 3.0 interface
  - Compatible with PCI Express Base Specification Revision 3.0
  - Support dual operation modes: Root Complex (RC) and End Point (EP)
  - Support data rates: 2.5 Gbps (PCIe 1.1), 5 Gbps (PCIe 2.1), 8 Gbps (PCIe 3.0)
  - Support aggregation and bifurcation with 1x 4 lanes, 2x 2 lanes, 4x 1 lanes and 1x 2 lanes + 2x 1 lanes

| **Pin #** | **Pin name** | **Signal description** | **Direction** | **Pin type** |
| --- | --- | --- | --- | --- |
| 131 | PCIE0_RX0_N | PCIe #0 Receive 0– (PCIe Ctrl #0 Lane 0) | Input | PCIe PHY |
| 133 | PCIE0_RX0_P | PCIe #0 Receive 0+ (PCIe Ctrl #0 Lane 0) | Input | PCIe PHY |
| 137 | PCIE0_RX1_N | PCIe #0 Receive 1– (PCIe Ctrl #0 Lane 1) | Input | PCIe PHY |
| 139 | PCIE0_RX1_P | PCIe #0 Receive 1+ (PCIe Ctrl #0 Lane 1) | Input | PCIe PHY |
| 134 | PCIE0_TX0_N | PCIe #0 Transmit 0– (PCIe Ctrl #0 Lane 0) | Output | PCIe PHY |
| 136 | PCIE0_TX0_P | PCIe #0 Transmit 0+ (PCIe Ctrl #0 Lane 0) | Output | PCIe PHY |
| 140 | PCIE0_TX1_N | PCIe #0 Transmit 1– PCIe Ctrl #0 Lane 1) | Output | PCIe PHY |
| 142 | PCIE0_TX1_P | PCIe #0 Transmit 1+ (PCIe Ctrl #0 Lane 1) | Output | PCIe PHY |
| 181 | PCIE0_RST\* | PCIe #0 Reset (PCIe Ctrl #0). 4.7kΩ pull-up to 3.3V on the module. | Bidir | Open Drain – 3.3V |
| 180 | PCIE0_CLKREQ\* | PCIe #0 Clock Request (PCIe Ctrl #0). 47kΩ pull-up to 3.3V on the module. | Bidir | Open Drain – 3.3V |
| 179 | PCIE_WAKE\* | PCIe Wake. 47kΩ pull-up to 3.3V on the module. | Input | Open Drain – 3.3V |
| 160 | PCIE0_CLK_N | PCIe #0 Reference Clock– | Output | PCIe PHY |
| 162 | PCIE0_CLK_P | PCIe #0 Reference Clock+ | Output | PCIe PHY |

Table 11. PCIE 3.0 pin descriptions

- SPI interface
  - Support 5 SPI Controllers (SPI0-SPI4)
  - Support two chip-select output
  - Support serial-master and serial-slave mode, software-configurable

| **Pin #** | **Pin name** | **Signal description** | **Direction** | **Pin type** |
| --- | --- | --- | --- | --- |
| 91 | SPI0_SCK | SPI 0 Clock | Bidir | CMOS – 1.8V |
| 89 | SPI0_MOSI | SPI 0 Master Out / Slave In | Bidir | CMOS – 1.8V |
| 93 | SPI0_MISO | SPI 0 Master In / Slave Out | Bidir | CMOS – 1.8V |
| 95 | SPI0_CS0\* | SPI 0 Chip Select 0 | Bidir | CMOS – 1.8V |
| 97 | SPI0_CS1\* | SPI 0 Chip Select 1 | Bidir | CMOS – 1.8V |
| 106 | SPI1_SCK | SPI 1 Clock | Bidir | CMOS – 1.8V |
| 104 | SPI1_MOSI | SPI 1 Master Out / Slave In | Bidir | CMOS – 1.8V |
| 108 | SPI1_MISO | SPI 1 Master In / Slave Out | Bidir | CMOS – 1.8V |
| 110 | SPI1_CS0\* | SPI 1 Chip Select 0 | Bidir | CMOS – 1.8V |

Table 12. SPI pin descriptions

- I2C master controller
  - Support 9 I2C master (I2C0-I2C8)
  - Support 7-bit and 10-bit address mode
  - Software programmable clock frequency
  - Data on the I2C-bus can be transferred at rates of up to 100 Kbps in the Standard-mode, up to 400 Kbps in the Fast-mode

| **Pin #** | **Pin name** | **Signal description** | **Direction** | **Pin type** |
| --- | --- | --- | --- | --- |
| 185 | I2C0_SCL | General I2C 0 Clock. 2.2kΩ pull-up to 3.3V on module. | Bidir | Open Drain – 3.3V |
| 187 | I2C0_SDA | General I2C 0 Data. 2.2kΩ pull-up to 3.3V on the module. | Bidir | Open Drain – 3.3V |
| 189 | I2C1_SCL | General I2C 1 Clock. 2.2kΩ pull-up to 3.3V on the module. | Bidir | Open Drain – 3.3V |
| 191 | I2C1_SDA | General I2C 1 Data. 2.2kΩ pull-up to 3.3V on the module. | Bidir | Open Drain – 3.3V |
| 232 | I2C2_SCL | General I2C 2 Clock. 2.2kΩ pull-up to 1.8V on the module. | Bidir | Open Drain – 1.8V |
| 234 | I2C2_SDA | General I2C 2 Data. 2.2kΩ pull-up to 1.8V on the module. | Bidir | Open Drain – 1.8V |
| 213 | CAM_I2C_SCL | Camera I2C Clock. 2.2kΩ pull-up to 3.3V on the module. | Bidir | Open Drain – 3.3V |
| 215 | CAM_I2C_SDA | Camera I2C Data. 2.2kΩ pull-up to 3.3V on the module. | Bidir | Open Drain – 3.3V |

Table 13. I2C pin descriptions

- UART interface
  - Support 10 UART interfaces (UART0-UART9)
  - Embedded two 64-byte FIFO for TX and RX operation respectively
  - Support transmitting or receiving 5-bit, 6-bit, 7-bit, and 8-bit serial data
  - Standard asynchronous communication bits such as start, stop and parity
  - Support different input clocks for UART operation to get up to 4 Mbps baud rate
  - Support auto flow control mode for all UART interfaces

| **Pin #** | **Pin name** | **Signal description** | **Direction** | **Pin type** |
| --- | --- | --- | --- | --- |
| 99 | UART0_TXD | UART #0 Transmit | Output | CMOS – 1.8V |
| 101 | UART0_RXD | UART #0 Receive | Input | CMOS – 1.8V |
| 103 | UART0_RTS\* | UART #0 Request to Send | Output | CMOS – 1.8V |
| 105 | UART0_CTS\* | UART #0 Clear to Send | Input | CMOS – 1.8V |
| 203 | UART1_TXD | UART #1 Transmit | Output | CMOS – 1.8V |
| 205 | UART1_RXD | UART #1 Receive | Input | CMOS – 1.8V |
| 207 | UART1_RTS\* | UART #1 Request to Send | Output | CMOS – 1.8V |
| 209 | UART1_CTS\* | UART #1 Clear to Send | Input | CMOS – 1.8V |
| 236 | UART2_TXD | UART #2 Transmit | Output | CMOS – 1.8V |
| 238 | UART2_RXD | UART #2 Receive | Input | CMOS – 1.8V |

Table 14. UART pin descriptions

- CAN bus
  - Support 3 CAN buses
  - Support CAN 2.0B protocol
  - Support transmitting or receiving CAN standard frame
  - Support transmitting or receiving CAN extended frame
  - Support transmitting or receiving data frame, remote frame, overload frame, error frame, and frame interval

| **Pin #** | **Pin name** | **Signal description** | **Direction** | **Pin type** |
| --- | --- | --- | --- | --- |
| 145 | CAN_TX | CAN PHY | Output | CMOS – 3.3V |
| 143 | CAN_RX | CAN PHY | Input | CMOS – 3.3V |

Table 15. CAN pin descriptions

## Others

- Multiple groups of GPIOs
  - All GPIOs can be used to generate interrupt
  - Support level trigger and edge trigger interrupt
  - Support configurable polarity of level trigger interrupt
  - Support configurable rising edge, falling edge and both edge trigger interrupt
  - Support configurable pull direction (a weak pull-up and a weak pull-down)
  - Support configurable drive strength

| **Pin #** | **Pin name** | **Signal description** | **Direction** | **Pin type** |
| --- | --- | --- | --- | --- |
| 87 | GPIO00 | GPIO #0 or USB 0 VBUS Enable #0 | Bidir | CMOS – 1.8V |
| 118 | GPIO01 | GPIO #1 or Generic Clocks | Bidir | CMOS – 1.8V |
| 124 | GPIO02 | GPIO #2 | Bidir | CMOS – 1.8V |
| 126 | GPIO03 | GPIO #3 | Bidir | CMOS – 1.8V |
| 127 | GPIO04 | GPIO #4 | Bidir | CMOS – 1.8V |
| 128 | GPIO05 | GPIO #5 | Bidir | CMOS – 1.8V |
| 130 | GPIO06 | GPIO #6 | Bidir | CMOS – 1.8V |
| 206 | GPIO07 | GPIO #7 or Pulse Width Modulator | Bidir | CMOS – 1.8V |
| 208 | GPIO08 | GPIO #8 or Fan Tach | Bidir | CMOS – 1.8V |
| 211 | GPIO09 | GPIO #9 or Audio Codec Master Clock | Bidir | CMOS – 1.8V |
| 212 | GPIO10 | GPIO #10 | Bidir | CMOS – 1.8V |
| 216 | GPIO11 | GPIO #11 or Generic Clocks | Bidir | CMOS – 1.8V |
| 218 | GPIO12 | GPIO #12 or Pulse Width Modulator | Bidir | CMOS – 1.8V |
| 228 | GPIO13 | GPIO #13 or Pulse Width Modulator | Bidir | CMOS – 1.8V |
| 230 | GPIO14 | GPIO #14 or Pulse Width Modulator | Bidir | CMOS – 1.8V |

Table 16. GPIO pin descriptions

- Temperature Sensor (TS-ADC)
  - Support User-Defined Mode and Automatic Mode
  - In User-Defined Mode, start_of_conversion can be controlled completely by software, and also can be generated by hardware
  - In Automatic Mode, the temperature of alarm (high/low temperature) interrupt can be configurable
  - In Automatic Mode, the temperature of system reset can be configurable
  - Support up to 7 channels TS-ADC, the temperature criteria of each channel can be configurable
  - \-40~125°C temperature range and 1°C temperature resolution
- Successive approximation register ADC (SAR ADC)
  - 12-bit resolution
  - Up to 1 MS/s sampling rate
  - Eight single-ended input channels
- OTP
  - Support 32 Kbit address space and the higher 4 Kbit address space is non-secure part
  - Support read and program word mask in secure model
  - Support maximum 32-bit OTP program operation
  - Support maximum 16-word OTP read operation
  - Program and Read state can be read
  - Program fail address record
- Package type
  - FCBGA1088L (body: 23 mm x 23 mm; ball size: 0.36 mm; ball pitch: 0.65 mm)

## Power and system management

VIN must be supplied by the carrier board that the module is designed to connect to. All interfaces are referenced to on- module voltage rails, additional I/O voltage is not required to be supplied to the module.

| **Pin #** | **Pin name** | **Signal description** | **Direction** | **Pin type** |
| --- | --- | --- | --- | --- |
| 251
252
253
254
255
256
257
258
259
260 | VDD_IN | Main power – Supplies PMIC and other registers | Input | 5.0V |
| 235 | PMIC_BBAT | PMIC Battery Back-up. Optionally used to provide back-up power for the Real-Time Clock (RTC). Connects to Lithium Cell or super capacitor on Carrier Board. PMIC is supply when charging cap or coin cell. Super cap or coin cell is source when system is disconnected from power. | Bidir | 1.65V-5.5V |
| 233 | SHUTDOWN_REQ\* | Used by the module to request a shutdown from the carrier board. Pull up to VDD_IN_5V with 4.7 kΩ on the module. | Output | Analog – 5.0V |
| 237 | POWER_EN | Signal for module on/off: high level on, low level off. Connects to module PMIC EN0 through converter logic.
POWER_EN is routed to a Schmitt trigger buffer on the module. A 45 kΩ pullup is in the PMIC. | Input | CMOS – 5.0V |
| 239 | SYS_RESET\* | Module Reset. Reset to the module when driven low by the carrier board. Used as carrier board supply enable when driven high by the module when module power sequence is complete. Used to ensure proper power on/off sequencing between module and carrier board supplies. Pull up to 1.8 V with 10 kΩ resistor on the module. | Bidir | Open Drain
– 1.8V |
| 178 | MOD_SLEEP\* | Module Sleep. When active (low), indicates module has gone to Sleep (SC7) mode. | Output | CMOS – 3.3V |
| 210 | CLK_32K_OUT | Sleep/Suspend clock | Output | CMOS – 1.8V |
| 214 | FORCE_RECOVERY\* | Force Recovery strap pin | Input | CMOS – 1.8V |
| 240 | SLEEP/WAKE\* | Configured as GPIO for optional use to indicate the system should enter or exit sleep mode. | Input | CMOS – 5.0V |

Table 17. Power and system control pin descriptions

## PMC

The Power management controller (PMC) power management features enable both high speed operation and very low-power standby states. The PMC primarily controls voltage transitions for the SoC as it transitions to/from different low power modes; it also acts as a slave receiving dedicated power/clock request signals as well as wake events from various sources (e.g., SPI, I2C, RTC, USB) which can wake the system from deep sleep state. The PMC enables aggressive power-gating capabilities on idle modules and integrates specific logic to maintain defined states and control power domains during sleep and deep sleep modes.

## Resets

If you assert reset, Core 3588E and onboard storage will be reset. This signal is also used for baseboard power sequencing.

## PMIC_BBAT

An optional backup battery can be attached to the VCC_RTC module input to maintain the module RTC when VIN is not present. This pin is connected directly to the onboard PMIC. Details of the types of backup cells that optionally can be connected are found in the PMIC manufacturer’s data sheet. When a backup cell is connected to the PMIC, the RTC retains its contents and can be configured to charge the backup cell as well. RTC accuracy is 2 seconds/day in typical room temperature only.
The following backup cells may be attached to this pin:

- Super capacitor (gold cap, double layer electrolytic)
- Standard capacitors (tantalum)
- Rechargeable Lithium Manganese cells

The backup cells must provide a voltage in the range 2.5 V to 3.5 V.

## Power sequencing

Core 3588E is required to be powered on and off in a known sequence. Sequencing is determined through a set of control signals; the SYS_RESET\* signal (when deasserted) is used to indicate when the carrier board can power on. The following sections provide an overview of the power sequencing steps between the carrier board and Core 3588E. Core 3588E and the product carrier board must be power sequenced properly to avoid potential damage to components on either the module or the carrier board system.

#### Power up

During power-up, the carrier board must wait until the signal SYS_RESET\* is deasserted from Core 3588E before enabling its power; Core 3588E deasserts the SYS_RESET\* signal to enable the complete system to boot.

#### Power down

Shutdown events can be triggered by either the module or the baseboard, but the shutdown event is always serviced by the baseboard. To do so, the baseboard deasserts POWER_EN, which begins the shutdown power sequence on the module. If the module needs to request a shutdown event in the case of thermal, software, or under-voltage events, it asserts SHUTDOWN_REQ\*. When the baseboard sees low SHUTDOWN_REQ\*, it should deassert POWER_EN as soon as possible.
Once POWER_EN is deasserted, the module asserts SYS_RESET\*, and the baseboard may shut down. SoC 3.3 V I/O must reach 0.5 V or lower at most 1.5 ms after SYS_RESET\* is asserted. SoC 1.8 V I/O must reach 0.5 V or lower at most 4 ms after SYS_RESET\* is asserted.

## Pin definition

The following table lists the pin definition of Core 3588E. For pin comparisons with Jetson TX2 NX and Jetson Orin Nano, see this file [CORE3588E_Pin_Function Comparison with Jetson TX2 NX and Jetson Orin Nano](https://downloads.mixtile.com/core3588e/file/CORE3588E_Pin_Function_Comparision_with_Jetson_rev01.pdf).

| **Core 3588E function** | **Pin number** | **Pin number** | **Core 3588E function** |
| --- | --- | --- | --- |
| GND_1 | 1 | 2 | GND_2 |
| CSI1_D0_N | 3 | 4 | CSI0_D0_N |
| CSI1_D0_P | 5 | 6 | CSI0_D0_P |
| GND_3 | 7 | 8 | GND_4 |
| CSI1_CLK_N | 9 | 10 | CSI0_CLK_N |
| CSI1_CLK_P | 11 | 12 | CSI0_CLK_P |
| GND_5 | 13 | 14 | GND_6 |
| CSI1_D1_N | 15 | 16 | CSI0_D1_N |
| CSI1_D1_P | 17 | 18 | CSI0_D1_P |
| GND_7 | 19 | 20 | GND_8 |
| CSI3_D0_N | 21 | 22 | CSI2_D0_N |
| CSI3_D0_P | 23 | 24 | CSI2_D0_P |
| GND_9 | 25 | 26 | GND_10 |
| CSI3_CLK_N | 27 | 28 | CSI2_CLK_N |
| CSI3_CLK_P | 29 | 30 | CSI2_CLK_P |
| GND_11 | 31 | 32 | GND_12 |
| CSI3_D1_N | 33 | 34 | CSI2_D1_N |
| CSI3_D1_P | 35 | 36 | CSI2_D1_P |
| GND_13 | 37 | 38 | GND_14 |
| DP0_TXD0_N | 39 | 40 | CSI4_D2_N |
| DP0_TXD0_P | 41 | 42 | CSI4_D2_P |
| GND_15 | 43 | 44 | GND_16 |
| DP0_TXD1_N | 45 | 46 | CSI4_D0_N |
| DP0_TXD1_P | 47 | 48 | CSI4_D0_P |
| GND_17 | 49 | 50 | GND_18 |
| DP0_TXD2_N | 51 | 52 | CSI4_CLK_N |
| DP0_TXD2_P | 53 | 54 | CSI4_CLK_P |
| GND_19 | 55 | 56 | GND_20 |
| DP0_TXD3_N | 57 | 58 | CSI4_D1_N |
| DP0_TXD3_P | 59 | 60 | CSI4_D1_P |
| GND_21 | 61 | 62 | GND_22 |
| DP1_TXD0_N | 63 | 64 | CSI4_D3_N |
| DP1_TXD0_P | 65 | 66 | CSI4_D3_P |
| GND_23 | 67 | 68 | GND_24 |
| DP1_TXD1_N | 69 | 70 | DSI_D0_N |
| DP1_TXD1_P | 71 | 72 | DSI_D0_P |
| GND_25 | 73 | 74 | GND_26 |
| DP1_TXD2_N | 75 | 76 | DSI_CLK_N |
| DP1_TXD2_P | 77 | 78 | DSI_CLK_P |
| GND_27 | 79 | 80 | GND_28 |
| DP1_TXD3_N | 81 | 82 | DSI_D1_N |
| DP1_TXD3_P | 83 | 84 | DSI_D1_P |
| GND_29 | 85 | 86 | GND_30 |
| GPIO00 | 87 | 88 | DP0_HPD |
| SPI0_MOSI | 89 | 90 | DP0_AUX_N |
| SPI0_SCK | 91 | 92 | DP0_AUX_P |
| SPI0_MISO | 93 | 94 | HDMI_CEC |
| SPI0_CS0 | 95 | 96 | DP1_HPD |
| SPI0_CS1 | 97 | 98 | DP1_AUX_N |
| UART0_TXD | 99 | 100 | DP1_AUX_P |
| UART0_RXD | 101 | 102 | GND_31 |
| UART0_RTS | 103 | 104 | SPI1_MOSI |
| UART0_CTS | 105 | 106 | SPI1_SCK |
| GND_32 | 107 | 108 | SPI1_MISO |
| USB0_D_N | 109 | 110 | SPI1_CS0 |
| USB0_D_P | 111 | 112 | I2S3_DIN |
| GND_33 | 113 | 114 | CAM0_PWDN |
| USB1_D_N | 115 | 116 | CAM0_MCLK |
| USB1_D_P | 117 | 118 | GPIO01 |
| GND_34 | 119 | 120 | CAM1_PWDN |
| USB2_D_N | 121 | 122 | CAM1_MCLK |
| USB2_D_P | 123 | 124 | I2S2_DOUT |
| GND_35 | 125 | 126 | I2S2_DIN |
| I2S2_FS | 127 | 128 | I2S2_SCLK |
| GND_36 | 129 | 130 | I2S3_FS |
| PCIE0_RX0_N | 131 | 132 | GND_37 |
| PCIE0_RX0_P | 133 | 134 | PCIE0_TX0_N |
| GND_38 | 135 | 136 | PCIE0_TX0_P |
| PCIE0_RX1_N | 137 | 138 | GND_39 |
| PCIE0_RX1_P | 139 | 140 | PCIE0_TX1_N |
| GND_40 | 141 | 142 | PCIE0_TX1_P |
| CAN_RX | 143 | 144 | GND_41 |
| CAN_TX | 145 | 146 | GND_42 |
| GND_43 | 147 | 148 | PCIE0_TX2_N |
| PCIE0_RX2_N | 149 | 150 | PCIE0_TX2_P |
| PCIE0_RX2_P | 151 | 152 | GND_44 |
| GND_45 | 153 | 154 | PCIE0_TX3_N |
| PCIE0_RX3_N | 155 | 156 | PCIE0_TX3_P |
| PCIE0_RX3_P | 157 | 158 | GND_46 |
| GND_47 | 159 | 160 | PCIE0_CLK_N |
| USBSS_RX_N | 161 | 162 | PCIE0_CLK_P |
| USBSS_RX_P | 163 | 164 | GND_48 |
| GND_49 | 165 | 166 | USBSS_TX_N |
| PCIE1_RX0_N | 167 | 168 | USBSS_TX_P |
| PCIE1_RX0_P | 169 | 170 | GND_50 |
| GND_51 | 171 | 172 | PCIE1_TX0_N |
| PCIE1_CLK_N | 173 | 174 | PCIE1_TX0_P |
| PCIE1_CLK_P | 175 | 176 | GND_52 |
| GND_53 | 177 | 178 | MOD_SLEEP |
| PCIE_WAKE | 179 | 180 | PCIE0_CLKREQ |
| PCIE0_RST | 181 | 182 | PCIE1_CLKREQ |
| PCIE1_RST | 183 | 184 | GBE_MDI0_N |
| I2C0_SCL | 185 | 186 | GBE_MDI0_P |
| I2C0_SDA | 187 | 188 | GBE_LED_LINK |
| I2C1_SCL | 189 | 190 | GBE_MDI1_N |
| I2C1_SDA | 191 | 192 | GBE_MDI1_P |
| I2S0_DOUT | 193 | 194 | GBE_LED_ACT |
| I2S0_DIN | 195 | 196 | GBE_MDI2_N |
| I2S0_FS | 197 | 198 | GBE_MDI2_P |
| I2S0_SCLK | 199 | 200 | GND_54 |
| GND_55 | 201 | 202 | GBE_MDI3_N |
| UART1_TXD | 203 | 204 | GBE_MDI3_P |
| UART1_RXD | 205 | 206 | GPIO07 |
| UART1_RTS | 207 | 208 | GPIO08 |
| UART1_CTS | 209 | 210 | CLK_32K_OUT |
| GPIO09 | 211 | 212 | I2S3_SCLK |
| CAM_I2C_SCL | 213 | 214 | FORCE_RECOVERY |
| CAM_I2C_SDA | 215 | 216 | GPIO11 |
| GND_56 | 217 | 218 | I2S3_DOUT |
| SDMMC_DAT0 | 219 | 220 | I2S1_DOUT |
| SDMMC_DAT1 | 221 | 222 | I2S1_DIN |
| SDMMC_DAT2 | 223 | 224 | I2S1_FS |
| SDMMC_DAT3 | 225 | 226 | I2S1_SCLK |
| SDMMC_CMD | 227 | 228 | GPIO13 |
| SDMMC_CLK | 229 | 230 | GPIO14 |
| GND_57 | 231 | 232 | I2C2_SCL |
| SHUTDOWN_REQ | 233 | 234 | I2C2_SDA |
| PMIC_BBAT | 235 | 236 | UART2_TXD |
| POWER_EN | 237 | 238 | UART2_RXD |
| SYS_RESET | 239 | 240 | SLEEP/WAKE |
| GND_58 | 241 | 242 | GND_59 |
| GND_60 | 243 | 244 | GND_61 |
| GND_62 | 245 | 246 | GND_63 |
| GND_64 | 247 | 248 | GND_65 |
| GND_66 | 249 | 250 | GND_67 |
| VDD_IN_1 | 251 | 252 | VDD_IN_2 |
| VDD_IN_3 | 253 | 254 | VDD_IN_4 |
| VDD_IN_5 | 255 | 256 | VDD_IN_6 |
| VDD_IN_7 | 257 | 258 | VDD_IN_8 |
| VDD_IN_9 | 259 | 260 | VDD_IN_10 |
