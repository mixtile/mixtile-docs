---
sidebar_position: 2
description: The pin assignment of the Core 3588E 260-pin SO-DIMM edge connector, the signals in each interface group, and the power-on sequence.
---

# 260-pin Connector

## Overview

Core 3588E connects to its carrier board through a 260-pin SO-DIMM edge connector with the pin assignment of the Jetson TX2 NX. This page is for carrier board design and for tracing a signal from a carrier board connector back to the module.

- For the differences from the Jetson TX2 NX and the Jetson Orin Nano pin by pin, see the [pin comparison](pathname:///files/core-3588e/core3588e_jetson_pin_comparison_rev01.pdf) (PDF).
- This page describes the hardware. For which interfaces Mixtile OS sets up, and their device names, see [Interfaces in Mixtile OS](/core-3588e/system-usage#interfaces-in-mixtile-os).

## Electrical Notes

- The module needs only **5 V** on `VDD_IN`. It generates all other voltages itself, and the carrier board does not supply any I/O voltage.
- The I/O voltage of each signal is in the **Type** column of the tables below. Most GPIO, UART, SPI and I²S signals are **1.8 V** at the connector. Carrier boards made for the Jetson TX2 NX translate them to the voltage of their headers.
- An asterisk (`*`) marks an active-low signal.

## Pin Assignment

| Function | Pin | Pin | Function |
| --- | ---: | ---: | --- |
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

## Signal Descriptions

### Power and System Control

| Pin | Name | Description | Direction | Type |
| ---: | --- | --- | --- | --- |
| 251–260 | VDD_IN | Main power input. Supplies the PMIC and all other regulators on the module. | Input | 5.0 V |
| 235 | PMIC_BBAT | Backup power for the real-time clock, from a coin cell or super capacitor on the carrier board. The cell must provide 2.5 V to 3.5 V. | Bidir | 1.65 V–5.5 V |
| 233 | SHUTDOWN_REQ\* | Driven low by the module to request a shutdown from the carrier board. 4.7 kΩ pull-up to VDD_IN on the module. | Output | Analog, 5.0 V |
| 237 | POWER_EN | Module on/off: high turns the module on, low turns it off. Goes to a Schmitt-trigger buffer on the module; 45 kΩ pull-up in the PMIC. | Input | CMOS, 5.0 V |
| 239 | SYS_RESET\* | Driven low by the carrier board to reset the module. Driven high by the module when its power-up sequence is complete, to enable the carrier board supplies. 10 kΩ pull-up to 1.8 V on the module. | Bidir | Open drain, 1.8 V |
| 178 | MOD_SLEEP\* | Low when the module is in sleep mode. | Output | CMOS, 3.3 V |
| 210 | CLK_32K_OUT | 32 kHz sleep clock | Output | CMOS, 1.8 V |
| 214 | FORCE_RECOVERY\* | Recovery strap. Held low at power-up, the module enters Loader mode. | Input | CMOS, 1.8 V |
| 240 | SLEEP/WAKE\* | GPIO, optionally used to put the system to sleep or wake it. | Input | CMOS, 5.0 V |

### Display

`DP0` is the DisplayPort output. The `DP1` lanes carry the HDMI output.

| Pin | Name | Description | Direction | Type |
| ---: | --- | --- | --- | --- |
| 39 | DP0_TXD0_N | Display Port 0 Lane 0- | Output | DP/eDP |
| 41 | DP0_TXD0_P | Display Port 0 Lane 0+ | Output | DP/eDP |
| 45 | DP0_TXD1_N | Display Port 0 Lane 1– | Output | DP/eDP |
| 47 | DP0_TXD1_P | Display Port 0 Lane 1+ | Output | DP/eDP |
| 51 | DP0_TXD2_N | Display Port 0 Lane 2– | Output | DP/eDP |
| 53 | DP0_TXD2_P | Display Port 0 Lane 2+ | Output | DP/eDP |
| 57 | DP0_TXD3_N | Display Port 0 Lane 3– | Output | DP/eDP |
| 59 | DP0_TXD3_P | Display Port 0 Lane 3+ | Output | DP/eDP |
| 90 | DP0_AUX_N | Display Port 0 Aux– | Bidir | DP/eDP |
| 92 | DP0_AUX_P | Display Port 0 Aux+ | Bidir | DP/eDP |
| 88 | DP0_HPD | Display Port 0 Hot Plug Detect | Input | Open Drain – 1.8V |
| 63 | DP1_TXD0_N | HDMI Lane 2– | Output | HDMI |
| 65 | DP1_TXD0_P | HDMI Lane 2+ | Output | HDMI |
| 69 | DP1_TXD1_N | HDMI Lane 1– | Output | HDMI |
| 71 | DP1_TXD1_P | HDMI Lane 1+ | Output | HDMI |
| 75 | DP1_TXD2_N | HDMI Lane 0– | Output | HDMI |
| 77 | DP1_TXD2_P | HDMI Lane 0+ | Output | HDMI |
| 81 | DP1_TXD3_N | HDMI Clk Lane– | Output | HDMI |
| 83 | DP1_TXD3_P | HDMI Clk Lane+ | Output | HDMI |
| 98 | DP1_AUX_N | HDMI DDC SDA | Bidir | Open-Drain, 3.3V |
| 100 | DP1_AUX_P | HDMI DDC SCL | Output | Open-Drain, 3.3V |
| 96 | DP1_HPD | HDMI Hot Plug Detect | Input | Open Drain – 1.8V |
| 94 | HDMI_CEC | HDMI CEC | Bidir | Open Drain – 3.3V |

The MIPI DSI output:

| Pin | Name | Description | Direction | Type |
| ---: | --- | --- | --- | --- |
| 76 | DSI_CLK_N | DSI Clock– | Output | MIPI D-PHY |
| 78 | DSI_CLK_P | DSI Clock+ | Output | MIPI D-PHY |
| 70 | DSI_D0_N | DSI Data 0– | Output | MIPI D-PHY |
| 72 | DSI_D0_P | DSI Data 0+ | Output | MIPI D-PHY |
| 82 | DSI_D1_N | DSI Data 1– | Output | MIPI D-PHY |
| 84 | DSI_D1_P | DSI Data 1+ | Output | MIPI D-PHY |

### Camera

| Pin | Name | Description | Direction | Type |
| ---: | --- | --- | --- | --- |
| 10 | CSI0_CLK_N | Camera, CSI 0 Clock– | Input | MIPI D-PHY |
| 12 | CSI0_CLK_P | Camera, CSI 0 Clock+ | Input | MIPI D-PHY |
| 4 | CSI0_D0_N | Camera, CSI 0 Data 0– | Input | MIPI D-PHY |
| 6 | CSI0_D0_P | Camera, CSI 0 Data 0+ | Input | MIPI D-PHY |
| 16 | CSI0_D1_N | Camera, CSI 0 Data 1– | Input | MIPI D-PHY |
| 18 | CSI0_D1_P | Camera, CSI 0 Data 1+ | Input | MIPI D-PHY |
| 9 | CSI1_CLK_N | Camera, CSI 1 Clock– | Input | MIPI D-PHY |
| 11 | CSI1_CLK_P | Camera, CSI 1 Clock+ | Input | MIPI D-PHY |
| 3 | CSI1_D0_N | Camera, CSI 1 Data 0– | Input | MIPI D-PHY |
| 5 | CSI1_D0_P | Camera, CSI 1 Data 0+ | Input | MIPI D-PHY |
| 15 | CSI1_D1_N | Camera, CSI 1 Data 1– | Input | MIPI D-PHY |
| 17 | CSI1_D1_P | Camera, CSI 1 Data 1+ | Input | MIPI D-PHY |
| 28 | CSI2_CLK_N | Camera, CSI 2 Clock– | Input | MIPI D-PHY |
| 30 | CSI2_CLK_P | Camera, CSI 2 Clock+ | Input | MIPI D-PHY |
| 22 | CSI2_D0_N | Camera, CSI 2 Data 0– | Input | MIPI D-PHY |
| 24 | CSI2_D0_P | Camera, CSI 2 Data 0+ | Input | MIPI D-PHY |
| 34 | CSI2_D1_N | Camera, CSI 2 Data 1– | Input | MIPI D-PHY |
| 36 | CSI2_D1_P | Camera, CSI 2 Data 1+ | Input | MIPI D-PHY |
| 27 | CSI3_CLK_N | Camera, CSI 3 Clock– | Input | MIPI D-PHY |
| 29 | CSI3_CLK_P | Camera, CSI 3 Clock+ | Input | MIPI D-PHY |
| 21 | CSI3_D0_N | Camera, CSI 3 Data 0– | Input | MIPI D-PHY |
| 23 | CSI3_D0_P | Camera, CSI 3 Data 0+ | Input | MIPI D-PHY |
| 33 | CSI3_D1_N | Camera, CSI 3 Data 1– | Input | MIPI D-PHY |
| 35 | CSI3_D1_P | Camera, CSI 3 Data 1+ | Input | MIPI D-PHY |
| 52 | CSI4_CLK_N | Camera, CSI 4 Clock– | Input | MIPI D-PHY |
| 54 | CSI4_CLK_P | Camera, CSI 4 Clock+ | Input | MIPI D-PHY |
| 46 | CSI4_D0_N | Camera, CSI 4 Data 0– | Input | MIPI D-PHY |
| 48 | CSI4_D0_P | Camera, CSI 4 Data 0+ | Input | MIPI D-PHY |
| 58 | CSI4_D1_N | Camera, CSI 4 Data 1– | Input | MIPI D-PHY |
| 60 | CSI4_D1_P | Camera, CSI 4 Data 1+ | Input | MIPI D-PHY |
| 40 | CSI4_D2_N | Camera, CSI 4 Data 2– | Input | MIPI D-PHY |
| 42 | CSI4_D2_P | Camera, CSI 4 Data 2+ | Input | MIPI D-PHY |
| 64 | CSI4_D3_N | Camera, CSI 4 Data 3– | Input | MIPI D-PHY |
| 66 | CSI4_D3_P | Camera, CSI 4 Data 3+ | Input | MIPI D-PHY |

Camera control signals:

| Pin | Name | Description | Direction | Type |
| ---: | --- | --- | --- | --- |
| 213 | CAM_I2C_SCL | Camera I2C Clock. 2.2kΩ pull-up to 3.3 V on the module. | Bidir | Open Drain – 3.3V |
| 215 | CAM_I2C_SDA | Camera I2C Data. 2.2 kΩ pull-up to 3.3V on the module. | Bidir | Open Drain – 3.3V |
| 116 | CAM0_MCLK | Camera 0 Reference Clock | Output | CMOS – 1.8V |
| 114 | CAM0_PWDN | Camera 0 Powerdown or GPIO | Output | CMOS – 1.8V |
| 122 | CAM1_MCLK | Camera 1 Reference Clock | Output | CMOS – 1.8V |
| 120 | CAM1_PWDN | Camera 1 Powerdown or GPIO | Output | CMOS – 1.8V |

### PCIe

PCIe 3.0, up to four lanes. Lanes 2 and 3, on pins 148 to 157, are reserved pins on the Jetson TX2 NX, so a carrier board designed only for the TX2 NX may connect two lanes.

| Pin | Name | Description | Direction | Type |
| ---: | --- | --- | --- | --- |
| 131 | PCIE0_RX0_N | PCIe #0 Receive 0– (PCIe Ctrl #0 Lane 0) | Input | PCIe PHY |
| 133 | PCIE0_RX0_P | PCIe #0 Receive 0+ (PCIe Ctrl #0 Lane 0) | Input | PCIe PHY |
| 137 | PCIE0_RX1_N | PCIe #0 Receive 1– (PCIe Ctrl #0 Lane 1) | Input | PCIe PHY |
| 139 | PCIE0_RX1_P | PCIe #0 Receive 1+ (PCIe Ctrl #0 Lane 1) | Input | PCIe PHY |
| 134 | PCIE0_TX0_N | PCIe #0 Transmit 0– (PCIe Ctrl #0 Lane 0) | Output | PCIe PHY |
| 136 | PCIE0_TX0_P | PCIe #0 Transmit 0+ (PCIe Ctrl #0 Lane 0) | Output | PCIe PHY |
| 140 | PCIE0_TX1_N | PCIe #0 Transmit 1– (PCIe Ctrl #0 Lane 1) | Output | PCIe PHY |
| 142 | PCIE0_TX1_P | PCIe #0 Transmit 1+ (PCIe Ctrl #0 Lane 1) | Output | PCIe PHY |
| 149 | PCIE0_RX2_N | PCIe #0 Receive 2– (PCIe Ctrl #0 Lane 2) | Input | PCIe PHY |
| 151 | PCIE0_RX2_P | PCIe #0 Receive 2+ (PCIe Ctrl #0 Lane 2) | Input | PCIe PHY |
| 155 | PCIE0_RX3_N | PCIe #0 Receive 3– (PCIe Ctrl #0 Lane 3) | Input | PCIe PHY |
| 157 | PCIE0_RX3_P | PCIe #0 Receive 3+ (PCIe Ctrl #0 Lane 3) | Input | PCIe PHY |
| 148 | PCIE0_TX2_N | PCIe #0 Transmit 2– (PCIe Ctrl #0 Lane 2) | Output | PCIe PHY |
| 150 | PCIE0_TX2_P | PCIe #0 Transmit 2+ (PCIe Ctrl #0 Lane 2) | Output | PCIe PHY |
| 154 | PCIE0_TX3_N | PCIe #0 Transmit 3– (PCIe Ctrl #0 Lane 3) | Output | PCIe PHY |
| 156 | PCIE0_TX3_P | PCIe #0 Transmit 3+ (PCIe Ctrl #0 Lane 3) | Output | PCIe PHY |
| 181 | PCIE0_RST\* | PCIe #0 Reset (PCIe Ctrl #0). 4.7kΩ pull-up to 3.3V on the module. | Bidir | Open Drain – 3.3V |
| 180 | PCIE0_CLKREQ\* | PCIe #0 Clock Request (PCIe Ctrl #0). 47kΩ pull-up to 3.3V on the module. | Bidir | Open Drain – 3.3V |
| 179 | PCIE_WAKE\* | PCIe Wake. 47kΩ pull-up to 3.3V on the module. | Input | Open Drain – 3.3V |
| 160 | PCIE0_CLK_N | PCIe #0 Reference Clock– | Output | PCIe PHY |
| 162 | PCIE0_CLK_P | PCIe #0 Reference Clock+ | Output | PCIe PHY |

PCIe 2.1, one lane:

| Pin | Name | Description | Direction | Type |
| ---: | --- | --- | --- | --- |
| 167 | PCIE1_RX0_N | PCIe #1 Receive 0– (PCIe Ctrl #2 Lane 0) | Input | PCIe PHY |
| 169 | PCIE1_RX0_P | PCIe #1 Receive 0+ (PCIe Ctrl #2 Lane 0) | Input | PCIe PHY |
| 172 | PCIE1_TX0_N | PCIe #1 Transmit 0– (PCIe Ctrl #2 Lane 0) | Output | PCIe PHY |
| 174 | PCIE1_TX0_P | PCIe #1 Transmit 0+ (PCIe Ctrl #2 Lane 0) | Output | PCIe PHY |
| 183 | PCIE1_RST\* | PCIe #1 Reset (PCIe Ctrl #2). 4.7kΩ pull-up to 3.3V on the module. | Output | Open Drain – 3.3V |
| 182 | PCIE1_CLKREQ\* | PCIe #1 Clock Request (PCIe Ctrl #2). 47kΩ pull-up to 3.3V on the module. | Bidir | Open Drain – 3.3V |
| 173 | PCIE1_CLK_N | PCIe #1 Reference Clock– (PCIe Ctrl #2) | Output | PCIe PHY |
| 175 | PCIE1_CLK_P | PCIe #1 Reference Clock+ (PCIe Ctrl #2) | Output | PCIe PHY |
| 179 | PCIE_WAKE\* | PCIe Wake. 47kΩ pull-up to 3.3V on the module. | Input | Open Drain – 3.3V |

### USB

USB 3.0:

| Pin | Name | Description | Direction | Type |
| ---: | --- | --- | --- | --- |
| 161 | USBSS_RX_N | USB SS Receive– (USB 3.0 Ctrl #0) | Input | USB SS PHY |
| 163 | USBSS_RX_P | USB SS Receive+ (USB 3.0 Ctrl #0) | Input | USB SS PHY |
| 166 | USBSS_TX_N | USB SS Transmit– (USB 3.0 Ctrl #0) | Output | USB SS PHY |
| 168 | USBSS_TX_P | USB SS Transmit+ (USB 3.0 Ctrl #0) | Output | USB SS PHY |

USB 2.0. Port 0 is the USB OTG port that is used for [flashing](/core-3588e/getting-started/install-os).

| Pin | Name | Description | Direction | Type |
| ---: | --- | --- | --- | --- |
| 109 | USB0_D_N | USB2.0 Port 0 Data– | Bidir | USB PHY |
| 111 | USB0_D_P | USB2.0 Port 0 Data+ | Bidir | USB PHY |
| 115 | USB1_D_N | USB 2.0 Port 1 Data– | Bidir | USB PHY |
| 117 | USB1_D_P | USB 2.0 Port 1 Data+ | Bidir | USB PHY |
| 121 | USB2_D_N | USB 2.0 Port 2 Data– | Bidir | USB PHY |
| 123 | USB2_D_P | USB 2.0 Port 2 Data+ | Bidir | USB PHY |

### Gigabit Ethernet

The Ethernet PHY is on the module. The carrier board adds the magnetics and the RJ45 connector.

| Pin | Name | Description | Direction | Type |
| ---: | --- | --- | --- | --- |
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

### UART

UART2 is the debug UART with the serial console.

| Pin | Name | Description | Direction | Type |
| ---: | --- | --- | --- | --- |
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

### I²C \{#i2c}

| Pin | Name | Description | Direction | Type |
| ---: | --- | --- | --- | --- |
| 185 | I2C0_SCL | General I2C 0 Clock. 2.2kΩ pull-up to 3.3V on module. | Bidir | Open Drain – 3.3V |
| 187 | I2C0_SDA | General I2C 0 Data. 2.2kΩ pull-up to 3.3V on the module. | Bidir | Open Drain – 3.3V |
| 189 | I2C1_SCL | General I2C 1 Clock. 2.2kΩ pull-up to 3.3V on the module. | Bidir | Open Drain – 3.3V |
| 191 | I2C1_SDA | General I2C 1 Data. 2.2kΩ pull-up to 3.3V on the module. | Bidir | Open Drain – 3.3V |
| 232 | I2C2_SCL | General I2C 2 Clock. 2.2kΩ pull-up to 1.8V on the module. | Bidir | Open Drain – 1.8V |
| 234 | I2C2_SDA | General I2C 2 Data. 2.2kΩ pull-up to 1.8V on the module. | Bidir | Open Drain – 1.8V |
| 213 | CAM_I2C_SCL | Camera I2C Clock. 2.2kΩ pull-up to 3.3V on the module. | Bidir | Open Drain – 3.3V |
| 215 | CAM_I2C_SDA | Camera I2C Data. 2.2kΩ pull-up to 3.3V on the module. | Bidir | Open Drain – 3.3V |

### SPI

| Pin | Name | Description | Direction | Type |
| ---: | --- | --- | --- | --- |
| 91 | SPI0_SCK | SPI 0 Clock | Bidir | CMOS – 1.8V |
| 89 | SPI0_MOSI | SPI 0 Master Out / Slave In | Bidir | CMOS – 1.8V |
| 93 | SPI0_MISO | SPI 0 Master In / Slave Out | Bidir | CMOS – 1.8V |
| 95 | SPI0_CS0\* | SPI 0 Chip Select 0 | Bidir | CMOS – 1.8V |
| 97 | SPI0_CS1\* | SPI 0 Chip Select 1 | Bidir | CMOS – 1.8V |
| 106 | SPI1_SCK | SPI 1 Clock | Bidir | CMOS – 1.8V |
| 104 | SPI1_MOSI | SPI 1 Master Out / Slave In | Bidir | CMOS – 1.8V |
| 108 | SPI1_MISO | SPI 1 Master In / Slave Out | Bidir | CMOS – 1.8V |
| 110 | SPI1_CS0\* | SPI 1 Chip Select 0 | Bidir | CMOS – 1.8V |

### I²S Audio \{#i2s-audio}

| Pin | Name | Description | Direction | Type |
| ---: | --- | --- | --- | --- |
| 199 | I2S0_SCLK | I2S Audio Port 0 Clock | Bidir | CMOS – 1.8V |
| 197 | I2S0_FS | I2S Audio Port 0 Left/Right Clock | Bidir | CMOS – 1.8V |
| 193 | I2S0_DOUT | I2S Audio Port 0 Data Out | Output | CMOS – 1.8V |
| 195 | I2S0_DIN | I2S Audio Port 0 Data In | Input | CMOS – 1.8V |
| 226 | I2S1_SCLK | I2S Audio Port 1 Clock | Bidir | CMOS – 1.8V |
| 224 | I2S1_FS | I2S Audio Port 1 Left/Right Clock | Bidir | CMOS – 1.8V |
| 220 | I2S1_DOUT | I2S Audio Port 1 Data Out | Output | CMOS – 1.8V |
| 222 | I2S1_DIN | I2S Audio Port 1 Data In | Input | CMOS – 1.8V |
| 124 | I2S2_DOUT | I2S Audio Port 2 Data Out | Bidir | CMOS – 1.8V |
| 126 | I2S2_DIN | I2S Audio Port 2 Data In | Bidir | CMOS – 1.8V |
| 127 | I2S2_FS | I2S Audio Port 2 Left/Right Clock | Input | CMOS – 1.8V |
| 128 | I2S2_SCLK | I2S Audio Port 2 Clock | Bidir | CMOS – 1.8V |
| 112 | I2S3_DIN | I2S Audio Port 3 Data In | Bidir | CMOS – 1.8V |
| 218 | I2S3_DOUT | I2S Audio Port 3 Data Out | Bidir | CMOS – 1.8V |
| 130 | I2S3_FS | I2S Audio Port 3 Left/Right Clock | Bidir | CMOS – 1.8V |
| 212 | I2S3_SCLK | I2S Audio Port 3 Clock | Bidir | CMOS – 1.8V |

### SD Card

| Pin | Name | Description | Direction | Type |
| ---: | --- | --- | --- | --- |
| 229 | SDMMC_CLK | SD Card or SDIO Clock | Output | CMOS – 1.8V/3.3V |
| 227 | SDMMC_CMD | SD Card or SDIO Command | Bidir | CMOS – 1.8V/3.3V |
| 219 | SDMMC_DAT0 | SD Card or SDIO Data 0 | Bidir | CMOS – 1.8V/3.3V |
| 221 | SDMMC_DAT1 | SD Card or SDIO Data 1 | Bidir | CMOS – 1.8V/3.3V |
| 223 | SDMMC_DAT2 | SD Card or SDIO Data 2 | Bidir | CMOS – 1.8V/3.3V |
| 225 | SDMMC_DAT3 | SD Card or SDIO Data 3 | Bidir | CMOS – 1.8V/3.3V |

### CAN

| Pin | Name | Description | Direction | Type |
| ---: | --- | --- | --- | --- |
| 145 | CAN_TX | CAN PHY | Output | CMOS – 3.3V |
| 143 | CAN_RX | CAN PHY | Input | CMOS – 3.3V |

### GPIO

| Pin | Name | Description | Direction | Type |
| ---: | --- | --- | --- | --- |
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

### Ground

The 67 `GND` pins are listed in [Pin Assignment](#pin-assignment). They are the ground return for power and for the high-speed signals next to them. Connect all of them to ground on the carrier board.

## Power Sequence

The module and the carrier board must power up and down in a defined order, controlled by `POWER_EN`, `SYS_RESET*` and `SHUTDOWN_REQ*`. A carrier board designed for the Jetson TX2 NX follows this sequence.

**Power up.** The carrier board supplies `VDD_IN` and drives `POWER_EN` high. It waits until the module releases `SYS_RESET*` before it enables its own supplies. The module releases `SYS_RESET*` when its power-up is complete, and the system boots.

**Power down.** The carrier board always carries out the shutdown, by driving `POWER_EN` low. When the module needs to shut down, for example because it is too hot, it drives `SHUTDOWN_REQ*` low, and the carrier board should then drive `POWER_EN` low as soon as possible. The module then asserts `SYS_RESET*`, and the carrier board may switch off its supplies. The 3.3 V I/O of the SoC must fall to 0.5 V or lower within 1.5 ms after `SYS_RESET*` is asserted, and the 1.8 V I/O within 4 ms.
