---
sidebar_position: 2
description: Pin definition of Core 3568 and Core 3568J.
---

# Pin Definition

:::info
内容翻译同步中，以下为英文原文。
:::

<Tabs queryString="model">

<TabItem value="Core 3568" label="Core 3568">

{/* TODO: the top view of the pin arrangement was not migrated; the diagram exists on the old site. */}

| **PIN number** | **PIN name** | **PIN type** | **Voltage level** | **CPU ball name/multiplex function** | **CPU ball number** | **Description** |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 2 | USB3_HOST1_SSRXP | LVDS input | lvds | USB3_HOST1_SSRXP/SATA1_RXP/QSGMII_RXP_M0 | U28 | USB3.0 HOST1 SuperSpeed receive differential Positive |
| 3 | USB3_HOST1_SSRXN | LVDS input | lvds | USB3_HOST1_SSRXN/SATA1_RXN/QSGMII_RXN_M0 | U27 | USB3.0 HOST1 SuperSpeed receive differential Negative |
| 4 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 5 | USB3_HOST1_SSTXN | LVDS output | lvds | USB3_HOST1_SSTXN/SATA1_TXN/QSGMII_TXN_M0 | V27 | USB3.0 HOST1 SuperSpeed transmit differential Negative |
| 6 | USB3_HOST1_SSTXP | LVDS output | lvds | USB3_HOST1_SSTXP/SATA1_TXP/QSGMII_TXP_M0 | V28 | USB3.0 HOST1 SuperSpeed transmit differential Positive |
| 7 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 8 | SATA0_RXN | LVDS input | lvds | USB3_OTG0_SSRXN/SATA0_RXN | R27 | SATA receive signal DM |
| 9 | SATA0_RXP | LVDS input | lvds | USB3_OTG0_SSRXP/SATA0_RXP | R28 | SATA receive signal DP |
| 10 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 11 | SATA0_TXN | LVDS output | lvds | USB3_OTG0_SSTXN/SATA0_TXN | T27 | SATA transmission signal DM |
| 12 | SATA0_TXP | LVDS output | lvds | USB3_OTG0_SSTXP/SATA0_TXP | T28 | SATA transmission signal DP |
| 13 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 14 | USB3_OTG0_DM | LVDS output/Input | lvds | USB3_OTG0_DM | P28 | USB3 OTG0 HS/FS/LS Data Minus |
| 15 | USB3_OTG0_DP | LVDS output/Input | lvds | USB3_OTG0_DP | P27 | USB3 OTG0 HS/FS/LS Data Plus |
| 16 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 17 | USB3_HOST1_DM | LVDS output/Input | lvds | USB3_HOST1_DM | P25 | USB3 HOST1 HS/FS/LS Data Minus |
| 18 | USB3_HOST1_DP | LVDS output/Input | lvds | USB3_HOST1_DP | P24 | USB3 HOST1 HS/FS/LS Data Plus |
| 19 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 20 | EDP_TX_D3N | LVDS output | lvds | EDP_TX_D3N | N27 | EDP transmit differential data lane 3 Negative |
| 21 | EDP_TX_D3P | LVDS output | lvds | EDP_TX_D3P | M28 | EDP transmit differential data lane 3 Positive |
| 22 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 23 | EDP_TX_D2N | LVDS output | lvds | EDP_TX_D2N | M27 | EDP transmit differential data lane 2 Negative |
| 24 | EDP_TX_D2P | LVDS output | lvds | EDP_TX_D2P | L28 | EDP transmit differential data lane 2 Positive |
| 25 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 26 | EDP_TX_D1N | LVDS output | lvds | EDP_TX_D1N | L27 | EDP transmit differential data lane 1 Negative |
| 27 | EDP_TX_D1P | LVDS output | lvds | EDP_TX_D1P | K28 | EDP transmit differential data lane 1 Positive |
| 28 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 29 | EDP_TX_D0N | LVDS output | lvds | EDP_TX_D0N | K27 | EDP transmit differential data lane 0 Negative |
| 30 | EDP_TX_D0P | LVDS output | lvds | EDP_TX_D0P | J28 | EDP transmit differential data lane 0 Positive |
| 31 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 32 | EDP_TX_AUXN | LVDS output/input | lvds | EDP_TX_AUXN | M25 | EDP AUX differential Negative |
| 33 | EDP_TX_AUXP | LVDS output/input | lvds | EDP_TX_AUXP | L25 | EDP AUX differential Positive |
| 34 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 35 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 36 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 37 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 38 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 39 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 40 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 41 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 42 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 43 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 44 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 45 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 46 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 47 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 48 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 49 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 50 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 51 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 52 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 53 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 54 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 55 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 56 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 57 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 58 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 59 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 60 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 61 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 62 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 63 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 64 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 65 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 66 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 67 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 68 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 69 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 70 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 71 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 72 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 73 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 74 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 75 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 76 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 77 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 78 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 79 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 80 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 81 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 82 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 83 | MIPI_CSI_RX_D3N | LVDS input | lvds | MIPI_CSI_RX_D3N | AE9 | MIPI CSI receive differential data lane 3 Negative |
| 84 | MIPI_CSI_RX_D3P | LVDS input | lvds | MIPI_CSI_RX_D3P | AD9 | MIPI CSI receive differential data lane 3 Positive |
| 85 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 86 | MIPI_CSI_RX_D2N | LVDS input | lvds | MIPI_CSI_RX_D2N | AD11 | MIPI CSI receive differential data lane 2 Negative |
| 87 | MIPI_CSI_RX_D2P | LVDS input | lvds | MIPI_CSI_RX_D2P | AE11 | MIPI CSI receive differential data lane 2 Positive |
| 88 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 89 | MIPI_CSI_RX_D1N | LVDS input | lvds | MIPI_CSI_RX_D1N | AH11 | MIPI CSI receive differential data lane 1 Negative |
| 90 | MIPI_CSI_RX_D1P | LVDS input | lvds | MIPI_CSI_RX_D1P | AG11 | MIPI CSI receive differential data lane 1 Positive |
| 91 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 92 | MIPI_CSI_RX_D0N | LVDS input | lvds | MIPI_CSI_RX_D0N | AH12 | MIPI CSI receive differential data lane 0 Negative |
| 93 | MIPI_CSI_RX_D0P | LVDS input | lvds | MIPI_CSI_RX_D0P | AG12 | MIPI CSI receive differential data lane 0 Positive |
| 94 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 95 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 96 | MIPI_CSI_RX_CLK1N | LVDS input | lvds | MIPI_CSI_RX_CLK1N | AH9 | MIPI CSI receive differential Clock 1 Negative |
| 97 | MIPI_CSI_RX_CLK1P | LVDS input | lvds | MIPI_CSI_RX_CLK1P | AG9 | MIPI CSI receive differential Clock 1 Positive |
| 98 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 99 | MIPI_CSI_RX_CLK0N | LVDS input | lvds | MIPI_CSI_RX_CLK0N | AH10 | MIPI CSI receive differential Clock 0 Negative |
| 100 | MIPI_CSI_RX_CLK0P | LVDS input | lvds | MIPI_CSI_RX_CLK0P | AG10 | MIPI CSI receive differential Clock 0 Positive |
| 101 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 102 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 103 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 104 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 105 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 106 | USB2_HOST2_DM | LVDS output/Input | lvds | USB2_HOST2_DM | R1 | USB HOST2 Data Minus |
| 107 | USB2_HOST2_DP | LVDS output/Input | lvds | USB2_HOST2_DP | R2 | USB HOST2 Data Plus |
| 108 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 109 | USB2_HOST3_DM | LVDS output/Input | lvds | USB2_HOST3_DM | T1 | USB HOST3 Data Minus |
| 110 | USB2_HOST3_DP | LVDS output/Input | lvds | USB2_HOST3_DP | T2 | USB HOST3 Data Plus |
| 111 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 112 | MIPI_DSI_TX1_D3P | LVDS output | lvds | MIPI_DSI_TX1_D3P | AD12 | MIPI_DSI transmit 1 differential data lane 3 Positive |
| 113 | MIPI_DSI_TX1_D3N | LVDS output | lvds | MIPI_DSI_TX1_D3N | AE12 | MIPI_DSI transmit 1 differential data lane 3 Negative |
| 114 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 115 | MIPI_DSI_TX1_D2P | LVDS output | lvds | MIPI_DSI_TX1_D2P | AD14 | MIPI_DSI transmit 1 differential data lane 2 Positive |
| 116 | MIPI_DSI_TX1_D2N | LVDS output | lvds | MIPI_DSI_TX1_D2N | AC14 | MIPI_DSI transmit 1 differential data lane 2 Negative |
| 117 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 118 | MIPI_DSI_TX1_CLKP | LVDS output | lvds | MIPI_DSI_TX1_CLKP | AD15 | MIPI_DSI transmit 1 differential Clock Positive |
| 119 | MIPI_DSI_TX1_CLKN | LVDS output | lvds | MIPI_DSI_TX1_CLKN | AE15 | MIPI_DSI transmit 1 differential Clock Negative |
| 120 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 121 | MIPI_DSI_TX1_D1P | LVDS output | lvds | MIPI_DSI_TX1_D1P | AD17 | MIPI_DSI transmit 1 differential data lane 1 Positive |
| 122 | MIPI_DSI_TX1_D1N | LVDS output | lvds | MIPI_DSI_TX1_D1N | AC17 | MIPI_DSI transmit 1 differential data lane 1 Negative |
| 123 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 124 | MIPI_DSI_TX1_D0P | LVDS output | lvds | MIPI_DSI_TX1_D0P | AD18 | MIPI_DSI transmit 1 differential data lane 0 Positive |
| 125 | MIPI_DSI_TX1_D0N | LVDS output | lvds | MIPI_DSI_TX1_D0N | AE18 | MIPI_DSI transmit 1 differential datalane 0 Negative |
| 126 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 127 | MIPI_DSI_TX0_D3P/LVDS_TX0_D3P | LVDS output | lvds | MIPI_DSI_TX0_D3P/LVDS_TX0_D3P | AH13 | MIPI_DSI transmit 0 differential data lane 3 Positive |
| 128 | MIPI_DSI_TX0_D3N/LVDS_TX0_D3N | LVDS output | lvds | MIPI_DSI_TX0_D3N/LVDS_TX0_D3N | AG13 | MIPI_DSI transmit 0 differential data lane 3 Negative |
| 129 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 130 | MIPI_DSI_TX0_D2P/LVDS_TX0_D2P | LVDS output | lvds | MIPI_DSI_TX0_D2P/LVDS_TX0_D2P | AH14 | MIPI_DSI transmit 0 differential data lane 2 Positive |
| 131 | MIPI_DSI_TX0_D2N/LVDS_TX0_D2N | LVDS output | lvds | MIPI_DSI_TX0_D2N/LVDS_TX0_D2N | AG14 | MIPI_DSI transmit 0 differential data lane 2 Negative |
| 132 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 133 | MIPI_DSI_TX0_CLKP/LVDS_TX0_CLKP | LVDS output | lvds | MIPI_DSI_TX0_CLKP/LVDS_TX0_CLKP | AH15 | MIPI_DSI transmit 0 differential Clock Positive |
| 134 | MIPI_DSI_TX0_CLKN/LVDS_TX0_CLKN | LVDS output | lvds | MIPI_DSI_TX0_CLKN/LVDS_TX0_CLKN | AG15 | MIPI_DSI transmit 0 differential Clock Negative |
| 135 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 136 | MIPI_DSI_TX0_D1P/LVDS_TX0_D1P | LVDS output | lvds | MIPI_DSI_TX0_D1P/LVDS_TX0_D1P | AH16 | MIPI_DSI transmit 0 differential data lane 1 Positive |
| 137 | MIPI_DSI_TX0_D1N/LVDS_TX0_D1N | LVDS output | lvds | MIPI_DSI_TX0_D1N/LVDS_TX0_D1N | AG16 | MIPI_DSI transmit 0 differential data lane 1 Negative |
| 138 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 139 | MIPI_DSI_TX0_D0P/LVDS_TX0_D0P | LVDS output | lvds | MIPI_DSI_TX0_D0P/LVDS_TX0_D0P | AH17 | MIPI_DSI transmit 0 differential data lane 0 Positive |
| 140 | MIPI_DSI_TX0_D0N/LVDS_TX0_D0N | LVDS output | lvds | MIPI_DSI_TX0_D0N/LVDS_TX0_D0N | AG17 | MIPI_DSI transmit 0 differential data lane 0 Negative |
| 141 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 142 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 143 | HDMI_TXCLKN_PORT | LVDS output | lvds | HDMI_TX_CLKN | AG19 | HDMI2.0 transmit differential Clock Negative |
| 144 | HDMI_TXCLKP_PORT | LVDS output | lvds | HDMI_TX_CLKP | AH19 | HDMI2.0 transmit differential Clock Positive |
| 145 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 146 | HDMI_TX0N_PORT | LVDS output | lvds | HDMI_TX_D0N | AH20 | HDMI2.0 transmit differential data lane 0 Negative |
| 147 | HDMI_TX0P_PORT | LVDS output | lvds | HDMI_TX_D0P | AG20 | HDMI2.0 transmit differential data lane 0 Positive |
| 148 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 149 | HDMI_TX1N_PORT | LVDS output | lvds | HDMI_TX_D1N | AH21 | HDMI2.0 transmit differential data lane 1 Negative |
| 150 | HDMI_TX1P_PORT | LVDS output | lvds | HDMI_TX_D1P | AG21 | HDMI2.0 transmit differential data lane 1 Positive |
| 151 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 152 | HDMI_TX2N_PORT | LVDS output | lvds | HDMI_TX_D2N | AH22 | HDMI2.0 transmit differential data lane 2 Negative |
| 153 | HDMI_TX2P_PORT | LVDS output | lvds | HDMI_TX_D2P | AG22 | HDMI2.0 transmit differential data lane 2 Positive |
| 154 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 155 | PCIE30_REFCLKN_IN | LVDS input | lvds | PCIE30_REFCLKN_IN | AA25 | PCIe3.0 differential clock Negative,Only support input |
| 156 | PCIE30_REFCLKP_IN | LVDS input | lvds | PCIE30_REFCLKP_IN | Y25 | PCIe3.0 differential clock Positive,Only support input |
| 157 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 158 | PCIE30_RX1N | LVDS input | lvds | PCIE30_RX1N | AD27 | PCIe3.0 receive differential data lane 1 Negative |
| 159 | PCIE30_RX1P | LVDS input | lvds | PCIE30_RX1P | AD28 | PCIe3.0 receive differential data lane 1 Positive |
| 160 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 161 | PCIE30_RX0N | LVDS input | lvds | PCIE30_RX0N | AC27 | PCIe3.0 receive differential data lane 0 Negative |
| 162 | PCIE30_RX0P | LVDS input | lvds | PCIE30_RX0P | AC28 | PCIe3.0 receive differential data lane 0 Positive |
| 163 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 164 | PCIE30_TX1N | LVDS output | lvds | PCIE30_TX1N | AB27 | PCIe3.0 transmit differential data lane 1 Negative |
| 165 | PCIE30_TX1P | LVDS output | lvds | PCIE30_TX1P | AB28 | PCIe3.0 transmit differential data lane 1 Positive |
| 166 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 167 | PCIE30_TX0N | LVDS output | lvds | PCIE30_TX0N | AA27 | PCIe3.0 transmit differential data lane 0 Negative |
| 168 | PCIE30_TX0P | LVDS output | lvds | PCIE30_TX0P | AA28 | PCIe3.0 transmit differential data lane 0 Positive |
| 169 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 170 | SATA2_RXN | LVDS input | lvds | PCIE20_RXN/SATA2_RXN/QSGMII_RXN_M1 | Y28 | PCIe2.0 receive differential Negative |
| 171 | SATA2_RXP | LVDS input | lvds | PCIE20_RXP/SATA2_RXP/QSGMII_RXP_M1 | Y27 | PCIe2.0 receive differential Positive |
| 172 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 173 | SATA2_TXN | LVDS output | lvds | PCIE20_TXN/SATA2_TXN/QSGMII_TXN_M1 | W28 | PCIe2.0 transmit differential Negative |
| 174 | SATA2_TXP | LVDS output | lvds | PCIE20_TXP/SATA2_TXP/QSGMII_TXP_M1 | W27 | PCIe2.0 transmit differential Positive |
| 175 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 176 | MULTI_PHY1_REFCLKN | LVDS output | lvds | MULTI_PHY1_REFCLKN | U24 | MULTI_PHY1 output differential clock Negative for PCIe3.0 EP |
| 177 | MULTI_PHY1_REFCLKP | LVDS output | lvds | MULTI_PHY1_REFCLKP | U25 | MULTI_PHY1 output differential clock Positive for PCIe3.0 EP |
| 178 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 179 | MULTI_PHY0_REFCLKN | LVDS output | lvds | MULTI_PHY0_REFCLKN | R25 | MULTI_PHY0 output differential clock Negative for PCIe3.0 EP |
| 180 | MULTI_PHY0_REFCLKP | LVDS output | lvds | MULTI_PHY0_REFCLKP | R24 | MULTI_PHY0 output differential clock Positive for PCIe3.0 EP |
| 181 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 182 | PCIE20_REFCLKN | LVDS input | lvds | PCIE20_REFCLKN | V25 | PCIe3.0 differential clock Negative,Support input or output |
| 183 | PCIE20_REFCLKP | LVDS input | lvds | PCIE20_REFCLKP | V24 | PCIe3.0 differential clock Positive,Support input or output |
| 184 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 185 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 186 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 187 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 188 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 189 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 190 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 191 | GMAC0_MDIO | IO input/output | 1.8V | I2S2_SDO_M0/GMAC0_MDIO/UART9_CTSn_M0/SPI2_CS0_M0/GPIO2_C4_d | H23 | GAMC0 management data |
| 192 | GMAC0_MDC | IO input/output | 1.8V | I2S2_LRCK_TX_M0/GMAC0_MDC/UART9_RTSn_M0/SPI2_MOSI_M0/GPIO2_C3_d | H24 | GMAC0 management data clock |
| 193 | GMAC0_MCLKINOUT | IO input/output | 1.8V | I2S2_SCLK_TX_M0/GMAC0_MCLKINOUT/UART7_CTSn_M0/SPI2_MISO_M0/GPIO2_C2_d | F25 | GMAC0 Master clock input or output |
| 194 | ETH0_REFCLKO_25M | IO input/output | 1.8V | I2S2_MCLK_M0/ETH0_REFCLKO_25M/UART7_RTSn_M0/SPI2_CLK_M0/GPIO2_C1_d | G23 | CPU Output clock 25MHz for Ethernet PHY0 |
| 195 | GMAC0_RXDV_CRS | IO input/output | 1.8V | I2S2_LRCK_RX_M0/GMAC0_RXDV_CRS/UART6_CTSn_M0/SPI1_CS0_M0/GPIO2_C0_d | F24 | GMAC0 receive data valid/carrier sense |
| 196 | GMAC0_RXD1 | IO input/output | 1.8V | I2S2_SCLK_RX_M0/GMAC0_RXD1/UART6_RTSn_M0/SPI1_MOSI_M0/GPIO2_B7_d | H25 | GMAC0 receive data 1 |
| 197 | GMAC0_RXD0 | IO input/output | 1.8V | GMAC0_RXD0/UART1_CTSn_M0/SPI1_MISO_M0/GPIO2_B6_u | F27 | GMAC0 receive data 0 |
| 198 | GMAC0_TXEN | IO input/output | 1.8V | GMAC0_TXEN/UART1_RTSn_M0/SPI1_CLK_M0/GPIO2_B5_u | G28 | GMAC0 transmit enable |
| 199 | GMAC0_TXD1 | IO input/output | 1.8V | GMAC0_TXD1/UART1_TX_M0/GPIO2_B4_u | G27 | GMAC0 transmit data 1 |
| 200 | GMAC0_TXD0 | IO input/output | 1.8V | GMAC0_TXD0/UART1_RX_M0/GPIO2_B3_u | F28 | GMAC0 transmit data 0 |
| 201 | GMAC0_TXCLK | IO input/output | 1.8V | SDMMC1_CLK/GMAC0_TXCLK/UART9_TX_M0/GPIO2_B0_d | D27 | GMAC0 transmit Clock |
| 202 | GMAC0_TXD3 | IO input/output | 1.8V | SDMMC1_CMD/GMAC0_TXD3/UART9_RX_M0/GPIO2_A7_u | C28 | GMAC0 transmit data 3 |
| 203 | GMAC0_TXD2 | IO input/output | 1.8V | SDMMC1_D3/GMAC0_TXD2/UART7_TX_M0/GPIO2_A6_u | C27 | GMAC0 transmit data 2 |
| 204 | GMAC0_RXCLK | IO input/output | 1.8V | SDMMC1_D2/GMAC0_RXCLK/UART7_RX_M0/GPIO2_A5_u | B28 | GMAC0 receive clock |
| 205 | GMAC0_RXD3 | IO input/output | 1.8V | SDMMC1_D1/GMAC0_RXD3/UART6_TX_M0/GPIO2_A4_u | E28 | GMAC0 receive data 3 |
| 206 | GMAC0_RXD2 | IO input/output | 1.8V | SDMMC1_D0/GMAC0_RXD2/UART6_RX_M0/GPIO2_A3_u | E27 | GMAC0 receive data 2 |
| 207 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 208 | RK809_32KOUT_WIFI | IO output | 3.3V | CLK32K | 68 | 32.768KHz clock output, open drain,pull up default. |
| 209 | UART8_CTSN_M0 | IO input/output | 1.8V | SDMMC1_DET/I2C4_SCL_M1/UART8_CTSn_M0/CAN2_TX_M1/GPIO2_B2_u | E25 | UART8 clear to send |
| 210 | UART8_RTSN_M0 | IO input/output | 1.8V | SDMMC1_PWREN/I2C4_SDA_M1/UART8_RTSn_M0/CAN2_RX_M1/GPIO2_B1_d | D26 | UART8 request to send |
| 211 | UART8_RX_M0 | IO input/output | 1.8V | CLK32K_OUT1/UART8_RX_M0/SPI1_CS1_M0/GPIO2_C6_d | E26 | UART8 receive data |
| 212 | UART8_TX_M0 | IO input/output | 1.8V | I2S2_SDI_M0/GMAC0_RXER/UART8_TX_M0/SPI2_CS1_M0/GPIO2_C5_d | F26 | UART8 transmit data |
| 213 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 214 | SARADC_VIN7 | Analog input | analog(1.8V max) | SARADC_VIN7 | F21 | SAR ADC Channel 7 input |
| 215 | SARADC_VIN6 | Analog input | analog(1.8V max) | SARADC_VIN6 | G20 | SAR ADC Channel 6 input |
| 216 | SARADC_VIN5 | Analog input | analog(1.8V max) | SARADC_VIN5 | F22 | SAR ADC Channel 5 input |
| 217 | SARADC_VIN4 | Analog input | analog(1.8V max) | SARADC_VIN4 | G21 | SAR ADC Channel 4 input |
| 218 | SARADC_VIN3 | Analog input | analog(1.8V max) | SARADC_VIN3 | E23 | SAR ADC Channel 3 input |
| 219 | SARADC_VIN2_LCD_ID | Analog input | analog(1.8V max) | SARADC_VIN2 | D24 | SAR ADC Channel 2 input |
| 220 | SARADC_VIN1_EVB_HW_ID | Analog input | analog(1.8V max) | SARADC_VIN1 | C26 | SAR ADC Channel 1 input |
| 221 | SARADC_VIN0_KEY/RECOVERY | Analog input | analog(1.8V max) | SARADC_VIN0 | B27 | SAR ADC Channel 0 input,with Recovery |
| 222 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 223 | LCD0_RST_L_GPIO1_D1 | IO input/output | 1.8V | FSPI_D0/FLASH_RDY/GPIO1_D1_u | C24 | GPIO for LCD0 reset |
| 224 | PCIE_USB_SEL_GPIO1_D0 | IO input/output | 1.8V | FSPI_CLK/FLASH_ALE/GPIO1_D0_d | A22 | GPIO for select USB or PCIE to M2 |
| 225 | CAMERA0_PWREN_GPIO1_D4 | IO input/output | 1.8V | FSPI_D3/FLASH_CS1n/GPIO1_D4_u | A27 | GPIO for camera0 power enable |
| 226 | CRYPTO_RST_GPIO1_D3 | IO input/output | 1.8V | FSPI_CS0n/FLASH_CS0n/GPIO1_D3_u | C23 | GPIO for crypto chip reset |
| 227 | M2_ONOFF_GPIO1_D2 | IO input/output | 1.8V | FSPI_D1/FLASH_RDn/GPIO1_D2_u | D23 | GPIO for M2 on-off key |
| 228 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 229 | I2S1_SCLK_RX_M0/PDM_CLK1_M0 | IO input/output | 3.3V | I2S1_SCLK_RX_M0/UART4_RX_M0/PDM_CLK1_M0/SPDIF_TX_M0/GPIO1_A4_d | F18 | PDM clock 1 |
| 230 | I2S1_SDO1_M0/I2S1_SDI3_M0/PDM_SDI3_M0 | IO input/output | 3.3V | I2S1_SDO1_M0/I2S1_SDI3_M0/PDM_SDI3_M0/PCIE20_CLKREQn_M2/ACODEC_DAC_DATAR/GPIO1_B0_d | D20 | PDM data 3 input |
| 231 | I2S1_SDO2_M0/I2S1_SDI2_M0/PDM_SDI2_M0 | IO input/output | 3.3V | I2S1_SDO2_M0/I2S1_SDI2_M0/PDM_SDI2_M0/PCIE20_WAKEn_M2/ACODEC_ADC_SYNC/GPIO1_B1_d | E20 | PDM data 2 input |
| 232 | I2S1_SDO3_M0/I2S1_SDI1_M0/PDM_SDI1_M0 | IO input/output | 3.3V | I2S1_SDO3_M0/I2S1_SDI1_M0/PDM_SDI1_M0/PCIE20_PERSTn_M2/GPIO1_B2_d | A21 | PDM data 1 input |
| 233 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 234 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 235 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 236 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 237 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 238 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 239 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 240 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 241 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 242 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 243 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 244 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 245 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 246 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 247 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 248 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 249 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 250 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 251 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 252 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 253 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 254 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 255 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 256 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 257 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 258 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 259 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 260 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 261 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 262 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 263 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 264 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 265 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 266 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 267 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 268 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 269 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 270 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 271 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 272 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 273 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 274 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 275 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 276 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 277 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 278 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 279 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 280 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 281 | GMAC1_RXDV_CRS_M1 | IO input/output | 1.8V | ISP_PRELIGHT_TRIG/EBC_SDCE3/GMAC1_RXDV_CRS_M1/I2S1_SDO2_M1/GPIO4_B1_d | V2 | GMAC1 receive data valid/carrier sense |
| 282 | GMAC1_RXD1_M1 | IO input/output | 1.8V | CAM_CLKOUT1/EBC_SDCE2/GMAC1_RXD1_M1/SPI3_MISO_M0/I2S1_SDO1_M1/GPIO4_B0_d | V7 | GMAC1 receive data 1 |
| 283 | GMAC1_RXD0_M1 | IO input/output | 1.8V | CAM_CLKOUT0/EBC_SDCE1/GMAC1_RXD0_M1/SPI3_CS1_M0/I2S1_LRCK_RX_M1/GPIO4_A7_d | W1 | GMAC1 receive data 0 |
| 284 | GMAC1_TXEN_M1 | IO input/output | 1.8V | ISP_FLASHTRIGOUT/EBC_SDCE0/GMAC1_TXEN_M1/SPI3_CS0_M0/I2S1_SCLK_RX_M1/GPIO4_A6_d | W2 | GMAC1 transmit enable |
| 285 | GMAC1_TXD1_M1 | IO input/output | 1.8V | CIF_D15/EBC_SDDO15/GMAC1_TXD1_M1/UART9_RX_M2/I2S2_LRCK_RX_M1/GPIO4_A5_d | Y1 | GMAC1 transmit data 1 |
| 286 | GMAC1_TXD0_M1 | IO input/output | 1.8V | CIF_D14/EBC_SDDO14/GMAC1_TXD0_M1/UART9_TX_M2/I2S2_LRCK_TX_M1/GPIO4_A4_d | Y2 | GMAC1 transmit data 0 |
| 287 | GMAC1_RXCLK_M1 | IO input/output | 1.8V | CIF_D13/EBC_SDDO13/GMAC1_RXCLK_M1/UART7_RX_M2/PDM_SDI3_M1/GPIO4_A3_d | Y3 | GMAC1 receive clock |
| 288 | GMAC1_RXD3_M1 | IO input/output | 1.8V | CIF_D12/EBC_SDDO12/GMAC1_RXD3_M1/UART7_TX_M2/PDM_SDI2_M1/GPIO4_A2_d | Y4 | GMAC1 receive data 3 |
| 289 | GMAC1_RXD2_M1 | IO input/output | 1.8V | CIF_D11/EBC_SDDO11/GMAC1_RXD2_M1/PDM_SDI1_M1/GPIO4_A1_d | AA2 | GMAC1 receive data 2 |
| 290 | GMAC1_TXCLK_M1 | IO input/output | 1.8V | CIF_D10/EBC_SDDO10/GMAC1_TXCLK_M1/PDM_CLK1_M1/GPIO4_A0_d | AA3 | GMAC1 transmit Clock |
| 291 | GMAC1_TXD3_M1 | IO input/output | 1.8V | CIF_D9/EBC_SDDO9/GMAC1_TXD3_M1/UART1_RX_M1/PDM_SDI0_M1/GPIO3_D7_d | Y5 | GMAC1 transmit data 3 |
| 292 | GMAC1_TXD2_M1 | IO input/output | 1.8V | CIF_D8/EBC_SDDO8/GMAC1_TXD2_M1/UART1_TX_M1/PDM_CLK0_M1/GPIO3_D6_d | Y6 | GMAC1 transmit data 2 |
| 293 | GMAC1_RSTN_GPIO2_D1 | IO input/output | 1.8V | LCDC_D1/VOP_BT656_D1_M0/SPI0_MOSI_M1/PCIE20_WAKEn_M1/I2S1_SCLK_TX_M2/GPIO2_D1_d | AD7 | GPIO OUT for GMAC1 reset |
| 294 | USB_PWEREN_GPIO2_D0 | IO input/output | 1.8V | LCDC_D0/VOP_BT656_D0_M0/SPI0_MISO_M1/PCIE20_CLKREQn_M1/I2S1_MCLK_M2/GPIO2_D0_d | AG6 | GPIO OUT for USB power enable |
| 295 | GMAC1_MCLKINOUT_M1 | IO input/output | 1.8V | CIF_CLKIN/EBC_SDCLK/GMAC1_MCLKINOUT_M1/UART1_CTSn_M1/I2S2_SCLK_RX_M1/GPIO4_C1_d | U2 | GMAC1 reference clock input or output |
| 296 | ETH1_REFCLKO_25M_M0 | IO input/output | 3.3V | LCDC_D15/VOP_BT1120_D6/ETH1_REFCLKO_25M_M0/SDMMC2_PWREN_M1/GPIO3_B0_d | AG2 | CPU Output clock 25MHz for Ethernet PHY1 |
| 297 | GMAC1_MDIO_M1 | IO input/output | 1.8V | CIF_VSYNC/EBC_SDOE/GMAC1_MDIO_M1/I2S2_SCLK_TX_M1/GPIO4_B7_d | U4 | GAMC1 management data |
| 298 | GMAC1_MDC_M1 | IO input/output | 1.8V | CIF_HREF/EBC_SDLE/GMAC1_MDC_M1/UART1_RTSn_M1/I2S2_MCLK_M1/GPIO4_B6_d | U5 | GMAC1 management data clock |
| 299 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 300 | I2C4_SCL_M0 | IO input/output | 1.8V | I2C4_SCL_M0/EBC_GDOE/ETH1_REFCLKO_25M_M1/SPI3_CLK_M0/I2S2_SDO_M1/GPIO4_B3_d | V1 | I2C4 bus clock for camera |
| 301 | I2C4_SDA_M0 | IO input/output | 1.8V | I2C4_SDA_M0/EBC_VCOM/GMAC1_RXER_M1/SPI3_MOSI_M0/I2S2_SDI_M1/GPIO4_B2_d | V4 | I2C4 bus Data/Address for camera |
| 302 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 303 | PWM14_M0 | IO input/output | 3.3V | PWM14_M0/VOP_PWM_M1/GMAC1_MDC_M0/UART7_TX_M1/PDM_CLK1_M2/GPIO3_C4_d | AC3 | Pulse Width Modulation 14 input or output |
| 304 | CAMERA0_RST_L_GPIO4_B5 | IO input/output | 3.3V | I2C2_SCL_M1/EBC_SDSHR/CAN2_TX_M0/I2S1_SDO3_M1/GPIO4_B5_d | V5 | GPIO OUT For Camera0 reset |
| 305 | CAMERA0_PDN_L_GPIO4_B4 | IO input/output | 3.3V | I2C2_SDA_M1/EBC_GDSP/CAN2_RX_M0/ISP_FLASH_TRIGIN/VOP_BT656_CLK_M1/GPIO4_B4_d | V6 | GPIO OUT For Camera0 power down |
| 306 | LCD1_RST_L_GPIO3_B6 | IO input/output | 3.3V | LCDC_D21/VOP_BT1120_D12/GMAC1_TXD1_M0/I2C3_SDA_M1/PWM11_IR_M0/GPIO3_B6_d | AE3 | GPIO out for LCD0 reset |
| 307 | M2_RESET_GPIO3_B5 | IO input/output | 3.3V | LCDC_D20/VOP_BT1120_D11/GMAC1_TXD0_M0/I2C3_SCL_M1/PWM10_M0/GPIO3_B5_d | AE2 | GPIO out for m2 reset |
| 308 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 309 | SDMMC2_CLK_M0 | IO input/output | 3.3V | CIF_D5/EBC_SDDO5/SDMMC2_CLK_M0/I2S1_SDI1_M1/VOP_BT656_D5_M1/GPIO3_D3_d | AC1 | SDMMC2 Clock |
| 310 | SDMMC2_CMD_M0 | IO input/output | 3.3V | CIF_D4/EBC_SDDO4/SDMMC2_CMD_M0/I2S1_SDI0_M1/VOP_BT656_D4_M1/GPIO3_D2_d | Y7 | SDMMC2 Command |
| 311 | SDMMC2_D0_M0 | IO input/output | 3.3V | CIF_D0/EBC_SDDO0/SDMMC2_D0_M0/I2S1_MCLK_M1/VOP_BT656_D0_M1/GPIO3_C6_d | AC5 | SDMMC2 data 0 |
| 312 | SDMMC2_D1_M0 | IO input/output | 3.3V | CIF_D1/EBC_SDDO1/SDMMC2_D1_M0/I2S1_SCLK_TX_M1/VOP_BT656_D1_M1/GPIO3_C7_d | AA6 | SDMMC2 data 1 |
| 313 | SDMMC2_D2_M0 | IO input/output | 3.3V | CIF_D2/EBC_SDDO2/SDMMC2_D2_M0/I2S1_LRCK_TX_M1/VOP_BT656_D2_M1/GPIO3_D0_d | AB5 | SDMMC2 data 2 |
| 314 | SDMMC2_D3_M0 | IO input/output | 3.3V | CIF_D3/EBC_SDDO3/SDMMC2_D3_M0/I2S1_SDO0_M1/VOP_BT656_D3_M1/GPIO3_D1_d | AB1 | SDMMC2 data 3 |
| 315 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 316 | UART5_TX_M1_GPIO3_C2 | IO input/output | 3.3V | LCDC_VSYNC/VOP_BT1120_D14/SPI1_MISO_M1/UART5_TX_M1/I2S1_SDO3_M2/GPIO3_C2_d | AA7 | UART serial data output |
| 317 | EDP_BL_EN_GPIO3_C1 | IO input/output | 3.3V | LCDC_HSYNC/VOP_BT1120_D13/SPI1_MOSI_M1/PCIE20_PERSTn_M1/I2S1_SDO2_M2/GPIO3_C1_d | AD1 | GPIO for edp blacklight enable |
| 318 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 319 | I2C1_SDA_TP | IO input/output | 3.3V | I2C1_SDA/CAN0_RX_M0/PCIE20_BUTTONRSTn/MCU_JTAG_TCK/GPIO0_B4_u | AB20 | I2C1 bus Data/Address touch panel |
| 320 | I2C1_SCL_TP | IO input/output | 3.3V | I2C1_SCL/CAN0_TX_M0/PCIE30X1_BUTTONRSTn/MCU_JTAG_TDO/GPIO0_B3_u | AG24 | I2C1 bus clock for touch panel |
| 321 | TP_RST_L_GPIO0_B6 | IO input/output | 3.3V | I2C2_SDA_M0/SPI0_MOSI_M0/PCIE20_PERSTn_M0/PWM2_M1/GPIO0_B6_u | AA20 | GPIO out for touch panel reset |
| 322 | TP_INT_L_GPIO0_B5 | IO input/output | 3.3V | I2C2_SCL_M0/SPI0_CLK_M0/PCIE20_WAKEn_M0/PWM1_M1/GPIO0_B5_u | AC22 | GPIO in for touch panel interrup |
| 323 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 324 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 325 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 326 | HDMITX_SCL | IO input/output | 3.3V | HDMITX_SCL/I2C5_SCL_M1/GPIO4_C7_u | AG8 | HDMI2.0 TX I2C bus Clock |
| 327 | HDMITX_SDA | IO input/output | 3.3V | HDMITX_SDA/I2C5_SDA_M1/GPIO4_D0_u | AG7 | HDMI2.0 TX I2C bus Data/Address |
| 328 | HDMITX_CEC_M0 | IO input/output | 3.3V | HDMITX_CEC_M0/SPI3_CS1_M1/GPIO4_D1_u | AH6 | HDMI2.0 TX CEC |
| 329 | HDMI_TX_HPDIN | IO input | 3.3V/5V | HDMI_TX_HPDIN | AB18 | HDMI2.0  Hot Plug Detection interrupt with 5V tolerance |
| 330 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 331 | LCD1_PWREN_H_GPIO4_D2 | IO input/output | 3.3V | GPIO4_D2_d | AB9 | GPIO for LCD1 power enable |
| 332 | SATA0_LED | IO input/output | 3.3V | PWM13_M1/SPI3_CS0_M1/SATA0_ACT_LED/UART9_RX_M1/I2S3_SDI_M1/GPIO4_C6_d | AE8 | SATA0 LED control output |
| 333 | EDP_PWM12_GPIO4_C5 | IO input/output | 3.3V | PWM12_M1/SPI3_MISO_M1/SATA1_ACT_LED/UART9_TX_M1/I2S3_SDO_M1/GPIO4_C5_d | AD8 | Pulse Width Modulation 12  output for edp backlight |
| 334 | SATA2_LED | IO input/output | 3.3V | EDP_HPDIN_M0/SPDIF_TX_M2/SATA2_ACT_LED/PCIE30X2_PERSTn_M2/I2S3_LRCK_M1/GPIO4_C4_d | AH7 | SATA2 LED control output |
| 335 | CAN1_TX_M1_GPIO4_C3 | IO input/output | 3.3V | PWM15_IR_M1/SPI3_MOSI_M1/CAN1_TX_M1/PCIE30X2_WAKEn_M2/I2S3_SCLK_M1/GPIO4_C3_d | AA11 | CAN1 transmit data |
| 336 | CAN1_RX_M1_GPIO4_C2 | IO input/output | 3.3V | PWM14_M1/SPI3_CLK_M1/CAN1_RX_M1/PCIE30X2_CLKREQn_M2/I2S3_MCLK_M1/GPIO4_C2_d | AF8 | CAN1 receive data |
| 337 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 338 | HP_IN_GPIO3_A7 | IO input/output | 3.3V | LCDC_D14/VOP_BT1120_D5/GMAC1_RXCLK_M0/SDMMC2_DET_M1/GPIO3_A7_d | AH2 | GPIO for headphone input detcect |
| 339 | U2_EN_GPIO2_D7 | IO input/output | 3.3V | LCDC_D7/VOP_BT656_D7_M0/SPI2_MISO_M1/UART8_TX_M1/I2S1_SDO0_M2/GPIO2_D7_d | AH5 | GPIO out for U2 power output enable |
| 340 | PCIE30X2_PERSTN_M1 | IO input/output | 3.3V | LCDC_D6/VOP_BT656_D6_M0/SPI2_MOSI_M1/PCIE30X2_PERSTn_M1/I2S1_SDI3_M2/GPIO2_D6_d | AD6 | PCIe3.0 X2Lane Global reset |
| 341 | PCIE30X2_WAKEN_M1 | IO input/output | 3.3V | LCDC_D5/VOP_BT656_D5_M0/SPI2_CS0_M1/PCIE30X2_WAKEn_M1/I2S1_SDI2_M2/GPIO2_D5_d | AF6 | PCIe3.0 X2Lane Wake |
| 342 | PCIE30X2_CLKREQN_M1 | IO input/output | 3.3V | LCDC_D4/VOP_BT656_D4_M0/SPI2_CS1_M1/PCIE30X2_CLKREQn_M1/I2S1_SDI1_M2/GPIO2_D4_d | AF5 | PCIe3.0 x2Lane Reference clock request |
| 343 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 344 | I2C0_SDA_PMIC | IO input/output | 3.3V | I2C0_SDA/GPIO0_B2_u | AB21 | I2C0 bus Data/Address |
| 345 | I2C0_SCL_PMIC | IO input/output | 3.3V | I2C0_SCL/GPIO0_B1_u | AF24 | I2C0 bus clock |
| 346 | GMAC1_INT_GPIO0_A6 | IO input/output | 3.3V | GPU_PWREN/SATA_CP_POD/PCIE30X2_CLKREQn_M0/GPIO0_A6_d | AE24 | GPIO in for Gmac1 interrupt |
| 347 | WL_EN_GPIO0_A5 | IO input/output | 3.3V | SDMMC0_PWREN/SATA_MP_SWITCH/PCIE20_CLKREQn_M0/GPIO0_A5_d | AF25 | GPIO for wifi enable |
| 348 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 349 | RECOVERY_GPIO0_D6 | IO input/output | 1.8V | GPIO0_D6_d | AC24 | GPIO for Recovery button |
| 350 | WL_WAKE_GPIO0_D5 | IO input/output | 1.8V | GPIO0_D5_d | AD25 | GPIO for wifi wakeup |
| 351 | PCIE_PWREN_H_GPIO0_D4 | IO input/output | 1.8V | GPIO0_D4_d | AB23 | GPIO out for pcie power enable |
| 352 | RTCIC_INT_L_GPIO0_D3 | IO input/output | 1.8V | GPIO0_D3_d | AE26 | GPIO in for RTC interrup |
| 353 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 354 | LCD0_PWREN_H_GPIO0_C7 | IO input/output | 3.3V | HDMITX_CEC_M1/PWM0_M1/UART0_CTSn/GPIO0_C7_d | AH25 | GPIO out for LCD0 power enable |
| 355 | MINIPCIE_PWREN_H_GPIO0_C5 | IO input/output | 3.3V | PWM6/SPI0_MISO_M0/PCIE30X2_WAKEn_M0/GPIO0_C5_d | AC21 | GPIO out for MINIPCIE Power enable |
| 356 | LCD1_BL_PWM5 | IO input/output | 3.3V | PWM5/SPI0_CS1_M0/UART0_RTSn/GPIO0_C4_d | AD21 | Pulse Width Modulation 5 |
| 357 | LCD0_BL_PWM4 | IO input/output | 3.3V | PWM4/VOP_PWM_M0/PCIE30X1_PERSTn_M0/MCU_JTAG_TRSTn/GPIO0_C3_d | AE23 | LCD Backlight Pulse Width Modulation |
| 358 | EDP_HPD_GPIO0_C2 | IO input/output | 3.3V | PWM3_IR/EDP_HPDIN_M1/PCIE30X1_WAKEn_M0/MCU_JTAG_TMS/GPIO0_C2_d | AG23 | EDP hot plug detect signal |
| 359 | VCC3V3_SD | POWER output | 3.3V/1.8V | SWOUT2 | 58 | Power switch out 2,Power for SD socket |
| 360 | SDMMC0_DET_L | IO input/output | 3.3V | SDMMC0_DET/SATA_CP_DET/PCIE30X1_CLKREQn_M0/GPIO0_A4_u | Y22 | SDMMC0 detect input |
| 361 | SDMMC0_CLK | IO input/output | 3.3V | SDMMC0_CLK/TEST_CLKOUT/UART5_TX_M0/CAN0_RX_M1/GPIO2_A2_d | H28 | SDMMC0 Clock |
| 362 | SDMMC0_CMD | IO input/output | 3.3V | SDMMC0_CMD/PWM10_M1/UART5_RX_M0/CAN0_TX_M1/GPIO2_A1_u | H27 | SDMMC0 Command |
| 363 | SDMMC0_D3 | IO input/output | 3.3V | SDMMC0_D3/ARMJTAG_TMS/UART5_RTSn_M0/GPIO2_A0_u | J23 | SDMMC0 data 3 |
| 364 | SDMMC0_D2 | IO input/output | 3.3V | SDMMC0_D2/ARMJTAG_TCK/UART5_CTSn_M0/GPIO1_D7_u | H26 | SDMMC0 data 2 |
| 365 | SDMMC0_D1 | IO input/output | 3.3V | SDMMC0_D1/UART2_RX_M1/UART6_RX_M1/PWM9_M1/GPIO1_D6_u | J24 | SDMMC0 data 1 |
| 366 | SDMMC0_D0 | IO input/output | 3.3V | SDMMC0_D0/UART2_TX_M1/UART6_TX_M1/PWM8_M1/GPIO1_D5_u | J25 | SDMMC0 data 0 |
| 367 | PWM7_IR | IO input/output | 3.3V | PWM7_IR/SPI0_CS0_M0/PCIE30X2_PERSTn_M0/GPIO0_C6_d | AD20 | Pulse Width Modulation 7 input for IR receiver |
| 368 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 369 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 370 | VCC3V3_VIN | POWER input | 3.3V | N/A | N/A | Power supply for PMU to all DCDC and LDO |
| 371 | VCC3V3_VIN | POWER input | 3.3V | N/A | N/A | Power supply for PMU to all DCDC and LDO |
| 372 | VCC3V3_VIN | POWER input | 3.3V | N/A | N/A | Power supply for PMU to all DCDC and LDO |
| 373 | VCC3V3_VIN | POWER input | 3.3V | N/A | N/A | Power supply for PMU to all DCDC and LDO |
| 374 | VCC3V3_VIN | POWER input | 3.3V | N/A | N/A | Power supply for PMU to all DCDC and LDO |
| 375 | VCC3V3_VIN | POWER input | 3.3V | N/A | N/A | Power supply for PMU to all DCDC and LDO |
| 376 | VCC3V3_VIN | POWER input | 3.3V | N/A | N/A | Power supply for PMU to all DCDC and LDO |
| 377 | VCC3V3_VIN | POWER input | 3.3V | N/A | N/A | Power supply for PMU to all DCDC and LDO |
| 378 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 379 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 380 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 381 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 382 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 383 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 384 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 385 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 386 | VCC5V_CPU | POWER input | 5V | N/A | N/A | Power supply for DCDC to CPU |
| 387 | VCC5V_CPU | POWER input | 5V | N/A | N/A | Power supply for DCDC to CPU |
| 388 | VCC5V_CPU | POWER input | 5V | N/A | N/A | Power supply for DCDC to CPU |
| 389 | VCC5V_CPU | POWER input | 5V | N/A | N/A | Power supply for DCDC to CPU |
| 390 | VCC5V_CPU | POWER input | 5V | N/A | N/A | Power supply for DCDC to CPU |
| 391 | VCC5V_CPU | POWER input | 5V | N/A | N/A | Power supply for DCDC to CPU |
| 392 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 393 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 394 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 395 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 396 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 397 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 398 | EXT_EN | IO output | 3.3V | EXT_EN | 60 | Enable Signal for external high voltage BUCK |
| 399 | VDC | Analog input | analog | VDC | 61 | If it exceeds 0.55V for the first time, it will start the
PMIC(rising edge triggering start).And it is connected to the
divider of external power supply generally. |
| 400 | PWRON_KEY | IO input | 3.3V | PWRON | 52 | Power on key input, active low, internal 17k resistor pull high
to VCC_RTC |
| 401 | RESET_KEY | IO input | 3.3V | RESETB | 67 | Reset pin after power on, active low,pull up default. |
| 402 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 403 | BAT_GNDN | Analog input | analog | SNSN | 63 | Bat charging and discharging sense current negative pin |
| 404 | BAT_GNDP | Analog input | analog | SNSP | 62 | Bat charging and discharging sense current positive pin |
| 405 | VBAT | Analog input | analog | BATDIV | 56 | Divided voltage of positive battery |
| 406 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 407 | USB3_OTG0_VBUSDET | IO input | 3.3V | USB3_OTG0_VBUSDET | M24 | USB3 OTG0 connected vbus power detect |
| 408 | USB3_OTG0_ID | IO input | 3.3V | USB3_OTG0_ID | L23 | USB3 OTG0 ID detect |
| 409 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 410 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 411 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 412 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 413 | I2C3_SDA_M0 | IO input/output | 3.3V | I2C3_SDA_M0/UART3_RX_M0/CAN1_RX_M0/AUDIOPWM_LOUT_P/ACODEC_ADC_DATA/GPIO1_A0_u | D18 | I2C3 bus Data/Address |
| 414 | I2C3_SCL_M0 | IO input/output | 3.3V | I2C3_SCL_M0/UART3_TX_M0/CAN1_TX_M0/AUDIOPWM_LOUT_N/ACODEC_ADC_CLK/GPIO1_A1_u | E18 | I2C3 bus clock |
| 415 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 416 | MASKROM_KEY | IO input | 1.8V | EMMC_D0/FLASH_D0/GPIO1_B4_u | A24 | for booting from emmc or USB after reset |
| 417 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 418 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 419 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 420 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 421 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 422 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 423 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 424 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 425 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 426 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 427 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 428 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 429 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 430 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 431 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 432 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 433 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 434 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 435 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 436 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 437 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 438 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 439 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 440 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 441 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 442 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 443 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 444 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 445 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 446 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 447 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 448 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 449 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 450 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 451 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 452 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 453 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 454 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 455 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 456 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 457 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 458 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 459 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 460 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 461 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 462 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 463 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 464 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 465 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 466 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 467 | CIF_CLKOUT | IO input/output | 1.8V | CIF_CLKOUT/EBC_GDCLK/PWM11_IR_M1/GPIO4_C0_d | U3 | Camera Master clock output for parallel interface |
| 468 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 469 | USBHUB_RESET_GPIO3_B4 | IO input/output | 3.3V | LCDC_D19/VOP_BT1120_D10/GMAC1_RXER_M0/I2C5_SDA_M0/PDM_SDI1_M2/GPIO3_B4_d | AE1 | GPIO for USB HUB reset |
| 470 | PCIE_CLKEN_GPIO3_B3 | IO input/output | 3.3V | LCDC_D18/VOP_BT1120_D9/GMAC1_RXDV_CRS_M0/I2C5_SCL_M0/PDM_SDI0_M2/GPIO3_B3_d | AF1 | GPIO for PCIE 100MHz clock enable |
| 471 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 472 | SPDIF_TX_M1 | IO input/output | 3.3V | PWM15_IR_M0/SPDIF_TX_M1/GMAC1_MDIO_M0/UART7_RX_M1/I2S1_LRCK_RX_M2/GPIO3_C5_d | AC2 | SPDIF transmit |
| 473 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 474 | UART5_RX_M1_GPIO3_C3 | IO input/output | 3.3V | LCDC_DEN/VOP_BT1120_D15/SPI1_CLK_M1/UART5_RX_M1/I2S1_SCLK_RX_M2/GPIO3_C3_d | AC4 | UART serial data input |
| 475 | UART3_RX_M1 | IO input/output | 3.3V | LCDC_D23/PWM13_M0/GMAC1_MCLKINOUT_M0/UART3_RX_M1/PDM_SDI3_M2/GPIO3_C0_d | AD2 | UART3 receive data |
| 476 | UART3_TX_M1 | IO input/output | 3.3V | LCDC_D22/PWM12_M0/GMAC1_TXEN_M0/UART3_TX_M1/PDM_SDI2_M2/GPIO3_B7_d | AD4 | UART3 transmit data |
| 477 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 478 | BEEP_EN_GPIO3_D5 | IO input/output | 1.8V | CIF_D7/EBC_SDDO7/SDMMC2_PWREN_M0/I2S1_SDI3_M1/VOP_BT656_D7_M1/GPIO3_D5_d | AA5 | GPIO for beep enable |
| 479 | MINIPCIE_RESET_GPIO3_D4 | IO input/output | 1.8V | CIF_D6/EBC_SDDO6/SDMMC2_DET_M0/I2S1_SDI2_M1/VOP_BT656_D6_M1/GPIO3_D4_d | AA1 | GPIO for MiniPCIE reset |
| 480 | HOST_WAKE_BT_H_GPIO3_A2 | IO input/output | 3.3V | LCDC_D9/VOP_BT1120_D1/GMAC1_TXD2_M0/I2S3_MCLK_M0/SDMMC2_D1_M1/GPIO3_A2_d | AE5 | GPIO OUT for Host wakeup BT |
| 481 | BT_WAKE_HOST_H_GPIO3_A1 | IO input/output | 3.3V | LCDC_D8/VOP_BT1120_D0/SPI1_CS0_M1/PCIE30X1_PERSTn_M1/SDMMC2_D0_M1/GPIO3_A1_d | AB8 | GPIO IN For BT wakeup Host |
| 482 | BT_REG_ON_H_GPIO3_A0 | IO input/output | 3.3V | LCDC_CLK/VOP_BT656_CLK_M0/SPI2_CLK_M1/UART8_RX_M1/I2S1_SDO1_M2/GPIO3_A0_d | AH4 | GPIO OUT For BT enable |
| 483 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 484 | UART4_TX_M1 | IO input/output | 3.3V | LCDC_D17/VOP_BT1120_D8/GMAC1_RXD1_M0/UART4_TX_M1/PWM9_M0/GPIO3_B2_d | AF2 | UART4 transmit data |
| 485 | UART4_RX_M1 | IO input/output | 3.3V | LCDC_D16/VOP_BT1120_D7/GMAC1_RXD0_M0/UART4_RX_M1/PWM8_M0/GPIO3_B1_d | AG1 | UART4 receive data |
| 486 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 487 | GMAC0_RSTN_GPIO2_D3 | IO input/output | 1.8V | LCDC_D3/VOP_BT656_D3_M0/SPI0_CLK_M1/PCIE30X1_WAKEn_M1/I2S1_SDI0_M2/GPIO2_D3_d | AC7 | GPIO OUT for GMAC0 reset |
| 488 | GMAC0_INT/PMEB_GPIO2_D2 | IO input/output | 1.8V | LCDC_D2/VOP_BT656_D2_M0/SPI0_CS0_M1/PCIE30X1_CLKREQn_M1/I2S1_LRCK_TX_M2/GPIO2_D2_d | AC8 | GPIO IN For GMAC0 interrup |
| 489 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 490 | I2S3_SDI_M0 | IO input/output | 3.3V | LCDC_D13/VOP_BT1120_CLK/GMAC1_TXCLK_M0/I2S3_SDI_M0/SDMMC2_CLK_M1/GPIO3_A6_d | AG3 | I2S3 data input |
| 491 | I2S3_SDO_M0 | IO input/output | 3.3V | LCDC_D12/VOP_BT1120_D4/GMAC1_RXD3_M0/I2S3_SDO_M0/SDMMC2_CMD_M1/GPIO3_A5_d | AH3 | I2S3 data output |
| 492 | I2S3_LRCK_M0 | IO input/output | 3.3V | LCDC_D11/VOP_BT1120_D3/GMAC1_RXD2_M0/I2S3_LRCK_M0/SDMMC2_D3_M1/GPIO3_A4_d | AF4 | I2S3 Left Right channel clock |
| 493 | I2S3_SCLK_M0 | IO input/output | 3.3V | LCDC_D10/VOP_BT1120_D2/GMAC1_TXD3_M0/I2S3_SCLK_M0/SDMMC2_D2_M1/GPIO3_A3_d | AG4 | I2S3 serial clock |
| 494 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 495 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 496 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 497 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 498 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 499 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 500 | NC | NOT CONNECTED | float | N/A | N/A | NOT CONNECTED |
| 501 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 502 | WAKEUP_MINIPCIE_GPIO0_C1 | IO input/output | 3.3V | PWM2_M0/NPUAVS/UART0_TX/MCU_JTAG_TDI/GPIO0_C1_d | AF23 | GPIO for MiniPCIE wakeup |
| 503 | CLK32K_OUT0 | IO input/output | 3.3V | CLK32K_IN/CLK32K_OUT0/PCIE30X2_BUTTONRSTn/GPIO0_B0_u | AD23 | SOC output 32.768KHz clock 0 |
| 504 | REFCLK_OUT_CAM | IO input/output | 3.3V | REFCLK_OUT/GPIO0_A0_d | AG27 | Reference clock output for camera |
| 505 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 506 | M2_WAKE_GPIO0_B7 | IO input/output | 3.3V | PWM0_M0/CPUAVS/GPIO0_B7_d | AH26 | GPIO for M2 wakeup |
| 507 | WORKING_LEDEN_H_GPIO0_C0 | IO input/output | 3.3V | PWM1_M0/GPUAVS/UART0_RX/GPIO0_C0_d | AD22 | GPIO out for working led blink |
| 508 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 509 | UART2_TX_M0_DEBUG | IO input/output | 3.3V | UART2_TX_M0/GPIO0_D1_u | AH24 | UART2 transmit data |
| 510 | UART2_RX_M0_DEBUG | IO input/output | 3.3V | UART2_RX_M0/GPIO0_D0_u | AC20 | UART2 receive data |
| 511 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 512 | HPR_OUT | Analog output | analog | HPR_OUT | 41 | Right channel output of the headphone |
| 513 | HP_SNS | Analog output | analog | HP_SNS | 40 | Reference ground for the headphone |
| 514 | HPL_OUT | Analog output | analog | HPL_OUT | 39 | Left channel output of the headphone |
| 515 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 516 | MIC1N | Analog input | analog | MICIN | 42 | Negative input of the Microphone |
| 517 | MIC1P | Analog input | analog | MICIP | 43 | Positive input of the Microphone |
| 518 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 519 | SPK_OUTP | Analog output | analog | SPKP_OUT | 32 | Positive speaker driver output |
| 520 | SPK_OUTP | Analog output | analog | SPKP_OUT | 32 | Positive speaker driver output |
| 521 | SPK_OUTN | Analog output | analog | SPKN_OUT | 34 | Negative speaker driver output. |
| 522 | SPK_OUTN | Analog output | analog | SPKN_OUT | 34 | Negative speaker driver output. |
| 523 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 524 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 525 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 526 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 527 | VCC_1V8 | POWER output | 1.8V | N/A | N/A | Power output to supply 1.8V devices |
| 528 | VCC_1V8 | POWER output | 1.8V | N/A | N/A | Power output to supply 1.8V devices |
| 529 | VCC_1V8 | POWER output | 1.8V | N/A | N/A | Power output to supply 1.8V devices |
| 530 | VCC_1V8 | POWER output | 1.8V | N/A | N/A | Power output to supply 1.8V devices |
| 531 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 532 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 533 | GND | POWER | 0 | N/A | N/A | referenced ground of power and signal |
| 534 | VCC5V0_SPK | POWER input | 5V | VCC_SPK_HP | 33 | Power supply for speaker and charger pump |
| 535 | VCC5V0_SPK | POWER input | 5V | VCC_SPK_HP | 33 | Power supply for speaker and charger pump |
| 536 | VCC5V0_SPK | POWER input | 5V | VCC_SPK_HP | 33 | Power supply for speaker and charger pump |

</TabItem>

<TabItem value="Core 3568J" label="Core 3568J">

The pin definition of Core 3568J is identical to Core 3568. The published pin table is still to be released.

</TabItem>

</Tabs>
