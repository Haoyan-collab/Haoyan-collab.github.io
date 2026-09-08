---
layout: page
title: "D-GEM: Sparsely Supervised Surgical Video Segmentation"
description: Decoupled dual-memory adaptation for surgical video segmentation with sparse supervision.
importance: 1
category: research
related_publications: true
---

Accepted by MICCAI 2026, D-GEM addresses surgical video segmentation when only a small number of frames are annotated. The framework decouples the memory mechanism from the encoder and uses DINOv3 representations for architecture-agnostic adaptation.

I contributed to the reliability-gated dual-memory design, including the Gated Transient Memory and Evolving Anchor Memory. The system reached 74.2% average mIoU across three surgical video benchmarks under 10-frame sparse supervision, outperforming SAM3 by 10.3%.

[Download the camera-ready paper]({{ '/assets/pdf/MICCAI_2026_DGEM_Camera_Ready.pdf' | relative_url }})