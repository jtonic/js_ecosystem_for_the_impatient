[![Build Status](https://travis-ci.org/jtonic/js_ecosystem_for_the_impatient.svg?branch=master)](https://travis-ci.org/jtonic/js_ecosystem_for_the_impatient)

[Project Page](https://jtonic.github.io/js_ecosystem_for_the_impatient/)

JS ecosystem for the impatient
===

Without a doubt since quite some time a JS became one of the most popular language. Its reign came from its "language of the web" nature.

In time, because its huge popularity, it started to conquer some other peaks such as:
- backend development (NodeJS, ExpressJS),
- tooling (npm/yarn, webpack, gulp, grunt),
- mobile (Xamarim, React Native, Cordova),
- desktop (Electron, Athom, Visual Studio Code),
- presentation (RevealJS, Reveal-md)

The attached [github pages presentation](https://jtonic.github.io/js_ecosystem_for_the_impatient/) is about how to get quite acquainted to the JS ecosystem. It is not an in deep dive in the included topics but my abition is to create a good presentation for the impatient.


### <span style="color:red"> __Issues:__

- index.html is not deployed in github gh_page by using TravisCI with the following configuration:

  ```yaml
  deploy:
    provider: pages
    skip_cleanup: true
    local_dir: docs/_build
    verbose: true
    github_token: $GITHUB_TOKEN
    on:
      branch: master
  ```

  - Strange enough generating the revealjs (reveal-md) presentation slides in $github_repo/docs slides.md -> slides.html, and a new file symlink to slides.html named index.html is generated. This doesn't work on github pages.
  - In oder to handle this (with my poor knowledge about revealjs/reveal-md) I manually did the following: 1. delete the symlink and rename slides.md to index.md.
  - Ask for further support [here](https://github.com/webpro/reveal-md/issues/24)


This project is CI with TravisCI (which is free for github)


