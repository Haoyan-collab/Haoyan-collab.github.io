---
layout: page
title: "SIGN: Sperm Head Morphology Classification"
description: Vision foundation models and implicit shape priors for clinical morphology classification.
importance: 3
category: research
---

SIGN is an ongoing project on sperm-head morphology classification. I am combining SAM3, frozen DINOv3 and ResNet50 features with an INR-guided shape representation, so the model can use both visual appearance and shape information. A SIREN-based DeepSDF auto-decoder compresses 2D masks into 256-dimensional latent codes, which are injected into backbone features through FiLM.

The framework achieved 69.1 F1 on SCIAN-PA and 98.7 F1 on HuSHeM, outperforming the SHMC-Net baseline on both clinical benchmarks.

The project is ongoing, with a planned submission to MIDL 2027.
