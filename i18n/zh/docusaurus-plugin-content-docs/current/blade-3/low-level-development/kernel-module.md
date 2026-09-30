---
sidebar_position: 2
description: Build your own kernel module for the Mixtile OS kernel on an x86-64 Linux computer, then load it on Blade 3.
---

# Compiling and Installing a Kernel Module

:::info
内容翻译同步中，以下为英文原文。
:::

You build the module on an x86-64 Linux computer against the kernel headers from your Blade 3, then copy it to the board and load it. The build tools that come with the headers run on x86-64 Linux, not on the board itself.

The example is a minimal `hello` module that logs a line when it is loaded and when it is removed.

## Before you start

- Blade 3 is running Mixtile OS and is on your network, and you can [log in over SSH](/blade-3/getting-started/connect#ssh).
- An x86-64 computer running Ubuntu 24.04 or later.

On the computer, install the compiler for the board and the build tools:

```bash title="Host PC"
sudo apt update
sudo apt install build-essential gcc-aarch64-linux-gnu
```

## Step 1. Copy the kernel headers from the board

The headers must match the kernel the board is running. Replace `<board-ip>` with the board's address:

```bash title="Host PC"
BOARD=mixtile@<board-ip>
KVER=$(ssh $BOARD uname -r)
ssh $BOARD "tar -C /usr/src -cz linux-headers-$KVER" | tar -C ~ -xz
ls ~/linux-headers-$KVER
```

**Expected result:** `ls` lists the headers directory, including `Makefile`, `Module.symvers` and `scripts`.

## Step 2. Write the module

Create a directory for the module:

```bash title="Host PC"
mkdir ~/hello && cd ~/hello
```

Save this as `hello.c`:

```c title="hello.c"
#include <linux/module.h>
#include <linux/init.h>

static int __init hello_init(void)
{
	pr_info("Hello, world!\n");
	return 0;
}

static void __exit hello_exit(void)
{
	pr_info("Goodbye, world!\n");
}

module_init(hello_init);
module_exit(hello_exit);

MODULE_DESCRIPTION("Hello world example");
MODULE_LICENSE("GPL");
```

Save this as `Makefile`. The indented lines must start with a tab:

```makefile title="Makefile"
obj-m += hello.o

KDIR ?= $(HOME)/linux-headers-$(KVER)

all:
	$(MAKE) -C $(KDIR) M=$(CURDIR) ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- modules

clean:
	$(MAKE) -C $(KDIR) M=$(CURDIR) ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- clean
```

## Step 3. Build it

In the same shell as step 1, so that `KVER` is still set:

```bash title="Host PC"
make KVER=$KVER
modinfo -F vermagic hello.ko
```

**Expected result:** the build writes `hello.ko`, and `modinfo` prints a version that starts with the same kernel version as `$KVER`.

## Step 4. Load it on the board

1. Copy the module to the board:

   ```bash title="Host PC"
   scp hello.ko $BOARD:
   ```

2. On the board, load it and read the kernel log:

   ```bash title="Blade 3"
   sudo insmod hello.ko
   sudo dmesg | tail -n 1
   ```

   **Expected result:** the last line of the log ends with `Hello, world!`.

3. Remove it:

   ```bash title="Blade 3"
   sudo rmmod hello
   sudo dmesg | tail -n 1
   ```

   **Expected result:** the last line ends with `Goodbye, world!`.

## Load the module at every boot

```bash title="Blade 3"
sudo mkdir -p /lib/modules/$(uname -r)/extra
sudo cp hello.ko /lib/modules/$(uname -r)/extra/
sudo depmod
echo hello | sudo tee /etc/modules-load.d/hello.conf
```

After the next reboot, `lsmod | grep hello` shows the module.

:::note
A module only loads into the kernel it was built for. After you [install a newer Mixtile OS release](/blade-3/getting-started/install-os), repeat these steps with the new headers.
:::

## Troubleshooting

| Problem | What to do |
| --- | --- |
| `insmod: ERROR: could not insert module hello.ko: Invalid module format` | The module was built against headers for a different kernel. Run step 1 again, then rebuild. |
| `make` reports `No such file or directory` for the headers | `KVER` is not set in this shell. Run the first two lines of step 1 again. |
| `aarch64-linux-gnu-gcc: not found` | Install `gcc-aarch64-linux-gnu` on the computer. |
| The build stops with a `GLIBC` version error | The computer's Linux is older than Ubuntu 24.04. Build on Ubuntu 24.04 or later. |

To change the kernel itself, for example to build a driver into it, see [Building a Mixtile OS Image](./build-image.md).
