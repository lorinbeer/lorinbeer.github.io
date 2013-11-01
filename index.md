---
layout: default
title: enlightenment through superior firepower
author: Lorin Beer
projects: Cordova Pender Lister
---

#Blog Posts

{% for post in site.posts limit:5 %}
  <p>
    <span class="date"> {{ post.date | date_to_string }} >> </span>
    <span><a href="{{ post.url }}">{{ post.title }}</a></span>
  </p>
{% endfor %}

#Projects
{% assign projects = page.projects | split: " " %}
{% for proj in projects %}
   <div class="project_heading"> {{proj}} </div> 
{% endfor %}
