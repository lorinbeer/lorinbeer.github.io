---
layout: post-code
title: VATEDROID - Part 3 
subtitle: Executing JavaScript in V8 
category: tutorial
tags: vatedroid
series: vatedroid
anchor: http://i.imgur.com/sRjPGlR.png
quotation: A good plan violently executed now is better than a perfect plan executed next week. 
attribution: George S. Patton
---

#Intro
Wherein we instantiate a V8 context and violently execute some good javascript.<br />
Well, it's decent javascript.<br />
Well, it's ok.<br />
We're keeping this one short and sweet. The previous articles have been long by necessity, but now we can slowly build up functionality without too many modifications.

V8 is a complex piece of software architecture, and discussing all the nuances of development would bloat this article. We'll be doing a companion series on developing with V8 which will expand on the V8 code seen here, so stay tuned for that.


#It's Dangerous to go alone! Take this!
* a clone of the vatedroid github repo, specifically the tutorial branch
<pre class="prettyprint">
git clone https://github.com/lorinbeer/vatedroid.git
cd vatedroid
git branch --track tutorial origin/ensufire_tutorial
git checkout tutorial
</pre>
* a working knowledge of the C/C++ language

we'll be dealing with well commented code, and explaining both the V8 and JNI portions explicitly. If you know JavaScript, you'll probably be able to puzzle through the C/C++ stuff.

* the previous steps of this tutorial completed

don't stress on this too much, but having the Android SDK and Android NDK setup wouldn't hurt


#Let's do this thing!

##0. In the last exciting episode of VATEDROID...
<div class="follow" onclick="window.open('https://github.com/lorinbeer/vatedroid/tree/p2s7', '_blank')">
follow-along: $ git checkout p2s7
</div>

Part 2's cliffhanger left us with a compiled Android NDK module referencing the included V8 libraries, but no instantiation of V8 classes and no JNI hooks into Android Java. 

Check out the p2s7 tag in the vatedroid tutorial branch.

##1. Modify the VATEDROID main activity
<div class="follow" onclick="window.open('https://github.com/lorinbeer/vatedroid/tree/p3s1', '_blank')">
<span>follow-along: $ git checkout p3s1</span>
</div>

we defined a JNI style c function called feedVatedroid in the vatedroid module

###include the vatedroid module as static block inside VateDroidActivity

<pre class="prettyprint">
static {
    System.loadLibrary("vatewrap");
}
</pre>

###define a mirror function the single vatedroid function in the native module

    private native String feedVatedroid(String name, String code);

execute the function and log value

<pre class="prettyprint">
String result = feedVatedroid(
    "VateDroid Activity", 
    "function concat(x,y){ return x+y; } concat('foo','bar');");
Log.d("VATEDROID ACTIVITY VATEDROID 'PRODUCED' RESULT", result);
</pre>

VateDroidActivity should look something like

<pre class="prettyprint">
public class VateDroidActivity extends Activity
{
    // static initializer loads native library
    static {
        System.loadLibrary("vatedroid");
    }
    // native instance method declaration
    private native String feedVatedroid(String name, String code);
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        String result = feedVatedroid("VateDroid Activity", "var blank;");
        Log.d("VATEDROID ACTIVITY VATEDROID 'PRODUCED' RESULT", result);
    }
}
</pre>

What this does
The previous is a general usage of the JNI on the Android platform. C style functions are implemented in a native library and compiled by the NDK. The Android Java side includes these libraries with the static syntax above, and declares functions which look for a native implementation, rather than a local java one.

Run this code on a device or simulator and see the results on the console log with 

<pre class="prettyprint">
$ adb logcat
</pre>

Complexity requires harsh environmental legislation (modularization)
Note the total lack of anything V8 related here: complexity is a pollutant in software. We're going to limit V8's complexity to the native implementation. Android Java will know nothing of what is actually running the javascript it feeds into the jni api it uses; it'll just expect a native implementation following a certain loose api: provide code, expect results.


##2. Turn the key
<div class="follow" onclick="window.open('https://github.com/lorinbeer/vatedroid/tree/p3s2', '_blank')">
follow-along: $ git checkout p3s2
</div>

It's time to get V8 running. vroom. vroom.

declare a global persistent V8 context
add the following global variable to vatedroid.cpp

<pre class="prettyprint">
v8::Persistent&#38;lt;v8::Context&#38;gt; PrimaryContext;
</pre>

A <code>V8::Context</code> is a javascript execution environment. This allows a single instance of V8 to execute multiple, independent js applications.

A <code>V8::Persistent</code> class is a template class which instructs the V8 garbage collector to leave the wrapped object alone until specifically told to destroy it.

declare an initVatedroid function
the code gets more verbose as we move forward. Follow the links to github or checkout the repo to see the full implementation.

<pre class="prettyprint">
extern "C" void Java_com_vatedroid_VateDroidActivity_initVatedroid(
    JNIEnv * env, 
    jobject obj) ;
</pre>

and add the following to initVatedroid

<pre class="prettyprint">
using namespace v8;
HandleScope localscope;
Local&#38;lt; ObjectTemplate &#38;gt; global = ObjectTemplate::New();
PrimaryContext = Context::New(NULL, global);
</pre>

Line by line:
1. means we can drop the v8:: scope resolution specifier from the start of every reference to a v8 class or variable. You can put this on any scope level, currently this will only effect the initVatedroid function
2. handle scopes are stack allocated classes which govern any localscope handles 
3. a local object template which will represent our global object in the main context we are creating
4. instantiate the primary context we declared at the top level of the file, using the Object template in line 3 as it's global object

3 lines of V8 API code and there is a lot to take in. The important thing to take away is that you need to pay very close attention to what scope your v8 objects are declared in. You'll see the ObjectTemplate do more and more as our tutorial progresses

add the initVatedroid hook to the main activity
private native void initVatedroid();

and call it from onCreate

    initVatedroid();

again, I'm avoiding pasting the entire file here. This is no different than the feedVatedroid function we defined earlier, except that it accepts and returns nothing.

##3. Expand feedVatedroid
<div class="follow" onclick="window.open('https://github.com/lorinbeer/vatedroid/tree/p3s4', '_blank')">
follow-along: $ git checkout p3s4
</div>

the code below is the important bits from the feedVatedroid function, this takes it from a stub to a function which accepts a string from Java, compiles it to a v8 script and executes it a v8 context. 

<pre class="prettyprint">
Handle&#38;lt;String&#38;gt; nme = String::New(env-&#38;gt;GetStringChars(name, &#38;isCopy));
Handle&#38;lt;String&#38;gt; cmd = String::New(env-&#38;gt;GetStringChars(message, &#38;isCopy));

Handle&#38;lt;Script&#38;gt; script = Script::Compile(cmd, nme);
if (script.IsEmpty()) {
    return env-&#38;gt;NewStringUTF("Error: Script is empty!");
}
Local&#38;lt; Value &#38;gt; result = script-&#38;gt;Run();

String::Utf8Value retstr(result);
retval = env-&#38;gt;NewStringUTF(*retstr);
return retval;
</pre>

it's getting complicated but the gist is this:
We convert the JNI strings to V8 strings
We compile the 'message' string to a V8 Script
We run the V8 script inside the V8 context created in initVatedroid
We convert the return value from the script to a jstring, and return to caller

there's a bit more to it, in the file, you can see an error handler which will print any exceptions thrown by the javascript we are trying to execute

Running this code will yield a log message
VATEDROID 'PRODUCED' RESULT(11200): undefined
This is because our message didn't return anything!

##4. Toss in some JavaScript
<div class="follow">follow-along: git checkout p3s4</div>
let's violently execute a plan

change the message sent to vatedroid to:
<pre class="prettyprint">
function main() {
    var nothing = "foobar";
    return nothing;
}
</pre>

like so:

<pre class="prettyprint">
String okjs = "function main() { var nothing = \"foobar\"; return nothing; } \n main();";
String result = feedVatedroid("VateDroid Activity", okjs);
</pre>

##5. Run on device or simulator
launch!
Running the app will produce something like:

    VATEDROID 'PRODUCED' RESULT(11296): foobar

##That's a Wrap!
There's a lot to do from here. Next issue will deal with moving the V8 executing to a separate thread, then we can profile!


