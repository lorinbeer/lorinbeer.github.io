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

## Makefiles Skeletons
-  [C Makefile]()
-  [CPP Makefile]()

## Makefile Papers
[Recursive Make Considered Harmful](http://miller.emu.id.au/pmiller/books/rmch/)

## [Makefile Utility Functions](http://www.gnu.org/software/make/manual/html_node/Functions.html)

### $(subst from,to,text) and $(patsubst pattern,replacement,text)
replace from/pattern with to/replacement in text
patsubst looks for whitespace separated words in text which matches pattern. There is an escapable wildcard character '%',  which matches any number of characters in a word. If '%" is also present in the replacement, it will replace the first occurence of from in a word with replacement. Otherwise, it replaces the entire word if the pattern matches a part of a word.
subst replaces every occurence of from with to in text

$(subst .c, .o, text) is therefore equilavent with $(patsubst %.c, %.o, text)

### $(wildcard pattern)
returns a space separated list of all files which match the pattern

### $(dir names) and $(notdir names)
returns a space separated list of either directory portion or the file portion of a space separated list of file paths

### $(call name, param1, param2, ...)
create new function $(name param1 param2 ...)

## Makefile Macros

### $@
name of the current target

<pre class="brush:plain;gutter:false;">
foo: foo.c
	gcc foo.c -o $@
bar: bar.c
	gcc bar.c -o $@
</pre>

will produce foo.o and bar.o respectively

### $?
all dependencies more recent than the target


