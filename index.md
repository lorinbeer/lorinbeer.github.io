---
layout: default
title: enlightenment through superior firepower
author: Lorin Beer
---

#Blog Posts

{% for post in site.posts %}
  <p>
    <span class="date"> {{ post.date | date_to_string }} >> </span>
    <span><a href="{{ post.url }}">{{ post.title }}</a></span>
  </p>
{% endfor %}

#Projects
