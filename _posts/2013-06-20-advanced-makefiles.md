---
layout: post-code
title: Makefile Refresher
category: tutorial
tags: buildsystems 
series: buildsystems
anchor: http://i.imgur.com/x2KQxAo.jpg 
quotation: A good plan violently executed now is better than a perfect plan executed next week.
attribution: George S. Patton
---

build systems are like calculus or physics formulas: the time inbetween uses is just enough time that you've forgotten everything you knew. All you need is a quick refresher, and this is mine.

## Basic Makefiles
-  [C Makefile]()
-  [CPP Makefile]()

## Makefile Papers
[Recursive Make Considered Harmful](http://miller.emu.id.au/pmiller/books/rmch/)

## Makefile Macros

### $@
name of the current target
    foo: foo.c
        gcc foo.c -o $@
    bar: bar.c
        gcc bar.c -o $@

will produce foo.o and bar.o respectively

### $?
all dependencies more recent than the target


