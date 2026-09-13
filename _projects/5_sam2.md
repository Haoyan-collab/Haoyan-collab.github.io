---
layout: page
title: Mitigating SAM2 Degradation in Multi-Frame Prompting
description: Semantic frame clustering for more stable video mask propagation.
importance: 5
category: research
---

I started this study by investigating why SAM2 degrades under multi-frame prompting. After tracing the issue to error accumulation from strict chronological propagation, I explored a non-sequential strategy: group visually similar frames, then route propagation by semantic similarity rather than time order.

The work examined ControlNet-inspired dynamic gating and clustering-based propagation as possible ways to reduce temporal drift on long-horizon sequences.
