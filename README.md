[Project Page](https://jtonic.github.io/js_ecosystem_for_the_impatient/)

# JS ecosystem for the impatient

It is not doubt the JS is one of the most popular language, because its language for the web nature.

But the JS language runs not only on browsers. It is quite popular for different tools \(for CI/CD\) but also for BE side \(NodeJS, ExpressJS\).

In the last years the JS ecosystem became very large....

**TBC**

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

[![Build Status](https://travis-ci.org/jtonic/js_ecosystem_for_the_impatient.svg?branch=master)](https://travis-ci.org/jtonic/js_ecosystem_for_the_impatient)

