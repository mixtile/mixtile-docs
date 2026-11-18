---
sidebar_position: 1
sidebar_label: "Quick Start: Docker + Demo SDK"
format: mdx
---

# Quick Start: Docker + Demo SDK

Run all commands on **Core3588E with Mixtile OS Ubuntu 26.04**. Containers provide **RKNN Runtime, RKNN-Toolkit2, and RKNN-Toolkit-Lite2 2.5.0**, isolated from the host's RKNN Runtime and Python packages.

## 1. Set Up

Download and extract the [Docker Environment](https://downloads.mixtile.com/core3588e/file/jetson-to-core3588e/docker/docker-environment-20261105.zip) and [Demo SDK](https://downloads.mixtile.com/core3588e/file/jetson-to-core3588e/sdk/demo-sdk-20261106.tar.gz), then run setup:

```bash
demo_dir="$HOME/core3588e-demo-$(date +%Y%m%d-%H%M%S)"
download_url=https://downloads.mixtile.com
download_url=$download_url/core3588e/file/jetson-to-core3588e
docker_file=docker-environment-20261105.zip
sdk_file=demo-sdk-20261106.tar.gz
mkdir -p "$demo_dir" && cd "$demo_dir" && \
sudo apt-get update && \
sudo apt-get install -y ca-certificates curl python3 && \
curl -fL "$download_url/docker/$docker_file" -o docker-environment.zip && \
curl -fL "$download_url/sdk/$sdk_file" -o demo-sdk.tar.gz && \
python3 -m zipfile -e docker-environment.zip . && \
tar -xzf demo-sdk.tar.gz && \
cd demo-sdk && \
sha256sum -c SHA256SUMS && \
sudo ./setup.sh ../docker-environment
```

Setup verifies image checksums, loads Docker images, and checks NPU access and RKNN versions. Internet access is required to install Docker or AppArmor tools if missing; image loading works offline once host dependencies are installed. The host board support package (BSP) supplies NPU, MPP, and RGA drivers.

After setup succeeds, continue in the **same terminal**, in the `demo-sdk/` directory, for steps 2 and 3.

## 2. Run the Demos

```bash
sudo ./run-demo.sh all
```

The demos save annotated video, tracking IDs, and region events. Replace `all` with `people`, `vehicles`, or `supermarket` to run one demo. Source code is in `demo/src/`; media and rules are in `demo/assets/`.

## 3. View Results

Check the board's IP address, then start the viewer:

```bash
ip -4 -br address show scope global
./view-results.sh
```

Open `http://<Core3588E_IP>:8000/` on a computer on the same network. Use the board's Ethernet or Wi-Fi IPv4 address above. Select a run to view images, videos, and events. Each run saves results in a new directory under `demo/results/`.

Keep the terminal open; press Ctrl+C to stop the viewer. If port 8000 is in use, run `./view-results.sh 8001` and open port 8001 instead.

<details>
<summary>Optional: Run the performance benchmark</summary>

Stop the viewer first, then run the three-core benchmark from the `demo-sdk/` directory:

```bash
sudo ./benchmark/run.sh core int8 --max --encode && \
python3 -m http.server 8000 --bind 0.0.0.0 --directory results
```

Open `http://<Core3588E_IP>:8000/` and select the new `benchmark-*/` directory for `annotated.mp4`, `preview-*.jpg`, `detections.jsonl`, and `summary.json`. Omit `--encode` for detection data and previews only, or `--max` to retain the original clock policy. This pipeline differs from the tracking and event demos; see [Performance and Value](/core-3588e/application-development/jetson-migration/performance-benchmark/) for conditions.

</details>

<details>
<summary>Validation and checksums</summary>

`VALIDATION.json` lists the completed checks. Setup verifies image SHA256 checksums before loading the Docker images.

[Release Manifest](https://downloads.mixtile.com/core3588e/file/jetson-to-core3588e/manifest-5f7115b7-c20520f0.json) · [Package SHA256](https://downloads.mixtile.com/core3588e/file/jetson-to-core3588e/SHA256SUMS)

**Re-deployment verified:** Fresh AWS downloads in a new directory passed package checksum checks, setup, all three 10-second demos, and browser image/video playback. The optional 1200-frame benchmark also passed, including hardware video encoding and clock-policy restoration. Testing used the existing Core3588E BSP, without flashing a fresh OS image.

</details>
