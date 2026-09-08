---
layout: about
title: about
permalink: /
subtitle: ML/AI Research Engineer | Efficient Vision Algorithms | Foundation-Model Adaptation

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    Carnegie Mellon University
    <br>
    Pittsburgh, PA

selected_papers: false
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

**Haoyan (Kilian) Shi** is an ML/AI Research Engineer working on efficient vision algorithms and foundation-model adaptation. My work focuses on how modern visual representations can become smaller, more data-efficient, and more reliable in challenging settings such as medical imaging and surgical video.

I am currently pursuing an M.S. in Mobile and IoT Engineering at Carnegie Mellon University, after completing a B.Eng. in Computer Science and Technology at Chongqing University. My published work includes papers at IEEE ISBI 2026 and MICCAI 2026, covering efficient segmentation architectures and sparse-supervision video understanding.

Alongside research, I have built production-oriented AI systems. During my AI internship at Ericsson, I developed a hybrid Fusion-RAG search platform with BM25, ChromaDB, Reciprocal Rank Fusion, and LLM-based evaluation. I enjoy working across the full path from model design and empirical validation to deployment.

## Research

- **Efficient vision algorithms** — compact architectures, Vision Transformers, and data-efficient learning
- **Foundation-model adaptation** — SAM-family models, DINO representations, and task-specific visual adaptation
- **Video understanding** — sparse supervision, memory mechanisms, and robust long-horizon propagation

My main application domain is medical vision, where limited labels, distribution shift, and long temporal context make these algorithmic problems especially concrete.

## Publications

{% bibliography --query @*[selected=true] %}

## Experience

At Ericsson, I built a production-oriented Fusion-RAG search platform combining BM25, ChromaDB, reciprocal-rank fusion, query reformulation, and an LLM-as-a-Judge evaluation pipeline. This work is part of my engineering experience rather than a publication.
