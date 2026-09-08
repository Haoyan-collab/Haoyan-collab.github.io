---
layout: page
title: "U-KAST: Kolmogorov-Arnold Swin Transformer"
description: A compact and data-efficient architecture for medical image segmentation.
importance: 2
category: research
related_publications: true
---

U-KAST integrates Group Rational KANs into Swin Transformer encoders, replacing standard MLP blocks with expressive but efficient feed-forward pathways. Safe Pade Activation Units and channel group-sharing reduce the computational and memory overhead of vanilla spline-based KANs.

The model uses 1.4386 GFLOPs and 7.2M parameters while achieving strong performance across four 2D and 3D medical imaging benchmarks, including data-scarce settings using only 10% to 25% of the training data.

[Read on arXiv](https://arxiv.org/abs/2511.04084) · [Download the paper]({{ '/assets/pdf/UKAST.pdf' | relative_url }})