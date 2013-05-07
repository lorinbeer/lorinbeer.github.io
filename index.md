---
layout: default
title: enlightenment through superior firepower
author: Lorin Beer
---

{% for post in site.posts %}
[{{ post.title }}]( {{ post.url }}) {{ post.date | date_to_string }}
{% endfor %}
