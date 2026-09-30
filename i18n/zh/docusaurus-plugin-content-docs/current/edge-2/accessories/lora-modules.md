---
sidebar_position: 2
---

# Supported LoRa Modules

:::info
内容翻译同步中，以下为英文原文。
:::

## \[RAK5146 WisLink LPWAN Concentrator\]

RAK5146 is an LPWAN Concentrator Module with mini-PCIe form factor based on Semtech SX1303 and SX126X for Listen Before Talk feature, which enables easy integration with Mixtile Edge 2.

### Specifications

#### Physical map

![Physical_map](/img/docs/supported-lora-module/fab3e596dffd.webp)

#### Block diagram

The RAK5146 concentrator is equipped with one SX1303 chip and two SX1250. The first chip is utilized for the RF signal and the core of the device, while the latter provides the related LoRa modem and processing functionalities.

![Block_diagram](/img/docs/supported-lora-module/a0d617d7fa10.webp)

#### Interfaces

- Power Supply: 3.3Vaux
- SPI
- USB
- UART
- I2C
- GPS_PPS
- RESET
- Antenna RF Interface

#### Pinout diagram

![Pinout_diagram](/img/docs/supported-lora-module/1b4e4531ed71.webp)

#### Pinout description

| **TYPE** | **DESCRIPTION** |
| --- | --- |
| IO | Bidirectional |
| DI | Digital input |
| DO | Digital output |
| OC | Open collector |
| OD | Open drain |
| PI | Power input |
| PO | Power output |
| NC | No connection |

| PIN NO. | MPCIE PIN REV. 2.0 | RAK5146 PIN | TYPE | DESCRIPTION | REMARKS |
| --- | --- | --- | --- | --- | --- |
| 1 | WAKE# | SX1261_BUSY | DO | No connection by default | Reserved for future applications |
| 2 | 3.3Vaux | 3V3 | PI | 3.3V DC supply |  |
| 3 | COEX1 | SX1261_DIO1 | IO | No connection by default | Reserved for future applications |
| 4 | GND | GND |  | Ground |  |
| 5 | COEX2 | SX1261_DIO2 | IO | No connection by default | Reserved for future applications |
| 6 | 1.5V | GPIO(6) | IO | No connection by default | Connect to the SX1302’s GPIO(6) |
| 7 | CLKREQ# | SX1261_NSS | DI | No connection by default | Reserved for future applications |
| 8 | UIM_PWR | NC |  | No connection |  |
| 9 | GND | GND |  | Ground |  |
| 10 | UIM_DATA | NC |  | No connection |  |
| 11 | REFCLK- | SX1261_NRESET | DI | No connection by default | Reserved for future application |
| 12 | UIM_CLK | NC |  | No connection |  |
| 13 | REFCLK+ | MCU_NRESET | DI | RESET signal for MCU of RAK5146-USB | Active low |
| 14 | UIM_RESET | NC |  | No connection |  |
| 15 | GND | GND |  | Ground |  |
| 16 | UIM_VPP | NC |  | No connection |  |
| 17 | RESERVED | NC |  | No connection |  |
| 18 | GND | GND |  | Ground |  |
| 19 | RESERVED | PPS | DO | Time pulse output | Leave open if not in use |
| 20 | W_DISABLE# | NC |  | No connection |  |
| 21 | GND | GND |  | Ground |  |
| 22 | PERST# | SX1303_RESET | DI | RAK5146-SPI reset input | Active high, ≥100ns for SX1302 reset |
| 23 | PERn0 | RESET_GPS | DI | GSP module ZOE-M8Q reset input | Active low, leave open if not in use |
| 24 | 3.3Vaux | 3v3 | PI | 3.3V DC supply |  |
| 25 | PERp0 | STANDBY_GPS | DI | GPS module ZOE-M8Q external interrupt input | Active low, leave open if not in use |
| 26 | GND | GND |  | Ground |  |
| 27 | GND | GND |  | Ground |  |
| 28 | 1.5V | GPIO(8) |  | Connect to the SX1303’s GPIO(8) |  |
| 29 | GND | GND |  | Ground |  |
| 30 | SMB_CLK | I2C_SCL | IO | HOST SCL | Connect to GPS module ZOE-M8Q’s SCL internally, leave open if not in use |
| 31 | PETn0 | PI_UART_TX | DI | HOST UART_TX | Connect to GPS module ZOE-M8Q’s UART_RT internally, leave open if not in use |
| 32 | SMB_DATA | I2C_SDA | IO | HOST SDA | Connect to GPS module ZOE-M8Q’s SDA internally, leave open if not in use |
| 33 | PETp0 | PI_UART_RX | DO | HOST UART_RX | \` Connect to GPS module ZOE-M8Q’s UART_TX internally, leave open if not in use |
| 34 | GND | GND |  | Ground |  |
| 35 | GND | GND |  | Ground |  |
| 36 | USB_D- | USB_DM | IO | USB differential data (-) | Require differential impedance of 90Ω |
| 37 | GND | GND |  | Ground |  |
| 38 | USB_D+ | USB_DP | IO | USB differential data (+) | Require differential impedance of 90Ω |
| 39 | 3.3Vaux | 3V3 | PI | 3.3V DC supply |  |
| 40 | GND | GND |  | Ground |  |
| 41 | 3.3Vaux | 3V3 | Pi | 3.3V DC supply |  |
| 42 | LED_WWAN# | NC |  | No connection |  |
| 43 | GND | GND |  | Ground |  |
| 44 | LED_WLAN# | NC |  | No connection |  |
| 45 | RESERVED | HOST_SCK | IO | Host SPI SCK |  |
| 46 | LED_WPAN# | NC |  | No connection |  |
| 47 | RESERVED | HOST_MISO | IO | Host SPI MISO |  |
| 48 | 1.5V | NC |  | No connection |  |
| 49 | RESERVED | HOST_MOSI | IO | Host SPI MOSI |  |
| 50 | GND | GND |  | Ground |  |
| 51 | RESERVED | HOST_CSN | IO | Host SPI CSN |  |
| 52 | 3.3Vaux | 3V3 | PI | 3.3V DC supply |  |

#### Electrical Requirements

Stressing the device above one or more of the ratings listed in the Absolute Maximum Rating section may cause permanent damage. These are stress ratings only. Operating the module at these or any conditions other than those specified in the Operating Conditions sections of the specification should be avoided. Exposure to Absolute Maximum Rating conditions for extended periods may affect device reliability.

The operating condition range defines those limits within which the functionality of the device is guaranteed. Where application information is given, it is advisory only and does not form part of the specification.

##### Absolute Maximum Rating

The limiting values given below are following the Absolute Maximum Rating System (IEC 134).

| SYMBOL | DESCRIPTION | CONDITION | MIN | MAX |
| --- | --- | --- | --- | --- |
| 3.3Vaux | Module supply voltage | Input DC voltage at 3.3Vaux pins | \-0.3 V | 3.6 V |
| USB | USB D+/D- pins | Input DC voltage at USB interface pins |  | 3.6 V |
| RESET | RAK5146 reset input | Input DC voltage at RESET input pin | \-0.3 V | 3.6 V |
| SPI | SPI interface | Input DC voltage at SPI interface pin | \-0.3 V | 3.6 V |
| GPS_PPS | GPS 1 PPS input | Input DC voltage at GPS_PPS input pin | \-0.3 V | 3.6 V |
| Rho_ANT | Antenna ruggedness | Output RF load mismatch ruggedness at ANT1 |  | 10:1 VSWR |
| Tstg | Storage temperature |  | \-40 °C | 85 °C |

##### Maximum ESD

| PARAMETER | MIN | TYPICAL | MAX | REMARKS |
| --- | --- | --- | --- | --- |
| ESD_HBM |  |  | 1000 V | Charged Device Model JESD22-C101 CLASS III |
| ESD_CDM |  |  | 1000 V | Charged Device Model JESD22-C101 CLASS III |

##### Power Consumption

| MODE | CONDITION | MIN | TYPICAL | MAX |
| --- | --- | --- | --- | --- |
| Active Mode (TX) | The power of the TX channel is 27 dBm and 3.3 V supply. | 511 mA | 512 mA | 513 mA |
| Active Mode (RX) | TX disabled and RX enabled. | 70 mA | 81.6 mA | 101 mA |

##### Power Supply Range

Input voltage at **3.3Vaux** must be above the normal operating range minimum limit to switch on the module.

| SYMBOL | PARAMETER | MIN | TYPICAL | MAX |
| --- | --- | --- | --- | --- |
| 3.3Vaux | Module supply operating input voltage | 3 V | 3.3 V | 3.6 V |

#### Mechanical Characteristics

The board weighs 16.3 grams, it is 30 mm wide and 50.96 mm tall. The dimensions of the module fall completely within the **PCI Express Mini Card Electromechanical Specification**, except for the card’s thickness (5.5 mm at its thickest).
