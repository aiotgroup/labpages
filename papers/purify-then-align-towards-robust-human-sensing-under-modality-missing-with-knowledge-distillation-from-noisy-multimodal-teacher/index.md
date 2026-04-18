---
title: Purify-then-Align: Towards Robust Human Sensing under Modality Missing with Knowledge Distillation from Noisy Multimodal Teacher
authors: Pengcheng Weng, Yanyu Qian, Yangxin Xu, Fei Wang
institution: XJTU AIoT Group
summary: PTA improves missing-modality human sensing by first purifying noisy multimodal knowledge with meta-learned weighting and then aligning student modalities through diffusion-based knowledge distillation.
cover: ./assets/cover.svg
coverAlt: Cover image for Purify-then-Align: Towards Robust Human Sensing under Modality Missing with Knowledge Distillation from Noisy Multimodal Teacher
eyebrow: Publication
---

# Overview

Robust multimodal human sensing is often limited by two connected problems: a **representation gap** between heterogeneous modalities and a **contamination effect** introduced by low-quality or noisy sensing channels. This paper argues that the contamination problem must be addressed before effective cross-modal alignment can happen.

To do so, the authors propose **PTA (Purify-then-Align)**, a framework that first purifies the multimodal teacher signal and then transfers that cleaned knowledge back to single-modality students. The result is a stronger set of modality-specific encoders that remain effective even when some sensing channels are missing at test time.

## Main Contributions

- Identifies a causal link between noisy modalities and the failure to reduce representation gaps in multimodal sensing.
- Proposes a **meta-learning-driven weighting mechanism** that down-weights low-contributing and contaminated modalities.
- Introduces a **diffusion-based knowledge distillation** strategy that aligns student modalities using an information-rich clean teacher.

## Method

PTA runs in two stages:

1. **Purify**  
   A meta-learning component estimates how much each modality should contribute, reducing the influence of noisy channels before fusion.

2. **Align**  
   A diffusion-style distillation process transfers purified multimodal knowledge to student encoders, strengthening each single-modality branch with cross-modal context.

The main payoff is not only better multimodal performance, but also stronger **single-modality robustness** when some channels are unavailable.

## Evaluation Highlights

- Evaluated on **MM-Fi** and **XRF55**.
- Targets settings with both pronounced representation gap and contamination effect.
- Achieves state-of-the-art performance and improves the robustness of single-modality models under diverse missing-modality scenarios.

## Resources

- [arXiv abstract](https://arxiv.org/abs/2604.05584)

## Citation

```bibtex
@inproceedings{weng2026pta,
  title = {Purify-then-Align: Towards Robust Human Sensing under Modality Missing with Knowledge Distillation from Noisy Multimodal Teacher},
  author = {Weng, Pengcheng and Qian, Yanyu and Xu, Yangxin and Wang, Fei},
  booktitle = {CVPR 2026 Workshop on Any-to-Any Multimodal Learning},
  year = {2026}
}
```
