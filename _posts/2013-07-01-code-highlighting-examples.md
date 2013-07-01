---
layout: post
title: "Code Highlighting Examples"
tagline: "for personal reference"
description: ""
category: programming
tags: [code highlighting, syntax highlighting]
---
{% include JB/setup %}

I decided to try to set up code highlighting for this blog using the inbuilt functionality and the monokai theme borrowed from [this repository](https://github.com/richleland/pygments-css).

#### Python

{% highlight python %}
for i in range( 100 ):
	print i
{% endhighlight %}

#### Ruby

{% highlight ruby %}
def foo
  puts 'foo'
end
{% endhighlight %}

Works like a charm.