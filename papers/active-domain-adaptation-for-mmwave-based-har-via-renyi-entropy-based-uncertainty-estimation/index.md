---
title: Active Domain Adaptation for mmWave-based HAR via Renyi Entropy-based Uncertainty Estimation
authors: Mingzhi Lin, Teng Huang, Han Ding, Cui Zhao, Fei Wang, Ge Wang, Wei Xi
institution: XJTU AIoT Group
summary: mmADA adapts mmWave human activity recognition models to new users, positions, and environments through active domain adaptation guided by Renyi entropy uncertainty estimation.
cover: ./assets/cover.svg
coverAlt: Cover image for Active Domain Adaptation for mmWave-based HAR via Renyi Entropy-based Uncertainty Estimation
eyebrow: Publication
---

# Overview

mmWave-based human activity recognition is attractive because it is non-contact and privacy-friendly, but model accuracy often drops sharply when the deployment domain changes. New users, new positions, and new environments can all create **domain shift** that undermines the original training distribution.

This paper introduces **mmADA**, an active domain adaptation framework that aims to recover performance with as little labeled target data as possible. The method combines uncertainty-based sample selection with unlabeled-domain adaptation so the model spends annotation effort on the most informative target examples.

## Main Contributions

- Proposes an **active domain adaptation** pipeline specialized for mmWave HAR.
- Uses **Renyi entropy-based uncertainty estimation** to decide which target samples should be labeled.
- Combines active labeling, contrastive learning, and pseudo-labeling to refine alignment in the target domain.

## Method

The framework is built around a simple idea: if labeling budget is limited, the system should request labels only for the target samples that are most likely to improve adaptation. mmADA estimates informativeness with Renyi entropy, then uses those selected samples together with unlabeled target data to improve cross-domain feature alignment.

This coupling of active learning and adaptation is especially helpful in mmWave sensing, where collecting labeled data in every new environment is expensive.

## Evaluation Highlights

- Evaluated with a **TI IWR1443BOOST** radar across multiple users, positions, and environments.
- Achieves **over 90% accuracy** in a variety of cross-domain settings.
- Outperforms **five baselines** and remains robust on unseen users, unseen environments, and two additional open-source datasets.

## Resources

- [arXiv abstract](https://arxiv.org/abs/2511.04219)

## Citation

```bibtex
@article{lin2025mmada,
  title = {Active Domain Adaptation for mmWave-based HAR via Renyi Entropy-based Uncertainty Estimation},
  author = {Lin, Mingzhi and Huang, Teng and Ding, Han and Zhao, Cui and Wang, Fei and Wang, Ge and Xi, Wei},
  journal = {IEEE Transactions on Mobile Computing},
  year = {2025}
}
```
