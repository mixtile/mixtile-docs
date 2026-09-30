---
sidebar_position: 4
description: Reach an Edge 2 shell over the serial console or SSH.
---

# Connect to Edge 2

:::info
内容翻译同步中，以下为英文原文。
:::

Two ways to get a shell: the serial console works before the system is up and needs no network, SSH needs the board booted and on your network.

## Serial console

A serial console gives you Edge 2's boot messages and a shell that does not depend on the network, which makes it the tool of choice when the board does not come up as expected.

You need a USB to TTL converter and a computer running Windows, macOS or Linux.

### Wire the converter

Edge 2 exposes a three-pin debug UART connector. Transmit connects to receive in each direction:

| Converter | Edge 2 debug connector |
| --- | --- |
| GND | GND, pin 3 |
| TXD | UART2_RXD, pin 1 |
| RXD | UART2_TXD, pin 2 |

![The USB to TTL converter wired to the Edge 2 debug connector](/img/docs/serial-login-to-edge-2-kit/c30b79b28c95.webp)

_Figure 1. The USB to TTL converter wired to the Edge 2 debug connector_

For the connector's pin assignments, see [Debug](../hardware/connectors.md#debug).

### Install a terminal program

<Tabs queryString="host">
<TabItem value="windows" label="Windows">

1. Install the driver for your USB to TTL converter. The driver comes from the converter's vendor, not from Mixtile.
2. Install [PuTTY](https://www.putty.org/). Choose the installer that matches your computer, 32-bit or 64-bit.

</TabItem>
<TabItem value="macos" label="macOS">

Install [Homebrew](https://brew.sh/) if you do not have it, then install picocom:

```bash title="Host PC (macOS)"
brew install picocom
```

</TabItem>
<TabItem value="linux" label="Linux">

```bash title="Host PC (Linux)"
sudo apt update
sudo apt install picocom
```

</TabItem>
</Tabs>

### Find the serial port

<Tabs queryString="host">
<TabItem value="windows" label="Windows">

Open **Device Manager** and read the COM port under **Ports (COM & LPT)**, for example `COM4`.

![The converter listed under Ports (COM & LPT) in Device Manager](/img/common/serial-console/device-manager-com-port.webp)

</TabItem>
<TabItem value="macos" label="macOS">

The port is named after the converter, for example `/dev/tty.usbserial-0`. List the candidates with:

```bash title="Host PC (macOS)"
ls /dev/tty.usbserial-*
```

</TabItem>
<TabItem value="linux" label="Linux">

The port is usually `/dev/ttyUSB0`. List the candidates with:

```bash title="Host PC (Linux)"
ls /dev/ttyUSB*
```

</TabItem>
</Tabs>

### Open the console

Mixtile OS puts its console on **ttyS2** at **1500000** baud.

:::warning
Some USB to TTL converter chips cannot reach 1500000 baud. Check the converter's maximum baud rate before buying one.
:::

<Tabs queryString="host">
<TabItem value="windows" label="Windows">

Open PuTTY, set **Connection type** to **Serial**, **Serial line** to the COM port you found, and **Speed** to `1500000`, then click **Open**.

![PuTTY set to the serial line and 1500000 baud](/img/common/serial-console/putty-serial-settings.webp)

</TabItem>
<TabItem value="macos" label="macOS">

```bash title="Host PC (macOS)"
sudo picocom -b 1500000 /dev/tty.usbserial-0
```

</TabItem>
<TabItem value="linux" label="Linux">

```bash title="Host PC (Linux)"
sudo picocom -b 1500000 /dev/ttyUSB0
```

</TabItem>
</Tabs>

The window is blank at first. Press **Enter** to get the board's console.

To close the console, close the PuTTY window, or in picocom press **Ctrl**+**A**, then hold **Ctrl** and press **Q**.

### Serial troubleshooting

| Symptom | What to check |
| --- | --- |
| Nothing appears after connecting | Press **Enter**. The console prints nothing until it has something to say. |
| Characters are garbled | The baud rate is wrong, or the converter cannot sustain 1500000 baud. |
| The port does not appear | The converter driver is not installed, or the converter is plugged into a port that does not enumerate. Try another cable and another USB port. |
| Output appears but typing does nothing | TXD and RXD are the wrong way round. The converter's TXD goes to the board's RXD. |

![The Edge 2 console in PuTTY](/img/docs/serial-login-to-edge-2-kit/1b41a4415f71.webp)

_Figure 2. The Edge 2 console in PuTTY_

## SSH

SSH gives you a shell over the network. It needs Edge 2 booted, connected to the same network as your computer, and running an image with an SSH server.

### Find the board's IP address

Pick whichever is available to you:

- **Router**: look for the board in the DHCP client list of your router's admin page.
- **On the board**: run `ip addr` from the serial console.
- **Scan the subnet**: `nmap -sn 192.168.1.0/24`, adjusted to your subnet.

### Log in

Mixtile OS logs in as the user `mixtile` with the password `mixtile`. Change the password with `passwd` after the first login.

```bash title="Host PC"
ssh mixtile@<board-ip>
```

The shell prompt shows the hostname, which follows the board name used in the image: `mixtile-edge2`.

The first connection asks you to confirm the host key. Answer `yes` once and it is remembered.

To skip the password on later logins, copy your public key to the board:

```bash title="Host PC"
ssh-copy-id mixtile@<board-ip>
```

### SSH troubleshooting

| Symptom | What to check |
| --- | --- |
| `Connection refused` | The image has no SSH server running, or the board finished booting after you tried. Check over the serial console. |
| `No route to host` | The board is on a different subnet, or it never got an address. Check the link LED and the router's client list. |
| `Permission denied` | Wrong user name or password for that image. |
| `REMOTE HOST IDENTIFICATION HAS CHANGED` | The board was reflashed and generated a new host key. Remove the old entry with `ssh-keygen -R <board-ip>`. |
