# **Chrome extension**

---

Recently I find out a place where Javascript is extremely useful as well. This is browser (chrome) extensions.
The browser is the tool anyone of us is using most of the time.
It became more and more performant and more and more complete.
But, of course, it could lack the special functionality one can require.
For me this was the case, I needed a special functionality - an extension to improve the polymer/web components mock based testing.
I will explain, gradually, in this chapter how to create a chrome extension from hello chrome extension world to the mock-enhancer extension.

**The requirements for the mock-enhancer chrome extension:**

- find out a specific site cookies and modify/create it with a value provided by user (combo box)
- find out the tab with a specific URL (the mocked application) and refresh it
- create an extension option to setup the gitlab personal token
- checkout a specific file from gitlab
- store and retrieve from <span style='color:red'>sync store</span> the gitlab personal token
- (bonus) create a shortcut for the chrome extension popup
- (bonus) create a shortcut to duplicate the current tab

Another important aspect that I'm going to talk about is debugging a chrome extension

## <span style='color:#61AEEE'>**Hello chrome extension world application**

## <span style='color:#61AEEE'>**How to structure the extension**

## <span style='color:#61AEEE'>**Create/update a site cookie**

## <span style='color:#61AEEE'>**Find out a tab, make it current and refresh it**

## <span style='color:#61AEEE'>**Create a chrome option**

For this extension it is required to fetch a file from gitlab. In order to use the gitlab REST API the Gitlab personal token is require.
See [here](htttp://todo.com) <span style='color:red'>how to generate the gitlab personal token</span>

To allow the user to setup his/her gitlab personal token the best way of doing this is through <span style='color:red'>continue from here</span>

## Store/retrieve information to/from <span style='color:red'>sync store</span>

## <span style='color:#61AEEE'>**How to use an js library using ES 6 module**

## <span style='color:#61AEEE'>**How to debug a chrome extension**

It is a given the fact that there a quite many moments when an application doesn't work the way we like.
In this moments it is important to now how to debug the extension.

### <span style='color:#61AEEE'>**Print information to the console**

The first and most straightforward way of doing this is to see log the information in the chrome console.
But unfortunately this doesn't work the way we know when developing web application.

### <span style='color:#61AEEE'>**Developer tool for the backgroung page**

The entry point of extension is backgroung page. So there are many times we want to inspect it. In order to do this we need to:

- go to `chrome://extensions`

![extension panel|427 × 246,50%](./images/chrome_extensions/extension_panel.png "extension panel")

- in the extension panel click on the background page
  Having developer tools open we can inspect any elements related to the background script.
  Any console.log in the background script are displayed in developer tools console

  <span style='color:red'>show the code in backgroung.js with console.log

  <span style='color:red'>show the console in developer tools with the logged information
