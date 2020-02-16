# Disclosure:

\*_The content of files included in the directory mine_ is for quick writing down (no polished) information I found useful...In time this information could go in the public ebook...

## Curl

---

### show the supported protocols

```sh
$ curl -V
```

### check if curl supports ssl/https

```sh
curl --ssl
```

## <span style='color:magenta'>Node version manager `nvm`

---

### <span style='color:cyan'> See all available npm versions

```
$ nvm ls-remote
$ nvm ls-remote --lts # to list all long time support node versions
```

## <span style='color:cyan'> See all installed versions

```
$ nvm ls
```

**Notes:**

> If node was installed before installing nvm the installed node is seen as `system

> nvm gives to installed node versions aliases. This is useful when using some specific node versions. So if I would like to use the system versio I would run `nvm use system`.

> If for instance I would like to name latest stable lst 8 version like lst-8, the following command might be used. `nvm alias lts-8 8.16.0`

> nvm is smart enough to infer the required version if there is only one version matching the pattern (or in case of multiple matches the latest stable version is chosen). For instance, if there is only one version 8.x installed (v8.16.0) then we can use `nvm use 8`. On the other hand if you issue the command `8.9` then mvn figure out there is not version matching the pattern, and issue an warn and offers a suggestion to install the latest stable version matching the pattern.

### <span style='color:cyan'> Prompted to install a npm version when try to use it

```bash
$ nvm use 8.15                                                                               N/A: version "8.15 -> N/A" is not yet installed.
You need to run "nvm install 8.15" to install it before using it.
```

### <span style='color:cyan'> Running a node application with a specific node version

```sh
$ node run 8.16.0 MyApp.js
```

## <span style='color:magenta'>Vue devtool chrome extension

Vue devtool assign a global variable to each vue (root) instance and vue component, such as `$vm0`. One can use this variable to inspect its fields/methods.

One case when this global variable is useful is, for instance, when we want to trigger the beforeDestroy and destroyed lifecycle hooks. In this case `$vm0.$destroy()` function could be called from chrome devtool console.

## <span style='color:magenta'>Vue.js

### <span style='color:cyan'>Common vue.js directives

- `v-text`

  Example: `<h2 v-text="users"></h2>`

* `v-show` - renders the html markup if, and only if, the specified condition evaluates to true

- `v-bind`
- `v-on` ( or `@`) - bind a DOM markup event to a JS snippet
- `v-html` - render as HTML - this has to be used very carefully
- `v-if`, `v-if-else`, `v-else` - conditionally add a markup to the DOM.
- `v-model` - two way databinding between view and model
- `v-once` - the bind between the model and view is performed only once
- `v-for` directive used to loop through items.

```javascript
<li v-for="i in 5">{{ i }}</li>
```

<span style='color:red'>**Warns**

- in v-text the mustache based expression cannot be used.
  Example: `<h2 v-text="users list: {{ users }}"></h2>`
- when exporting a vue.js component with export default data has to be a function not an object.

```javascript
    data() {
        return {
            product: {
                id: 1,
                name: 'robinson crusoe',
            }
        }
    }
```

- `v-if and v-else` have to be added to adiacent markups

```html
<!-- this won't work -->
<h1 v-if="condition">foo</h1>
<div>Am in the v-if condition?</div>
<h3 v-else>boo</h3>
```

- `v-show` hides and markup which is in the DOM, but v-if|v-else adds/removes markup to/from the DOM
-
