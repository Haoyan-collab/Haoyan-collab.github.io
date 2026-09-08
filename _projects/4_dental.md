---
layout: page
title: "Undergraduate Thesis: Two-Stage Dental Lesion Recognition"
description: Undergraduate thesis on real-time dental lesion recognition with segmentation-guided classification.
importance: 4
category: research
---

This undergraduate thesis project builds a decoupled two-stage diagnostic pipeline. YOLOv8-Seg first extracts fine-grained tooth masks and positional priors, reducing cross-tooth noise. A Swin Transformer is then enhanced with a Panoramic Context Module and Mask-Guided FiLM to restore global anatomical topology.

Rank-MIL pooling and Asymmetric Loss capture micro-lesion features and address long-tail disease distributions. The system achieved 0.8613 F1, 0.8610 AUC, and 110 FPS inference, and was deployed as a real-time web application.