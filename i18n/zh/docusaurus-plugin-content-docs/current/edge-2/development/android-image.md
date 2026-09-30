---
sidebar_position: 2

---

# Compiling an Android 11 Image

:::info
内容翻译同步中，以下为英文原文。
:::

Google suggests using Ubuntu, the distribution version of Linux, to compile Android firmware. To compile Android firmware, you need to build a suitable environment on Ubuntu PC as required.

## Ready to Compile

Compiling Android requires high machine configuration:

- 64-bit CPU _(Open System Setting –> About –> xx-bit system to check this)_
- 16GB physical memory + swap memory _(Open System Setting –> About –> xx memory to check this)_
- 250GB of free disk space _(Open terminal –> type “df -h” command to check this)_ The official recommendation is the Ubuntu 18.04 operating system. _(Open System Setting –> About –> System Version to check this)_ The initialization of the compilation environment can refer to [http://source.android.com/source/initializing.html](http://source.android.com/source/initializing.html) .

## Download Source Code

Download the **Edge 2 Android SDK** compressed package, then decompress it and generate repo-edge2 directory, it is recommended to use the download tool of http (such as freedownloadmanager) to download **Edge 2 Android SDK** compressed package. Note: Customers who have purchased the Mixte Edge 2 will receive an email with a link to download the **Edge 2 Android SDK** compressed package, please check the email. If not received, you could require **Edge 2 Android SDK** from [info@mixtile.com](mailto:info@mixtile.com) After preparing **Edge 2 Android SDK** packages, please perform command below:

```bash
tar -xzvf mixtile-edge2_android11_sdk.tar.gz
```

Clone the kernel repository (If there is error, please run it again)

```bash
cd repo-edge2
git clone https://github.com/mixtile/linux.git -b  mixtile/edge2/android11/kernel4.19/pad kernel
```

## Build Compiler Environment

In order to get rid of other effects of host environment, it is recommended using docker

### Installing Docker on Ubuntu

#### Remove old docker if exist

```bash
sudo apt-get remove docker docker-engine docker.io containerd runc
```

#### Install docker

```bash
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install docker-ce
```

#### Test docker

```bash
sudo docker run hello-world
```

Below is the result after running above command:

```text
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
2db29710123e: Pull complete
Digest: sha256:bfea6278a0a267fad2634554f4f0c6f31981eea41c553fdf5a83e95a41d40c38
Status: Downloaded newer image for hello-world:latest
Hello from Docker!
This message shows that your installation appears to be working correctly.
To generate this message, Docker took the following steps:
1. The Docker client contacted the Docker daemon.
2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
  (amd64)
3. The Docker daemon created a new container from that image which runs the
  executable that produces the output you are currently reading.
4. The Docker daemon streamed that output to the Docker client, which sent it
  to your terminal.
To try something more ambitious, you can run an Ubuntu container with:
$ docker run -it ubuntu bash
Share images, automate workflows, and more with a free Docker ID:
https://hub.docker.com/
For more examples and ideas, visit:
https://docs.docker.com/get-started/
```

## Download Dockerfile

It is recommended to download the correct Dockerfile by the following URL. If necessary, you can refer to and modify the Dockerfile to meet your requirements. Please download here the [**Dockerfile.zip**](https://www.mixtile.com/app/uploads/2022/04/Dockerfile.zip)

## Generate docker image

After download correct dockerfile, follow the below steps.

1.  Unzip the Dockerfile.zip which you downloaded just now.
2.  Enter the Dockerfile folder which you just unzipped, change the file name from “Dockerfile.txt” to “Dockerfile”
3.  Please perform the following operations in the same directory as “Dockerfile”

```bash
sudo docker build -t edge2_build_env .
```

If generating is successful, the following information will be printed to the terminal and it’s the last sentence:

```text
Successfully tagged edge2_build_env:latest
```

## Boot Compile Environment

### Create scrpit

```bash
touch edge2-build.sh
chmod +x edge2-build.sh
```

(edge2-build.sh could be created in any folder)

the content of this script can be referred to as follows, you can copy the following content into the script

```bash
#!/bin/bash
export ANDROID_BUILD_TOP=/home/userx/xxx/repo-edge2
sudo docker run -it --rm -v $ANDROID_BUILD_TOP:/build edge2_build_env:latest
```

note:

```text
ANDROID_BUILD_TOP: absolute path of local source code
/build: absolute path of source code in docker environment
edge2_build_env:latest: docker image for build aosp
```

### Boot script

```bash
./edge2-build.sh
```

The message of terminal after perform script

```text
root@c9fa6274dd9f:/#
root@c9fa6274dd9f:/# cd build/
root@c9fa6274dd9f:/build# ls -l
total 172
lrwxrwxrwx 1 1000 1000 19 Dec 7 08:14 Android.bp -> build/soong/root.bp
-r--r--r-- 1 1000 1000 92 Dec 7 08:14 Makefile
drwxr-xr-x 4 1000 1000 4096 Dec 7 08:14 RKDocs
drwxr-xr-x 5 1000 1000 4096 Dec 7 08:14 RKTools
drwxr-xr-x 35 1000 1000 4096 Dec 7 08:14 art
drwxr-xr-x 15 1000 1000 4096 Dec 7 08:14 bionic
drwxr-xr-x 3 1000 1000 4096 Dec 7 08:14 bootable
lrwxrwxrwx 1 1000 1000 26 Dec 7 08:14 bootstrap.bash -> build/soong/bootstrap.bash
drwxr-xr-x 5 1000 1000 4096 Dec 7 08:14 build
lrwxrwxrwx 1 1000 1000 46 Dec 7 08:15 build.sh -> device/rockchip/common/build/rockchip/build.sh
drwxr-xr-x 3 1000 1000 4096 Dec 7 08:14 compatibility
drwxr-xr-x 14 1000 1000 4096 Dec 7 08:14 cts
drwxr-xr-x 8 1000 1000 4096 Dec 7 08:15 dalvik
drwxr-xr-x 5 1000 1000 4096 Dec 7 08:15 developers
drwxr-xr-x 21 1000 1000 4096 Dec 7 08:15 development
drwxr-xr-x 8 1000 1000 4096 Dec 7 08:15 device
drwxr-xr-x 322 1000 1000 12288 Dec 7 08:17 external
drwxr-xr-x 16 1000 1000 4096 Dec 7 08:25 frameworks
drwxr-xr-x 13 1000 1000 4096 Dec 7 08:18 hardware
-r--r--r-- 1 1000 1000 162 Dec 7 08:15 javaenv.sh
drwxr-xr-x 20 1000 1000 4096 Dec 7 08:18 libcore
drwxr-xr-x 8 1000 1000 4096 Dec 7 08:18 libnativehelper
drwxr-xr-x 11 1000 1000 4096 Dec 7 08:18 mkcombinedroot
-r-xr-xr-x 1 1000 1000 9093 Dec 7 08:15 mkimage.sh
-rwxrwxr-x 1 1000 1000 10503 Feb 18 08:55 mkimage_ab.sh
drwxr-xr-x 9 1000 1000 4096 Dec 7 08:19 packages
drwxr-xr-x 6 1000 1000 4096 Dec 7 08:19 pdk
drwxr-xr-x 10 1000 1000 4096 Dec 7 08:19 platform_testing
drwxr-xr-x 33 1000 1000 4096 Dec 7 08:25 prebuilts
-r-xr-xr-x 1 1000 1000 519 Dec 7 08:25 restore_patches.sh
drwxr-xr-x 9 1000 1000 4096 Mar 29 06:57 rkbin
drwxr-xr-x 5 1000 1000 4096 Dec 7 08:25 rkst
drwxr-xr-x 24 1000 1000 4096 Dec 7 08:25 sdk
drwxr-xr-x 44 1000 1000 4096 Jan 19 06:56 system
drwxr-xr-x 10 1000 1000 4096 Dec 7 08:25 test
drwxr-xr-x 4 1000 1000 4096 Dec 7 08:25 toolchain
drwxr-xr-x 23 1000 1000 4096 Dec 7 08:26 tools
drwxr-xr-x 29 1000 1000 4096 Mar 29 07:02 u-boot
drwxr-xr-x 7 1000 1000 4096 Dec 14 03:20 vendor
```

## Compile

### Compile unified firmware

After booting script, the sdk is expanded in /build directory which on docker environment.

:::note
When running “lunch mixtile_edge2-userdebug” command as below, it will take over 5 minutes, please keep patient and wait it to finish.
:::

```bash
source build/envsetup.sh
lunch mixtile_edge2-userdebug
./build.sh -CKAUBuo
```

sdk compilation requires a long wait,after successful compilation, serval image files will be generated in directory rockdev/Image-mixtile_edge2

The image files will be named as image-release-ota-unknown.zip, image-release-unknown.img

```bash
cd rockdev/Image-mixtile_edge2
ls -l
```

```text
baseparameter.img
boot-debug.img
boot.img
config.cfg
dtbo.img
image-release-mixtile_edge2-v1.0.7.img
image-release-ota-mixtile_edge2-v1.0.7.zip
MiniLoaderAll.bin
misc.img
parameter.txt
pcba_small_misc.img
pcba_whole_misc.img
resource.img
super.img
uboot.img
vbmeta.img
```

#### Image description

image-release-mixtile_edge2-v1.0.7.img is a unified firmware,this firmware needs to be upgraded by RKDevTool or making sd card that by Rockchip Create Upgrade Disk Tool,after upgrading this firmware, all user data will be lost,The field description is as follows:

```text
image-release-: Fixed field, no meaning
mixtile_edge2: product name
v1.0.7: firmware version
```

image-release-ota-mixtile_edge2-v1.0.7.zip is a local update package,after upgrading this firmware, all user data will not be lost, this way is too simple,please refer to local upgrade doc.the field description of this firmware is the same as image-release-mixtile_edge2-v1.0.7.img

### Compile u-boot

After u-boot source code is compiled, uboot.img will be packaged and generated. There are two ways to compile u-boot separately. ● Method 1 Enter the u-boot source directory to compile u-boot.

```bash
./make.sh mixtile-edge2
```

● Method 2 Enter the sdk source directory to compile u-boot.

```bash
source build/envsetup.sh
lunch mixtile_edge2-userdebug
./build.sh -U
```

After the compilation is complete, enter the source directory of u-boot to find the uboot.img. uboot.img can be burned into the Edge 2 independently by burning tool. Please refer to [Installing an Operating System on Mixtile Edge 2](/edge-2/getting-started/install-os) for more details.

### Compile kernel

Kernel source code is compiled to generate kenrel.img and resource.img, which are finally compiled and packaged as boot.img by Android.

```bash
source build/envsetup.sh
lunch mixtile_edge2-userdebug
./build.sh -CKA
```

After the compilation is complete, enter the out/target/product/mixtile-edge2 directory, and you can find boot.img, which can be burned to the Edge 2 motherboard with the burning tool separately. For more details, please refer to [Installing an Operating System on Mixtile Edge 2](/edge-2/getting-started/install-os).

### Compile Android

After the Android source code is compiled, super.img is finally generated.

```bash
source build/envsetup.sh
lunch mixtile_edge2-userdebug
./build.sh -A
```

After the compilation is complete, super.img can be found in the out/target/product/mixtile-edge2 directory. It can be burned to the Edge 2 motherboard separately with the burning tool. For more details, please refer to [Installing an Operating System on Mixtile Edge 2](/edge-2/getting-started/install-os).
