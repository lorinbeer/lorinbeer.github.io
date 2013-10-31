---
layout: post-code
title: Makefile Tutorial 
subtitle: 
category: tutorial
tags: make 
series: Make Systems 
anchor: http://i.imgur.com/x2KQxAo.jpg 
quotation: A good plan violently executed now is better than a perfect plan executed next week.
attribution: George S. Patton
---



# Yet another makefile tutorial
expressing learned knowledge and skills in a manner understandable to others is an essential part of moving past understanding and towards groking. Or at least that's what I'm claiming.
If you want something more highbrow, http://www.gnu.org/software/make/manual/make.html.

## what is a makefile
a makefile is a set of rules describing how to compile and link a program, as well as the execution of various utility commands

## what is a rule
    /<target/> : /<prerequisites/>
        /<recipe/>
        ...
        ...

    /<target/> is the output file
    /</prerequisites/> are the files that /<target/> depends on as input
    /</recipe/> is the action or actions taken to generate /<target/>

A recipe, therefore explains not only how to build a target, but when to rebuild it as well. If a /<prerequisite/> has been altered since the last build of /<target/>, then /<target/> must also be rebuilt. While irrelevant when there is a small number of rules, large projects save tremendous amounts of compilation time by only rebuilding what has changed since the last build.

It is possible to write rules with no prerequisites. This enables rules like 'clean' to be written which support compilation of a program. This also enables makefiles to be used as a general purpose syntax for writing shell macros. There are good reasons not to do this, the most pertinent being that there are better alternatives. Instead, it can be used as a convenient way of grouping related functionality together. Generally speaking, however, makefiles can offer a convenient method of scripting any time-stamp based maintenance scripts.

## making makefiles smarter
or dumber, if abused

there is a heavy amount of data duplication in the example above, which just gets worse as the makefile grows: the list of dependencies in the /<prerequisite/> list and the /<recipe/> list. First rule of programming is to limit data duplication. We can use variables to eliminate this duplication.

    OBJECT_FILES = obj-1.o obj-2.o obj-3.o ...

our rules can reference variables like

out : $(OBJECT_FILES)
    gcc -o out $(OBJECT_FILES)

### the implicite rule
make can deduce that a '.o' file depends on a corresponding '.c' file provided they share the same name. These will be compiled with 'cc -c'

## Common pitfalls

### the default goal
never put anything but the primary compilation target at the top of the file. When run without argumenst, make will take the first rule as the default. 

### don't link object files
-c "compile only" directive should be placed for each compile target except for the final executable

### tabs only
whitespace won't cut it, tabs or fail. Make sure that any indented lines begin with an actual tab character, and not the equivalent in other whitespace characters.
:set noexpandtab in vim to prevent expansion of tabs if you have that set.
 
