---
sidebar_position: 7
description: The MIPI CSI camera inputs of Core 3588E, the two camera connectors of the Leetop A206, and how to connect a camera module.
---

# MIPI CSI

Core 3588E has five MIPI CSI-2 camera inputs on its edge connector:

| Input | Lanes | Can combine to |
| --- | --- | --- |
| CSI0, CSI1 | Two lanes each | One four-lane input |
| CSI2, CSI3 | Two lanes each | One four-lane input |
| CSI4 | Four lanes | — |

Each camera also needs the camera I²C bus, `CAM_I2C`, and a clock and power-down signal: `CAM0_MCLK` and `CAM0_PWDN` for the first camera, `CAM1_MCLK` and `CAM1_PWDN` for the second. The pins of all camera signals are in [260-pin Connector](./connector-pinout.md#camera).

:::note
The current Mixtile OS image does not set up a camera by default.
:::

## Camera connectors on the Leetop A206

The Leetop A206 has two 15-pin camera connectors with a 1 mm pitch, next to the SO-DIMM socket. They take two-lane camera modules with a 15-pin ribbon cable, such as modules with the Sony IMX219 sensor.

| Connector | Module input |
| --- | --- |
| CAM0 | CSI0 |
| CAM1 | CSI2 |

![Top side of the Leetop A206 with marker 6 on the two camera connectors along the left edge: CAM1 above, CAM0 below](/img/docs/core-3588e/core-3588e-mipi-csi-location.webp)

_Figure 1. The camera connectors on the Leetop A206: CAM1 above, CAM0 below_

## Connect a camera module

Connect the camera with the carrier board powered off.

1. Gently lift the latch of the connector.

   ![A camera connector with its latch lifted](/img/docs/mipi-csi/6ad0bde1a61d.webp)

2. Insert the ribbon cable with its contacts facing the contacts in the connector.

   ![The ribbon cable inserted into the connector](/img/docs/mipi-csi/d49a96420fbf.webp)

3. Push the latch back into place, pressing evenly at both ends. Do not use excessive force.

![A camera module connected to a camera connector of the Leetop A206 with a ribbon cable](/img/docs/mipi-csi/a18450f72dfa.webp)

_Figure 2. A camera module connected to the carrier board_
