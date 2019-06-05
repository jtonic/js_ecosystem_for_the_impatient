# Chrome extension

---

Recently I find out a place where Javascript is extremely useful as well. This is browser (chrome) extensions.
The browser is the tool anyone of us is using most of the time.
It became more and more performant and more and more complete.
But, of course, it could lack the special functionality one can require.
For me this was the case, I need a special functionality - an extension to improve the polymer/web components mock based testing.
I will explain in this chapter gradually how to create an chrome extension from hello chrome extension world to the mock-enhancer extension.

The requirements for the mock-enhancer chrome extension:

- findout a specific site cookies and modify/create it with a value provided by user (combo box)
- after the creation/modification of the cookie then find out the tab with a specific URL (the mocked application) and refresh it
- a chrome options to setup the gitlab personal token
- checkout a specific file from gitlab
- (bonus) shortcut for the chrome extension popup
- (bonus) shortcut to duplicate the current tab

## Hello chrome extension world application
