---
layout: default
title: enlightenment through superior firepower
author: Lorin Beer
projects: Cordova,http://cordova.apache.org/ Pender,https://github.com/lorinbeer/pender-android Lister,https://github.com/lorinbeer/lister
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
    {% assign data = proj | split: "," %}
   <div class="project_heading"> <a href="{{data[1]}}">{{data[0]}}</a> </div> 
{% endfor %}
