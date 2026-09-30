---
sidebar_position: 1
description: What you need besides the Core 3588E module, how to seat it on a carrier board, and how to connect and power it on for the first time.
---

# Quick Start

This page takes you from a Core 3588E module to a system that has started up on a carrier board.

The steps use the Leetop A206 carrier board, the carrier board used throughout this documentation. On another carrier board, the ports are in different places, but the order of the steps is the same.

## What you need

Core 3588E is a module without ports of its own, so you need:

- **A carrier board** that supports the Jetson TX2 NX, for example the Leetop A206. See [Carrier Boards](/core-3588e/hardware-usage/carrier-boards).
- **A power adapter for the carrier board.** For the Leetop A206, a DC adapter of 9 V to 19 V that supplies 3 A. See [Power Supply](./power-supply.md).
- **A heatsink.** The [Core 3588E Heatsink](/core-3588e/accessories) has a fan that the carrier board controls.
- **A monitor** with HDMI or DisplayPort, and its cable.
- **A USB keyboard and mouse.**
- **An Ethernet cable** to your router, to reach the internet and to log in over SSH.

Not needed for a first start, but useful later:

- A micro-USB data cable, to [install an operating system](./install-os.md)
- A USB to TTL serial adapter, to reach the [serial console](./connect.md#serial-console) when there is no monitor

:::tip[No monitor?]
With the server edition of Mixtile OS, you can leave out the monitor, the keyboard and the mouse. Connect only the Ethernet cable and the power adapter, then log in over SSH as described in [Connect to Core 3588E](./connect.md#ssh).
:::

## Installing the operating system

Core 3588E starts the system on its eMMC. To install Mixtile OS or change to another edition, follow [Flashing an OS Image](./install-os.md) once the module is on the carrier board, then come back here to connect and power it on.

## Step 1. Seat the module on the carrier board

Do this with the carrier board unplugged from power.

1. Hold the module with its components facing up, and line up the notch in its gold edge with the key in the carrier board's SO-DIMM socket.
2. Insert the edge fully into the socket at an angle, then press the module down flat onto the carrier board.
3. Fasten the module to the carrier board with the two screws.

![Core 3588E seated in the SO-DIMM socket of the carrier board and fastened with two screws at the corners opposite the socket](/img/docs/core-3588e/core-3588e-on-carrier.webp)

_Figure 1. Core 3588E seated and fastened on the carrier board_

4. Mount the heatsink on the module, and connect its fan cable to the fan header of the carrier board. See [Accessories](/core-3588e/accessories#install-the-heatsink).

## Step 2. Connect the cables

All the cables go to the rear edge of the carrier board. Connect them in the order of Figure 2, with the power adapter last.

![Rear edge of the Leetop A206 with numbered markers: 1 on the stacked DP and HDMI connector, 2 on the four USB 3.0 ports, 3 on the Ethernet port and 4 on the DC power jack](/img/docs/core-3588e/core-3588e-a206-quick-start.webp)

_Figure 2. The connections for the first start, in order_

1. Connect the monitor to the **HDMI** port, the lower half of the stacked connector, or to the **DP** port, the upper half.
2. Connect the keyboard and the mouse to two of the **USB 3.0** ports.
3. Connect the Ethernet cable to the **Ethernet** port, and the other end to your router.
4. Connect the power adapter to the **DC power jack**, and plug the adapter in.

For every connector of the carrier board, see [Hardware Information](/core-3588e/hardware-usage/#connector-locations).

The carrier board starts Core 3588E as soon as power is connected. The power LED next to the micro-USB port starts blinking once the system is running.

![Core 3588E with its heatsink on a carrier board](/img/docs/core-3588e/core-3588e-on-carrier-heatsink.webp)

_Figure 3. Core 3588E with the heatsink, on its carrier board_

## After power-up

Once the system has started:

- **Desktop edition:** the GNOME desktop appears on the monitor, already logged in as `mixtile`.
- **Server edition:** a `mixtile-core3588e login:` prompt appears on the monitor.

On the server edition, log in as `mixtile` with the password `mixtile`. The login details are in [Mixtile OS](/core-3588e/system-usage#login-details).

To check that the system is running and on the network, open a terminal and run:

```bash title="Core 3588E"
ip -brief address
```

The Ethernet interface shows `UP` and an IPv4 address from your router. Use that address to [log in over SSH](./connect.md#ssh).

If the monitor stays blank, check that the power LED of the carrier board is blinking, then connect the [serial console](./connect.md#serial-console) to see whether the system is starting. For other carrier boards, see [Display](/core-3588e/hardware-usage/display#troubleshooting).
