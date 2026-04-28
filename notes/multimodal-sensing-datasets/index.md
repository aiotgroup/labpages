---
title: 多模态感知数据集
date: April 2026
summary: 根据《我们关注的多模态感知数据集【更新至2025.12】》整理 8 个数据集，并补充按任务选型的简要建议。
cover: ./assets/cover.svg
coverAlt: Cover image for multimodal sensing datasets
eyebrow: Dataset Note
bodyClass: dataset-note-page
---

# 多模态感知数据集

这份 note 根据 PDF《我们关注的多模态感知数据集【更新至2025.12】》整理，目的是把原始 slides 里的数据集名称、模态、任务和选型建议整理成更适合网页阅读的版本。

说明：

- 原始材料：<a href="./assets/multimodal-sensing-datasets-2025-12.pdf">PDF 下载</a>
- 以下内容以 PDF 中的原始表述为主，少量英文 benchmark / task 名称按原文保留。
- 个别数据集在 PDF 中的介绍跨了两页，若存在“同步模态数”和“模态总数”两种说法，这里会按 PDF 原样保留并注明。

## 总览表

| 数据集 | 主要模态 | 主要任务 | 链接 |
| --- | --- | --- | --- |
| XRF55 | WiFi、毫米波雷达、RGB、Depth、IR、RFID | 5 大类、55 种动作，HAR | [Project](https://aiotgroup.github.io/XRF55/) |
| XRF V2 | 5 个 IMUs、1 个耳机 IMU、WiFi、RGB-D-IR | 30 多个动作的动作定位，temporal action localization | [GitHub](https://github.com/aiotgroup/XRFV2) |
| MM-Fi | LiDAR、WiFi、毫米波雷达、RGB 处理后的 pose | 27 种动作，姿态估计、动作识别 | [Project](https://ntu-aiot-lab.github.io/mm-fi) |
| OctoNet | 11 种模态 | HAR、3DHPE | [Paper](https://openreview.net/forum?id=z3TftXOizf) / [Project](https://aiot-lab.github.io/OctoNet/) / [Dataset](https://huggingface.co/datasets/hku-aiot/OctoNet) |
| CUHK-X | PDF 中提到 8 种模态和 text caption；另有 7 个 synchronized modalities 的表述 | HAR、HAU、HARn，动作描述等 | [Project](https://siyang-jiang.github.io/CUHK-X/) |
| WEAR | 4 个四肢 IMUs、第一视角相机 | temporal action localization | [Project](https://mariusbock.github.io/wear/) |
| Ego4D / Ego-Exo4D | 第一、第三视角视频、IMUs | 动作描述、动作识别、姿态估计等 | [GitHub](https://github.com/facebookresearch/Ego4d) |
| SensorQA | 与 CUHK-X、XRF V2 相关的多模态输入 | 行为问答 | [GitHub](https://github.com/benjamin-reichman/SensorQA) |

## 按任务怎么选

根据 PDF 最后一页给出的总结，如果我们是按任务选验证数据集，可以先从下面这个映射开始：

- 动作分类：`XRF55`、`MM-Fi`、`OctoNet`
- 动作定位：`XRF V2`、`WEAR`
- 姿态估计：`MM-Fi`、`OctoNet`、`XRF V2`、`XRF55`
- 动作描述 / NLP 相关：`XRF V2`、`CUHK-X`、`SensorQA`
- 毫米波雷达相关：`XRF55`、`MM-Fi`、`OctoNet`、`CUHK-X`
- WiFi 相关：`XRF55`、`XRF V2`、`MM-Fi`、`OctoNet`

## 逐个看

### 1. XRF55

- 模态：WiFi、毫米波雷达、RGB、Depth、IR、RFID
- 任务：5 大类、55 种动作，HAR
- 适合什么时候看：如果你想要一个模态覆盖很广、动作类别也比较丰富的多模态 HAR 数据集，XRF55 很适合作为起点。
- 链接：[Project Website](https://aiotgroup.github.io/XRF55/)

<div class="dataset-gallery">
  <img src="./assets/xrf55-1.png" alt="XRF55 figure 1" loading="lazy" decoding="async">
  <img src="./assets/xrf55-2.png" alt="XRF55 figure 2" loading="lazy" decoding="async">
  <img src="./assets/xrf55-3.png" alt="XRF55 figure 3" loading="lazy" decoding="async">
  <img src="./assets/xrf55-4.png" alt="XRF55 figure 4" loading="lazy" decoding="async">
  <img src="./assets/xrf55-5.png" alt="XRF55 figure 5" loading="lazy" decoding="async">
</div>

### 2. XRF V2

- 模态：5 个 IMUs、1 个耳机 IMU、WiFi、RGB-D-IR
- 任务：30 多个动作的动作定位，temporal action localization
- 适合什么时候看：如果你关心动作定位，尤其想做“可穿戴 + WiFi + 视觉”的多模态时序定位任务，XRF V2 很值得重点看。
- 链接：[GitHub](https://github.com/aiotgroup/XRFV2)

<div class="dataset-gallery">
  <img src="./assets/xrfv2-1.png" alt="XRF V2 figure 1" loading="lazy" decoding="async">
  <img src="./assets/xrfv2-2.png" alt="XRF V2 figure 2" loading="lazy" decoding="async">
  <img src="./assets/xrfv2-3.png" alt="XRF V2 figure 3" loading="lazy" decoding="async">
  <img src="./assets/xrfv2-4.png" alt="XRF V2 figure 4" loading="lazy" decoding="async">
</div>

### 3. MM-Fi

- 模态：LiDAR、WiFi、毫米波雷达、RGB 处理后的 pose
- 任务：27 种动作，用于姿态估计、动作识别
- 适合什么时候看：如果你的研究同时关心无线感知和姿态估计，MM-Fi 是比较典型的桥梁型数据集。
- 链接：[Project Website](https://ntu-aiot-lab.github.io/mm-fi)

<div class="dataset-gallery">
  <img src="./assets/mmfi-1.png" alt="MM-Fi figure 1" loading="lazy" decoding="async">
  <img src="./assets/mmfi-2.png" alt="MM-Fi figure 2" loading="lazy" decoding="async">
  <img src="./assets/mmfi-3.png" alt="MM-Fi figure 3" loading="lazy" decoding="async">
  <img src="./assets/mmfi-4.png" alt="MM-Fi figure 4" loading="lazy" decoding="async">
  <img src="./assets/mmfi-5.png" alt="MM-Fi figure 5" loading="lazy" decoding="async">
</div>

### 4. OctoNet

- 模态：11 种模态
- 任务：HAR、3DHPE
- 适合什么时候看：如果你想研究更“全”的多模态设置，或者想比较不同传感器组合对 HAR / 3D human pose estimation 的影响，OctoNet 很有参考价值。
- 链接：[Paper](https://openreview.net/forum?id=z3TftXOizf)、[Project Website](https://aiot-lab.github.io/OctoNet/)、[Dataset](https://huggingface.co/datasets/hku-aiot/OctoNet)

<div class="dataset-gallery">
  <img src="./assets/octonet-1.png" alt="OctoNet figure 1" loading="lazy" decoding="async">
  <img src="./assets/octonet-2.png" alt="OctoNet figure 2" loading="lazy" decoding="async">
  <img src="./assets/octonet-3.png" alt="OctoNet figure 3" loading="lazy" decoding="async">
  <img src="./assets/octonet-4.png" alt="OctoNet figure 4" loading="lazy" decoding="async">
  <img src="./assets/octonet-5.png" alt="OctoNet figure 5" loading="lazy" decoding="async">
  <img src="./assets/octonet-6.png" alt="OctoNet figure 6" loading="lazy" decoding="async">
</div>

### 5. CUHK-X

- 模态：PDF 一处写为 `11` 种模态；另一处强调其有 `58,445` 个 samples、`30` 名 participants、`7` 个 synchronized modalities；同时又提到 `8` 种模态和 text caption 描述
- 任务：HAR、HAU、HARn 三个 benchmark，共 8 个任务；也适合动作描述等任务
- 适合什么时候看：如果你关心“感知 + 描述 + benchmark 设计”这类更综合的问题，CUHK-X 是这份 PDF 里信息量很大的一项。
- 备注：这里保留 PDF 原始表述，因为不同页面对模态数量的描述略有差异。
- 链接：[Project Website](https://siyang-jiang.github.io/CUHK-X/)

<div class="dataset-gallery">
  <img src="./assets/cuhkx-1.png" alt="CUHK-X figure 1" loading="lazy" decoding="async">
  <img src="./assets/cuhkx-2.png" alt="CUHK-X figure 2" loading="lazy" decoding="async">
  <img src="./assets/cuhkx-3.png" alt="CUHK-X figure 3" loading="lazy" decoding="async">
  <img src="./assets/cuhkx-4.png" alt="CUHK-X figure 4" loading="lazy" decoding="async">
  <img src="./assets/cuhkx-5.png" alt="CUHK-X figure 5" loading="lazy" decoding="async">
  <img src="./assets/cuhkx-6.png" alt="CUHK-X figure 6" loading="lazy" decoding="async">
</div>

### 6. WEAR

- 模态：4 个四肢 IMUs（左手腕、右手腕、左脚踝、右脚踝）+ 第一视角相机
- 任务：temporal action localization
- 数据特点：
    - 纯户外环境
    - 18 种不同的户外健身活动
    - 3 大类活动：慢跑、拉伸、力量
    - 惯性部分使用 4 个 Bangle.js 开源智能手表，主要用 3D 加速度计
    - 视觉部分使用头戴式 GoPro，相机向下倾斜 45 度
- 适合什么时候看：如果你想做第一视角 + 四肢 IMU 的动作定位，而且希望场景是更真实的户外运动环境，WEAR 很有特色。
- 链接：[Project Website](https://mariusbock.github.io/wear/)

<div class="dataset-gallery">
  <img src="./assets/wear-1.png" alt="WEAR figure 1" loading="lazy" decoding="async">
  <img src="./assets/wear-2.png" alt="WEAR figure 2" loading="lazy" decoding="async">
  <img src="./assets/wear-3.png" alt="WEAR figure 3" loading="lazy" decoding="async">
  <img src="./assets/wear-4.png" alt="WEAR figure 4" loading="lazy" decoding="async">
  <img src="./assets/wear-5.png" alt="WEAR figure 5" loading="lazy" decoding="async">
</div>

### 7. Ego4D / Ego-Exo4D

- 模态：第一、第三视角视频、IMUs
- 任务：动作描述、动作识别、姿态估计等基础任务
- PDF 中的提醒：
    - Ego4D、EPIC-Kitchens、Ego-Exo4D 都属于已有的多模态第一视角数据集
    - 虽然它们包含 IMU 数据，但这些 IMU 往往内置在头戴式相机中
    - 由于 IMU 和摄像头都在头部，信息高度相关，能提供的互补性有限
- 适合什么时候看：如果你主要做 egocentric understanding，这是绕不开的一类基准；但如果你强调“视觉之外的互补感知”，就要注意 PDF 里提到的模态冗余问题。
- 链接：[GitHub](https://github.com/facebookresearch/Ego4d)

<div class="dataset-gallery">
  <img src="./assets/ego4d-1.png" alt="Ego4D figure 1" loading="lazy" decoding="async">
  <img src="./assets/ego4d-2.png" alt="Ego4D figure 2" loading="lazy" decoding="async">
  <img src="./assets/ego4d-3.png" alt="Ego4D figure 3" loading="lazy" decoding="async">
  <img src="./assets/ego4d-4.png" alt="Ego4D figure 4" loading="lazy" decoding="async">
</div>

### 8. SensorQA

- 任务：行为问答，与 `CUHK-X` 和 `XRF V2` 相关
- 适合什么时候看：如果你希望把多模态感知进一步推进到问答、语言理解或者更接近 agent / reasoning 的场景，SensorQA 是这份 PDF 里最偏多模态 QA 的条目。
- 链接：[GitHub](https://github.com/benjamin-reichman/SensorQA)

<div class="dataset-gallery">
  <img src="./assets/sensorqa-1.png" alt="SensorQA figure 1" loading="lazy" decoding="async">
  <img src="./assets/sensorqa-2.png" alt="SensorQA figure 2" loading="lazy" decoding="async">
  <img src="./assets/sensorqa-3.png" alt="SensorQA figure 3" loading="lazy" decoding="async">
</div>

## 我会怎么用这份清单

- 刚开始做多模态 HAR：先看 `XRF55`、`MM-Fi`
- 重点做动作定位：先看 `XRF V2`、`WEAR`
- 重点做姿态估计：先看 `MM-Fi`、`OctoNet`
- 想把任务延伸到 caption / QA：优先看 `CUHK-X`、`SensorQA`
- 关心无线模态：优先筛 `XRF55`、`XRF V2`、`MM-Fi`、`OctoNet`

> 如果后面要继续扩展，这个 note 很适合再补两列：一列写“数据规模 / 参与人数 / 环境”，一列写“适合当训练集还是验证集”。
