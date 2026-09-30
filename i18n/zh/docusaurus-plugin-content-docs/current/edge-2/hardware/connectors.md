---
sidebar_position: 3
description: Connector locations and pin assignments of Edge 2.
---

# Connectors and Pin Assignments

:::info
内容翻译同步中，以下为英文原文。
:::

This section lists Edge 2 connector and pin assignments, and pin types with corresponding signal descriptions.

## Debug

| **PIN** **#** | **PIN** **NAME** | **PIN** **TYPE** | **INPUT/** **OUTPUT** | **SIGNAL DESCRIPTION** |
| --- | --- | --- | --- | --- |
| 1 | UART2_RXD | IO | Input | UART2 serial data input for debug |
| 2 | UART2_TXD | IO | Output | UART2 serial data output for debug |
| 3 | GND | GND | – | Power and signal reference ground |

## UART

- UART 3

| **PIN** **#** | **PIN** **NAME** | **PIN** **TYPE** | **INPUT/** **OUTPUT** | **SIGNAL DESCRIPTION** |
| --- | --- | --- | --- | --- |
| 1 | 3.3V | PWR | Output | 3.3V @ 100mA Max |
| 2 | UART3_RX | IO | Input | UART3 serial data input |
| 3 | UART3_TX | IO | Output | UART3 serial data output |
| 4 | GND | GND | – | Power and signal reference ground |

- UART 5

| **PIN** **#** | **PIN** **NAME** | **PIN** **TYPE** | **INPUT/** **OUTPUT** | **SIGNAL DESCRIPTION** |
| --- | --- | --- | --- | --- |
| 1 | 3.3V | PWR | Output | 3.3V @ 100mA Max |
| 2 | UART5_RX | IO | Input | UART5 serial data input |
| 3 | UART5_TX | IO | Output | UART5 serial data output |
| 4 | GND | GND | – | Power and signal reference ground |

## CAN-IO

| **PIN** **#** | **PIN** **NAME** | **PIN** **TYPE** | **INPUT/** **OUTPUT** | **SIGNAL DESCRIPTION** |
| --- | --- | --- | --- | --- |
| 1 | 5V | PWR | Output | 5V @ 200mA Max |
| 2 | CAN1_RX | IO | Input | CAN receive data, connect to CAN transceiver |
| 3 | CAN1_TX | IO | Output | CAN transmit data, connect to CAN transceiver |
| 4 | GND | GND | – | Power and signal reference ground |

## I2C

| **PIN** **#** | **PIN** **NAME** | **PIN** **TYPE** | **INPUT/** **OUTPUT** | **SIGNAL DESCRIPTION** |
| --- | --- | --- | --- | --- |
| 1 | 3.3V | PWR | Output | 3.3V @ 100mA Max |
| 2 | I2C3_SCL | IO | Output | I2C clock signal |
| 3 | I2C3_SDA | IO | I/O | I2C data signal |
| 4 | GND | GND | – | Power and signal reference ground |

## 5V Output

| **PIN** **#** | **PIN** **NAME** | **PIN** **TYPE** | **INPUT/** **OUTPUT** | **SIGNAL DESCRIPTION** |
| --- | --- | --- | --- | --- |
| 1 | 5V | PWR | Output | 5V @ 2A Max in total |
| 2 | 5V | PWR | Output | 5V @ 2A Max in total |
| 3 | GND | GND | – | Power and signal reference ground |
| 4 | GND | GND | – | Power and signal reference ground |

## Power button connector

| **PIN** **#** | **PIN** **NAME** | **PIN** **TYPE** | **INPUT/** **OUTPUT** | **SIGNAL DESCRIPTION** |
| --- | --- | --- | --- | --- |
| 1 | PWRON_CON | IO | Input | Active-low, same as PWR button |
| 2 | GND | GND | – | Power and signal reference ground |

## Reset button connector

| **PIN** **#** | **PIN** **NAME** | **PIN** **TYPE** | **INPUT/** **OUTPUT** | **SIGNAL DESCRIPTION** |
| --- | --- | --- | --- | --- |
| 1 | RESET_KEY | IO | Input | Active-low reset signal, same as RESET button |
| 2 | GND | GND | – | Power and signal reference ground |

## SPDIF

| **PIN** **#** | **PIN** **NAME.** | **PIN** **TYPE** | **INPUT/** **OUTPUT** | **SIGNAL DESCRIPTION** |
| --- | --- | --- | --- | --- |
| 1 | SPDIF_TX | IO | Output | SPDIF output signal |
| 2 | 3.3V | PWR | Output | 3.3V @ 100mA Max |
| 3 | GND | GND | – | Power and signal reference ground |

## RS485

| **PIN** **#** | **PIN** **NAME.** | **PIN** **TYPE** | **INPUT/** **OUTPUT** | **SIGNAL DESCRIPTION** |
| --- | --- | --- | --- | --- |
| 1 | GND | GND | – | Power and signal reference ground |
| 2 | 485B | DS | I/O | RS485 differential signal Negative |
| 3 | 485A | DS | I/O | RS485 differential signal Positive |

## ADC

| **PIN** **#** | **PIN** **NAME** | **PIN** **TYPE** | **INPUT/** **OUTPUT** | **SIGNAL DESCRIPTION** |
| --- | --- | --- | --- | --- |
| 1 | 3.3V | PWR | Output | 3.3V @ 100mA Max |
| 2 | SARADC_VIN4 | ANA | Input | ADC analog signal |
| 3 | SARADC_VIN5 | ANA | Input | ADC analog signal |
| 4 | SARADC_VIN6 | ANA | Input | ADC analog signal |
| 5 | SARADC_VIN7 | ANA | Input | ADC analog signal |
| 6 | GND | GND | – | Power and signal reference ground |

## Speaker

| **PIN** **#** | **PIN** **NAME** | **PIN** **TYPE** | **INPUT/** **OUTPUT** | **SIGNAL DESCRIPTION** |
| --- | --- | --- | --- | --- |
| 1 | SPK+ | ANA | Output | Speaker driver output Positive |
| 2 | SPK- | ANA | Output | Speaker driver output Negative |

## DMIC

| **PIN** **#** | **PIN** **NAME** | **PIN** **TYPE** | **INPUT/** **OUTPUT.** | **SIGNAL DESCRIPTION** |
| --- | --- | --- | --- | --- |
| 1 | 3.3V | PWR | Output | 3.3V @ 500mA Max in total |
| 2 | 3.3V | PWR | Output | 3.3V @ 500mA Max in total |
| 3 | GND | GND | – | Power and signal reference ground |
| 4 | GND | GND | – | Power and signal reference ground |
| 5 | PDM_SDI1 | IO | Input | PDM data signal |
| 6 | PDM_SDI2 | IO | Input | PDM data signal |
| 7 | PDM_SDI3 | IO | Input | PDM data signal |
| 8 | GND | GND | – | Power and signal reference ground |
| 9 | PDM_CLK1 | IO | Output | PDM clock signal |
| 10 | GND | GND | – | Power and signal reference ground |

## MIPI-DSI0

| **PIN** **#** | **PIN** **NAME** | **PIN** **TYPE** | **INPUT/** **OUTPUT** | **SIGNAL DESCRIPTION** |
| --- | --- | --- | --- | --- |
| 1 | GND | GND | – | Power and signal reference ground |
| 2 | MIPI_DSI_TX0_D0N | LVDS | Output | MIPI-DSI0 data signal Negative |
| 3 | MIPI_DSI_TX0_D0P | LVDS | Output | MIPI-DSI0 data signal Positive |
| 4 | GND | GND | – | Power and signal reference ground |
| 5 | MIPI_DSI_TX0_D1N | LVDS | Output | MIPI-DSI0 data signal Negative |
| 6 | MIPI_DSI_TX0_D1P | LVDS | Output | MIPI-DSI0 data signal Positive |
| 7 | GND | GND | – | Power and signal reference ground |
| 8 | MIPI_DSI_TX0_CLKN | LVDS | Output | MIPI-DSI0 clock signal Negative |
| 9 | MIPI_DSI_TX0_CLKP | LVDS | Output | MIPI-DSI0 clock signal Positive |
| 10 | GND | GND | – | Power and signal reference ground |
| 11 | MIPI_DSI_TX0_D2N | LVDS | Output | MIPI-DSI0 data signal Negative |
| 12 | MIPI_DSI_TX0_D2P | LVDS | Output | MIPI-DSI0 data signal Positive |
| 13 | GND | GND | – | Power and signal reference ground |
| 14 | MIPI_DSI_TX0_D3N | LVDS | Output | MIPI-DSI0 data signal Negative |
| 15 | MIPI_DSI_TX0_D3P | LVDS | Output | MIPI-DSI0 data signal Positive |
| 16 | GND | GND | – | Power and signal reference ground |
| 17 | LCD0_BL_PWM4 | IO | Output | PWM Output for backlight adjust |
| 18 | NC | – | – | Not connected to this pin |
| 19 | 3.3V | PWR | Output | 3.3V @ 200mA Max |
| 20 | LCD0_RST_L_GPIO1_D1 | IO | Output | GPIO output for lcd reset |
| 21 | SARADC_VIN2_LCD_ID | ANA | Input | Analog signal Input |
| 22 | LCD0_PWREN_H_GPIO0_C7 | IO | Output | GPIO output for lcd power on |
| 23 | I2C1_SCL_TP | IO | Output | I2C clock signal for touch panel |
| 24 | I2C1_SDA_TP | IO | I/O | I2C data signal for touch panel |
| 25 | TP_INT_L_GPIO0_B5 | IO | Input | GPIO for touch panel interrupt |
| 26 | TP_RST_L_GPIO0_B6 | IO | Output | GPIO for touch panel reset |
| 27 | GND | GND | – | Power and signal reference ground |
| 28 | 5V | PWR | Output | 5V @ 500mA Max in total |
| 29 | 5V | PWR | Output | 5V @ 500mA Max in total |
| 30 | 5V | PWR | Output | 5V @ 500mA Max in total |

## MIPI-DSI1

| **PIN** **#** | **PIN** **NAME** | **PIN** **TYPE** | **INPUT/** **OUTPUT** | **SIGNAL DESCRIPTION** |
| --- | --- | --- | --- | --- |
| 1 | GND | GND | – | Power and signal reference ground |
| 2 | MIPI_DSI_TX1_D0N | LVDS | Output | MIPI-DSI1 data signal Negative |
| 3 | MIPI_DSI_TX1_D0P | LVDS | Output | MIPI-DSI1 data signal Positive |
| 4 | GND | GND | – | Power and signal reference ground |
| 5 | MIPI_DSI_TX1_D1N | LVDS | Output | MIPI-DSI1 data signal Negative |
| 6 | MIPI_DSI_TX1_D1P | LVDS | Output | MIPI-DSI1 data signal Positive |
| 7 | GND | GND | – | Power and signal reference ground |
| 8 | MIPI_DSI_TX1_CLKN | LVDS | Output | MIPI-DSI1 clock signal Negative |
| 9 | MIPI_DSI_TX1_CLKP | LVDS | Output | MIPI-DSI1 clock signal Positive |
| 10 | GND | GND | – | Power and signal reference ground |
| 11 | MIPI_DSI_TX1_D2N | LVDS | Output | MIPI-DSI1 data signal Negative |
| 12 | MIPI_DSI_TX1_D2P | LVDS | Output | MIPI-DSI1 data signal Positive |
| 13 | GND | GND | – | Power and signal reference ground |
| 14 | MIPI_DSI_TX1_D3N | LVDS | Output | MIPI-DSI1 data signal Negative |
| 15 | MIPI_DSI_TX1_D3P | LVDS | Output | MIPI-DSI1 data signal Positive |
| 16 | GND | GND | – | Power and signal reference ground |
| 17 | PWM5 | IO | Output | PWM Output for backlight adjust |
| 18 | NC | – | – | Not connected to this pin |
| 19 | 3.3V | PWR | Output | 3.3V @ 200mA Max |
| 20 | LCD1_RST_L_GPIO3_B6 | IO | Output | GPIO output for lcd reset |
| 21 | SARADC_VIN2_LCD_ID | ANA | Input | Analog signal Input |
| 22 | LCD1_PWREN_H_GPIO4_D2 | IO | Output | GPIO output for lcd power enable |
| 23 | I2C1_SCL_TP | IO | Output | I2C clock signal for touch panel |
| 24 | I2C1_SDA_TP | IO | I/O | I2C data signal for touch panel |
| 25 | TP_INT_L_GPIO0_B5 | IO | Input | GPIO for touch panel interrupt |
| 26 | TP_RST_L_GPIO0_B6 | IO | Output | GPIO for touch panel reset |
| 27 | GND | GND | – | Power and signal reference ground |
| 28 | 5V | PWR | Output | 5V @ 500mA Max in total |
| 29 | 5V | PWR | Output | 5V @ 500mA Max in total |
| 30 | 5V | PWR | Output | 5V @ 500mA Max in total |

## eDP

| **PIN** **#** | **PIN** **NAME** | **PIN** **TYPE** | **INPUT/** **OUTPUT** | **SIGNAL DESCRIPTION** |
| --- | --- | --- | --- | --- |
| 1 | GND | GND | – | Power and signal reference ground |
| 2 | EDP_TX_D1N | LVDS | Output | EDP data signal Negative |
| 3 | EDP_TX_D1P | LVDS | Output | EDP data signal Positive |
| 4 | GND | GND | – | Power and signal reference ground |
| 5 | EDP_TX_D0N | LVDS | Output | EDP data signal Negative |
| 6 | EDP_TX_D0P | LVDS | Output | EDP data signal Positive |
| 7 | GND | GND | – | Power and signal reference ground |
| 8 | EDP_TX_AUXN_CON | LVDS | Output | EDP clock signal Negative |
| 9 | EDP_TX_AUXP_CON | LVDS | Output | EDP clock signal Positive |
| 10 | GND | GND | – | Power and signal reference ground |
| 11 | EDP_TX_D2N | LVDS | Output | EDP data signal Negative |
| 12 | EDP_TX_D2P | LVDS | Output | EDP data signal Positive |
| 13 | GND | GND | – | Power and signal reference ground |
| 14 | EDP_TX_D3N | LVDS | Output | EDP data signal Negative |
| 15 | EDP_TX_D3P | LVDS | Output | EDP data signal Positive |
| 16 | 3.3V | PWR | Output | 3.3V @ 500mA Max in total |
| 17 | 3.3V | PWR | Output | 3.3V @ 500mA Max in total |
| 18 | GND | GND | – | Power and signal reference ground |
| 19 | GND | GND | – | Power and signal reference ground |
| 20 | EDP_HPD_GPIO0_C2 | IO | Input | eDP hot plug detect signal |
| 21 | GND | GND | – | Power and signal reference ground |
| 22 | GND | GND | – | Power and signal reference ground |
| 23 | GND | GND | – | Power and signal reference ground |
| 24 | GND | GND | – | Power and signal reference ground |
| 25 | EDP_BL_EN_GPIO3_C1 | IO | Output | Output for enable backlight power |
| 26 | EDP_PWM12_GPIO4_C5 | IO | Output | PWM Output for backlight adjust |
| 27 | GND | GND | – | Power and signal reference ground |
| 28 | 12V | PWR | Output | 12V power supply for backlight |
| 29 | 12V | PWR | Output | 12V power supply for backlight |
| 30 | 12V | PWR | Output | 12V power supply for backlight |

## Camera

| **PIN** **#** | **PIN** **NAME** | **PIN** **TYPE** | **INPUT/** **OUTPUT** | **SIGNAL DESCRIPTION** |
| --- | --- | --- | --- | --- |
| 1 | GND | GND | – | Power and signal reference ground |
| 2 | MIPI_CSI_RX_D0N | LVDS | Input | MIPI_CSI data signal Negative |
| 3 | MIPI_CSI_RX_D0P | LVDS | Input | MIPI_CSI data signal Positive |
| 4 | GND | GND | – | Power and signal reference ground |
| 5 | MIPI_CSI_RX_D1N | LVDS | Input | MIPI_CSI data signal Negative |
| 6 | MIPI_CSI_RX_D1P | LVDS | Input | MIPI_CSI data signal Positive |
| 7 | GND | GND | – | Power and signal reference ground |
| 8 | MIPI_CSI_RX_CLK0N | LVDS | Input | MIPI_CSI clock signal Negative |
| 9 | MIPI_CSI_RX_CLK0P | LVDS | Input | MIPI_CSI clock signal Positive |
| 10 | GND | GND | – | Power and signal reference ground |
| 11 | MIPI_CSI_RX_D2N | LVDS | Input | MIPI_CSI data signal Negative |
| 12 | MIPI_CSI_RX_D2P | LVDS | Input | MIPI_CSI data signal Positive |
| 13 | GND | GND | – | Power and signal reference ground |
| 14 | MIPI_CSI_RX_D3N | LVDS | Input | MIPI_CSI data signal Negative |
| 15 | MIPI_CSI_RX_D3P | LVDS | Input | MIPI_CSI data signal Positive |
| 16 | GND | GND | – | Power and signal reference ground |
| 17 | CIF_CLKOUT | IO | Output | CLOCK output for camera |
| 18 | GND | GND | – | Power and signal reference ground |
| 19 | NC | – | – | Not connected to this pin |
| 20 | CAMERA0_RST_L_GPIO4_B5 | IO | Output | GPIO output for camera reset |
| 21 | CAMERA0_PDN_L_GPIO4_B4 | IO | Output | GPIO output for camera disable |
| 22 | CAMERA0_PWREN_GPIO1_D4 | IO | Output | GPIO output for camera enable |
| 23 | I2C4_SCL_M0 | IO | Output | I2C clock signal |
| 24 | I2C4_SDA_M0 | IO | Input | I2C data signal |
| 25 | PWM14_M0 | IO | Output | PWM Output signal |
| 26 | GND | GND | – | Power and signal reference ground |
| 27 | GND | GND | – | Power and signal reference ground |
| 28 | 5V | PWR | Output | 5V @ 500mA Max in total |
| 29 | 5V | PWR | Output | 5V @ 500mA Max in total |
| 30 | 5V | PWR | Output | 5V @ 500mA Max in total |
| 31 | GND | GND | – | Power and signal reference ground |
| 32 | NC | – | – | Not connected to this pin |
| 33 | NC | – | – | Not connected to this pin |
| 34 | NC | – | – | Not connected to this pin |
| 35 | GND | GND | – | Power and signal reference ground |
| 36 | MIPI_MCLK1 | IO | Output | CLOCK output for camera |
| 37 | GND | GND | – | Power and signal reference ground |
| 38 | MIPI_CSI_RX_CLK1N | LVDS | Input | MIPI_CSI clock signal Negative |
| 39 | MIPI_CSI_RX_CLK1P | LVDS | Input | MIPI_CSI clock signal Positive |
| 40 | GND | GND | – | Power and signal reference ground |

## M.2

| **PIN** **#** | **PIN** **NAME** | **PIN** **TYPE** | **INPUT/** **OUTPUT** | **SIGNAL DESCRIPTION** |
| --- | --- | --- | --- | --- |
| 1 | NC | – | – | Not connected to this pin |
| 2 | 3.8V | PWR | Output | 3.8V @ 3A Max in total |
| 3 | GND | GND | – | Power and signal reference ground |
| 4 | 3.8V | PWR | Output | 3.8V @ 3A Max in total |
| 5 | GND | GND | – | Power and signal reference ground |
| 6 | M2_ONOFF_GPIO1_D2 | IO | Output | GPIO output for on or off to module |
| 7 | HUB_HOST3_DP | LVDS | I/O | USB2.0 data signal Positive |
| 8 | NC | – | – | Not connected to this pin |
| 9 | HUB_HOST3_DM | LVDS | I/O | USB2.0 data signal Negative |
| 10 | M2_LED1 | IO | Input | Connect negative for network status |
| 11 | GND | GND | – | Power and signal reference ground |
| 20 | NC | – | – | Not connected to this pin |
| 21 | NC | – | – | Not connected to this pin |
| 22 | NC | – | – | Not connected to this pin |
| 23 | M2_WAKE_GPIO0_B7 | IO | Input | GPIO for module to wakeup CPU |
| 24 | NC | – | – | Not connected to this pin |
| 25 | NC | – | – | Not connected to this pin |
| 26 | NC | – | – | Not connected to this pin |
| 27 | GND | GND | – | Power and signal reference ground |
| 28 | NC | – | – | Not connected to this pin |
| 29 | PCIE30_TX1_N/HUB_USB3_SSTXN | LVDS | Output | PCIE3.0/USB3.0 data signal Negative |
| 30 | M2_UIM_RESET | IO | Input | Reset signal to SIM socket |
| 31 | PCIE30_TX1_P/HUB_USB3_SSTXP | LVDS | Output | PCIE3.0/USB3.0 data signal Positive |
| 32 | M2_UIM_CLK | IO | Input | Clock signal to SIM socket |
| 33 | GND | GND | – | Power and signal reference ground |
| 34 | M2_UIM_DATA | IO | Input | Data signal to SIM socket |
| 35 | PCIE30_RX1N/HUB_USB3_SSRXN | LVDS | Input | PCIE3.0/USB3.0 data signal Negative |
| 36 | M2_UIM_PWR | IO | Input | Power to SIM socket |
| 37 | PCIE30_RX1P/HUB_USB3_SSRXP | LVDS | Input | PCIE3.0/USB3.0 data signal Positive |
| 38 | NC | – | – | Not connected to this pin |
| 39 | GND | GND | – | Power and signal reference ground |
| 40 | NC | – | – | Not connected to this pin |
| 41 | PCIE30_TX0_N | LVDS | Output | PCIE3.0 data signal output Negative |
| 42 | NC | – | – | Not connected to this pin |
| 43 | PCIE30_TX0_P | LVDS | Output | PCIE3.0 data signal output Positive |
| 44 | NC | – | – | Not connected to this pin |
| 45 | GND | GND | – | Power and signal reference ground |
| 46 | NC | – | – | Not connected to this pin |
| 47 | PCIE30_RX0N | LVDS | Input | PCIE3.0 data signal input Negative |
| 48 | NC | – | – | Not connected to this pin |
| 49 | PCIE30_RX0P | LVDS | Input | PCIE3.0 data signal input Positive |
| 50 | PCIE30X2_PERSTN_M1 | IO | Output | PCIe warm reset request |
| 51 | GND | GND | – | Power and signal reference ground |
| 52 | PCIE30X2_CLKREQN_M1 | IO | Input | Clock request from PCIe peripheral |
| 53 | CLK0N_CON | LVDS | Output | PCIE3.0 clock signal output Negative |
| 54 | PCIE30X2_WAKEN_M1 | IO | Input | PCIe wake up |
| 55 | CLK0P_CON | LVDS | Output | PCIE3.0 clock signal output Positive |
| 56 | NC | – | – | Not connected to this pin |
| 57 | GND | GND | – | Power and signal reference ground |
| 58 | NC | – | – | Not connected to this pin |
| 59 | NC | – | – | Not connected to this pin |
| 60 | NC | – | – | Not connected to this pin |
| 61 | NC | – | – | Not connected to this pin |
| 62 | NC | – | – | Not connected to this pin |
| 63 | NC | – | – | Not connected to this pin |
| 64 | NC | – | – | Not connected to this pin |
| 65 | NC | – | – | Not connected to this pin |
| 66 | M2_SIM_DETECT | IO | Output | Card detect signal to SIM socket |
| 67 | M2_RESET_GPIO3_B5 | IO | Output | GPIO output for reset to module |
| 68 | CLK32K_OUT0 | IO | Output | Clock output 32.768K to module |
| 69 | NC | – | – | Not connected to this pin |
| 70 | 3.8V | PWR | Output | 3.8V @ 3A Max in total |
| 71 | GND | GND | – | Power and signal reference ground |
| 72 | 3.8V | PWR | Output | 3.8V @ 3A Max in total |
| 73 | GND | GND | – | Power and signal reference ground |
| 74 | 3.8V | PWR | Output | 3.8V @ 3A Max in total |
| 75 | NC | – | – | Not connected to this pin |

## Mini-PCIe

| **PIN** **#** | **PIN** **NAME** | **PIN** **TYPE** | **INPUT/** **OUTPUT** | **SIGNAL DESCRIPTION** |
| --- | --- | --- | --- | --- |
| 1 | WAKEUP_MINIPCIE_GPIO0_C1 | IO | Input | GPIO for module to wakeup CPU |
| 2 | 3.8V | PWR | Output | 3.8V @ 3A Max in total |
| 3 | NC | – | – | Not connected to this pin |
| 4 | GND | GND | – | Power and signal reference ground |
| 5 | NC | – | – | Not connected to this pin |
| 6 | NC | – | – | Not connected to this pin |
| 7 | NC | – | – | Not connected to this pin |
| 8 | UIM_PWR | PWR | Input | SIM power supply |
| 9 | GND | GND | – | Power and signal reference ground |
| 10 | UIM_DATA | IO | Input | SIM data signal |
| 11 | NC | – | – | Not connected to this pin |
| 12 | UIM_CLK | IO | Input | SIM clock signal |
| 13 | NC | – | – | Not connected to this pin |
| 14 | UIM_RESET | IO | Input | SIM reset signal |
| 15 | GND | GND | – | Power and signal reference ground |
| 16 | NC | – | – | Not connected to this pin |
| 17 | NC | – | – | Not connected to this pin |
| 18 | GND | GND | – | Power and signal reference ground |
| 19 | NC | – | – | Not connected to this pin |
| 20 | NC | – | – | Not connected to this pin |
| 21 | GND | GND | – | Power and signal reference ground |
| 22 | MiniPCIE_reset_GPIO3_D4 | IO | Output | GPIO output for reset to module |
| 23 | NC | – | – | Not connected to this pin |
| 24 | 3.8V | PWR | Output | 3.8V @ 3A Max in total |
| 25 | NC | – | – | Not connected to this pin |
| 26 | GND | GND | – | Power and signal reference ground |
| 27 | GND | GND | – | Power and signal reference ground |
| 28 | NC | – | – | Not connected to this pin |
| 29 | GND | GND | – | Power and signal reference ground |
| 30 | NC | – | – | Not connected to this pin |
| 31 | NC | – | – | Not connected to this pin |
| 32 | NC | – | – | Not connected to this pin |
| 33 | NC | – | – | Not connected to this pin |
| 34 | GND | GND | – | Power and signal reference ground |
| 35 | GND | GND | – | Power and signal reference ground |
| 36 | USB2_HOST2_DM | LVDS | I/O | USB2.0 data signal Negative |
| 37 | NC | – | – | Not connected to this pin |
| 38 | USB2_HOST2_DP | LVDS | I/O | USB2.0 data signal Positive |
| 39 | 3.8V | PWR | Output | 3.8V @ 3A Max in total |
| 40 | GND | GND | – | Power and signal reference ground |
| 41 | 3.8V | PWR | Output | 3.8V @ 3A Max in total |
| 42 | LED | IO | Input | System status LED |
| 43 | NC | – | – | Not connected to this pin |
| 44 | SIM_DETECT | IO | Output | SIM detect |
| 45 | NC | – | – | Not connected to this pin |
| 46 | NC | – | – | Not connected to this pin |
| 47 | NC | – | – | Not connected to this pin |
| 48 | NC | – | – | Not connected to this pin |
| 49 | NC | – | – | Not connected to this pin |
| 50 | GND | GND | – | Power and signal reference ground |
| 51 | NC | – | – | Not connected to this pin |
| 52 | 3.8V | PWR | Output | 3.8V @ 3A Max in total |

## U.2

| **PIN** **#** | **PIN** **NAME** | **PIN** **TYPE** | **INPUT/** **OUTPUT** | **SIGNAL DESCRIPTION** |
| --- | --- | --- | --- | --- |
| 1 | GND | GND | – | Power and signal reference ground |
| 2 | SATA0_SSRXP | LVDS | Input | SATA data signal input Positive |
| 3 | SATA0_SSRXN | LVDS | Input | SATA data signal input Negative |
| 4 | GND | GND | – | Power and signal reference ground |
| 5 | SATA0_SSTXN | LVDS | Output | SATA data signal output Negative |
| 6 | SATA0_SSTXP | LVDS | Output | SATA data signal output Positive |
| 7 | GND | GND | – | Power and signal reference ground |
| 8 | GMAC0_TXEN | IO | Output | RGMII signal |
| 9 | GMAC0_RXD2 | IO | Input | RGMII signal |
| 10 | NC | – | – | Not connected to this pin |
| 11 | GMAC0_RXD3 | IO | Input | RGMII signal |
| 12 | GMAC0_RXD0 | IO | Input | RGMII signal |
| 13 | GMAC0_RXD1 | IO | Input | RGMII signal |
| 14 | NC | – | – | Not connected to this pin |
| 15 | I2C3_SCL_M0 | IO | Output | I2C clock signal |
| 16 | I2C3_SDA_M0 | IO | I/O | I2C data signal |
| 17 | GND | GND | – | Power and signal reference ground |
| 18 | GND | GND | – | Power and signal reference ground |
| 19 | GND | GND | – | Power and signal reference ground |
| 20 | 5V | PWR | Output | 5V @ 3A Max |
| 21 | 5V | PWR | Output | 5V @ 3A Max |
| 22 | 5V | PWR | Output | 5V @ 3A Max |
| 23 | GND | GND | GND | Power and signal reference ground |
| 24 | NC | – | – | Not connected to this pin |
| 25 | GND | GND | – | Power and signal reference ground |
| 26 | NC | – | – | Not connected to this pin |
| 27 | NC | – | – | Not connected to this pin |
| 28 | NC | – | – | Not connected to this pin |
| 29 | SATA0_LED | IO | Output | SATA0 status for LED |
| 30 | SATA2_LED | IO | Output | SATA2 status for LED |
| 31 | GMAC0_MCLKINOUT | IO | I/O | CLOCK output 125MHz for GMAC0 |
| 32 | GND | GND | – | Power and signal reference ground |
| 33 | ETH0_REFCLKO_25M | IO | Output | CLOCK output 25MHz for GMAC0 |
| 34 | GMAC0_MDIO | IO | I/O | GMAC management interface data |
| 35 | GND | GND | – | Power and signal reference ground |
| 36 | GMAC0_MDC | IO | Output | GMAC management interface clock |
| 37 | GMAC0_RXDV_CRS | IO | Input | RGMII signal |
| 38 | GND | GND | – | Power and signal reference ground |
| 39 | NC | – | – | Not connected to this pin |
| 40 | NC | – | – | Not connected to this pin |
| 41 | GND | GND | – | Power and signal reference ground |
| 42 | NC | – | – | Not connected to this pin |
| 43 | NC | – | – | Not connected to this pin |
| 44 | GND | GND | – | Power and signal reference ground |
| 45 | USB2_USB3_DM | LVDS | I/O | USB2.0 data signal Negative |
| 46 | USB2_USB3_DP | LVDS | I/O | USB2.0 data signal Positive |
| 47 | GND | GND | – | Power and signal reference ground |
| 48 | GMAC0_RSTN_GPIO2_D3 | IO | Output | RGMII signal |
| 49 | GMAC0_INT/PMEB_GPIO2_D2 | IO | Input | RGMII signal |
| 50 | GND | GND | – | Power and signal reference ground |
| 51 | GMAC0_RXCLK | IO | Output | RGMII signal |
| 52 | GND | GND | – | Power and signal reference ground |
| 53 | GMAC0_TXD3 | IO | Output | RGMII signal |
| 54 | GMAC0_TXD2 | IO | Output | RGMII signal |
| 55 | GND | GND | – | Power and signal reference ground |
| 56 | GMAC0_TXD1 | IO | Output | RGMII signal |
| 57 | GMAC0_TXD0 | IO | Output | RGMII signal |
| 58 | GND | GND | – | Power and signal reference ground |
| 59 | GMAC0_TXCLK | IO | Output | RGMII signal |
| 60 | GND | GND | – | Power and signal reference ground |
| 61 | SATA2_TXN | LVDS | Output | SATA data signal output Negative |
| 62 | SATA2_TXP | LVDS | Output | SATA data signal output Positive |
| 63 | GND | GND | – | Power and signal reference ground |
| 64 | SATA2_RXN | LVDS | Input | SATA data signal Input Negative |
| 65 | SATA2_RXP | LVDS | Input | SATA data signal Input Positive |
| 66 | GND | GND | – | Power and signal reference ground |
| 67 | PCIE20_REFCLKN | LVDS | Output | PCIE2.0 reference clock Negative |
| 68 | PCIE20_REFCLKP | LVDS | Output | PCIE2.0 reference clock Positive |

## SATA Power

| **PIN** **#** | **PIN** **NAME** | **PIN** **TYPE** | **INPUT/** **OUTPUT** | **SIGNAL DESCRIPTION** |
| --- | --- | --- | --- | --- |
| 1 | ADC_VIN3 | ANA | Input | Measure external voltage, 1.8V Max |
| 2 | I2C0_SCL | IO | Output | I2C clock signal |
| 3 | I2C0_SDA | IO | I/O | I2C data signal |
| 4 | GND | GND | – | Power and signal reference ground |
| 5 | GND | GND | – | Power and signal reference ground |
| 6 | GND | GND | – | Power and signal reference ground |
| 7 | NC | – | – | Not connected to this pin |
| 8 | NC | – | – | Not connected to this pin |
| 9 | NC | – | – | Not connected to this pin |
| 10 | GND | GND | – | Power and signal reference ground |
| 11 | GND | GND | – | Power and signal reference ground |
| 12 | GND | GND | – | Power and signal reference ground |
| 13 | VIN_12V | PWR | Input | 12V @ 3A |
| 14 | VIN_12V | PWR | Input | 12V @ 3A |
| 15 | VIN_12V | PWR | Input | 12V @ 3A |
