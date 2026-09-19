---
layout: about
title: about
permalink: /
subtitle: Computer Vision | AI Systems | Multi-Agent Systems & VLA

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
      <div style="display: flex; justify-content: space-between; text-align: left;">
        <div style="margin-right: 10px;">
          <p><i class="fas fa-map-marker-alt fa-fw"></i> Carnegie Mellon University<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pittsburgh, PA</p>
        </div>
        <div>
          <p><i class="fas fa-envelope fa-fw"></i> haoyans@andrew.cmu.edu<br>
          <i class="fas fa-phone fa-fw"></i> (408) 590-0658<br>
          <a href="https://www.linkedin.com/in/kilian-shi" target="_blank"><i class="fab fa-linkedin fa-fw"></i> LinkedIn</a><br>
          <a href="https://github.com/Haoyan-collab" target="_blank"><i class="fab fa-github fa-fw"></i> GitHub</a></p>
        </div>
      </div>

  selected_papers: false
  social: false # disables social icons at the bottom of the page

announcements:
  enabled: false
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

Hi, I'm **Haoyan (Kilian) Shi**, an M.S. student at **Carnegie Mellon University** (MSMITE). My work spans computer vision and multimodal learning, production AI systems, and multi-agent/VLA research.

As a Research Assistant in the **Xu Lab**, I study multi-agent systems, vision-language-action (VLA), and agent safety for autonomous laboratory automation. My current work explores architectures that separate high-level planning from constrained execution through compiler-based validation and runtime enforcement.

Previously, I worked on vision foundation models and medical image segmentation, with publications at **IEEE ISBI 2026** and **MICCAI 2026**, and built production AI systems as an AI Engineering Intern at **Ericsson**.

**I am actively seeking Part-Time ML/AI opportunities during the academic year, as well as Full-Time Industry Internships for Summer 2027.**

<section class="about-publications">
  <h2>Publications</h2>

  <div class="publications">

  {% bibliography --query @*[selected=true] %}

  </div>
</section>

**Timeline**

<div class="timeline-container">
  {% for item in site.data.timeline %}
  <div class="timeline-item {{ item.type }}">
    <div class="timeline-date">{{ item.date }}</div>
    <div class="timeline-content">
      <div class="timeline-dot"></div>
      <h4 class="timeline-title">{{ item.title }} <span class="timeline-inst">&middot; {{ item.institution }}</span></h4>
      <p class="timeline-desc">{{ item.description }}</p>
    </div>
  </div>
  {% endfor %}
</div>

<style>
/* ================= 原有样式，绝对不动 ================= */
/* 暗色系 Timeline 强调色样式 */
.timeline-container {
  border-left: 2px solid #333; /* 暗色系主轴 */
  padding-left: 20px;
  margin-top: 20px;
  position: relative;
}

.timeline-item {
  position: relative;
  margin-bottom: 25px;
}

.timeline-date {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 5px;
}

.timeline-dot {
  position: absolute;
  left: -27px; /* 调整圆点位置贴合左侧主轴 */
  top: 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #555; /* 默认无类型颜色 */
  border: 2px solid var(--global-bg-color, #1e1e1e); /* 镂空效果，适配暗色背景 */
  z-index: 1;
}

/* 教育背景 - 科技青 */
.timeline-item.edu .timeline-dot {
  background-color: #64ffda;
  box-shadow: 0 0 8px rgba(100, 255, 218, 0.4);
}
.timeline-item.edu .timeline-inst {
  color: #64ffda;
}

/* 工业界实习 - 琥珀橙 */
.timeline-item.work .timeline-dot {
  background-color: #ffca28;
  box-shadow: 0 0 8px rgba(255, 202, 40, 0.4);
}
.timeline-item.work .timeline-inst {
  color: #ffca28;
}

/* 科研经历 - 紫罗兰 */
.timeline-item.research .timeline-dot {
  background-color: #b388ff;
  box-shadow: 0 0 8px rgba(179, 136, 255, 0.4);
}
.timeline-item.research .timeline-inst {
  color: #b388ff;
}

/* 调整机构名称的样式 */
.timeline-inst {
  font-weight: 500;
  font-size: 0.95em;
}

/* 针对 about 页面正文的暗色系视觉优化 */
.about-content, .post-content, article {
  color: #d1d5db; /* 全局正文采用柔和的浅灰白，保护视力 */
  line-height: 1.7; /* 增加行高，减少压抑感 */
}

/* 加粗的关键词自动变为纯白或高亮，形成视觉锚点 */
.about-content strong, article strong {
  color: #ffffff;
  font-weight: 600;
}

/* 列表项之间的间距优化，防止挤在一起 */
.about-content ul, article ul {
  margin-top: 0.8rem;
  margin-bottom: 1rem;
}

.about-content li {
  margin-bottom: 0.4rem;
}

/* 超链接颜色微调，贴合暗色科技感 */
.about-content a, article a {
  color: #64ffda;
  text-decoration: none;
}
.about-content a:hover, article a:hover {
  text-decoration: underline;
}

</style>

<script src="{{ '/assets/js/force-dark-theme.js' | relative_url }}"></script>
<script src="{{ '/assets/js/matrix-rain.js' | relative_url }}"></script>
