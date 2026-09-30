---
sidebar_position: 2
# Unpublished until a tested model download is available (Step 4).
draft: true
description: Build Rockchip's RKLLM example on Blade 3 and chat with DeepSeek-R1-Distill-Qwen-1.5B on the NPU.
---

# Run DeepSeek-R1 with RKLLM

RKLLM is Rockchip's runtime for running large language models on the RK3588 NPU. This guide builds the RKLLM chat example on Blade 3 and runs DeepSeek-R1-Distill-Qwen-1.5B with it.

The work is split in two:

- **On a computer:** a model is converted to the `.rkllm` format with RKLLM-Toolkit. The toolkit runs only on x86-64 Linux, with Python 3.10, 3.11 or 3.12.
- **On Blade 3:** the RKLLM runtime loads the `.rkllm` model and runs it on the NPU. This guide covers this part.

## Before you start

- Blade 3 is running Mixtile OS (see [Flashing an OS Image](/blade-3/getting-started/install-os)) and is connected to the internet.
- You are logged in on the board, on its desktop, over [SSH](/blade-3/getting-started/connect#ssh) or on the [serial console](/blade-3/getting-started/connect#serial-console).
- At least 2.5 GB of free storage. The model used here is about 2 GB.

:::warning[Use matching versions]
A `.rkllm` model only loads in a runtime that matches the toolkit version it was converted with. This guide uses RKLLM 1.3.1, so use a model converted with RKLLM-Toolkit 1.3. A runtime 1.1 build fails to load such a model with `failed to load model`.
:::

## Step 1. Install the build tools

```bash title="Blade 3"
sudo apt update
sudo apt install -y build-essential cmake git
```

## Step 2. Get the RKLLM runtime and example

The rknn-llm repository also contains the toolkit packages and documents, which the board does not need. These commands download only the Linux runtime and the chat example from release 1.3.1:

```bash title="Blade 3"
cd ~
git clone --depth 1 --branch release-v1.3.1 --filter=blob:none --sparse https://github.com/airockchip/rknn-llm
cd rknn-llm
git sparse-checkout set rkllm-runtime/Linux examples/rkllm_api_demo
```

## Step 3. Build the example

Build the example on the board. No cross-compiler is needed:

```bash title="Blade 3"
cd ~/rknn-llm/examples/rkllm_api_demo/deploy
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build -j4
cmake --install build
```

**Expected result:** the build ends with `Built target llm_demo`, and the install step copies two files:

```text
install/demo_Linux_aarch64
├── lib
│   └── librkllmrt.so
└── llm_demo
```

`librkllmrt.so` is the RKLLM runtime. It stays in the example's directory and is not installed into the system.

## Step 4. Get a model

You need DeepSeek-R1-Distill-Qwen-1.5B as an `.rkllm` file converted for RK3588 with RKLLM-Toolkit 1.3.

:::note
A tested download for this model is still being prepared. Rockchip lists its converted models under [Download](https://github.com/airockchip/rknn-llm#download) in the rknn-llm repository. To convert the model yourself, see the RKLLM-Toolkit instructions in the same repository. Converting on a computer has not yet been tested with this guide.
:::

Put the model in your home directory on the board. If you downloaded it on a computer, copy it over the network. Replace `<board-ip>` with the board's address:

```bash title="Host PC"
scp DeepSeek-R1-Distill-Qwen-1.5B_RK3588_w8a8.rkllm mixtile@<board-ip>:
```

## Step 5. Run the model

```bash title="Blade 3"
cd ~/rknn-llm/examples/rkllm_api_demo/deploy/install/demo_Linux_aarch64
export LD_LIBRARY_PATH=./lib
taskset f0 ./llm_demo ~/DeepSeek-R1-Distill-Qwen-1.5B_RK3588_w8a8.rkllm 512 2048
```

- `512` is the most tokens the model generates for one answer, and `2048` is the context length.
- `taskset f0` runs the example on CPU cores 4 to 7, the Cortex-A76 cores.

**Expected result:** loading takes a few seconds, then the runtime reports its version and the model, and waits for your input:

```text
rkllm init start
I rkllm: rkllm-runtime version: 1.3.1, rknpu driver version: 0.9.8, platform: RK3588
I rkllm: loading rkllm model from /home/mixtile/DeepSeek-R1-Distill-Qwen-1.5B_RK3588_w8a8.rkllm
I rkllm: rkllm-toolkit version: 1.3.0, max_context_limit: 4096, npu_core_num: 3, target_platform: RK3588, model_dtype: W8A8
...
rkllm init success
```

The example then shows two sample questions in Chinese. Type `0` or `1` to ask one of them, or type your own question after `user:` and press Enter. The answer appears after `robot:`. DeepSeek-R1 first writes out its reasoning, which ends with `</think>`, and then gives the answer.

Type `exit` to quit.

To also print the load time, speed and memory use after each answer, start the example with `RKLLM_LOG_LEVEL=1` in front of `taskset`.

## Troubleshooting

| Problem | What to do |
| --- | --- |
| `error while loading shared libraries: librkllmrt.so` | Set `LD_LIBRARY_PATH` in the example directory as shown in step 5, then start the example again. |
| `failed to load model` | The model was converted with a toolkit version that does not match the runtime. Use a model converted with RKLLM-Toolkit 1.3. |
