# Node.js

---

## What is node.js?

node.js is a JavaScript that runs on backend.

It is well-known that Javascript was invented to run on a browser (it is the language of the web), but in time, thanks to huge popularity of web browsers/applications JavaScript evolved from that tiny language to run in browser to a huge ecosystem, for which node.js play an important role.

node.js could be used to:

- start a http(s) web browser
- call http exposed services (REST service)
- read/write content on the filesystem
- create and manage OS processes
- write/query data to/from databases (RDBMS or NoSQL)
- and a lot more...

The runtime of node.js is based on Google's V8 Javascript Engine.
This is the same engine used by Google's Chrome JS runtime.

## node.js Installation

Node.js supports a wide range of operating system including Windows, MacOS and linux.

### Installation on MacOS

My preferred way of installing software on macOS is using the Homebrew (node.js is no exception to this).
Thanks to this package manager is simple to install/uninstall/upgrade packages on macOS.

Follow the steps below to install Homebrew and node.js on MacOS machines.

1. Home brew is written in Ruby, thus Ruby has to be installed. But ruby (2.0+) is included by default in macOS releases since El Capitain (10.11).
   Test the installation of ruby.

```sh
    $ ruby --version
```

2. Install Homebrew

```sh
   $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

3. Test the brew installation

```sh
   $ brew --version
```

3. Install node.js

```
   $ brew install node
```

4. Test the installation of node.js and npm

```sh
   $ node --version
   $ npm --version
```

> **Notes:**
>
> This book is based on node version 8.11.3 and npm version 5.6.0 on macOS. I assume newer versions of both work fine with book's examples.
>
> To use other ways of installing node.js (on different platform) please go to [node.js packages](https://nodejs.org/download/release/) and chose the one suitable for your OS (.msi for windows and .pkg for macOS).
>
> Another way of installing node/npm is using node version manager (nvm). Using nvm different versions of node.js can be installed and used. It is useful to see how a node.js application is performing using different versions.
>
> Moreover, node.js can also be installed from source code but this requires a C/C++ compilers, python 2.7 and GNU Make installed on machine. See [here](https://github.com/nodejs/node/blob/master/BUILDING.md) for further information of node.js installation from source.

### Using node.js REPL

A very useful tool for any modern language is the Read Eval Print Loop console.
It allows to write/experiment simple snippets of code.
I don't know if the term was already coined by somebody else, but I call this way of testing small piece of code in REPL **Experimental Driven Develoopment**.
See a simple add function tested in node.js REPL.

1. Start the REPL console

```sh
   $ node
```

2.  In the prompt mode `>` we define the javascript function add and call it.

```text
    > function sum(a, b) {
    ... return a + b;
    ... }
    undefined
    > console.log(`sum(1,1)=${sum(1,1)}`);
    sum(1,1)=2
    undefined
    > sum
    [Function: sum]
    > sum.toString
    [Function: toString]
    > sum.toString()
    'function sum(a, b) {\nreturn a + b;\n}'
    >
```

As you can see as soon as ENTER is hit after a valid javascript expression the value of the expression is returned. In this case we see two undefined, the type function and the function definition.

Moreover the `node` tool allows to run a snipet of code inside of file.
Considering we have the following JS code in the test.js file.

```javascript
    function add(a, b) {
        return a + b;
    }

    const result = add(1, 2);
    console.log(`result=${result}`);
```

we can run the following command in the test.js directory

```sh
    $ node test.js
```

and the outcode is

```test
result=3
```

> To exit from REPL prompt there are 2 options:
>
> 1. press ctrl-c twice
> 1. type .exit

## Node modules

<span style="color:red">TBD</span>
