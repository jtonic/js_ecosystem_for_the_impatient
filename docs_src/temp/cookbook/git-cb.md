# Git cookbook

## How to push the content of a folder in a new github repository

1. enable the git for the current folder

    `git init`

2. create a repo in github (say `handson-ckskav`)

3. copy the remote repo url (https://github.com/jtonic/handson-ckskav.git),
    and add it as remote repository

    `git remote add origin https://github.com/jtonic/handson-ckskav.git`

4. fetch from repo `git fetch`

5. checkout a remote branch and track it

   `git checkout --track origin/master`

6. Pull from remote allowing unrelated histories

    `git pull --allow-unrelated-histories`

7. stage all local changes

    `git add .`

8. commit local change

    `git commit . -m 'Initial commit'`

9. push the commit on the remote branch

    `git push`
