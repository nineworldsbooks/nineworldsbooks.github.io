---
layout: post
title: "Scattershot"
tagline: "an experiment in decentralised microblogging"
description: ""
category: programming
tags: [twitter, decentralised]
---
{% include JB/setup %}

\[This post is a work in progress.\]

Twitter is a great service. I have a couple of accounts that I use to follow different circles, and the ability to get real-time news and commentary is unparalleled. To the best of my knowledge, Twitter has so far maintained a good reputation for being fair and secure. I'm sure they've made mistakes, but I have no particular beef with them. 

A decentralised microblogging service should strive to maintain the following traits:

* **Rapid updates** - people are used to near real-time updates from Twitter.
* **Trustworthy** - With any decentralised service, it's vital to be able to verify that the data you receive from other nodes is reliable and accurate.
* **Rapid to deploy** - Not everyone has the technical savvy to maintain their own server, so the app should be as easy to install and configure as possible.

### Scatter Network

Each Scattershot instance would maintain a list of Scattershot instances that it follows, much in the same way that a Twitter user maintains its own list of followers. The scattershot instance can then poll its list of followed instances to create the status update stream for the user.

### Rapid Updates

Instance polling can be done in-browser using javascript. This allows the browser to check for status updates frequently without causing undue stress to both instances.

### Trust

The interesting problem posed by decentralising a service is maintaining trust between instances. With a service like Twitter, we can be sure that a user is genuine, even if they aren't who they say they are. How can we be sure that the data coming from untrusted servers is reliable? How can we verify that a status update really came from a certain instance?

### Deployment

To ease deployment, the code should have as few dependancies as possible. Languages/frameworks that require complicated installation or configuration should be avoided.