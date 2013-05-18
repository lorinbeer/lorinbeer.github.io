---
title: VATEDROID - Introduction
subtitle: Why would I want a javascript engine in my mobile native app?
layout: post
category: tutorial
tags: vatedroid
series: vatedroid
anchor: http://i.imgur.com/pDGEH9W.png
---

##Because you want JavaScript

JavaScript has become the lingua franca of the web. After a first pass, many have dismissed JavaScript, or regarded it as a toy language. Even <a href="http://javascript.crockford.com/survey.html" target="_blank">Mr. JavaScript himself, Douglas Crockford</a> had this first impression. But using it has consistently won over diehards, who begin to see it as an expressive and powerful tool for implementations. Implementations of what? Not just web apps. Whatever the hell we want.

Supporting open api specs means more than code portability

The continued development of intelligently designed <a href="http://www.w3.org/TR/2010/WD-html5-20100624/" target="_blank">open api specifications</a> to cover a given domain (video, audio, localstorage, client-server communication etc) means it doesn't matter what provides the backend of these API's, just that they exist in the execution environment. By supporting these api's, we support not only the portability of existing code, but more importantly, the portability of coder expertise.


##JavaScript and only JavaScript

Pure JavaScript is here, and growing for both serverside and clientside applications. One only needs to look at projects like jasmine, node, wscript paired with js and many more, to see javascript's flexibility and power when used as a primary programming language.

##JavaScript outside the sandbox

Despite the growing popularity of pure javascript applications, we still tend to think of it as existing purely in the browser sandbox. But more than that, we tend to think of JavaScript Engines as existing purely within a browser sandbox. It may surprise some to learn that there is a JS engine that you can embed in almost any environment

##Leaving the door open

By pairing pure JavaScript with implementations of open webstandards, we can leverage the power of javascript in native and browser environments, creating portable javascript codebases that can operate in both browsers, and, oh, I don't know, native mobile runtimes?

##What this is about

In this article series, we will explore the capabilities of the V8 engine embedded in the Android environment, from compiling V8 to exposing custom C/C++ modules to the JavaScript environment, and culminating in a graphics rendering pipeline from JavaScript with an openGL ES backend. Are there advantages in terms of performance to be gained? Stay tuned to find out!

Part 2 will cover compiling V8 targeting Android


##What we'll need:
<ul>
<li>a unix environment of some sort (more of a habitat really: bash, terminal, cygwin, etc)</li>
<li><a href="http://developer.android.com/sdk/index.html" target="_blank">the Android SDK</a></li>
<li><a href="http://developer.android.com/tools/sdk/ndk/index.html" target="_blank">the Android NDK</a></li>
</ul>
