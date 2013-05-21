---
layout: post-code
title: VATEDROID - Part 2
subtitle: Linking V8 to your Android application
category: tutorial
tags: vatedroid
series: vatedroid
anchor: http://i.imgur.com/sRjPGlR.png
quotation: It is a mistake to look too far ahead. Only one link of the chain of destiny can be handled at a time.
attribution: Winston Churchill
---

Fuck off, Winston.
- unattributed

#Some Introductions

Before we can get V8 talking with our Android app, some introductions are in order: we need to tell the Android build tools to link V8 to our app. There isn't much information in this tutorial that isn't applicable to linking a static library to an Android app through the NDK.

#Reading Ahead

You can replicate the coding steps in this tutorial manually, or follow along step by step by checking out the tags in the accompanying tutorial branch in vatedroids github repo.
Check out the other things vatedroid is doing by looking at the master development branch.

#It's Dangerous to go alone! Take this!

* a clone of the vatedroid github repo, specifically the tutorial branch
--update--
I've created a stand-alone repo for the tutorial branch of vatedroid
the primary development of vatedroid will continue to be in the main git repo
<pre class="prettyprint">
git clone https://github.com/lorinbeer/vatedroid-tutorial.git
cd vatedroid-tutorial
</pre>
* the Android SDK installed and on your path
this tutorial written and tested with the mac x86 64 20130219 bundle
* the Android NDK installed and on your path
this tutorial written and tested with r8e
* V8 static lib files
tested with the bleeding edge branch of V8
If you don't have any of the above, check out the preceding articles in this series

#Let's do this thing!

##1.A turn the vatedroid-tutorial repo into an android project
After cloning repo and entering the vatedroid-tutorial directory:
<pre class="prettyprint">
android update project -p . -n VATEDROID -t android-14
</pre>
##1.B create an android project
with the command line tool:
<pre class="prettyprint">
android create project \ 
--target android-17 \
--name VateDroid \
--path vatedroid \
--activity VateDroidActivity \
--package com.vatedroid
</pre>
you can read more about the android cli here. The short end of it is this specifies an android os target, project name, path to project root, name for the main activity class and package.
for a list of targets installed on your system, type:
android list targets
to install additional OS targets, run android and select which components you wish to download.

##2. Copy the V8 lib files
Remember those v8 static lib files you lovingly crafted in Part 1 of this series? No?
Well, you can complete the steps in the previous tutorial.
Or download precompiled version here.

Regardless of source, copy the V8 lib files to the /libs folder in your project root directory

##3. Copy the V8 header files
Note: the V8 Header files are included in the vatedroid repo. If you based your project off vatedroid-tutorial then no need to copy these over

The static libraries included in the previous step will be built into our app, allowing us to use them at runtime. To compile our V8 consuming code in the first place, we need the V8 headers.
Copy the contents /include directory in the root of the V8 source code to the /include directory of your android project root directory.
mkdir /path/to/your/app/include 
cp /path/to/v8/include/* /path/to/your/app/include

##4. Create /jni
by the method of your choice, create a jni directory in the root of your project
mkdir jni
the Java Native Interface is the framework which allows Java code to call and be called by native code (C/C++). A comprehensive overview of the JNI is a tutorial series in of itself. We'll be covering the bare minimum to get up and running with V8.

##5. Create C++ and make files
<div class="follow" onclick="window.open('https://github.com/lorinbeer/vatedroid/tree/p2s5', '_blank')">
  <span>follow-along: $ git checkout p2s5</span>
</div>


create the C++ implementation files
touch vatedroid.h 
touch vatedroid.cpp
create a makefile for our jni module in the /jni folder
touch Android.mk
leave these emtpy for now 

##6. Write VateDroid skeleton 
<div class="follow" onclick="window.open('https://github.com/lorinbeer/vatedroid/tree/p2s6', '_blank')">
  <span>follow-along: $ git checkout p2s6</span>
</div>

I recommend checking out the relevant tag in VateDroid's github repo ensufire_tutorial branch, but if you insist on doing this manually...

add the following to jni/vatedroid.h:

<pre class="prettyprint">
"
#ifndef _VATEDROID_H
#define _VATEDROID_H
#include &#60;jni.h&#62;
#include &#60;v8.h&#62;
#include &#60;android/log.h&#62;
extern "C" jstring Java_com_vatedroid_VateDroidActivity_feedVatedroid(
    JNIEnv * env, 
    jobject obj, 
    jstring name, 
    jstring message);
#endif // _VATEDROID_H
"
</pre>

Here, we include the jni and v8 headers, a header for android logging, and define a singe function which accepts to java strings as input, and will return a java string as output. The JNIEnv and jobject variables are part of the jni spec, and we'll get into that later.

and the following to jni/vatedroid.cpp:

    #include "vatedroid.h"
    extern "C" jstring Java_com_vatedroid_VateDroidActivity_feedVatedroid(
        JNIEnv * env,
        jobject obj,
        jstring name,
        jstring message) {
        jstring retval = env-&#62NewStringUTF("stubbywub");
        return retval;
    }



simple enough, we ignore all arguments, except for env, which we use to create a new string, and return it.

##7. Write a make file
<div class="follow" onclick="window.open('https://github.com/lorinbeer/vatedroid/tree/p2s7', '_blank')">
  <span>follow-along: $ git checkout p2s7</span>
</div>

open the Android.mk file with your choice of editor and add the following

<pre class="prettyprint">
LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)
LOCAL_MODULE    := v8_base
LOCAL_SRC_FILES := ../libs/libv8_base.arm.a
include $(PREBUILT_STATIC_LIBRARY)

include $(CLEAR_VARS)
LOCAL_MODULE    := v8_nosnapshot
LOCAL_SRC_FILES :=  ../libs/libv8_nosnapshot.arm.a
include $(PREBUILT_STATIC_LIBRARY)

include $(CLEAR_VARS)
LOCAL_MODULE    := vatedroid
LOCAL_SRC_FILES := vatedroid.cpp
LOCAL_C_INCLUDES := $(LOCAL_PATH)/../include
LOCAL_LDLIBS    := -llog -landroid
LOCAL_STATIC_LIBRARIES := v8_base v8_nosnapshot
include $(BUILD_SHARED_LIBRARY)
</pre>

Android makefile malarky is outside the scope of this tutorial. We won't be changing this much. For our purposes, copy it in and forget about it. For the curious, the ndk comes packaged with makefile documentation, you can read more starting in /docs/NDK-BUILD.html of the NDK root directory.

##8. Build the project

8.1 build the ndk module with
ndk-build 
8.2 build the project with
ant debug  
or 
ant release
You should receive see something like:

Compile++ thumb  : vatedroid <= vatedroid.cpp
SharedLibrary  : libvatedroid.so
Install        : libvatedroid.so => libs/armeabi/libvatedroid.so


##9. Push to a device or simulator
You should see the android "Hello World" default app.

If your reading this, and have gotten this far, I'm going to assume you're familiar with droid development. Otherwise, there are lots of good guides and tutorials on setting up a droid simulator and running an app.

#That's a Wrap!

We've got everything lined up to compile a V8 consuming Android App. Note that we are currently not instantiating any V8 classes or calling any V8 code from the ndk stub, nor are we calling our ndk module from Android Java. These are rather complicated tasks, and there are many nuances to both the V8 api and the JNI. You should read that last sentence as: they are the intersection of complex APIs and crappy documentation.

#Pitfalls

###Always include a min-sdk entry in AndroidManifest.xml

You could get:

<pre class="prettyprint">
.../android-ndk-r8e/build/gmsl/__gmsl:512: 
*** non-numeric second argument to `wordlist' function: ''.  Stop.
</pre>

when running <code>ndk-build</code>

High-larious, Android.
This error is due to not supplying a min-sdk version in the AndroidManifest.xml. 
There are, in fact, half a dozen weird errors I've come across in a wide variety of Android api's caused by not including a min-sdk version. 
And which are a P.I.T.A. to debug. 
Include a min-sdk entry in the Android Manifest. 
Always.
