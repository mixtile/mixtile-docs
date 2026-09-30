---
sidebar_position: 5
description: The Blade 3 fan connector and its pin assignments.
---

# Fan

Blade 3 has a four-pin connector for a 5 V cooling fan, at the edge of the board next to the Ethernet ports.

## Specifications

- Four-pin, 2.54 mm pitch
- 5 V supply, up to 400 mA
- The supply can be switched off by software, and shuts off automatically on overcurrent
- PWM speed control output and tachometer input

Mixtile OS adjusts the fan speed automatically according to the chip temperature.

## Pin Assignments

| Pin# | PinName | PinType | Input/Output | Signal Description |
| --- | --- | --- | --- | --- |
| 1 | GND | Power | NA | Power and signal reference ground |
| 2 | VCC5V_FAN | Power | Output | Power supply for FAN, 5 V output MAX 400 mA. Controlled by GPIO3_C0 |
| 3 | FAN_PWM_IN | signal | Input | Fan speed (tachometer) input on GPIO3_B1, pulled up to 3.3 V on the board |
| 4 | FAN_PWM_OUT | signal | Output | Fan speed control PWM output, from PWM8 |
