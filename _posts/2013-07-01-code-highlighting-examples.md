---
layout: post
title: "Code Highlighting Examples"
tagline: "for personal reference"
description: ""
category: programming
tags: [code highlighting, syntax highlighting]
---
{% include JB/setup %}

I decided to try to set up code highlighting for the blog using the following example and the default `pygment_trac.css`:

{% highlight ruby %}
def foo
  puts 'foo'
end
{% endhighlight %}

For some reason the code is refusing to highlight.