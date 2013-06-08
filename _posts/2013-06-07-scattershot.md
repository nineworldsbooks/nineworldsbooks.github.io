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

Twitter is a great service. I have a couple of accounts that I use to follow different circles, and the ability to get real-time news and commentary is unparalleled. To the best of my knowledge, Twitter has so far maintained a good reputation for being fair and secure. I'm sure they've made mistakes, but I have no particular issue with them.

I'm not doing this out of any dislike of Twitter, nor am I under the impression that the ideas (original or not) presented here would be an improvement over the service Twitter provides. It's just interesting!

A decentralised microblogging service should strive to maintain the following traits:

* **Rapid updates** - people are used to near real-time status updates.
* **Trustworthy** - it is vital to be able to verify that the data you receive from other instances is reliable and accurate.
* **Rapid to deploy** - instances should be simple and quick to install and configure.

### Rapid Updates

Instance polling can be done in-browser, using javascript. This allows the browser to check for status updates frequently without causing undue stress to both instances. What if an instance goes down? The reliability of future updates relies on the dedication of an instance owner to maintain their machine.

The first problem that springs to mind is wasted resources. If a user you are following decides to shut down their machine for good, you don't want to poll their non-existant instance every minute to look for new updates. This can be remedied by increasing the poll interval on inactive instances, e.g.:

    poll_interval_minutes = days_since_status + 1

The second problem (somewhat exacerbated by the immediate solution to the first) is that it is typically more important to get real-time communication when microblogging than conventional blogs, email, etc. When important events are being covered and discussed live, a ten minute delay in the status feed might as well be a year. In this case, it is advantageous for instance posting the status to send the status to any listening instances. As such, it becomes necessary to maintain not only a list of the instances that you are following, but also of the instances that are following you.

**On startup:** Poll the instances you are following, asking for a list of statuses between the timestamp of the last *received* status, and the last status posted. If there is no response, poll every `poll_interval_minutes` until an answer is received.

**On message posted:** Send the status to any instances that are following you. If they do not receive it, they will request it next time they start their instance.

### Trust

The interesting problem posed by decentralising a service is maintaining trust between instances. With a service like Twitter, we can be sure that a user is genuine, even if they aren't who they say they are. How can we be sure that the data coming from untrusted servers is reliable? How can we verify that a status update really came from a certain instance?

### Deployment

To ease deployment, the code should have as few dependencies as possible. Languages and frameworks that require complicated installation or configuration should be avoided. Despite its flaws, PHP has the advantage here. It's superbly easy to set up, there are a plethora of libraries available for it, and everyone knows it. The full apache-mysql-php stack can be deployed in minutes on any [Windows](http://www.wampserver.com/en/) or [Linux](http://linux.die.net/man/8/apt-get) machine.

### Scattershot Network

Each Scattershot instance would maintain two lists, much in the same way that Twitter tracks relationships between users:

* Instances that are following me
* Instances that I follow

### Good Reads

[Open Twitter? Nope. You don’t get it.](http://volaski.tumblr.com/post/29720297216/open-twitter-nope-you-dont-get-it), in which Volaski stresses the importance of rapid and reliable status delivery.

[Wikipedia - Web of Trust](http://en.wikipedia.org/wiki/Web_of_trust)