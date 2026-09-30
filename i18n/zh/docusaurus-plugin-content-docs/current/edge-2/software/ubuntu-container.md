---
sidebar_position: 4

---

# Installing Ubuntu in a Container

:::info
内容翻译同步中，以下为英文原文。
:::

## Installing Software

:::note
Ubuntu on container is installed in Android system of Edge 2 by default. If you compile the Android system from SDK and your system don’t include the Ubuntu on container, you could follow up the below steps to install Ubuntu and container manually.
:::

Since the Mixtile Edge2 Android system is an open source operating system, it is always seeking for a way to make it easier to install new apps and software. We’ll use the Ubuntu system installation on the Android-based Mixtile Edge 2 as an example. The following describes the step-by-step method of installing Ubuntu on Edge 2.

**Step 1: Preparing the environment**

- Download the [**Ubuntu Image**](https://downloads.mixtile.com/edge2/arm64v8-ubuntu-ssh.zip) here.
- The user may need to set up a computer that runs Ubuntu or any other alternate Linux system.
- If required, you may alter the system’s DNS by editing the /etc/resolv.conf file.
- The Ubuntu image used in Android is the official version and it only contains SSH tools.

Optional: If you want additional tools, you must manually install them. The following is an example of vim installation:

```bash
sudo apt update
sudo apt install vim -y
```

**Step 2: Login to Android system**

- Use the following command to install the adb tool on your computer:

```bash
sudo apt install android-tools-adb
```

- Power on the Edge 2 board via DC port input, and connect the USB-C port of the board to USB-A port of the computer via USB cable.
- Log in to the Android system on your computer using the following command:

```bash
adb shell
```

**Step 3: Installing Ubuntu image on Android**

- Execute the following command on your computer to copy the Ubuntu image to the Android system:

```bash
adb push arm64v8-ubuntu-ssh.zip /sdcard
```

:::note
You need to input the correct path of the Ubuntu image where it is placed.
:::

- Execute the following command in **Android system (via adb tool)** to install the Ubuntu image to the Android system folder:

`cd /sdcard`

`su`

`naos_cli install arm64v8-ubuntu-ssh.zip`

- Boot the installed Ubuntu system by executing the following command in **Android system (via adb tools)**:

```text
naos_cli start com.hubware.ubuntu
naos_cli list
```

If you can see the information in the screenshot below, the Ubuntu system in Android is running successfully.

![run_successfully](/img/docs/installing-ubuntu-on-container/0704371a716a.webp)

**Step 4: Test the SSH login**

- Check the IP address of Edge 2 board by executing the following command in **Android system (via adb tool)**:

```bash
ifconfig eth0
```

- Log in to Ubuntu running on Android Using SSH on your computer

`ssh root@x.x.x.x`

:::note
**x.x.x.x** represents the IP address of the Edge 2 board, and the login password is **root**.
:::

If the SSH login is fail, you **have to restart** the container and try the SSH login again.
