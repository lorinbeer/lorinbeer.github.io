---
layout: post
title: VATEDROID - Part 0 - SDKs and NDKs
subtitle: Setting up an Android Development Environment
category: tutorial
tags: vatedroid
series: vatedroid
anchor: http://i.imgur.com/hEYjdt8.png
quotation: A pint of sweat, saves a gallon of blood.
attribution: George S. Patton
---

# It's Dangerous to go alone! Take this!

<p class="subheading"><a href="http://developer.android.com/sdk/index.html" target="_blank">Android SDK</a></p>

The Android SDK provides you with the API libraries and developer tools necessary to build, test, and debug apps for Android.

<p class="subheading"><a href="http://developer.android.com/tools/sdk/ndk/index.html" target="_blank">Android NDK</a></p>

The NDK is a toolset that allows you to implement parts of your app using native code: C and C++.

# Why we need it

V8 is written in C++ and we will be compiling to a static library with Android as the platform target. In order to do that, we will need the Android SDK and the NDK. 
In order for our apps to link against C/C++ static libraries (C Standard Library, STL, V8, etc) we will need the NDK.

The Android Native Development Kit adds an additional layer of complexity for the developer, and the NDK Developers page claims most apps will not receive any benefit (performance or otherwise) from its use. While I normally believe anything I read on the internet, we will be exploring this claim as well

# NDK and SDK Setup

## Android SDK Setup

* <p><a href="http://developer.android.com/sdk/index.html" target="_blank">Download the ADT Bundle</a></p>
<p class="note">
    The Android Dev Portal will make sure you get the correct version for your OS. Otherwise, click the "Download for other Platforms" link.
</p>
* <p><a name="reasonable">Unzip to a reasonable location</a></p>
<p class="note">
    I typically keep all my sdks in a common folder, like  /Users/lorinbeer/dev/sdks
</p>
* add the tools folder to your path, see the last section if you don't know how
<p class="note">
    this will enable us to run the android and adb tools from the command line without specifying their location
</p>

## Android NDK Setup

* <p><a href="http://developer.android.com/tools/sdk/ndk/index.html" target="_blank">Download the NDK Bundle</a></p>
<p class="note">
    the Android Dev Portal will make sure you feel like your doing something wrong by thinking about developing a mobile app in native code. Ignore the intro and download the appropriate package for your system.
</p>
* <p><a href="#reasonable">unzip to a reasonable location</a></p>
<p class="note">
    same as above, after your 15th sdk installation, putting them in a common folder will begin to look like an attractive option for keeping things organized
</p>
* add the root folder to your path
<p class="note">
    this will enable us to run the ndk tool from the command line without specifying its location
</p>

# Adding Directories to your PATH

<details>
    <summary> 
        <span class="subheading">In Unix-like Environments</span>
    </summary>

    <p>The path environment variable on unix-like environments is a colon delimited string</p>
    <h3>Method 1:</h3> <span>export PATH</span>
        <ul>
            <li><span class="code">$ export PATH=$PATH:/path/to/my/dir</span></li>
            <li><span class="code">$ echo $PATH</span></li>
        </ul>
    <p>where <span class="code">/path/to/my/dir</span> is the absolute path to the directory you wish to add to the PATH</p>

    <p class="note">Note: the modified PATH will only exist in this shell window's environment, and changes will be lost when it is closed</p>


    <h3>Method 2:</h3> <span>add an entry to the personal initialization file (.bash_profile, .bashrc or .profile) in your home directory</span>
    <p>open one of the above initialization files with your favoured editor</p>
    <ul>
        <li><span class="code">$ vim .bash_profile</span> or <span class="code">$ nano .bash_profile</span></li>
        
        <li>add an entry to the bottom of the file</li>
        <span class="code">PATH=$PATH:/path/to/my/dir</span> where <span class="code">/path/to/my/dir</span> is the absolute path to the directory you wish to add to the PATH
        
        <li>save the file</li>
           
        <li>restart the shell</li> 
    </ul>
<p>Note: method 2 insures that these directories are always searched when executing commands whenever you open up a new shell window. On OS X, I set my PATH environment variable in /Users/myusername/.profile</p>
</details>

<details>
    <summary>
        <span class="subheading" >On Windows</span>
    </summary>
    <p>the windows path is a semicolon delimited string:<span>    C:\Program Files;C:\WINDOWS;C:\WINDOWS\System32</span></p>
    <ul>
        <li>Select System from the control panel or right click  My Computer and select properties</li>
    
        <li>Select the Advanced System Settings tab</li>
        
        <li>Select the Environment Variables button</li>

        <li>add ;/path/to/my/dir to the path variable using a tiny edit box that hasn't changed since windows 3.11</li>
    </ul>
</details>

# That's a Wrap
We should have our Android development environment all set up, and ready to compile V8. Stay tuned for Part 1: Compiling V8 for Android!
