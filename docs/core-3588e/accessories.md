---
sidebar_position: 8
sidebar_label: Accessories
description: The Core 3588E Heatsink, its fan, and how to install it.
---

# Accessories

## Core 3588E Heatsink

The Core 3588E Heatsink is an aluminium heatsink with a fan, made to mount directly on the module. The fan is a four-wire PWM fan: the carrier board powers it, and Mixtile OS sets its speed from the SoC temperature.

![Core 3588E Heatsink mounted on the module, with the fan and its four-wire cable](/img/docs/core-3588e/core-3588e-heatsink-fan.webp)

_Figure 1. Core 3588E Heatsink on the module_

### Technical specifications

| Item | Specification |
| --- | --- |
| Fan | 5 V, dual ball bearing, four-wire PWM |
| Fan speed | 0 to 5000 RPM, ±10 % |
| Fan life expectancy | 70,000 hours |
| Size (L x W x H) | 73 x 40 x 10 mm |
| Weight | 32 g |
| Cable | 80 mm, with a four-pin 1.25 mm pitch connector |

### Install the heatsink

1. Disconnect the power adapter from the carrier board.
2. Place the heatsink on the module, with the thermal pad between them, and line up its screw holes with the two nuts on the module.
3. Fasten the heatsink with the two screws.
4. Connect the fan cable to the fan header of the carrier board.
5. Connect the power adapter.

![Core 3588E with the heatsink installed, on a carrier board, with the fan cable connected to the carrier board](/img/docs/core-3588e/core-3588e-on-carrier-heatsink.webp)

_Figure 2. The heatsink installed, with its fan connected to the carrier board_

Core 3588E modules were made in two versions, which differ in the height of the nuts that hold the heatsink: version 1.0 has 3 mm gold-coloured nuts, and version 2.0 has 2.2 mm silver-coloured nuts. The heatsink comes with a thermal pad for each version. Use the one that matches your module.

### Fan speed

The fan runs slowly while the SoC is cool, and speeds up in steps as the SoC temperature passes 40, 45, 50 and 55 °C. No setup is needed.

To check the SoC temperature:

```bash title="Core 3588E"
cat /sys/class/thermal/thermal_zone0/temp
```

The value is in thousandths of a degree Celsius, for example `55461` for 55.5 °C.

### Using another fan

Another fan works if it matches the connector and wiring of the Core 3588E Heatsink fan:

![Drawing of the fan, with its 80 mm cable and the wire order of its four-pin connector: PWM (blue), FG (yellow), + (red), − (black)](/img/docs/core-3588e-active-cooler/f733542d1fd8.webp)

_Figure 3. Fan wiring of the Core 3588E Heatsink_
