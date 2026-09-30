---
sidebar_position: 8
description: Keep the time on Edge 2 while it is powered off, with a coin cell and the HYM8563 real-time clock.
---

# RTC Battery

Edge 2 has an HYM8563 real-time clock on its I²C3 bus, with a coin-cell holder on the top side of the board. With a coin cell fitted, the HYM8563 keeps running while the board has no power.

![Top view of the Edge 2 board with the coin-cell holder marked on the right side](/img/docs/edge-2-board/edge-2-rtc-battery.webp)

_Figure 1. The coin-cell holder_

## Fit the Coin Cell

1. Shut down Edge 2 and disconnect the power supply.
2. Slide the coin cell into the holder with the **+** side facing up, away from the board.
3. Reconnect the power supply.

## The Clocks on the Board

Edge 2 has two real-time clocks:

| Clock | Where | Kept without power |
| --- | --- | --- |
| HYM8563 | On I2C3, at address `0x51`, with the coin-cell holder | Yes, with a coin cell fitted |
| RTC of the RK809 power-management chip | On the Core 3568 module | No |

Which clock the operating system reads at startup depends on the operating system. For the behaviour of Mixtile OS and how to read and set the HYM8563 there, see [Real-Time Clocks](/edge-2/system-usage#real-time-clocks).
