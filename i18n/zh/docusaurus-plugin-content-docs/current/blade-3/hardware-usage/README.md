---
sidebar_position: 0
description: Blade 3 的规格、框图、尺寸、接口布局与引脚定义，并链接到各接口的使用方法。
---

# 硬件信息

本页是 Blade 3 的硬件参考：芯片、各接口及其位置、关键硬件参数和引脚定义。对于可以外接设备的接口，[接口总览](#interface-overview)表格中的 **使用方法** 一栏会链接到本章或 Getting Started 中介绍具体用法的页面。

## 规格 \{#specifications}

| 项目 | 规格 |
| --- | --- |
| SoC | Rockchip RK3588 |
| CPU | 八核：4 x Cortex-A76 + 4 x Cortex-A55 |
| GPU | Arm Mali-G610 MP4，支持 OpenGL 和 Vulkan |
| NPU | 最高 6 TOPS |
| 内存 | 32 GB LPDDR4 |
| 存储 | 256 GB eMMC，microSD 卡槽（SD 3.0） |
| 显示输出 | 1 x HDMI 2.1，最高 8K 60 fps 或 4K 120 fps；2 x USB-C 上的 DisplayPort 1.4a，最高 8K 30 fps |
| 显示输入 | 1 x HDMI 2.0，最高 4K 60 fps |
| 视频解码 | H.265 和 VP9，最高 8K 60 fps |
| 视频编码 | H.264 和 H.265，最高 8K 30 fps |
| 摄像头 | 1 x 四通道 MIPI-CSI |
| 以太网 | 2 x 2.5 千兆以太网 |
| USB | 2 x USB 3.2 Gen 1 Type-C：USB0 支持 OTG，USB1 支持供电输入；两口均支持 DisplayPort 1.4a |
| 扩展 | U.2 边缘连接器，含 PCIe Gen3 x4、SATA 3.0 和 12 V 输入；Mini PCIe 插槽，含 PCIe 2.0 和 USB 2.0 |
| GPIO | 30-pin 排针：数字 I/O、I²C、I²S、SPI、CAN、ADC、PWM、USB 2.0 |
| USB PD 输入 | USB1，USB PD 2.0 或 3.0，最高 20 V 3 A |
| 12 V 输入（U.2） | 通过 U.2 连接器输入 12 V 3 A |
| 工作温度 | 0 至 80 °C |
| 尺寸 | 100 x 72 mm，2.5 英寸 Pico-ITX |

电源适配器和线缆的要求，见 [Power Supply](/blade-3/getting-started/power-supply)。

## 框图 \{#block-diagram}

![Blade 3 系统框图：RK3588 与内存、存储、显示、摄像头、网络和扩展接口的连接](/img/docs/introduction-to-mixtile-blade-3/block-diagram.webp)

_图 1. Blade 3 框图_

## 外形尺寸 \{#physical-dimensions}

![Blade 3 正面、背面和侧面的外形图及整体尺寸](/img/docs/introduction-to-mixtile-blade-3/dimensions.webp)

_图 2. Blade 3 外形尺寸_

板子四角各有一个安装孔：孔径 3.2 mm，适用 M3 螺丝，周围有直径 6 mm 的接地焊盘。

## 接口总览 \{#interface-overview}

![Blade 3 正面和背面视图，标注了所有接口](/img/docs/blade-3-board/blade-3-overview.webp)

_图 3. 接口布局（正面与背面）_

### 连接外设 \{#connecting-devices}

| 接口 | 参考 | 使用方法 |
| --- | --- | --- |
| 30-pin 排针 | [30-pin 排针](#30-pin-header) | [30-pin Header](./30-pin-header.md) |
| Mini PCIe 插槽 | [Mini PCIe 插槽](#mini-pcie) | [Mini PCIe](./mini-pcie.md) |
| 以太网 | [双 2.5 千兆以太网](#dual-25-gigabit-ethernet) | — |
| HDMI OUT、HDMI IN | [显示](#display-support) | 显示器接 HDMI OUT：[Quick Start](/blade-3/getting-started/quick-start#wiring-and-powering-up) |
| USB-C | [USB-C 接口](#usb-c-port) | [Quick Start](/blade-3/getting-started/quick-start#wiring-and-powering-up) |
| MIPI-CSI | [MIPI-CSI 摄像头接口](#mipi-csi) | 暂无使用指南 |
| U.2 连接器 | [U.2 连接器](#u2-connector) | 暂无使用指南 |
| microSD 卡槽 | [microSD 卡槽](#microsd-socket) | 暂无使用指南 |
| 风扇接口 | [风扇接口](#fan-connector) | 暂无使用指南 |

### 供电、启动与调试 \{#power-boot-and-debugging}

| 接口 | 参考 | 使用方法 |
| --- | --- | --- |
| 电源输入 | [电源输入](#power-input) | [Power Supply](/blade-3/getting-started/power-supply) |
| 启动模式拨码开关 | [指示灯与拨码开关](#led-and-dip-switch) | 进入 MaskROM 刷机：[Flashing an OS Image](/blade-3/getting-started/install-os#step-3-set-the-boot-switch-to-maskrom) |
| Debug UART | [调试串口](#debug-uart) | [Connect to Blade 3](/blade-3/getting-started/connect#serial-console) |

## microSD 卡槽 \{#microsd-socket}

microSD 卡槽支持标准 11 mm x 15 mm 的 microSD 卡，4 位数据接口，支持 SD 3.0 协议。Blade 3 默认从 eMMC 启动；通过启动模式拨码开关可以改为从 microSD 卡启动，见 [指示灯与拨码开关](#led-and-dip-switch)。

![Blade 3 俯视图，引线指向板子右边缘的 microSD 卡槽](/img/docs/blade-3-board/blade-3-microsd-slot.webp)

_图 4. Blade 3 上的 microSD 卡槽_

## 30-pin 排针 \{#30-pin-header}

排针为 2 x 15、2.54 mm 间距。

:::warning
- 信号引脚为 **3.3 V** 电平，不要直接连接 5 V 逻辑。
- ADC 输入 SARADC_VIN6（26 脚）和 SARADC_VIN7（24 脚）**最高只能接 1.8 V**。
- I2C5 在板上**没有上拉电阻**，请根据设备数量和总线速率外接上拉电阻。
- 5 V 输出（1 脚）和 3.3 V 输出（30 脚）各带 500 mA 保险丝。
:::

| 引脚 | 信号名 | 类型 | 方向 | 说明 |
| --- | --- | --- | --- | --- |
| 1 | VCC_5V0 | 电源 | 输出 | USB 电源，5 V 输出，最大 500 mA |
| 2 | GND | 电源 | — | 电源与信号参考地 |
| 3 | USB20_HOST0_DM | 差分 | 双向 | USB2.0 主机端口 0 数据负端 |
| 4 | I2S2_SDI_M1 | 信号 | 输入 | I2S2 数据输入 |
| 5 | USB20_HOST0_DP | 差分 | 双向 | USB2.0 主机端口 0 数据正端 |
| 6 | I2S2_SDO_M1 | 信号 | 输出 | I2S2 数据输出 |
| 7 | GND | 电源 | — | 电源与信号参考地 |
| 8 | I2S2_MCLK_M1 | 信号 | 输出 | I2S2 主时钟 |
| 9 | I2C5_SDA_M3 | 信号 | 双向 | I2C5 总线数据 |
| 10 | I2S2_SCLK_M1 | 信号 | 双向 | I2S2 串行时钟（BCLK） |
| 11 | I2C5_SCL_M3 | 信号 | 输出 | I2C5 总线时钟 |
| 12 | I2S2_LRCK_M1 | 信号 | 双向 | I2S2 左右声道时钟 |
| 13 | GND | 电源 | — | 电源与信号参考地 |
| 14 | GND | 电源 | — | 电源与信号参考地 |
| 15 | SPI4_MISO_M2 | 信号 | 输入 | SPI4 主入从出（MISO） |
| 16 | CAN2_RX | 信号 | 输入 | CAN2 接收数据 |
| 17 | SPI4_MOSI_M2 | 信号 | 输出 | SPI4 主出从入（MOSI） |
| 18 | CAN2_TX | 信号 | 输出 | CAN2 发送数据 |
| 19 | SPI4_CLK_M2 | 信号 | 输出 | SPI4 时钟 |
| 20 | GND | 电源 | — | 电源与信号参考地 |
| 21 | SPI4_CS0_M2 | 信号 | 输出 | SPI4 片选 0 |
| 22 | GPIO0_B0 | 信号 | 双向 | GPIO bank 0 端口 B0 |
| 23 | GPIO1_A4 | 信号 | 双向 | GPIO bank 1 端口 A4 |
| 24 | SARADC_VIN7 | 模拟 | 输入 | SAR ADC 通道 7 输入 |
| 25 | GND | 电源 | — | 电源与信号参考地 |
| 26 | SARADC_VIN6 | 模拟 | 输入 | SAR ADC 通道 6 输入 |
| 27 | PWM14 | 信号 | 双向 | PWM14 输入或输出 |
| 28 | GND | 电源 | — | 电源与信号参考地 |
| 29 | PWM15 | 信号 | 双向 | PWM15 输入或输出 |
| 30 | VCC_3V3_S0 | 电源 | 输出 | 外设电源，3.3 V 输出，最大 500 mA |

排针的使用方法，见 [30-pin Header](./30-pin-header.md)。

## Mini PCIe 插槽 \{#mini-pcie}

标准 52-pin Mini PCIe 插槽，支持 30 × 52 mm 的模块，提供 PCIe 2.0 和 USB 2.0。

| 引脚 | 信号名 | 类型 | 方向 | 说明 |
| --- | --- | --- | --- | --- |
| 1 | MINIPCIE20_WAKEN_3V3_L | 信号 | 输入 | Mini PCIe 设备唤醒信号 |
| 2 | VCC3V3_MINIPCIE | 电源 | 输出 | Mini PCIe 设备电源，3.3 V 输出，所有电源脚合计最大 3 A |
| 3 | NC | 悬空 | — | 未连接 |
| 4 | GND | 电源 | — | 电源与信号参考地 |
| 5 | NC | 悬空 | — | 未连接 |
| 6 | NC | 悬空 | — | 未连接 |
| 7 | MINIPCIE20_CLKREQN_3V3_L | 信号 | 输入 | PCIe2.0 通道参考时钟请求 |
| 8 | NC | 悬空 | — | 未连接 |
| 9 | GND | 电源 | — | 电源与信号参考地 |
| 10 | NC | 悬空 | — | 未连接 |
| 11 | PCIE20_2_REFCLKN | 差分 | 输出 | PCIe2.0 端口 2 差分时钟负端 |
| 12 | NC | 悬空 | — | 未连接 |
| 13 | PCIE20_2_REFCLKP | 差分 | 输出 | PCIe2.0 端口 2 差分时钟正端 |
| 14 | NC | 悬空 | — | 未连接 |
| 15 | GND | 电源 | — | 电源与信号参考地 |
| 16 | NC | 悬空 | — | 未连接 |
| 17 | NC | 悬空 | — | 未连接 |
| 18 | GND | 电源 | — | 电源与信号参考地 |
| 19 | NC | 悬空 | — | 未连接 |
| 20 | W_DISABLEN | 信号 | 输出 | PCIe 设备无线关闭 |
| 21 | GND | 电源 | — | 电源与信号参考地 |
| 22 | MINIPCIE20_PERSTN | 信号 | 输出 | PCIe 设备复位 |
| 23 | PCIE20_2_RXN | 差分 | 输入 | PCIe2.0 接收差分负端 |
| 24 | VCC3V3_MINIPCIE | 电源 | 输出 | Mini PCIe 设备电源，3.3 V 输出，所有电源脚合计最大 3 A |
| 25 | PCIE20_2_RXP | 差分 | 输入 | PCIe2.0 接收差分正端 |
| 26 | GND | 电源 | — | 电源与信号参考地 |
| 27 | GND | 电源 | — | 电源与信号参考地 |
| 28 | NC | 悬空 | — | 未连接 |
| 29 | GND | 电源 | — | 电源与信号参考地 |
| 30 | NC | 悬空 | — | 未连接 |
| 31 | MINIPCIE20_TX_N | 差分 | 输出 | PCIe2.0 发送差分负端 |
| 32 | NC | 悬空 | — | 未连接 |
| 33 | MINIPCIE20_TX_P | 差分 | 输出 | PCIe2.0 发送差分正端 |
| 34 | GND | 电源 | — | 电源与信号参考地 |
| 35 | GND | 电源 | — | 电源与信号参考地 |
| 36 | MINIPCIE_USB_DM | 差分 | 双向 | USB2.0 主机端口 1 数据负端 |
| 37 | GND | 电源 | — | 电源与信号参考地 |
| 38 | MINIPCIE_USB_DP | 差分 | 双向 | USB2.0 主机端口 1 数据正端 |
| 39 | VCC3V3_MINIPCIE | 电源 | 输出 | Mini PCIe 设备电源，3.3 V 输出，所有电源脚合计最大 3 A |
| 40 | GND | 电源 | — | 电源与信号参考地 |
| 41 | VCC3V3_MINIPCIE | 电源 | 输出 | Mini PCIe 设备电源，3.3 V 输出，所有电源脚合计最大 3 A |
| 42 | NC | 悬空 | — | 未连接 |
| 43 | GND | 电源 | — | 电源与信号参考地 |
| 44 | NC | 悬空 | — | 未连接 |
| 45 | NC | 悬空 | — | 未连接 |
| 46 | NC | 悬空 | — | 未连接 |
| 47 | NC | 悬空 | — | 未连接 |
| 48 | NC | 悬空 | — | 未连接 |
| 49 | NC | 悬空 | — | 未连接 |
| 50 | GND | 电源 | — | 电源与信号参考地 |
| 51 | NC | 悬空 | — | 未连接 |
| 52 | VCC3V3_MINIPCIE | 电源 | 输出 | Mini PCIe 设备电源，3.3 V 输出，所有电源脚合计最大 3 A |

模块的安装和使用，见 [Mini PCIe](./mini-pcie.md)。

## MIPI-CSI 摄像头接口 \{#mipi-csi}

![Blade 3 背面视图，引线指向左边缘的 MIPI CSI 摄像头连接器](/img/docs/blade-3-board/blade-3-mipi-csi.webp)

_图 5. Blade 3 背面的 MIPI-CSI 摄像头连接器_

| 引脚 | 信号名 | 类型 | 方向 | 说明 |
| --- | --- | --- | --- | --- |
| 1 | GND | 电源 | — | 电源与信号参考地 |
| 2 | MIPI_CSI0_RX_D0N | 差分 | 输入 | MIPI CSI0 接收差分数据通道 0负端 |
| 3 | MIPI_CSI0_RX_D0P | 差分 | 输入 | MIPI CSI0 接收差分数据通道 0正端 |
| 4 | GND | 电源 | — | 电源与信号参考地 |
| 5 | MIPI_CSI0_RX_D1N | 差分 | 输入 | MIPI CSI0 接收差分数据通道 1负端 |
| 6 | MIPI_CSI0_RX_D1P | 差分 | 输入 | MIPI CSI0 接收差分数据通道 1正端 |
| 7 | GND | 电源 | — | 电源与信号参考地 |
| 8 | MIPI_CSI0_RX_CLK0N | 差分 | 输入 | MIPI CSI0 接收差分时钟 0负端 |
| 9 | MIPI_CSI0_RX_CLK0P | 差分 | 输入 | MIPI CSI0 接收差分时钟 0正端 |
| 10 | GND | 电源 | — | 电源与信号参考地 |
| 11 | MIPI_CSI0_RX_D2N | 差分 | 输入 | MIPI CSI0 接收差分数据通道 2负端 |
| 12 | MIPI_CSI0_RX_D2P | 差分 | 输入 | MIPI CSI0 接收差分数据通道 2正端 |
| 13 | GND | 电源 | — | 电源与信号参考地 |
| 14 | MIPI_CSI0_RX_D3N | 差分 | 输入 | MIPI CSI0 接收差分数据通道 3负端 |
| 15 | MIPI_CSI0_RX_D3P | 差分 | 输入 | MIPI CSI0 接收差分数据通道 3正端 |
| 16 | GND | 电源 | — | 电源与信号参考地 |
| 17 | MIPI_CAM_PWM2 | 信号 | 输出 | 镜头 PWM2 |
| 18 | NC | 悬空 | — | 未连接 |
| 19 | VCC_3V3_S0 | 电源 | 输出 | 传感器板电源，3.3 V 输出 |
| 20 | MIPI_CAM_RESETN | 信号 | 输出 | 传感器复位 GPIO 输出 |
| 21 | NC | 悬空 | — | 未连接 |
| 22 | MIPI_CAM_PDN | 信号 | 输出 | 传感器掉电控制 GPIO 输出 |
| 23 | I2C3_SDA_M3_MIPI | 信号 | 双向 | I2C3 总线数据 |
| 24 | I2C3_SCL_M3_MIPI | 信号 | 输出 | I2C3 总线时钟 |
| 25 | GND | 电源 | — | 电源与信号参考地 |
| 26 | MIPI_CAM2_CLK_M1_3V3 | 信号 | 输出 | 摄像头主时钟输出 |
| 27 | GND | 电源 | — | 电源与信号参考地 |
| 28 | VCC_5V0 | 电源 | 输出 | 传感器板电源，5 V 输出 |
| 29 | VCC_5V0 | 电源 | 输出 | 传感器板电源，5 V 输出 |
| 30 | VCC_5V0 | 电源 | 输出 | 传感器板电源，5 V 输出 |

## U.2 连接器 \{#u2-connector}

68-pin U.2 边缘连接器，提供 PCIe 3.0 x4、SATA 3.0 和 12 V 电源输入。

| 引脚 | 信号名 | 类型 | 方向 | 说明 |
| --- | --- | --- | --- | --- |
| E1 | PCIE30_REFCLKP_SLOT | 差分 | 输出 | RC PCIe3.0 差分时钟正端 |
| E2 | PCIE30_REFCLKN_SLOT | 差分 | 输出 | RC PCIe3.0 差分时钟负端 |
| E3 | VCC_3V3_S0 | 电源 | 输出 | IO 电源 |
| E4 | PCIE30X4_CLKREQN_M1_L | 信号 | 输出 | DM PCIe3.0 通道参考时钟请求 |
| E5 | PCIE30X4_PERSTN_M1_L | 信号 | 输入 | DM PCIe3.0 通道复位 |
| E6 | PCIE30X4_CLKREQN_M3 | 信号 | 输入 | RC PCIe3.0 通道参考时钟请求 |
| E7 | PCIE30_PORT1_REFCLKP | 差分 | 输入 | DM PCIe3.0 差分时钟正端 |
| E8 | PCIE30_PORT1_REFCLKN | 差分 | 输入 | DM PCIe3.0 差分时钟负端 |
| E9 | GND | 电源 | — | 电源与信号参考地 |
| E10 | PCIE30_PORT1_TX2P | 差分 | 输出 | DM PCIe3.0 发送差分正端 |
| E11 | PCIE30_PORT1_TX2N | 差分 | 输出 | DM PCIe3.0 发送差分负端 |
| E12 | GND | 电源 | — | 电源与信号参考地 |
| E13 | PCIE30_PORT1_RX2N | 差分 | 输入 | DM PCIe3.0 接收差分负端 |
| E14 | PCIE30_PORT1_RX2P | 差分 | 输入 | DM PCIe3.0 接收差分正端 |
| E15 | GND | 电源 | — | 电源与信号参考地 |
| E16 | NC | 悬空 | — | 未连接 |
| E17 | PCIE30_PORT0_RX1P | 差分 | 输入 | RC PCIe3.0 接收差分正端 |
| E18 | PCIE30_PORT0_RX1N | 差分 | 输入 | RC PCIe3.0 接收差分负端 |
| E19 | GND | 电源 | — | 电源与信号参考地 |
| E20 | PCIE30_PORT0_TX1N | 差分 | 输出 | RC PCIe3.0 发送差分负端 |
| E21 | PCIE30_PORT0_TX1P | 差分 | 输出 | RC PCIe3.0 发送差分正端 |
| E22 | GND | 电源 | — | 电源与信号参考地 |
| E23 | I2C4_SCL_M0 | 信号 | 输出 | I2C4 总线时钟 |
| E24 | I2C4_SDA_M0 | 信号 | 双向 | I2C4 总线数据 |
| E25 | DUALPORT_EN# | 信号 | 输出 | 双端口使能 GPIO，默认低电平 |
| P1 | PCIE30X4_WAKEN_M1_L | 信号 | 输出 | DM PCIe3.0 唤醒信号，来自 RC |
| P2 | PCIE30X4_WAKEN_M3 | 信号 | 输入 | RC PCIe3.0 唤醒信号，来自 DM |
| P3 | PWRDIS | 信号 | 输出 | 设备断电控制 GPIO |
| P4 | IFDET | 信号 | 输入 | 设备接口检测 GPIO |
| P5 | GND | 电源 | — | 电源与信号参考地 |
| P6 | GND | 电源 | — | 电源与信号参考地 |
| P7 | NC | 悬空 | — | 未连接 |
| P8 | NC | 悬空 | — | 未连接 |
| P9 | NC | 悬空 | — | 未连接 |
| P10 | PRSNT# | 信号 | 输入 | 设备在位检测 GPIO |
| P11 | ACTIVITY# | 信号 | 输入 | 设备活动检测 GPIO |
| P12 | GND | 电源 | — | 电源与信号参考地 |
| P13 | U2_12V | 电源 | 输入 | Blade 3 电源，12 V 输入 |
| P14 | U2_12V | 电源 | 输入 | Blade 3 电源，12 V 输入 |
| P15 | U2_12V | 电源 | 输入 | Blade 3 电源，12 V 输入 |
| S1 | GND | 电源 | — | 电源与信号参考地 |
| S2 | SATA0_TXP | 差分 | 输出 | SATA3.0 端口 0 发送差分正端 |
| S3 | SATA0_TXN | 差分 | 输出 | SATA3.0 端口 0 发送差分负端 |
| S4 | GND | 电源 | — | 电源与信号参考地 |
| S5 | SATA0_RXN | 差分 | 输入 | SATA3.0 端口 0 接收差分负端 |
| S6 | SATA0_RXP | 差分 | 输入 | SATA3.0 端口 0 接收差分正端 |
| S7 | GND | 电源 | — | 电源与信号参考地 |
| S8 | GND | 电源 | — | 电源与信号参考地 |
| S9 | NC | 悬空 | — | 未连接 |
| S10 | NC | 悬空 | — | 未连接 |
| S11 | GND | 电源 | — | 电源与信号参考地 |
| S12 | NC | 悬空 | — | 未连接 |
| S13 | NC | 悬空 | — | 未连接 |
| S14 | GND | 电源 | — | 电源与信号参考地 |
| S15 | PCIE30X4_PERSTN_M3 | 信号 | 输出 | RC PCIe3.0 通道复位 |
| S16 | GND | 电源 | — | 电源与信号参考地 |
| S17 | PCIE30_PORT1_TX3P | 差分 | 输出 | DM PCIe3.0 发送差分正端 |
| S18 | PCIE30_PORT1_TX3N | 差分 | 输出 | DM PCIe3.0 发送差分负端 |
| S19 | GND | 电源 | — | 电源与信号参考地 |
| S20 | PCIE30_PORT1_RX3N | 差分 | 输入 | DM PCIe3.0 接收差分负端 |
| S21 | PCIE30_PORT1_RX3P | 差分 | 输入 | DM PCIe3.0 接收差分正端 |
| S22 | GND | 电源 | — | 电源与信号参考地 |
| S23 | PCIE30_PORT0_RX0P | 差分 | 输入 | RC PCIe3.0 接收差分正端 |
| S24 | PCIE30_PORT0_RX0N | 差分 | 输入 | RC PCIe3.0 接收差分负端 |
| S25 | GND | 电源 | — | 电源与信号参考地 |
| S26 | PCIE30_PORT0_TX0N | 差分 | 输出 | RC PCIe3.0 发送差分负端 |
| S27 | PCIE30_PORT0_TX0P | 差分 | 输出 | RC PCIe3.0 发送差分正端 |
| S28 | GND | 电源 | — | 电源与信号参考地 |

## 双 2.5 千兆以太网 \{#dual-25-gigabit-ethernet}

以太网符合 IEEE 802.3 标准，支持 10 Mbps、100 Mbps、1 Gbps 和 2.5 Gbps 速率自适应，支持半双工和全双工。每个网口由一颗 RTL8125BG-CG 2.5GbE 控制器驱动，通过 PCIe 连接到 RK3588。RJ45 接口上有状态和速率指示灯：

-   绿灯：已建立有效连接
-   闪烁：正在传输数据
-   黄灯：连接速率为 2500 Mbps
-   熄灭：10/100/1000 Mbps


## USB-C 接口 \{#usb-c-port}

Blade 3 有两个 USB-C 口，板上有丝印标注：

-   **USB0/ADB**，靠近 HDMI 接口：支持 USB OTG，刷机时使用这个口。
-   **USB1/PD**，靠近板子角落：支持 USB PD 2.0 供电输入，不支持 USB OTG。

两个口都支持 USB 主机模式和 DisplayPort 1.4a 输出，最高 7680 x 4320 30 Hz。USB-C 上的 DisplayPort 同时传输音频和视频。

## 显示 \{#display-support}

- **HDMI OUT**：HDMI 2.1，支持 HDCP 2.3，最高 7680 x 4320 60 Hz 或 3840 x 2160 120 Hz。
- **HDMI IN**：HDMI 2.0，支持 HDCP 2.3，可接入最高 3840 x 2160 60 Hz 的信号源。

HDMI OUT 是两个 HDMI 接口中上面那个。

## 电源输入 \{#power-input}

- **USB Power Delivery**：USB1/PD 支持 USB Power Delivery 2.0，板载 PD 控制器最高接受 20 V 3 A。
- **12 V DC**：通过 U.2 连接器输入 12 V 3 A。

适配器要求，见 [Power Supply](/blade-3/getting-started/power-supply)。

## 风扇接口 \{#fan-connector}

四针、2.54 mm 间距的 5 V 风扇接口。风扇电源可由软件关闭，过流时会自动断开。

| 引脚 | 信号名 | 类型 | 方向 | 说明 |
| --- | --- | --- | --- | --- |
| 1 | GND | 电源 | — | 电源与信号参考地 |
| 2 | VCC5V_FAN | 电源 | 输出 | 风扇电源，5 V 输出，最大 400 mA，由 GPIO3_C0 控制 |
| 3 | FAN_PWM_IN | 信号 | 输入 | 风扇转速（测速）输入，接 GPIO3_B1，板上上拉至 3.3 V |
| 4 | FAN_PWM_OUT | 信号 | 输出 | 风扇调速 PWM 输出，来自 PWM8 |

## 调试串口 \{#debug-uart}

| 引脚 | 信号名 | 类型 | 方向 | 说明 |
| --- | --- | --- | --- | --- |
| 1 | UART2_RX_M0_DEBUG | 信号 | 输入 | UART2 调试接收数据 |
| 2 | UART2_TX_M0_DEBUG | 信号 | 输出 | UART2 调试发送数据 |
| 3 | GND | 信号 | — | 电源与信号参考地 |

串口控制台的使用方法，见 [Connect to Blade 3](/blade-3/getting-started/connect#serial-console)。

## 指示灯与拨码开关 \{#led-and-dip-switch}

电源指示灯显示供电状态。

Blade 3 有一个单刀单掷（SPST）四位拨码开关，用于选择启动模式。

![Blade 3 俯视图，30-pin 排针旁的启动模式拨码开关被框出](/img/docs/blade-3-board/blade-3-boot-switch.webp)

_图 6. Blade 3 上的拨码开关_

-   第 1 位拨到 **ON**：从 eMMC 启动。
-   第 2 位拨到 **ON**：从 microSD 卡启动。
-   第 3 位拨到 **ON**：从 SPI Flash 启动。Blade 3 没有焊接 SPI Flash 芯片，所以标准板上这一位没有用。
-   第 4 位拨到 **ON**：进入 MaskROM 模式，用于刷机。见 [Flashing an OS Image](/blade-3/getting-started/install-os)。

:::note
-   同一时间只能有一位拨到 **ON**。
-   四位都不在 **ON** 时，CPU 会自动查找可用的启动介质并从中启动，顺序为 eMMC -> SD 卡 -> MaskROM 模式。
:::
