---
layout: page
title: "D-GEM: Sparsely Supervised Surgical Video Segmentation"
description: Decoupled dual-memory adaptation for surgical video segmentation with sparse supervision.
importance: 1
category: research
related_publications: true
---

Accepted by MICCAI 2026, D-GEM tackles surgical video segmentation when only a small number of frames are annotated. The idea was to separate the memory mechanism from the encoder, so the method could adapt across architectures while using DINOv3 representations.

I worked on the reliability-gated dual-memory design, including the Gated Transient Memory and Evolving Anchor Memory. Under 10-frame sparse supervision, the project reached 74.2% average mIoU across three surgical-video benchmarks, outperforming SAM3 by 10.3%.

[Download the camera-ready paper]({{ '/assets/pdf/MICCAI_2026_DGEM_Camera_Ready.pdf' | relative_url }})
