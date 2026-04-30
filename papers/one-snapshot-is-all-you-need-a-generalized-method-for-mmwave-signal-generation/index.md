---
title: One Snapshot is All You Need: A Generalized Method for mmWave Signal Generation
authors: Teng Huang, Han Ding, Wenxin Sun, Cui Zhao, Ge Wang, Fei Wang, Kun Zhao, Zhi Wang, Wei Xi
institution: XJTU AIRS Lab
summary: This paper introduces mmGen, a generalized framework for full-scene mmWave signal generation that synthesizes realistic radar signatures from a single captured scene snapshot and reconstructed 3D meshes.
cover: ./assets/cover.svg
coverAlt: Cover image for One Snapshot is All You Need: A Generalized Method for mmWave Signal Generation
eyebrow: Publication
---

# Overview

Collecting large, diverse mmWave datasets is expensive, time-consuming, and often tightly coupled to a particular downstream task or annotation format. **One Snapshot is All You Need** addresses that bottleneck with **mmGen**, a generalized full-scene signal generation framework for mmWave sensing.

Instead of relying on large-scale real collection, mmGen starts from a **single captured scene snapshot** and a reconstructed 3D mesh representation. It then synthesizes both human-reflected and environment-reflected FMCW mmWave signals, producing realistic radar observations that can support a wide range of downstream sensing research.

## Main Contributions

- Proposes **mmGen**, a generalized mmWave signal generation framework for full-scene sensing.
- Models **human reflections**, **environment reflections**, **material properties**, **antenna gains**, and **multipath effects** to improve realism.
- Demonstrates that synthetic signals can closely match real captures across multiple environments.

## Method

The framework builds a physical signal transmission model over reconstructed scene geometry. Human bodies are represented with 3D meshes, and the environment is explicitly modeled so that signal synthesis includes not only target reflections but also the surrounding scene response.

This makes mmGen more general than pipelines that only generate downstream signatures such as point clouds or range-angle maps. The generated output remains useful for broader sensing tasks because it starts from a more physically grounded scene-level description.

## Evaluation Highlights

| Signature Type | Average similarity to real captures |
| --- | --- |
| Range-Angle | > 0.91 |
| Micro-Doppler | > 0.89 |

These results are reported across **three different environments** using a prototype system with commercial mmWave devices and Kinect sensors, supporting the claim that mmGen is practical for realistic signal generation rather than only toy simulation.

## Resources

- [arXiv abstract](https://arxiv.org/abs/2503.21122)

## Citation

```bibtex
@inproceedings{huang2025mmgen,
  title = {One Snapshot is All You Need: A Generalized Method for mmWave Signal Generation},
  author = {Huang, Teng and Ding, Han and Sun, Wenxin and Zhao, Cui and Wang, Ge and Wang, Fei and Zhao, Kun and Wang, Zhi and Xi, Wei},
  booktitle = {IEEE INFOCOM},
  year = {2025}
}
```
