---
title: Locality-aware Parallel Decoding for Efficient Autoregressive Image Generation
authors: Zhuoyang Zhang*, Luke J. Huang*, Chengyue Wu, Shang Yang, Kelly Peng, Yao Lu, Fei Wang
institution: XJTU AIRS Lab
summary: This paper studies how to parallelize autoregressive image generation without discarding the locality priors that make autoregressive decoders strong. The main idea is to preserve spatially local dependencies while decoding multiple regions more efficiently.
cover: ./assets/cover.svg
coverAlt: Cover image for Locality-aware Parallel Decoding for Efficient Autoregressive Image Generation
eyebrow: Publication
---

# Overview

This paper studies how to parallelize autoregressive image generation without discarding the locality priors that make autoregressive decoders strong. The main idea is to preserve spatially local dependencies while decoding multiple regions more efficiently.

## Main Contributions

- Targets autoregressive image generation bottlenecks directly.
- Balances visual quality and parallel decoding speed.
- Fits the lab's broader theme of efficiency without giving up strong model behavior.

## Technical Details

Use this section for the main method, system design, architecture, training or serving strategy, and the details that make the work distinctive.

## Results

Summarize the headline findings, qualitative outcomes, ablations, or deployment lessons here.

## Resources

- [Cover image](./assets/cover.svg)
- Add figures, PDFs, posters, or demos to the local `./assets/` folder when they are ready.

## Citation

```bibtex
@inproceedings{locality-aware-parallel-decoding-for-efficient-autoregressive-image-generation,
  title = {Locality-aware Parallel Decoding for Efficient Autoregressive Image Generation},
  author = {Zhuoyang Zhang and Luke J. Huang and Chengyue Wu and Shang Yang and Kelly Peng and Yao Lu and Fei Wang},
  booktitle = {ICLR 2026 Oral},
  year = {2026}
}
```
