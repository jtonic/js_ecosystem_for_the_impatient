# `npm link` to the rescue

`npm link` is special because it allows to load a module from any folder in the file system.
Without it the npm resolution dependency works using the following order:

- figure out if the dependency is a core modules and load from the nodejs distribution
- if it is a relative path
  - search the dependency using the relative path in the current directory
  - looks in the `./node_modules` directory
  - if not found look in there search furhter in the parent directory'a `node_modules` until dependency is found or the root (/) directory is reached

npm link is used in a very special use case:

> <span style='color:blue'>Use case:</span> A dependency is modified very frequenctly and both dependent and dependency are developed by the same team.

Let’s suppose we develop nodejs application `my-app` and a dependency `my-test-package` (both of them as npm module).
The case is:

1. the (new version of) dependency is not quite tested, or

2. the application is its first client and we want to test the dependency through the my-app client.

The straightforward way of doing this are one of the following:

1. publish the dependency in npm registry whenever it is modified and pick it up in the the `my-app` (which is quite cumbersome because we have to deal with versioning), and end up having a lot of intermediary versions in npm registry.

   <span style="color:red">**HIGHLY UNRECOMMENDED !!!**</span>

2. considering we have my-test-package` version controled (git) another option is to performed the changes in a new branch and add/commit/push the changes.

   Then in `my-app` package.json dependency property we have to refer the git repo branch of the dependency where the new change commits resided in.

   This requires a lot of git add, commit, push (proliferation of the commits).

3. modify directly the files in the `my-app/node_modules/${my-test-package}`, but this requires to keep the track of all changes in order to replicate them in the my-test-package npm package. This could lead to issues when something in the node_modules is not picked up.

A more straightforward of doing this is using the **npm link**.

> **Note:** In examples below we have a scope for `my-test-package` (@jtonic) which is useful for scoping npm packages in npm registry. For simple cases (or when npm package resides only in git repo - github) you can leave it out.

## Steps:

- in `my-test-package` home directory

```sh
  $ npm link
```

- test the link

```sh
  $ npm ls -g --depth 0
```

We have to see the my-test-package in the list linked to the directory it resides in.

```text
APM3LC02VH2FMHV2N:js_ecosystem_for_the_impatient ws31wx$ npm ls -g --depth 0
/usr/local/lib
├── bower@1.8.8
├── ...
├── my-test-package@0.0.1 -> /path/to/my-test-package
├── ...
```

- in `my-app` home directory

```sh
  $ npm link @jtonic/my-test-package
```

after this command have run we end up having:

- the dependency in ./node_module/@jtonic
- no entries in the dependencies section in package.json if the dependency was not yet there already

Whenever we modify something in the `my-test-package` dependency (thanks to the symlink) the change is automatically seen in the `my-app` module/package

As soon as we find that the `my-test-package` is the way we like it to be (stable) it's time to replace the link and use the correct dependency.

Follow these steps to do this:

- in `my-test-package` home directory:

```sh
  $ git add .
  $ git commit -m ‘some changes’
  $ git push
```

- patch the npm version (this commands performed some git activities - commits/tag)

```sh
  $ npm version patch
```

- push changes and tags in git repo

```sh
  $ git push # to push the commits created by npm version patch
  $ git push --tags # to push the tag created by npm version patch
```

- publish node module on npm registry

```sh
  $ npm publish --access public
```

- in my-app home directory

```sh
  $ npm uninstall --no-save @jtonic/my-test-package
```

- _[optional]_ npm info @jtonic/my-test-package version
- _[optional]_ npm info @jtonic/my-test-package dist-tags

- force the installation of the new published npm module

```sh
  $ npm i --save  @jtonic/my-test-package@0.1 # to force latest patch version
```

- in my-test-package

```sh
  $ npm uninstall # delete global symlink
```

<span style='color:red'> Revise this chapter</span> considering the article below. Do some examples... and see how it works

A good and brief explanation of the npm link [here](https://medium.com/@alexishevia/the-magic-behind-npm-link-d94dcb3a81af)
