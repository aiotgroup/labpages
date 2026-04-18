---
title: Talk is Not Always Cheap: Promoting Wireless Sensing Models with Text Prompts
authors: Zhenkui Yang, Zeyi Huang, Ge Wang, Han Ding, Tony Xiao Han, Fei Wang
institution: XJTU AIoT Group
summary: WiTalk enhances wireless sensing models with hierarchical text prompts, showing that semantic descriptions can improve recognition and temporal localization without changing the backbone architecture.
cover: ./assets/cover.svg
coverAlt: Cover image for Talk is Not Always Cheap: Promoting Wireless Sensing Models with Text Prompts
eyebrow: Publication
---

# Overview

Wireless sensing datasets often include useful textual knowledge such as action names and semantic descriptions, but most sensing models ignore that information during training. **WiTalk** explores whether text prompts can improve wireless sensing performance without adding more data or redesigning the core architecture.

The paper focuses on WiFi, mmWave radar, and RFID-based sensing tasks. Instead of changing the backbone, WiTalk injects semantic guidance through text prompts at different levels of detail and tests whether those prompts improve both recognition and localization.

## Main Contributions

- Introduces **WiTalk**, a text-enhanced framework for wireless sensing.
- Uses three prompt strategies: **label-only**, **brief description**, and **detailed action description**.
- Demonstrates that textual supervision can improve both action recognition and temporal localization with minimal architectural friction.

## Method

The framework keeps the sensing model architecture intact and augments training with semantic prompts derived from the dataset labels and action descriptions. This is an appealing design choice because it means the method can be attached to existing sensing pipelines without rebuilding the full model stack.

The paper positions text prompts as a low-cost way to inject task semantics into wireless sensing, especially when the raw signal space is difficult to interpret directly.

## Evaluation Highlights

- Evaluated on **XRF55** for human action recognition and **WiFiTAL / XRFV2** for WiFi temporal action localization.
- Improves XRF55 accuracy by **3.9% (WiFi)**, **2.59% (RFID)**, and **0.46% (mmWave)**.
- Improves average WiFiTAD performance on WiFiTAL by **4.98%**.
- Improves mean average precision on XRFV2 by **4.02% to 13.68%** across different methods.

## Resources

- [arXiv abstract](https://arxiv.org/abs/2504.14621)
- [Code](https://github.com/yangzhenkui/WiTalk)

## Citation

```bibtex
@article{yang2025witalk,
  title = {Talk is Not Always Cheap: Promoting Wireless Sensing Models with Text Prompts},
  author = {Yang, Zhenkui and Huang, Zeyi and Wang, Ge and Ding, Han and Han, Tony Xiao and Wang, Fei},
  journal = {arXiv preprint arXiv:2504.14621},
  year = {2025}
}
```
