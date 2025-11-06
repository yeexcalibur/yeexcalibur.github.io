---
layout: yee-page
title: Portfolio
icon: fas fa-folder-open
order: 1
---

<div class="grid">
{% for p in site.data.projects %}
  <div class="card">
    <!-- 项目封面 -->
    <a href="/projects/{{ p.slug }}/">
      <div class="portfolio-cover">
        <img src="{{ p.cover }}" alt="{{ p.title }}">
      </div>
    </a>

    <h3 style="margin-top:10px"><a href="/projects/{{ p.slug }}/">{{ p.title }}</a></h3>
    <div class="muted">{{ p.cn_title }} · {{ p.year }}</div>
    <div class="muted" style="margin-top:6px">{{ p.summary }}</div>

 
  </div>
{% endfor %}
</div>
