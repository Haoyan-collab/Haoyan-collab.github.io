---
layout: page
title: Mitigating SAM2 Degradation in Multi-Frame Prompting
description: Semantic frame clustering for more stable video mask propagation.
importance: 5
category: research
---

This study investigated performance degradation in SAM2 under multi-frame prompting. After identifying error accumulation caused by strict chronological propagation, I explored a non-sequential strategy that groups visually similar frames and routes propagation by semantic similarity rather than time order.

The work examined ControlNet-inspired dynamic gating and clustering-based propagation as possible ways to reduce temporal drift on long-horizon sequences.