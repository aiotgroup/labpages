---
title: We Can Hear You with mmWave Radar! An End-to-End Eavesdropping System
authors: Dachao Han, Teng Huang, Han Ding, Cui Zhao, Fei Wang, Ge Wang, Wei Xi
institution: XJTU AIoT Group
summary: mmSpeech reconstructs intelligible speech from loudspeaker-induced vibrations captured by mmWave radar, enabling through-wall audio recovery without prior speaker knowledge.
cover: ./assets/cover.svg
coverAlt: Cover image for We Can Hear You with mmWave Radar! An End-to-End Eavesdropping System
eyebrow: Publication
---

# Overview

Voice-enabled devices make loudspeaker playback increasingly common, which also creates new speech-privacy risks. Traditional eavesdropping approaches often require direct access, microphones close to the target, or a clear line of sight. This paper presents **mmSpeech**, an end-to-end mmWave-based eavesdropping system that reconstructs speech from **vibration signals induced by loudspeaker playback**.

One of the most striking aspects of the work is that the system operates **through walls** and does not require prior knowledge of the speaker identity. The paper therefore sits at the boundary of wireless sensing, speech reconstruction, and security/privacy analysis.

## Main Contributions

- Introduces an **end-to-end mmWave speech reconstruction** pipeline based on playback-induced vibrations.
- Studies the sensing setup itself, including the combination of vibrating material and radar sampling rate needed for reliable capture.
- Uses synthetic data and selective ASR-encoder fine-tuning to improve downstream speech understanding.

## Method

The system first captures subtle vibration signals using **narrowband mmWave sensing**. It then estimates noisy spectrograms and feeds them into a neural network that reconstructs intelligible speech. To strengthen recognition quality beyond signal restoration alone, the authors:

- build a **synthetic training pipeline**,
- and selectively fine-tune the encoder of a **pre-trained ASR model**.

This makes mmSpeech not only a signal-processing pipeline but also a bridge to downstream speech understanding.

## Evaluation Highlights

- Implemented on a **commercial mmWave radar** platform.
- Demonstrates strong performance across unseen speakers and varying conditions.
- Achieves state-of-the-art speech quality according to the paper's reported evaluation.

## Resources

- [arXiv abstract](https://arxiv.org/abs/2511.06205)

## Citation

```bibtex
@article{han2026mmspeech,
  title = {We Can Hear You with mmWave Radar! An End-to-End Eavesdropping System},
  author = {Han, Dachao and Huang, Teng and Ding, Han and Zhao, Cui and Wang, Fei and Wang, Ge and Xi, Wei},
  journal = {ACM IMWUT / UbiComp},
  year = {2026}
}
```
