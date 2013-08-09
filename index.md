---
layout: page
---
{% include JB/setup %}

*Content migration coming soon.*
<div style="float: left; width: 60%;">
<h3>Main Projects</h3>

{% capture mainprojects %}
*Content migration coming soon.*
{% endcapture %}
{{ mainprojects | markdownify }}
</div>

<div style="float: left; width: 40%;">
<h3>Recent Posts</h3>

{% capture recentposts %}
*These are the seven most recent posts. You can browse through the whole lot in the <a href="{{ BASE_PATH }}categories.html">category list</a> or <a href="{{ BASE_PATH }}archive.html">archive</a>.*

{% for post in site.posts limit: 7 %}
  {{ post.date | date_to_string }} >> [{{post.title}}]({{ BASE_PATH }}{{ post.url }})  
{% endfor %}
{% endcapture %}
{{ recentposts | markdownify }}
</div>