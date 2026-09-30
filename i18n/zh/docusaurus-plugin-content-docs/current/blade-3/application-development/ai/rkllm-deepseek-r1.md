---
sidebar_position: 4
description: Run DeepSeek-R1-Distill-Qwen-1.5B on the RK3588 NPU with RKLLM.
---

# Running DeepSeek-R1-Distill-Qwen-1.5B with RKLLM

:::info
内容翻译同步中，以下为英文原文。
:::

## 1\. Requirement

- Host Machine:
    X86 computer, Ubuntu 22.04 or above
    rkllm-toolkit==1.1.4
    python==3.8 or python==3.10
- Mixtile Blade 3 Board:
    Ubuntu 22.04 or above
    rkllm-runtime==1.1.4
    python==3.8 or python==3.10

Download RKLLM Main from Github to the Ubuntu computer via below link:

[https://github.com/airockchip/rknn-llm?tab=readme-ov-file](https://github.com/airockchip/rknn-llm?tab=readme-ov-file)

Download cross compiler to the Ubuntu computer:

[gcc-arm-10.2-2020.11-x86_64-aarch64-none-linux-gnu.tar.xz](https://developer.arm.com/-/media/Files/downloads/gnu-a/10.2-2020.11/binrel/gcc-arm-10.2-2020.11-x86_64-aarch64-none-linux-gnu.tar.xz?revision=972019b5-912f-4ae6-864a-f61f570e2e7e&rev=972019b5912f4ae6864af61f570e2e7e&hash=90B272942CAC63CBE2787E5F43E7B2C6D0AB20D6)

Download the **converted rkllm model** from [rkllm_model_zoo](https://console.box.lenovo.com/l/l0tXb8), fetch code: rkllm

Under the directory of examples/DeepSeek-R1-Distill-Qwen-1.5B_Demo/deploy, not only does it contain sample code for invoking the RKLLM model inference, but also includes compilation scripts build-android.sh and build-linux.sh. This section will provide a brief explanation of how to use the sample code, taking compiling executable files for Linux systems as an example using the build-linux.sh script:

Firstly, users need to prepare cross-compilation tools, noting that the recommended version of the compilation tools is 10.2 or above. Subsequently, before the compilation process, users should replace the path to the cross-compilation tools in build-linux.sh themselves:

`# Set the path of the cross-compiler GCC_COMPILER_PATH=~/gcc-arm-10.2-2020.11-x86_64-aarch64-none-linux-gnu/bin/aarch64-none-linux-gnu`

Users can directly compile the example code by running the `deploy/build-linux.sh` or `deploy/build-android.sh` script (replacing the cross-compiler path with the actual path). This will generate an `install/demo_Linux_aarch64` folder in the `deploy` directory, containing the executables `llm_demo`, and the `lib` folder.

```bash
cd deploy
# for linux
./build-linux.sh
# push install dir to device
adb push install/demo_Linux_aarch64 /data
# push model file to device
adb push DeepSeek-R1-Distill-Qwen-1.5B.rkllm /data/demo_Linux_aarch64
```

If you don’t want to compile the demo by yourself, you can just download it via the below link:

[https://downloads.mixtile.com/blade3/file/install.tar.gz](https://downloads.mixtile.com/blade3/file/install.tar.gz)

## 2\. Run Demo on Mixtile Blade 3

Enter the `/data/demo_Linux_aarch64` directory on the Mixtile Blade 3 board and run the example using the following code

```bash
adb shell
cd /data/demo_Linux_aarch64
# export lib path
export LD_LIBRARY_PATH=./lib
taskset f0 ./llm_demo /path/to/your/rkllm/model 2048 4096

# Running result
rkllm init start
rkllm init success

**********************可输入以下问题对应序号获取回答/或自定义输入********************

[0] 现有一笼子，里面有鸡和兔子若干只，数一数，共有头14个，腿38条，求鸡和兔子各有多少只？
[1] 有28位小朋友排成一行,从左边开始数第10位是学豆,从右边开始数他是第几位?

*************************************************************************

user:
```

Inference Performance of DeepSeek-R1-Distill-Qwen-1.5B_FP16_RK3588 RKLLM:

![](/img/docs/mixtile-blade-3-rk3588-deepseek-r1-distill-qwen-1-5b-demo/fa95382cce8c.webp)

Inference Performance of DeepSeek-R1-Distill-Qwen-7B_W8A8_RK3588 RKLLM:

![](/img/docs/mixtile-blade-3-rk3588-deepseek-r1-distill-qwen-1-5b-demo/8bc73d6361d4.webp)

Demo Video:
