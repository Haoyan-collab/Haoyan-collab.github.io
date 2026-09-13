---
layout: page
title: "U-KAST: Kolmogorov-Arnold Swin Transformer"
description: A compact and data-efficient architecture for medical image segmentation.
importance: 2
category: research
related_publications: true
---

For U-KAST, we explored replacing the standard MLP blocks in a Swin Transformer encoder with Group Rational KANs: a more expressive feed-forward pathway designed to remain practical. Safe Pade Activation Units and channel group-sharing keep the computational and memory cost of spline-based KANs under control.

I contributed through partial implementation, literature and ablation work, and the manuscript. The model uses 1.4386 GFLOPs and 7.2M parameters while performing strongly across four 2D and 3D medical-imaging benchmarks, including settings with only 10% to 25% of the training data.

[Read on arXiv](https://arxiv.org/abs/2511.04084) · [Download the paper]({{ '/assets/pdf/UKAST.pdf' | relative_url }})
