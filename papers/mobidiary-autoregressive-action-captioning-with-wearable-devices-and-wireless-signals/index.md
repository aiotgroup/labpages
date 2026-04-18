---
title: MobiDiary: Autoregressive Action Captioning with Wearable Devices and Wireless Signals
authors: Fei Deng, Yinghui He, Chuntong Chu, Ge Wang, Han Ding, Jinsong Han, Fei Wang
institution: XJTU AIoT Group
summary: MobiDiary generates natural-language descriptions of daily activities directly from IMU and Wi-Fi signals through a unified sensor encoder and an autoregressive Transformer decoder.
cover: ./assets/cover.svg
coverAlt: Cover image for MobiDiary: Autoregressive Action Captioning with Wearable Devices and Wireless Signals
eyebrow: Publication
---

# Overview

Most wearable and wireless sensing systems describe activity using a fixed label set such as *walking*, *cooking*, or *washing hands*. **MobiDiary** moves beyond that setting and asks whether heterogeneous physical signals can produce **free-form natural language descriptions** of human activity.

The paper focuses on IMU and Wi-Fi sensing in smart-home scenarios. Instead of building separate modality-specific pipelines, MobiDiary introduces a unified signal encoder and an autoregressive captioning decoder so that the same framework can describe actions across different sensing modalities.

## Main Contributions

- Formulates **action captioning from physical signals** as a cross-modal sequence generation problem.
- Proposes a **unified sensor encoder** that works across both IMU and Wi-Fi inputs.
- Uses a Transformer-based autoregressive decoder to generate coherent action descriptions token by token.

## Method

The encoder is designed around two ideas:

- a **patch-based temporal representation** that captures local motion correlations,
- and **heterogeneous placement embeddings** that normalize spatial context across sensors placed on different devices.

After encoding, the unified signal tokens are passed to a Transformer decoder, which predicts the textual description autoregressively. The paper argues that IMU and Wi-Fi signals share motion-induced structure, and that exploiting this shared inductive bias is more scalable than writing separate feature engineering pipelines for each modality.

## Evaluation Highlights

- Evaluated on **XRF V2**, **UWash**, and **WiFiTAD**.
- Achieves state-of-the-art captioning performance on metrics including **BLEU@4**, **CIDEr**, and **RMC**.
- Outperforms specialized baselines while generalizing across both wearable and wireless sensing modalities.

## Resources

- [arXiv abstract](https://arxiv.org/abs/2601.08204)

## Citation

```bibtex
@article{deng2026mobidiary,
  title = {MobiDiary: Autoregressive Action Captioning with Wearable Devices and Wireless Signals},
  author = {Deng, Fei and He, Yinghui and Chu, Chuntong and Wang, Ge and Ding, Han and Han, Jinsong and Wang, Fei},
  journal = {arXiv preprint arXiv:2601.08204},
  year = {2026}
}
```
