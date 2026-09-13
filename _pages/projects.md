---
layout: page
title: research
permalink: /projects/
description: Research projects in efficient vision algorithms, foundation-model adaptation, and applied AI systems.
nav: true
nav_order: 3
display_categories: [research, systems]
---

<script src="{{ '/assets/js/matrix-rain.js' | relative_url }}"></script>

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <section class="project-group" id="{{ category }}">
    <h2 class="category">{{ category }}</h2>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <div class="project-summary-grid">
    {% for project in sorted_projects %}
      <article class="project-summary">
        <p class="project-summary-index">{{ forloop.index | prepend: "0" | slice: -2, 2 }}</p>
        <h3>{{ project.title }}</h3>
        <p class="project-summary-description">{{ project.description }}</p>
        <details class="project-details">
          <summary class="project-notes-link">What I worked on <span aria-hidden="true">+</span></summary>
          <div class="project-detail-content">{{ project.content }}</div>
        </details>
      </article>
    {% endfor %}
  </div>
  </section>
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
