---
sidebar_position: 7
sidebar_label: Accessories
---

# Active Cooler

:::info
内容翻译同步中，以下为英文原文。
:::

> In this document, we use Leetop A206 carrier board and Core 3588E Heatsink fan. Operations can be slightly different if you use other models of carrier boards or heatsink fans.

The carrier board of Mixtile Core 3588E (hereinafter referred to as Core 3588E) provides a fan interface, through which you can install the cooling fan dedicated for Core 3588E. Featuring dual ball bearing with four-wire PWM temperature control, this fan ensures that your Core 3588E module runs stably and smoothly even under heavy workload.

This fan can adjust its speed from 0 to 5000 RPM to match the module’s needs. Meanwhile the fan is enduring with a life expectancy of 70,000 hours.

![Core 3588E Heatsink fan](/img/docs/core-3588e-active-cooler/146f9a972e57.webp)

_Figure 1. Core 3588E Heatsink fan_

## Install the active cooler

1.  Power off the carrier board.
2.  Place the fan on the surface of Core 3588E, align their screw holes, and attach them with two screws.
3.  Connect the four-wire connector to the fan interface of the carrier board.
4.  Power on the carrier board again. You can see that the fan is running.

The fan automatically adjusts its speed based on the temperature of the Core 3588E module. When the module reaches higher temperatures, the fan will rotate at higher speeds to increase cooling. As the module’s temperature drops, the fan slows its rotation speed accordingly.

Note that if you use another fan instead of Core 3588E Heatsink fan, you need to follow the interface design, as shown below.

![Specifications of the fan wire](/img/docs/core-3588e-active-cooler/f733542d1fd8.webp)

_Figure 2. Specifications of the fan wire_
