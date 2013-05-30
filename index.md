---
layout: page
title: blunderbuss
tagline: now with 100% more static pages
---
### Recent Posts

{% for post in site.posts %}
  {{ post.date | date_to_string }} >> [{{post.title}}]({{ BASE_PATH }}{{ post.url }})  
{% endfor %}

### Main Projects

[Project Brains](https://github.com/jsrn/ZUOmbies)  
A zombie survival server built on top of RunUO, the Ultima Online server emulator. \[C#\]

[Space Dash Repo](https://github.com/jsrn/SpaceDash)  
A top down space shooter. \[Java\]

[A Baker's Tale Repo](https://github.com/jsrn/A-Baker-s-Tale)  
A tilebased RPG in the style of Final Fantasy 1-6. \[Java\]

[Easy Preload Repo](https://github.com/jsrn/EasyPreload)  
Intercept system calls with LD_PRELOAD and your choice of customisable modules. \[Python/c\]

[Infection Page](http://jsrn.github.io/infection) / [Infection Repo](https://github.com/jsrn/InfectionSim)  
Model the spread of disease through a randomly generated population. \[Javascript\]

### Other Pages

[My gists](https://gist.github.com/jsrn)  
[ITV Show Generator](http://jsrn.github.io/itvgen)  
[Wound-o-Matic](http://jsrn.github.io/woundomatic)