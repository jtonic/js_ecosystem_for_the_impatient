# Distribute vue.js artifacts

## vue cli 3 allows to build a vue.js application as:

- vue application
- vue library
- web component
- web component aysnc

## Prerequisites:

Install the following npm modules.

```
- @vue/cli
- @vue/cli-service-global
```

`vue-cli-service` is the module responsible for building vue.js application. `vue build` command delegates to this module to build the vue.js application to different targets
`web-component-wrapper` is the module responsible for wrapping a vue.js library as web component. `vue build` command delegates to this component to wrap the vue.js library as a web component.

See below the commands for distributing them

```sh
$ vue build -d dist/lib -t lib -n helloWorld
$ vue build --help
$ vue build -d dist/app -t app -n helloWorldApp
$ vue build -d dist/wc/hello-world -t wc -n hello-world

# export as web component, the same way as for a 'vue create' based generated vue.js application
$ npm install --no-save @vue/web-component-wrapper
$ vue build -d dist/wc2/hello-world -t wc -n hello-world ./main.js
```
