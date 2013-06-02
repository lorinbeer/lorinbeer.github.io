---
layout: post-code
title: VATEDROID - Part 1
subtitle: Compiling V8 for Android
category: tutorial
tags: vatedroid
series: vatedroid
anchor: http://i.imgur.com/sRjPGlR.png
---

Compiling V8 for Android


Aristotle, Aristotle was a bugger for the bottle,
Hobbes was fond of his dram,
And Rene Descartes was a drunken fart: "I drink, therefore I am"
Yes, Socrates, himself, is particularly missed;
A lovely little thinker but a bugger when he's pissed
- Bruces' Philosophers Song, Monty Python
Intro

This is the last 'pint of sweat' article before we can get down to the nasty business of actually using V8 in an Android project. I recommend doing this thing in a linux environment. If you don't have a dedicated linux box, setting up an Ubuntu Virtual Machine is probably the lesser of two pains in the ass versus setting up the necessary tools on Windows.
It's Dangerous to go alone! Take this!


 On Linux based systems
 On Windows
Let's do this thing!

1. Obtain the source
We want to consume v8, not contribute (yet), so we don’t need the full checkout, which includes all branches and history
$ git clone git://github.com/v8/v8.git
this won't be instantaneous, in the mean time: you can find more information on V8's bleeding-edge-branch on the official wiki 

 2. install necessary dependencies for the build process
$ make dependencies
this will checkout and build the gyp tool (Generate Your Projects!) 
3. define ANDROID_NDK_ROOT
the V8 make script looks for an environment variable called ANDROID_NDK_ROOT, which we need to define
$ ANDROID_NDK_ROOT="/Users/name/path/of/droid/sdk"$ export ANDROID_NDK_ROOT$ echo ANDROID_NDK_ROOT
running:
$ echo $ANDROID_NDK_ROOT
on my system yields:
/Users/lorin/dev/sdks/android-ndk-r8e

4. compile android for arm
$ make android_arm.release -j16
android_arm.release or android_arm.debug specifies the make target 
 -j16 is makes 'jobs' flag
5. sit back and enjoy a long list of o’s
the build tools will construct a number of object files. the -j flag specifies the number of threads which compile the source. Depending on your system specs, the full compile can take anywhere from 2 to 10 minutes
6. find the static libraries
surprisingly, this was the most unclear step: finding where the hell gyp put the v8 static libs. Buried in the 1000 line output from make is the directory to where the static libs are kept
easiest way is to run: 
    $ find . -name \*\.\a 
This will recursively locate any files with the .a extension in from the current directory down
the find should spit out about 14 lines. The two main directories of interest are:
/out/android_arm.debug/obj.target/tools/gyp/
and
/out/android_arm.release/obj.target/tools/gyp/
7. Backup the compilation results 
The particular files of interest in either debug or release directories are:
libv8_base.a    libv8_nosnapshot.a    libv8_snapshot.a
copy both the debug and release versions somewhere sane 
What's this snapshot business? 

libv8_base.a will be included in anything we do with V8, but we have the option of snapshot or no snapshot, running stat on both
$ stat -x libv8_snapshot.a     $ stat -x libv8_nosnapshot.a
we see that nosnapshot clocks in at 273 364 bytes
snapshot clocks in at 658 732 bytes
That's a hefty difference when it comes down to packaging them in a mobile app!
The snapshot provides initialization optimization, something we’ll explain more when we get to using V8 in the next post!

Pitfalls

ANDROID_NDK_ROOT
when attempting to execute make android_arm.release -j16 if you see something like:
Makefile:282: *** ANDROID_NDK_ROOT or ANDROID_TOOLCHAIN must be set. Stop.
make: *** Waiting for unfinished jobs....
go to step 3

 Cannot find Android Toolchain
when attempting to execute  make android_arm.release -j16 if you see something like:

Makefile.android:70: *** Cannot find Android toolchain in "android-ndk-r8e/toolchains/arm-linux-androideabi-4.6/prebuilt/darwin-x86".  Stop.make: *** [android_arm.release] Error 2
my encounter with this was after setting up my dev environment on a new machine. 
The problem is that make android_arm.release expects the 32bit version of the ndk. If you have installed the 64bit version of the ndk, install the 32bit version and point ANDROID_NDK_ROOT to it instead. Looking at the Makefile.android, it may be possible to compile v8 with the 64 bit version of the ndk, but it doesn't look like it's worth the hassle.

