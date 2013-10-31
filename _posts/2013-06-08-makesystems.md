---
layout: post-code
title: Comparing Build Systems 
subtitle: crossplatform build systems
category: tutorial
tags: buildsystems 
series: buildsystems
anchor:  http://i.imgur.com/x2KQxAo.jpg 
quotation: A good plan violently executed now is better than a perfect plan executed next week.
attribution: George S. Patton
---


## Intro
I was writing a guide for cmake, I thought a quick blurb on some major make systems would be worthwhile. I hate learning new buildsytems. If this helps narrow down the choice for someone, without the often steep learning curve of each one, it'll be worth the effort. All options here are stable, well maintained, and open source.

Build systems are an essential part of any software development project, saving time through dependency tracking and providing macros for frequently repeat tasks. They can also provide a powerful toolset for scripting precompile tasks which is worth getting familiar with.

While makefiles are great, and being able to read them is an important skill, using Make directly is probably not the most efficient use of time. Higher level automation tools such as Ant, autotools, scons, and CMake provide another layer of abstraction over the build process. This layer of abstraction provides easier to use/read api's, as well as cross platform and cross compile support.

### [Apache Ant](http://ant.apache.org/)
If you've worked with Android, or Java in general, you've worked with Ant. A common build system for Java projects, Ant can be used to build any kind of application. Written in Java, config files are in xml. Extensions and custom functionality can be written in Java. Open source, under the Apache Licence. 

### [GNU autotools](http://www.gnu.org/software/automake/)

part of the GNU Build system, creates portable makefiles with a learning curve only about as steep as writing Make in the first place. Makes certain tasks far less tedious than make (compiling to targets) by provides a larger library of default build rules. I've found Windows support to be dodgy.

### [CMake](http://www.cmake.org/)
Generates a native build system from a config file written with cmake pseudocode. It's fast, terse, and can reliably generate cross build system files.  

### [scons](http://www.scons.org/)
build system written entirely in Python. Configuration files and build scripts are written in Python. Closest writing build automation code will ever come to "fun".

### [grunt](http://gruntjs.com/)
a general purpose JS task runner, worth mentioning as JS becomes more popular for automation tasks.

### which one to use
First hour I spend toying with an idea or project in c/c++, I usually use a two line makefile. If the project becomes complex enough (multiple modules), I'll switch to cmake.
For mobile platforms, I usually don't have a choice. XCode, ant/android toolchain, Cordova CLI, Visual Studio are all dictated by their respective platforms. 

In general, I recommend CMake. It's user friendly enough, and offers true crossplatform support. Documentation is a little light when getting started, but CMake's learning curve is far shallower than raw Make. Autotools offers crossplatform support, but complaints exist concerning efficiency and quirks on Windows, especially with Visual Studio. CMake actually generates a build system in another standard. It's stable, fast, can generate make files for unix, windows, osx, cygwin, as well as ide project files for Visual Studio, codeblocks, xcode and many other ide's.

Scons is a fun alternative. While measurably slower than cmake, I'm a sucker for anything that lets me script in python. Having said that, the Apache Cordova project is using node.js for its scripting needs. Tremendously more efficient than writing bash/bat scripts, easy to maintain, stable and fast enough. If I want to do any kind of scripting, I tend to write it in js these days. 

For general automation, node.js has become the fastest way I've found to write scripts of arbitrary complexity.

Which one to use is largely application dependant. With large software projects, you may don't have a choice. When starting a new project which just needs a build system, CMake is fast, simple, and insures future cross platform, and scales with your project.  
