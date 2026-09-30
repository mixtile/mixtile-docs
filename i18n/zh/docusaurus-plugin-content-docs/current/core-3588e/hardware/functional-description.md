---
sidebar_position: 2
description: What each functional block of the Core 3588E module does.
---

# Functional Description

:::info
内容翻译同步中，以下为英文原文。
:::

## Microprocessor

- Quad-core ARM Cortex-A76 MPCore processor and quad-core ARM Cortex-A55 MPCore processor, both are high-performance, low-power and cached application processors
- DSU (DynamIQ Shared Unit) comprises the L3 memory system, control logic, and external interfaces to support a DynamIQ cluster
- Full implementation of the ARM architecture v8-A instruction set, ARM Neon Advanced SIMD (single instruction, multiple data) support for accelerating media and signal processing
- ARMv8 Cryptography Extensions
- TrustZone technology support
- Integrated 64KB L1 instruction cache, 64KB L1 data cache and 512KB L2 cache for each Cortex-A76
- Integrated 32KB L1 instruction cache, 32KB L1 data cache and 128KB L2 cache for each Cortex-A55
- Quad-core Cortex-A76 and Quad-core Cortex-A55 share 3MB L3 cache
- Eight separate power domains for CPU core system to support internal power switch and externally turn on/off based on different application scenarios:PD_CPU_0: 1st Cortex-A55 + Neon + FPU + L1/L2 I/D Cache
  - PD_CPU_1: 2nd Cortex-A55 + Neon + FPU + L1/L2 I/D Cache
  - PD_CPU_2: 3rd Cortex-A55 + Neon + FPU + L1/L2 I/D Cache
  - PD_CPU_3: 4th Cortex-A55 + Neon + FPU + L1/L2 I/D Cache
  - PD_CPU_4: 1st Cortex-A76 + Neon + FPU + L1/L2 I/D Cache
  - PD_CPU_5: 2nd Cortex-A76 + Neon + FPU + L1/L2 I/D Cache
  - PD_CPU_6: 3rd Cortex-A76 + Neon + FPU + L1/L2 I/D Cache
  - PD_CPU_7: 4th Cortex-A76 + Neon + FPU + L1/L2 I/D Cache
- Three isolated voltage domains to support DVFS, one for A76_0 and A76_1, one for A76_2 and A76_3, the other for DSU and Cortex-A55

## Memory organization

- Internal on-chip memory
  - BootRom
    - Support system boot from the following interfaces:
      - SPI interface
      - eMMC interface
      - SD/MMC interface
    - Support system code download by the following interface:
      - USB OTG interface
  - Share Memory in the voltage domain of VD_LOGIC
  - PMU SRAM in VD_PMU for low power application
- External off-chip memory
  - Dynamic Memory Interface
    - Compatible with JEDEC standards LPDDR4/LPDDR4X/LPDDR5
    - Support four channels, 16 bits data widths for each channel
    - Support up to 2 ranks (chip selects) for each channel
    - Totally up to 32 GB address space
    - Low power modes, such as power-down and self-refresh for SDRAM
  - eMMC interface
    - Fully compliant with JEDEC eMMC 5.1 and eMMC 5.0 specification
    - Backward compliant with eMMC 4.51 and earlier versions specification
    - Support HS400, HS200, DDR50 and legacy operating modes
    - Support three data bus widths: 1 bit, 4 bits, and 8 bits
  - SD/MMC interface
    - Compatible with SD3.0, MMC ver4.51
    - Data bus width is 4 bits
  - Flexible Serial Flash Interface
    - Support transferring data from/to serial flash device
    - Support 1 bit, 2 bits or 4 bits data bus width
    - Support 2 chips select

## System components

- MCU (microcontroller unit)
  - Three Cortex-M0 MCUs inside RK3588:
    - MCU in VD_PMU integrate 16KB Cache and 16KB TCM
    - MCU in VD_NPU integrate 16KB Cache and 64KB TCM
    - MCU in PD_CENTER integrate 32KB TCM
  - Integrated Programmable Interrupt Controller, all IRQ lines connected to GIC for CPU also connect to MCU in VD_PMU(PMU_M0) and PD_CENTER(DDR_M0)
  - Integrated Debug Controller with JTAG interface
- CRU (clock & reset unit)
  - Support total 18 PLLs to generate all clocks
  - One oscillator with 24 MHz clock input
  - Support clock gating control for individual components
  - Support global soft-reset control for whole chip, also individual soft-reset for each component
- PMU (power management unit)
  - Multiple configurable work modes to save power by different frequency or automatic clock gating control or power domain on/off control
  - Lots of wakeup sources in different modes
  - Support 10 separate voltage domains
  - Support 45 separate power domains, which can be powered up/down by software based on different application scenes
- Timer
  - Support 12 secure timers with 64 bits counter and interrupt-based operation
  - Support 18 non-secure timers with 64 bits counter and interrupt-based operation
  - Support two operation modes: free-running and user-defined count for each timer
  - Support timer work state checkable
- PWM
  - Support 16 on-chip PWMs (PWM0~PWM15) with interrupt-based operation
  - Programmable pre-scaled operation to bus clock and then further scaled
  - Embedded 32-bit timer/counter facility
  - Support capture mode
  - Support continuous mode or one-shot mode
  - Provide reference mode and output various duty-cycle waveforms
  - Optimized for IR application for PWM3, PWM7, PWM11, PWM15
- Watchdog
  - 32-bit watchdog counter
  - Counter counts down from a preset value to 0 to indicate the occurrence of a timeout
  - Watchdog timer (WDT) can perform two types of operations when timeout occurs:
    - Generate a system reset
    - First generate an interrupt. If this is not cleared by the service routine by the time a second timeout occurs, then generate a system reset
  - Totally five watchdogs for CPU and MCU
- Interrupt controller
  - Support 12 PPI interrupt sources and 480 SPI interrupt sources input from different components inside RK3588
  - Support 16 software-triggered interrupts
  - Input interrupt level is fixed, high-level sensitive for SPI and low-level sensitive for PPI
  - Support different interrupt priorities for each interrupt source, and they are always software-programmable
- DMAC
  - Micro-code programming based DMA
  - Linked list DMA function is supported to complete scatter-gather transfer
  - Support data transfer types including memory-to-memory, memory-to-peripherals, peripherals-to-memory
  - Totally three embedded DMA controllers for peripheral system
  - Features of each DMAC:
    - Support 8 channels
    - 32 hardware request from peripherals
    - 2 interrupt output
    - Support TrustZone technology and programmable secure state for each DMA channel
- Secure system
  - Embedded two cipher engines
    - Support Link List Item (LLI) DMA transfer
    - Support SHA-1, SHA-256/224, SHA-512/384, MD5, SM3 with hardware padding
    - Support HMAC of SHA-1, SHA-256, SHA-512, MD5, SM3 with hardware padding
    - Support AES-128, AES-192, AES-256 encrypt & decrypt cipher
    - Support AES ECB/CBC/OFB/CFB/CTR/CTS/XTS/CCM/GCM/CBC-MAC/CMAC mode
    - Support SM4 ECB/CBC/OFB/CFB/CTR/CTS/XTS/CCM/GCM/CBC-MAC/CMAC mode
    - Support DES & TDES cipher, with ECB/CBC/OFB/CFB mode
    - Support up to 4096 bits PKA mathematical operations for RSA/ECC/SM2
    - Support generating random numbers
  - Support keyladder to guarantee key secure
  - Support data scrambling for all DDR types
  - Support secure OTP
  - Support secure debug
  - Support secure DFT test
  - Support secure OS
  - Except CPU, the other masters in the SoC can also support security and non- security mode by software-programmable
  - Some slave components in SoC can only be addressed by security master and the other slave components can be addressed by security master or non-security master by software-programmable
  - System SRAM (share memory), part of space is addressed only in security mode
  - External DDR space can be divided into 16 parts, each part can be software-programmable to be enabled by each master
- Mailbox
  - Three mailboxes in SoC to service CPU and MCU communication
  - Support four mailbox elements per mailbox, each element includes one data word, one command word register and one flag bit that can represent one interrupt
  - Provide 32 lock registers for software to use to indicate whether mailbox is occupied
- Decompression
  - Support decompressing GZIP files
  - Support decompressing LZ4 files, including the General Structure of LZ4 Frame format and the Legacy Frame format
  - Support decompressing data in DEFLATE format
  - Support decompressing data in ZLIB format
  - Support Hash32 check in LZ4 decompression process
  - Support the limit size function of the decompressed data to prevent the memory from being maliciously destroyed during the decompression process

## Video codec

- Video decoder
  - Real-time video decoder of MPEG-1, MPEG-2, MPEG-4, H.263, H.264, H.265, VC-1, VP9, VP8, MVC, AV1
  - MMU Embedded
  - Multi-channel decoder in parallel for less resolution
  - H.264 AVC/MVC Main10 L6.0 : 8K@30fps (7680 x 4320)2
  - VP9 Profile0/2 L6.1 : 8K@60fps (7680 x 4320)
  - H.265 HEVC/MVC Main10 L6.1 : 8K@60fps (7680 x 4320)
  - AVS2 Profile0/2 L10.2.6 : 8K@60fps (7680 x 4320)
  - AV1 Main Profile 8/10bit L5.3. : 4K@60fps (3840 x 2160)
  - MPEG-2 up to MP : 1080p@60fps (1920 x 1088)
  - MPEG-1 up to MP : 1080p@60fps (1920 x 1088)
  - VC-1 up to AP level 3 : 1080p@60fps (1920 x 1088)
  - VP8 version2 : 1080p@60fps (1920 x 1088)
- Video encoder
  - Real-time H.265/H.264 video encoding
  - Support up to 8K@30fps
  - Multi-channel encoder in parallel for less resolution

## JPEG codec

- JPEG encoder
  - Baseline (DCT sequential)
  - Encoder size is from 96 x 96 to 8192 x 8192 (67 Mpixels)
  - Up to 90 million pixels per second
  - Embedded four encoder units
- JPEG decoder
  - Decoder size is from 48 x 48 to 65536 x 65536
  - Support YUV400/YUV411/YUV420/YUV422/YUV440/YUV444
  - Support up to 1080P@280fps, and 560 million pixels per second
  - Support MJPEG
  - Embedded four encoder units

## Neural process unit

- Neural network acceleration engine with processing performance up to 6 TOPS
- Include triple NPU core, and support triple core co-work, dual core co-work, and work independently
- Support integer 4, integer 8, integer 16, float 16, Bfloat 16 and tf32 operation
- Embedded 384KBx3 internal buffer
- Multi-task, multi-scenario in parallel
- Support deep learning frameworks: TensorFlow, Caffe, TFlite, PyTorch, ONNX NN, Android NN, etc.
- One isolated voltage domain to support DVFS

## Graphics engine

- 3D graphics engine
  - ARM Mali-G610 MP4
  - High performance OpenGLES 1.1, 2.0 and 3.2, OpenCL 2.2, Vulkan1.2 etc.
  - Embedded 4 shader cores with shared hierarchical tiler
  - Provide MMU and L2 Cache with 4x 256 KB size
  - The latest Valhall architecture
  - ARM Frame Buffer Compression (AFBC) 1.3
  - Support Serial Wire debug for embedded MCU
  - One isolated voltage domain to support DVFS
- 2D graphics engine
  - Source format: ARGB/RGB888/RGB565/YUV420/YUV422/BPP
  - Destination formats: ARGB/RGB888/RGB565/YUV420/YUV422
  - Max resolution: 8192 x 8192 source, 4096 x 4096 destination
  - Block transfer and transparency mode
  - Color fill with gradient fill, and pattern fill
  - Alpha blending modes including global alpha, per pixel alpha (color/alpha channel separately) and fading
  - Arbitrary non-integer scaling ratio, from 1/8 to 8
  - 0, 90, 180, 270 degree rotation, x-mirror, y-mirror & rotation operation
  - ROP2, ROP3, ROP4
  - Support 4k/64k page size MMU
- Image enhancement processor
  - Image format
    - Input data: YUV420/YUV422, semi-planar/planar, UV swap
    - Output data: YUV420/YUV422, semi-planar, UV swap, Tile mode
    - YUV down sampling conversion from 422 to 420
    - Max resolution for dynamic image up to 1920 x 1080
  - De-interlace

## Video input interface

- MIPI interface
  - Two MIPI DC (DPHY/CPHY) combo PHY
    - Support to use DPHY or CPHY
    - Each MIPI DPHY V2.0, 4 lanes, 4.5 Gbps per lane
    - Each MIPI CPHY V1.1, 3 lanes, 2.5 Gbps per lane
  - Four MIPI CSI DPHY
    - Each MIPI DPHY V1.2, 2 lanes, 2.5 Gbps per lane
    - Support to combine 2 DPHY together to one 4-lane
  - Support camera input combination
    - 2 MIPI DCPHY + 4 MIPI CSI DPHY (2 lanes), totally support 6 cameras input
    - 2 MIPI DCPHY + 1 MIPI CSI DPHY (4 lanes) + 2 MIPI CSI DPHY (2 lanes), totally support 5 cameras input
    - 2 MIPI DCPHY + 2 MIPI CSI DPHY (4 lanes), totally support 4 cameras input

| **Pin #** | **Pin name** | **Signal description** | **Direction** | **Pin type** |
| --- | --- | --- | --- | --- |
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

Table 1. CSI pin descriptions

| **Pin #** | **Pin name** | **Signal description** | **Direction** | **Pin type** |
| --- | --- | --- | --- | --- |
| 213 | CAM_I2C_SCL | Camera I2C Clock. 2.2kΩ pull-up to 3.3 V on the module. | Bidir | Open Drain – 3.3V |
| 215 | CAM_I2C_SDA | Camera I2C Data. 2.2 kΩ pull-up to 3.3V on the module. | Bidir | Open Drain – 3.3V |
| 116 | CAM0_MCLK | Camera 0 Reference Clock | Output | CMOS – 1.8V |
| 114 | CAM0_PWDN | Camera 0 Powerdown or GPIO | Output | CMOS – 1.8V |
| 122 | CAM1_MCLK | Camera 1 Reference Clock | Output | CMOS – 1.8V |
| 120 | CAM1_PWDN | Camera 1 Powerdown or GPIO | Output | CMOS – 1.8V |

Table 2. Camera control pin descriptions

- DVP interface
  - One 8/10/12/16-bit standard DVP interface, up to 150 MHz input data
  - Support BT.601/BT.656 and BT.1120 VI interface
  - Support the polarity of pixel_clk, hsync, vsync configurable
- HDMI RX interface
  - Single-port HDMI 2.0 RX PHY, 4 lanes, no sideband channels
  - Data rate support in HDMI 2.0 mode
    - 6 Gbps down to 3.4 Gbps
  - Data rate support in HDMI 1.4 mode
    - 3.4 Gbps down to 250 Mbps
  - HDMI 2.0 video formats
    - TMDS Scrambler to enable support for 2160p@60 Hz with RGB/YCbCr4:4:4 or YCbCr4:2:2
    - Supports YCbCr 4:2:0 to enable 2160p@60 Hz at lower HDMI link speeds
  - HDMI 1.4b video formats
    - All CEA-861-E video formats up to 1080p@120 Hz
    - HDMI 1.4b 4K x 2K video formats (3840 x 2160p@24 Hz/25 Hz/30 Hz and 4096 x 2160p@24 Hz)
    - HDMI 1.4b 3D video modes with up to 340 MHz (TMDS clock)
  - Support HDCP2.3 and HDCP1.4

## Image signal processor

- Video capture (VICAP)
  - Support BT601, BT656, BT1120
  - Support receiving six interfaces of MIPI CSI/DSI, up to four IDs for each interface
  - Support five CSI data formats: RAW8/10/12/14, YUV422
  - Support three modes of HDR: virtual channel mode, identification code mode, line counter mode
  - Support RAW data through to ISP0/1
- Maximum input
  - 48M: 8064 x 6048@15 dual ISP
  - 32M: 6528 x 4898@30 dual ISP
  - 16M: 4672 x 3504@30 single ISP
- 3A: include AE/Histogram, AF, AWB statistics output
- FPN: Fixed Pattern Noise removal
- BLC: Black Level Correction
- DPCC: Static/Dynamic defect pixel cluster correction
- PDAF: Phase Detection Auto Focus
- LSC: Lens shading correction
- Bayer-2DNR: Spatial Bayer-raw De-noising
- Bayer-3DNR: Temporal Bayer-raw De-noising
- CAC: Chromatic Aberration Correction
- HDR: 3-Frame Merge into High-Dynamic Range
- DRC: HDR Dynamic Range Compression, Tone mapping
- GIC: Green Imbalance Correction
- Debayer: Advanced Adaptive Demosaic with Chromatic Aberration Correction
- CCM/CSM: Color correction matrix; RGB2YUV etc
- Gamma: Gamma out correction
- Dehaze/Enhance: Automatic Dehaze and Effect enhancement
- 3DLUT: 3D-Lut Color Palette for Customer
- LDCH: Lens-distortion only in the horizontal direction
- YUV-2DNR: Spatial YUV De-noising
- Sharp: Image Sharpening and boundary filtering
- CMSK: privacy mask
- GAIN: image local gain
- Support multi-sensor reuse ISP
- FishEye Correction (FEC)
  - Input mode and data format
    - Support RASTER: YUV422SP, YUV422I, YUV420SP
  - Output mode and data format
    - RASTER: YUV422SP, YUV422I, YUV420SP
    - FBCE: YUV422SP, YUV420SP
  - Support 16 x 8, 32 x 16 two densities
  - Support up to 4 times reduction factor
  - Resolution 128 x 128~4095 x 4095
  - Y Interpolation: Bicubic; C Interpolation: Biliner

## Display interface

- HDMI TX interface
  - Support one HDMI TX
  - Support 1/2/4 lanes for each interface
  - Support all the data rates: 3, 6, 8, 10 and 12 Gbps
  - Support up to 7680 x 4320@60 Hz
  - Support RGB/YUV (up to 10 bits) format
  - Support DSC 1.2a
  - Support HDCP2.3
- DP/eDP TX interface
  - Support one DP/eDP combo interface
  - Support 1/2/4 lanes for each interface
  - Support 1.62 Gbps, 2.7 Gbps, 5.4 Gbps, and 8.1 Gbps for DP
  - Support 1.62 Gbps, 2.7 Gbps, 5.4 Gbps for eDP
  - Support up to 7680 x 4320@60 Hz for DP, 8192 x 4320@30 Hz for eDP
  - Support RGB/YUV (up to 10 bits) format for DP
  - Support RGB, YCbCr 4:4:4, YCbCr 4:2:2 and 8/10 bit per component video format for eDP
  - Support Single Stream Transport (SST) for DP
  - Support HDCP 2.3/HDCP 1.3 for DP, HDCP1.3 for eDP
- MIPI DSI interface
  - Support 2 MIPI DPHY 2.0 interfaces
  - Support 4 data lanes and 4.5 Gbps maximum data rate per lane
  - Support max resolution 4K@60 Hz
  - Support dual MIPI display: left-right mode
  - Support RGB (up to 10 bits) format
  - Support DSC 1.1/1.2a
- BT.1120 video output interface
  - Support up to 1920 x 1080@60 Hz
  - Support RGB (up to 8 bits) format
  - Up to 150 MHz data rate

| **Pin #** | **Pin name** | **Signal description** | **Direction** | **Pin type** |
| --- | --- | --- | --- | --- |
| 76 | DSI_CLK_N | DSI Clock– | Output | MIPI D-PHY |
| 78 | DSI_CLK_P | DSI Clock+ | Output | MIPI D-PHY |
| 70 | DSI_D0_N | DSI Data 0– | Output | MIPI D-PHY |
| 72 | DSI_D0_P | DSI Data 0+ | Output | MIPI D-PHY |
| 82 | DSI_D1_N | DSI Data 1– | Output | MIPI D-PHY |
| 84 | DSI_D1_P | DSI Data 1+ | Output | MIPI D-PHY |

Table 3. DSI pin descriptions

| **Pin #** | **Pin** **name** | **Signal description** | **Direction** | **Pin type** |
| --- | --- | --- | --- | --- |
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
| 94 | HDMI\_ CEC | HDMI CEC | Bidir | Open Drain – 3.3V |

Table 4. DP/eDP/HDMI pin descriptions

## Video output processor

- Video ports
  - Video Port0, max output resolution: 7680 x 4320@60 Hz
  - Video Port1, max output resolution: 4096 x 2304@60 Hz
  - Video Port2, max output resolution: 4096 x 2304@60 Hz
  - Video Port3, max output resolution: 1920 x 1080@60 Hz
- Cluster 0/1/2/3
  - Max input and output resolution 4096 x 2304
  - Support AFBCD
  - Support RGB/YUV/YUYV format
  - Support scale up/down ratio 4~1/4
  - Support rotation
- ESMART 0/1/2/3
  - Max input and output resolution 4096 x 2304
  - Support RGB/YUV/YUYV format
  - Support scale up/down ratio 8~1/8
  - Support 4 regions
  - Overlay
    - Support up to 8 layers overlay: 4 cluster/4 esmart
    - Support RGB/YUV domain overlay
- Post process
  - HDR
    - HDR10/HDR HLG
    - HDR2SDR/SDR2HDR
  - 3D-LUT/P2I/CSC/BCSH/DITHER/CABC/GAMMA/COLORBAR
- Write back
  - Format: ARGB8888/RGB888/RGB565/YUV420
  - Max resolution: 1920 x 1080

## Audio interface

- I2S0/I2S1 with 8 channels
  - Up to 8 channels TX and 8 channels RX path
  - Audio resolution from 16 bits to 32 bits
  - Sample rate up to 192 KHz
  - Provides master and slave work mode, software configurable
  - Support 3 I2S formats (normal, left-justified, right-justified)
  - Support 4 PCM formats (early, late1, late2, late3)
  - Support TDM normal, 1/2 cycle left shift, 1 cycle left shift, 2 cycle left shift, right shift mode serial audio data transfer
  - I2S, PCM and TDM mode cannot be used at the same time
- I2S2/I2S3 with 2 channels
  - Up to 2 channels for TX and 2 channels for RX path
  - Audio resolution from 16 bits to 32 bits
  - Sample rate up to 192 KHz
  - Provides master and slave work mode, software configurable
  - Support 3 I2S formats (normal, left-justified, right-justified)
  - Support 4 PCM formats (early, late1, late2, late3)
  - I2S and PCM cannot be used at the same time
- SPDIF0/SPDIF1
  - Support two 16-bit audio data store together in one 32-bit wide location
  - Support bi-phase format stereo audio data output
  - Support 16- to 31-bit audio data left or right justified in 32-bit wide sample data buffer
  - Support 16-, 20-, 24-bit audio data transfer in linear PCM mode
  - Support non-linear PCM transfer
- PDM0/PDM1
  - Up to 8 channels
  - Audio resolution from 16 bits to 24 bits
  - Sample rate up to 192 KHz
  - Support PDM master receive mode
- Digital Audio Codec
  - Support 2 channels digital DAC
  - Support I2S/PCM interface, master and slave mode
  - Support 16-bit sample resolution
  - Support three modes of mixing for every digital DAC channel
  - Support volume control
- VAD (Voice Activity Detection)
  - Support read voice data from I2S/PDM
  - Support voice amplitude detection
  - Support Multi-Mic array data storing
  - Support a level combined interrupt

| **Pin #** | **Pin name** | **Signal description** | **Direction** | **Pin type** |
| --- | --- | --- | --- | --- |
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

Table 5. I2S Audio pin descriptions

