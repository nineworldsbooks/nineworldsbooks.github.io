---
layout: post
title: "Bullying LaTeX"
tagline: "For the greater good"
description: ""
category: security
tags: [latex, pdf, front end]
---
{% include JB/setup %}

Today I started a new project. Several different things we use at work need to produce PDF reports automatically, and we decided that it would be great to have a common interface through which to do so. Having used LaTeX for much of my academic (if I may be so bold as to apply the term to my ravings) writing at university, it seemed the natural choice. However, who wants to bundle several hundred mb (at least) with each application that needs to generate a pdf? Nobody, that's who.

I'm not the first person to write a web interface to LaTeX, but here's my crack at it: https://github.com/jsrn/TexBin

I personally think it's sort of neat for a few hours work. I wouldn't want to unleash it on the internet, though. Who knows what sort of mischief one can get up to with unbridled access to a LaTeX interpreter? Probably lots.
Code Execution
In TeX, the \write18 command is used to pass a command to the operating system. 

#### Denial of Service

Any looping construct can be used to needlessly tie up resources:

    \loop\iftrue\repeat

This can also be achieved by defining recursive macros:

    \def\evil{\evil}

#### Recommended Reading

[Don't take LaTeX files from strangers](http://cseweb.ucsd.edu/~hovav/dist/tex-login.pdf) - Checkoway, Shacham, Rescorla - 2011

[What does write18 mean?](http://www.texdev.net/2009/10/06/what-does-write18-mean) - Joseph Wright - 2009

This post will probably expand as I continue finding things on the subject.