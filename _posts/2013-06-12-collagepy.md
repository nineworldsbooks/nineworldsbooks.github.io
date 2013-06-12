---
layout: post
title: "Collage.py"
tagline: "quick image tiling"
description: ""
category: programming
tags: [python, image manipulation]
---
{% include JB/setup %}

On an online game I play, we take a lot of screenshots to document our events. To condense the screenshots into something easy to take in, we generally crop them to the meaningful part and tile them into a larger image. I decided to try my hand at automating the process.

**Goal:** Given `n` images of size `{W1H1},{W2H2},...,{WnHn}`, arrange these images on a canvas such that:

* Left-to-right order is maintained
* Top-to-bottom order is maintained
* Minimal blank space is left on the canvas

This is a simple task when you have images of roughly the same size. However, this isn't always going to be the case. It may be useful to be able to determine the variation in images sizes across the set. We can start with an array of images sizes, e.g.:

	image_sizes = [ [100,100], [60,80], [200,50], [10,2] ]

and some functions:

	get_max_width() 			get_max_height()
	get_min_width() 			get_min_height()
	get_avg_width() 			get_avg_height()
	get_width_range() 			get_height_range()

When I say that it's ideal to have images of the same size, this is only really half true. As the viewer of the image will be reading left to right, it is much more important that the resultant image have uniform rows. Uniform columns are a distant second.

So for now, we cease worrying about width constraints and focus on height. As long as aspect ratio is maintained, we can resize images a reasonable amount before the image is too distorted to be worth viewing. Since the sprites used in the game are quite small to begin with, we can start with the following constraints:

* An image can be reduced to 75% of its former size to fit with the others.
* An image can be increased to 150% of its former size to fit with the others.

If resizing images, the smaller image should increase 2px for every 1px that the large image shrinks. 