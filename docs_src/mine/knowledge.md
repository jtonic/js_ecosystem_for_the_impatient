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

# Node version manager `nvm`

---

### See all available npm versions

```
$ nvm ls-remote
$ nvm ls-remote --lts # to list all long time support node versions
```

### See all installed versions

```
$ nvm ls
```

**Notes:**

> If node was installed before installing nvm the installed node is seen as `system

> nvm gives to installed node versions aliases. This is useful when using some specific node versions. So if I would like to use the system versio I would run `nvm use system`.

> If for instance I would like to name latest stable lst 8 version like lst-8, the following command might be used. `nvm alias lts-8 8.16.0`

> nvm is smart enough to infer the required version if there is only one version matching the pattern (or in case of multiple matches the latest stable version is chosen). For instance, if there is only one version 8.x installed (v8.16.0) then we can use `nvm use 8`. On the other hand if you issue the command `8.9` then mvn figure out there is not version matching the pattern, and issue an warn and offers a suggestion to install the latest stable version matching the pattern.

```
$ nvm use 8.15                                                                               N/A: version "8.15 -> N/A" is not yet installed.
You need to run "nvm install 8.15" to install it before using it.
```

### Running a node application with a specific node version.

```sh
$ node run 8.16.0 MyApp.js
```
