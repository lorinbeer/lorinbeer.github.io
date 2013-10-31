---
layout: post-code
title: CMake Quickstart
subtitle: quickstart 
category: tutorial
tags: buildsystems 
series: buildsystems
anchor: http://i.imgur.com/x2KQxAo.jpg 
quotation: A good plan violently executed now is better than a perfect plan executed next week.
attribution: George S. Patton
---


## Intro
While being able to read Makefiles is an important skill, using Make directly is probably not the most efficient use of time. Automation tools such as Ant, autotools, scons, and CMake provide another layer of abstraction over the build process. This layer of abstraction provides easier to use/read api's, dependency checking, as well as cross platform and cross compilation support.

CMake has a slight learning curve to it, and some rather dense documentation. Here's a quicksart guide for getting up and running with a basic CMakeLists.txt (config) file for a simple C project.

[The only real downside to CMake is that it usually needs to be installed, and is probably not shipped by default on a given platform.](http://www.cmake.org/cmake/resources/software.html)

## TL;DR

[here's a basic c project skeleton with cmake](http://github.com)

## basic setup on linux platforms
for a trivial project, two lines is all you need
<pre class="brush:cpp;gutter:false;">
project (HelloWorld)
add_executable(HelloWorld helloworld.c)
</pre>
next, run the following in the root of your project
<pre class="brush:bash;gutter:false">
$ cmake .
</pre>
this will generate a makefile build system a simple project. Afterward, running 'make' will build your project

## linking against an external library
### include_directories
specify an additional directory for the compiler to search for include files
<pre class="brush:cpp;gutter:false">include_directories("include")</pre>

### link_directories
specify an additional directory for the linker to serach for libraries
<pre class="brush:cpp;gutter:false;">link_directories("lib")</pre>

### add_library
adds a library to the compilation queue of this project
<pre class="brush:cpp:gutter:false">add_library(submoduleA asubmodule.c)</pre>
much like add_executable, will generate object files for submoduleA. CMake works out source dependencies and linkage relationships.

### target_link_libraries
<pre class="brush:cpp;gutter:false;">target_link_libraries(HelloWorld asubmodule)</pre>
linking against both external and iternal libraries is the same, it just needs to be on the linkers search path. 

### add_subdirectory
generally, a single CMakeLists.txt specifies for a single executable. You can specify a subdirectory with:
<pre class="brush:cpp;gutter:false;">add_subdirectory(asubmodule)</pre>

[this example project shows all you need to setup a basic project](http://github.com)

## Usefule functions
###cmake_minimum_required
specify the minimum version of cmake required
<pre class="brush:cpp;gutter:false">cmake_minimum_required (VERSION 2.6)</pre>
### set compiler flags
we can set arguments to specific compilers with:
<pre class="brush:cpp;gutter:false;">
SET(GCC_LINK_FLAGS  "-std=c11 -Wall")
SET(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} ${GCC_LINK_FLAGS}")
</pre>
the fist SET declares a new variable "GCC_LINK_FLAGS" and initializes it with our string of flags we want to send to the linker

the second SET modifies the cmake environment variable CMAKE_C_FLAGS, by concatenating it and our custom flags

