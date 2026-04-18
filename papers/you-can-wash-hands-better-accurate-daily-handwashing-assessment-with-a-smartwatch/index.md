---
title: You Can Wash Hands Better: Accurate Daily Handwashing Assessment with a Smartwatch
authors: Fei Wang, Tingting Zhang, Xilei Wu, Pengcheng Wang, Xin Wang, Han Ding, Jingang Shi, Jinsong Han, Dong Huang
institution: XJTU AIoT Group
summary: UWash is a smartwatch-based handwashing assessment system that reframes daily hygiene monitoring as fine-grained action segmentation, enabling gesture recognition, boundary detection, and quality scoring in realistic deployment settings.
cover: ./assets/cover.svg
coverAlt: Cover image for You Can Wash Hands Better: Accurate Daily Handwashing Assessment with a Smartwatch
eyebrow: Publication
---

# Overview

Hand hygiene is one of the simplest and most effective daily interventions for preventing infectious disease, but in practice many people do not follow high-quality washing procedures consistently. This paper presents **UWash**, a smartwatch-based system that assesses handwashing quality from wearable motion streams rather than only detecting whether a washing event happened.

The key idea is to treat handwashing assessment as a **fine-grained action segmentation** problem. Instead of producing a single coarse label, UWash predicts the temporal structure of a washing session, recognizes gesture phases, estimates their boundaries, and scores how well each phase is performed.

## Main Contributions

- Introduces one of the first wearable systems that scores *handwashing quality* instead of only recognizing a handwashing event.
- Reformulates the task as temporal action segmentation and uses a compact **two-stream UNet-like network** for gesture recognition and assessment.
- Evaluates the system with **51 subjects**, plus delayed real-world tests with hospital passersby and in-the-wild volunteers long after the original collection period.

## Method

UWash processes smartwatch motion measurements and predicts gesture-level segments for a complete washing session. The two-stream UNet-like design captures both local motion evidence and longer temporal context, which allows the model to jointly support:

- fine-grained gesture recognition,
- onset and offset detection,
- and quality scoring for each gesture phase.

This formulation matters because useful handwashing feedback depends on *when* a gesture starts and ends, not just *which* action label is present. By keeping the temporal structure explicit, the system can deliver actionable guidance instead of a single binary decision.

## Evaluation Highlights

| Metric | Result |
| --- | --- |
| Gesture recognition accuracy | 92.27% |
| Onset / offset error | < 0.5 s |
| Gesture scoring error | < 5 points |

The paper also reports strong user-independent and user-independent-location-independent performance. Beyond controlled studies, UWash remained effective in later tests with **10 random passersby at a hospital 9 months later** and **10 passersby in an in-the-wild test 2 years later**, which suggests meaningful robustness for real deployment.

## Resources

- Paper: https://arxiv.org/abs/2112.06657
- Code and dataset: https://github.com/aiotgroup/UWash
- Handwashing protocol reference: [WHO hand hygiene guidance](https://www.who.int/teams/integrated-health-services/infection-prevention-control/hand-hygiene)

## Citation

```bibtex
@article{wang2025uwash,
  title = {You Can Wash Hands Better: Accurate Daily Handwashing Assessment with a Smartwatch},
  author = {Wang, Fei and Zhang, Tingting and Wu, Xilei and Wang, Pengcheng and Wang, Xin and Ding, Han and Shi, Jingang and Han, Jinsong and Huang, Dong},
  journal = {IEEE Transactions on Mobile Computing},
  year = {2025}
}
```
