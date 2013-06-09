---
layout: post-code
title: Intro to CMake
subtitle: crossplatform build systems
category: tutorial
tags:
series:
anchor: http://i.imgur.com/sRjPGlR.png
quotation: A good plan violently executed now is better than a perfect plan executed next week.
attribution: George S. Patton
---

## Intro
Build systems are an essential part of any software development project. At the basic level, build systems save time through dependency tracking and providing macros for frequently repeat tasks. But they can also provide powerful tools for code generation 
While makefiles are great, and being able to read them is an important skill, using Make directly is probably not the most efficient use of time. Automation tools such as Ant, autotools, scons, and CMake provide another layer of abstraction over the build process. This layer of abstraction provides easier to use/read api's, as well as cross platform build file generation.
## Ant

## autotools

## cmake

## which one to use
I recommend CMake. It's user friendly enough, and offers true crossplatform support. Documentation is a little light when getting started, but CMake's learning curve is far shallower than raw Make. Autotools offers crossplatform support, but complaints exist concerning efficiency and quirks on Windows, especially with Visual Studio. CMake

# basic syntax

# multiple cmake files

# external dependencies
