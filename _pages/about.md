---
layout: about
title: about
permalink: /
subtitle: ML/AI Research Engineer | Foundation Models | Multimodal and Intelligent Systems

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

Hi, I'm **Haoyan (Kilian) Shi**. I am an ML/AI researcher and engineer interested in how foundation models can become more capable, efficient, and useful in real-world systems. My work so far has focused mainly on computer vision: adapting visual foundation models, building data-efficient representations, and making models more reliable under limited supervision and distribution shift. These projects have given me a strong foundation in representation learning, model adaptation, and end-to-end experimentation, while also motivating me to explore a broader range of intelligent systems.

I am currently pursuing my M.S. in Mobile and IoT Engineering at Carnegie Mellon University (expected May 2028), having previously earned my B.Eng. in Computer Science and Technology at Chongqing University. **I am actively seeking internship opportunities for Summer 2027 and am open to roles across ML/AI research and engineering.**

My research experience includes projects accepted at IEEE ISBI 2026 and MICCAI 2026. Although these projects are rooted in vision and medical imaging, the questions behind them are broadly relevant: how to adapt foundation models with limited data, improve efficiency without giving up capability, and build systems that remain dependable in challenging environments.

Alongside academic research, I enjoy building robust, production-oriented AI systems. During my AI engineering internship at Ericsson, I architected an end-to-end Fusion-RAG search platform and built automated evaluation pipelines to improve enterprise query relevance. I value being involved in the full lifecycle of a project, from understanding a problem and designing a model or system to evaluating it carefully and deploying it in practice.

## Research Interests

- **Foundation Models and Representation Learning** — model adaptation, efficient learning, evaluation, and reliable use of pretrained representations.
- **Language and Multimodal Models** — LLMs, vision-language models, multimodal reasoning, retrieval-augmented systems, and methods for connecting different forms of information.
- **Embodied and Interactive Intelligence** — robotics, vision-language-action (VLA) models, and agents that can perceive, reason, and act in the physical world.
- **Computer Vision and Video Understanding** — efficient visual architectures, temporal modeling, and data-efficient learning. This is where most of my research experience lies today.

My current research background is in medical vision, where limited labels, distribution shifts, and long temporal context make algorithmic problems concrete and meaningful. I am open to learning across domains and would be glad to contribute wherever my experience in representation learning, foundation-model adaptation, experimentation, and system building can be useful.

## Publications

<div class="publications">

{% bibliography --query @*[selected=true] %}

</div>

## Timeline

<div class="timeline-container">
  {% for item in site.data.timeline %}
  <div class="timeline-item">
    <div class="timeline-date">{{ item.date }}</div>
    <div class="timeline-content">
      <div class="timeline-dot"></div>
      <h4 class="timeline-title">{{ item.title }} <span class="timeline-inst">&middot; {{ item.institution }}</span></h4>
      <p class="timeline-desc">{{ item.description }}</p>
    </div>
  </div>
  {% endfor %}
</div>