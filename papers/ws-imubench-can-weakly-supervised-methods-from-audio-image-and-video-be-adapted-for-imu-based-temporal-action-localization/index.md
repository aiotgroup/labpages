---
title: WS-IMUBench: Can Weakly Supervised Methods from Audio, Image, and Video Be Adapted for IMU-based Temporal Action Localization?
authors: Pei Li, Jiaxi Yin, Lei Ouyang, Shihan Pan, Ge Wang, Han Ding, Fei Wang
institution: XJTU AIoT Group
summary: WS-IMUBench establishes a large benchmarking study for weakly supervised IMU temporal action localization and analyzes how methods from audio, image, and video transfer to sequence-level IMU labels.
cover: ./assets/cover.svg
coverAlt: Cover image for WS-IMUBench: Can Weakly Supervised Methods from Audio, Image, and Video Be Adapted for IMU-based Temporal Action Localization?
eyebrow: Publication
---

# Overview

IMU-based human activity recognition is widely used in wearable computing, but most existing work still follows a **clip classification** paradigm that ignores the finer temporal structure of continuous behavior. This paper shifts the focus to **IMU Temporal Action Localization (IMU-TAL)**, where the goal is to predict both action classes and their start/end times.

Dense temporal annotation is expensive to scale, so the authors study whether weakly supervised localization methods from **audio**, **image**, and **video** can be adapted to IMU streams using only sequence-level labels. The result is **WS-IMUBench**, a benchmark study rather than a single new model.

## Main Contributions

- Establishes a systematic benchmark for **weakly supervised IMU temporal action localization**.
- Evaluates **seven representative methods** from neighboring modalities on **seven public IMU datasets**.
- Analyzes which paradigms transfer well, where they fail, and what research directions are most promising for IMU-TAL.

## Method

The benchmark keeps the supervision level intentionally weak: models only see **sequence-level labels**, not dense frame-level boundaries. Under that setting, the paper measures how well existing weakly supervised localization ideas can adapt to IMU data, including methods originally designed for audio, image, and video tasks.

Rather than claiming one universal winner, the paper emphasizes a benchmarker's view:

- which methods are stable,
- which datasets are favorable,
- and which failure modes repeatedly appear.

## Evaluation Highlights

- More than **3,540 training runs** and **7,080 inference evaluations**.
- Shows that transferability is strongly **modality-dependent**.
- Finds that temporal-domain methods are generally more stable than image-derived proposal approaches.
- Highlights short actions, temporal ambiguity, and proposal quality as dominant failure modes.

## Resources

- [arXiv abstract](https://arxiv.org/abs/2602.01850)

## Citation

```bibtex
@article{li2026wsimubench,
  title = {WS-IMUBench: Can Weakly Supervised Methods from Audio, Image, and Video Be Adapted for IMU-based Temporal Action Localization?},
  author = {Li, Pei and Yin, Jiaxi and Ouyang, Lei and Pan, Shihan and Wang, Ge and Ding, Han and Wang, Fei},
  journal = {arXiv preprint arXiv:2602.01850},
  year = {2026}
}
```
