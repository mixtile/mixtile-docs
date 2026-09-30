---
sidebar_position: 1
---

# UART

:::info
内容翻译同步中，以下为英文原文。
:::

> In this document, we use Leetop A206 carrier board. Operations can be slightly different if you use other models of carrier boards.

The carrier board of Mixtile Core 3588E (hereinafter referred to as Core 3588E) provides access to several peripheral interfaces through the 40-pin expansion header, including VCC, GND, GPIO, I2C, I2S, UART, and SPI interfaces. The following figure shows the pin layout.

![40-pin expansion header of Core 3588E](/img/docs/core-3588e-uart/db03ac95bfd7.webp)

_Figure 1. 40-pin expansion header of Core 3588E_

This document describes how to establish serial communication via the UART interfaces.

For more information about pin assignment and definitions of Core 3588E, see [Core 3588E Pin Definition](/core-3588e/hardware/pinout#pin-definition).

## Preparations

- [Set up connections for Core 3588E](/core-3588e/getting-started/quick-start#set-up-connections).
- A USB to TTL convertor
- A serial communication software: for example, PuTTY for Windows, and Picocom for Mac and Ubuntu

## Steps

**Connect hardware**

Connect the USB to TTL convertor to the 40-pin header and your computer. The pin matching is as follows:

![](/img/docs/core-3588e-uart/8e1f68164296.webp)

![Pin matching for UART](/img/docs/core-3588e-uart/528d6b833982.webp)

_Figure 2. Pin matching for UART_

### On Windows

Step 1. On your computer, open **Device Manager** and find the board’s COM port.

Take note of the COM port for the device named “Ports (COM & LPT)” (such as “COM4”). You will use it in the next step.

![Core 3588E displayed in Device Manager](/img/docs/core-3588e-uart/ed88b95c354b.webp)

_Figure 3. Core 3588E displayed in Device Manager_

Step 2. Open PuTTY and configure **Connection type**, **Serial line**, and **Speed** as shown in the following figure. Then click **Open**. The screen terminal opens and it is blank by default.

![PuTTY configuration](/img/docs/core-3588e-uart/cbf95040db2d.webp)

_Figure 4. PuTTY configuration_

Step 3. On your monitor, open a terminal and run `picocom -b 9600 /dev/ttyS1`. Ensure that the terminal shows **Terminal ready**.

Step 4. On your computer, input any string. You can see the string shown on the monitor’s terminal window, which means that the RX interface of Core 3588E works properly.

Step 5. On the monitor, start a new terminal window, input `echo hello >/dev/ttyS1`. You can see **hello** on your computer, which means that the TX interface of Core 3588E works properly.

### On Mac and Ubuntu

Step 1. Connect to Core 3588E using a serial communication tool (Picocom).

(On Mac) Open a terminal, input `picocom -b 9600 /dev/tty.usb`, and press the tab key for auto completion.

(On Ubuntu) Open a terminal, input **`picocom -b 9600 /dev/ttyUSB`**, and press the tab key for auto completion.

Step 2. Press **Enter** to execute this command.

The following is an example of the command and the output on macOS. The command output is the same on Ubuntu except for the display of port (**dev/ttyUSB_X_**).

```text
picocom -b 9600 /dev/tty.usbserial-AQ00KD9O

picocom v3.1

port is        : /dev/tty.usbserial-AQ00KD9O
flowcontrol    : none
baudrate is    : 9600
parity is      : none
databits are   : 8
stopbits are   : 1
escape is      : C-a
local echo is  : no
noinit is      : no
noreset is     : no
hangup is      : no
nolock is      : no
send_cmd is    : sz -vv
receive_cmd is : rz -vv -E
imap is        :
omap is        :
emap is        : crcrlf,delbs,
logfile is     : none
initstring     : none
exit_after is  : not set
exit is        : no

Type [C-a] [C-h] to see available commands

Terminal ready
```

Step 3. On your monitor, open a terminal and run `picocom -b 9600 /dev/ttyS1`. Ensure that the terminal also shows `Terminal ready`.

Step 4. On your computer, input any string. You can see the string shown on the monitor’s terminal window, which means that the RX interface of Core 3588E works properly.

Step 5. On the monitor, start a new terminal window, input `echo hello >/dev/ttyS1`. You can see `hello` on your computer, which means that the TX interface of Core 3588E works properly.
