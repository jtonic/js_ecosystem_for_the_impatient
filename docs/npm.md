How to use help?
---

- Get help about the npm command

```sh
    $ npm -h
    $ npm --help
```

- get a quick help about an npm command

```sh
  $ npm install -h
```

- get a comprehensive information about a npm command


```sh
  $ npm help install
```

- search in help topics

```sh
  $ npm help-search remove
```


npm scripts
---
	
Npm scripts are included in the scripts property in package.json

- run a script

```sh
  $ npm run my_script
```

- There are some popular scripts for which there are some shortcuts

```sh
  $ npm run start -> $ npm start
  $ npm run test -> $ npm test | npm tst | npm t	
```

- npm list scripts

```sh
	$ npm run 
```
	
Npm commands used (regularly) in scripts resides in ./node_modules/.bin (e.g.: mocka, prettier, eslint, uuid).

E.g: Running the following command in the project home directory creates a new UUID

    $ uuid v1 => af5ccf30-4d48-11e9-9ade-6dad5455bcd3

Create a new JS npm-based project (BE or FE)
---

```sh
  $ npm init
  $ npm init -y    # with all the default values accepted
```

- npm init default values for npm init command

- setting the init value

	$ npm set init-author-name ‘Antonel-Ernest Pazargic’
	$ npm config set init-author-name ‘Antonel-Ernest Pazargic’

See this documentation for all the init values to setup.

	[npm config](https://docs.npmjs.com/misc/config) and search for init-
	[npm init](https://docs.npmjs.com/misc/config#init-author-name) 

> All npm user-scoped settings/config are in the ~/.npmrc

- Getting an init value

```sh
  $ npm get init-author-name
  $ npm config get init-author-name
```

- delete a default value for npm init

```sh
  $ npm config delete init-author-name
```

Npm configuration
---

- Show npm configuration (what is in the ~/.npmrc and more)

```sh
$ npm config list
$ npm c ls
```

- Show also the default values

```sh
  $ npm c ls -l
```

- Useful configuration
  - save-exact (install the latest version exactly)
  
    ```sh
    $ npm c set save-exact=true
    ```
  - --save (-S) by default
    ```text
      npm c set save=true
    ```


Dependencies
---

- install dependencies

  - in production code
    ```sh
    $ npm install lodash --save
    $ npm i lodash -S
    ```
  - in dev code

    ```sh
    $ npm install karma --save-dev
    $ npm i karma -D
    ```

  - install a npm package from a local directory
    ```sh
    $ npm i -S ../npm1
    ```

  - install a npm package from a git repo (github)

    ```sh  
    $ npm install https://github.com/jtonic/js-for-beginers.gitt#master --save
    $ npm install jtonic/js-for-beginners#master --save
    ```

  - remove dependencies no longer needed

  During the development there are times when some no more wanted packages are still in the node_modules, but they are no longer in the package.json.
  In order to do a package cleanup 

  ```sh
  $ npm prune
  ```

  And when preparing the production code

  ```sh
  $ npm prune --production -> no more --save-dev dependencies in the node_modules
  ```

  - List the installed packages

  ```sh
  $ npm list  # or ll or la
  $ npm list --depth 0 # shows only the first dependencies level (the ones declared in the package.json. No transient dependencies)
  ```

    - show only dev or prod dependencies 

    ```sh
    $ npm list --depth 0 --dev true  # or --prod true
    ```

    - parseable format -> to see where the global dependencies resides in

    ```sh
    $ npm list --depth 0 --global true --parseable true
    ```	
    > Note: -g ⇔ --global true

	
Npm registry
---
[registry](https://www.npmjs.com) -> search for the package, e.g. lodash

[lodash](https://www.npmjs.com/package/lodash) 

How to see the package.json information? 
http://registry.npmjs.org/lodash (or http://npm.im/lodash )
> Note: In order to see the json pretty formatted you can install a browser add-on, extension. 
For Opera I din install json-lite https://addons.opera.com/en/extensions/details/json-lite/ 


Publishing a package
---

- sign up on npmjs.com
  
- register the npmjs.com username
  
`$ npm adduser`

- create a new folder, say ‘my-test-package’ and make it current

- create a new github.com repository on https://github.com/{userName}
- enable VCS (git)
`$ git init`

- add git remote repository
`$ git remote add origin https://github.com/jtonic/my-test-package.git`

- create a username (or organization name) scope package json file
  
```sh
$ npm init --scope=@npm_username
$ git add .
$ git commit -m ‘Initial commit’
$ git push origin master
```

- publish to npmjs registry
`$ npm publish --access public`

- See the information about the published package
`$ npm info @jtonic/my-test-package`

- See the github repo of the npm package
`npm repo @jtonic/my-test-package`

- Or see the package info in browser http://registry.npmjs.org/@jtonic/my-test-package 

- Create a git tag
`git tag 0.1.0`

- Push tag to origin/master
`git push --tags`

> <span style="color: red">Continue formating from here

See below the published npm package in the registry


Updating the npm package to a new patch version

Do whatever changes is required
$ npm version patch  // this changes the version in package.json, commit the change and make a tag
$ git push
$ git push --tags
$ npm publish --access public

Versioning the npm package

	See the semantic versioning

	M.m.p.x (1.12.224)
		M - major - 1
		m - minor - 12
		p - patch - 224

	To better keep in mind the version elements semantics 
	
	B.F.Bf.x

		M major -> B break
		m minor -> F feature
p patch  -> Bf bug fix 

	
	How to see the version of the current npm module (plus node, npm and other packages version).

	$ npm version

	Bump the version
	
		$ npm version patch -> increase the patch version segment

		$ npm version $my_version -> setup a specific version

	

How easy is to work with both application and a dependency using npm link

Let’s suppose we have an nodejs application and a dependency my-test-package (both of them as npm module).
The case is: the (new version of) dependency is not quite tested, or the application is its first client and we want to test the dependency through the my-app client.

The classic way of doing this is 
either publish the dependency in npm registry whenever it is modified and pick it up in the my-app (which is quite cumbersome because we have to deal with versioning), and end up having a lot of intermediary versions in npm registry. HIGHLY UNRECOMMENDED. 
either to version control the dependency (git) and add/commit/push all minor changes, but this requires a lot of git add, commit, push (proliferation of the commits)
modify directly the files in the $my-app/node_modules/$path-to-my-test-package, but this requires to keep the track of all changes in order to replicate them in the my-test-package npm package. This could lead to issues when something in the node_modules is not picked up.

A more straightforward of doing this is using the npm link. 


Note: In examples below we have a scope for my-test-package (@jtonic) which is useful for scoping npm packages in npm registry. For simple cases (or when npm package resides only in git repo - github) you can leave it out.

Steps:
in my-test-package home dir 	
$ npm link
test the link 				
$ npm ls -g --depth 0 
in my-app home dir 			
$ npm link @jtonic/my-test-package
after this command completed we have:
the dependency in ./node_module/@jtonic 
no entries in the dependencies section in package.json if the dependency was not yet there already
No whenever we modify something in the my-test-package dependency (thanks to the symlink) the change is automatically seen in the my-app module/package

	As soon as we find that the my-test-package is the way (stable) we like it to be it is time to replace the link and use the correct dependency. Follow these steps to do this:

in my-test-package home dir git commit changes, and npm publish the new version (say. 0.1.1)
$ git add .
$ git commit -m ‘some changes’
$ git push
$ npm version patch
$ git push # to push the commits created by npm version patch
$ git push --tags # to push the tag created by npm version patch
$ npm publish --access public
in my-app home dir
$ npm uninstall --no-save @jtonic/my-test-package
[optional] npm info @jtonic/my-test-package version
[optional] npm info @jtonic/my-test-package dist-tags 
$ npm i --save  @jtonic/my-test-package@0.1 # to force latest patch version
in my-test-package
$ npm uninstall # delete global symlink

See here for a more comprehensive explanation: 


Semantic versioning and npm

^4.0.0  -> ^ will use the latest minor version. Supposing 4.17.11 is the one then 
npm update
$ npm i -S lodash@4.0.0 	-> lodash: ^4.11.1 in package json
$ npm up -S lodash 		-> lodash: ^4.17.11 in package.json and npm ls -S --depth=0 --long=true 

~3.7.2 -> ~ will use the latest major version. Supposing it is 4.17.11 
$ npm up -S lodash 		-> lodash: ^4.17.11 in package.json and npm ls -S --depth=0 --long=true 

Use ~ with great care because it could break the code.

Show the information about a package

full output

$ npm info lodash



show only a specific section, such as versions

$ npm info lodash versions  # show versions history

	$ npm info lodash dist-tags.latest # show the latest version




List the globally installed packages

	$ npm list --global true --depth 0
	$ npm list --global true --depth 0 --long true  # further information about the package (home page, git repo, etc)


Miscellaneous npm commands

	$ npm repo lodash # opens the browser with the source  code repo of lodash 

Execute npm command in silent mode
	$ npm test --silent # or -s

How to enforce the node and npm versions in npm package. In package.json add the following:

	  "engines": {
    "node": "~8.11.4",
    "npm": "~5.6.0"
  },****

	


Useful links

https://docs.npmjs.com/misc/config#shorthands-and-other-cli-niceties 
https://docs.npmjs.com/misc/scripts 

