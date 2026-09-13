---
layout: page
title: "Undergraduate Thesis: Two-Stage Dental Lesion Recognition"
description: Undergraduate thesis on real-time dental lesion recognition with segmentation-guided classification.
importance: 4
category: research
---

For my undergraduate thesis, I built a decoupled two-stage diagnostic pipeline. YOLOv8-Seg first extracts fine-grained tooth masks and positional priors to reduce cross-tooth noise. I then enhanced a Swin Transformer with a Panoramic Context Module and Mask-Guided FiLM to restore global anatomical topology.

Rank-MIL pooling and Asymmetric Loss help capture micro-lesion features and address long-tail disease distributions. The project achieved 0.8613 F1 and 0.8610 AUC; the classifier ran at 110 FPS in batch-size-one inference on an RTX A4000. I also deployed the work as a real-time web application.
