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

### Scattershot Network

Each Scattershot instance would maintain a list of Scattershot instances that it follows, much in the same way that a Twitter user maintains its own list of followers. The scattershot instance can then poll its list of followed instances to create the status update stream for the user.

### Rapid Updates

Instance polling can be done in-browser using javascript. This allows the browser to check for status updates frequently without causing undue stress to both instances. What if an instance goes down? A reliability of future updates relies on the dedication of an instance owner to maintain their machine.

The first problem that springs to mind is wasted resources. If a user you are following decides to shut down their machine for good, you don't want to poll their non-existant instance every minute to look for new updates. This can be remedied by increasing the poll interval on inactive instances, e.g:

    poll_interval_minutes = days_since_status + 1

The second problem (somewhat exacerbated by the immediate solution to the first) is that it is typically more important to get real-time communication when microblogging than conventional blogs, email, etc. When important events are being covered and discussed live, a ten minute delay in the status feed might as well be a year. In this case, it is advantageous for instance posting the status to send the status to any listening instances.

### Trust

The interesting problem posed by decentralising a service is maintaining trust between instances. With a service like Twitter, we can be sure that a user is genuine, even if they aren't who they say they are. How can we be sure that the data coming from untrusted servers is reliable? How can we verify that a status update really came from a certain instance?

### Deployment

To ease deployment, the code should have as few dependencies as possible. Languages/frameworks that require complicated installation or configuration should be avoided.