## Format code using IntelliJ Idea and .editorconfig

- __Background__

  It is always important to comply with the best practices, code styles.
  Even more, having a format configuration shared (git) between developers is one of major goals.

  .editorconfig is a trend in terms of code format.

- __Intent__

  Configure the .editorconfig in IntelliJ Idea.

  > Besides the built-in .editorconfig formatting rules, IntelliJ Idea (2019.2+) provides additional ones, corresponding to the ones existent in this IDE.
  >
  > Moreover .editorconfig files could be arranged hierarchically so that some rules might be overridden in a particular folder.

- __Steps__

  - create a new .editorconfig file in the project root, using `File -> New -> EditorConfig file` menu.

  ![create new editorconfig in project root](./images/cookbook/editorconfig/new&#32;editorconfig.png)

  - in the open dialog select the ij specific rules (as comments) for specific languages/file types.

  ![select ij specific config](./images/cookbook/editorconfig/select&#32;ij&#32;configuration&#32;-&#32;commented.png)

  - check the .editorconfig changes using the preview `using the eye in the editor gutter`.

  ![run the editorconfig preview](images/cookbook/editorconfig/preview&#32;editorconfig&#32;changes.png)

  - after selecting a file as a target of the editor config preview, the editorconfig file is split with the target in the editor.

  ![see the editorconfig changes in preview](./images/cookbook/editorconfig/editorconfig&#32;and&#32;preview&#32;side&#32;by&#32;side.png)

  > Idea automatically configure its code formatting support based on the existing .editorconfig file.
  >
  > We can check if .editorconfig is enabled in Idea by getting to the Idea `Preferences | Editor | Code Style`.

  ![.editorconfig enabled in idea](images/cookbook/editorconfig/enable&#32;editorconfig&#32;support.png)

  > Idea show the support it is using for the current open file in (the right hand side of) the status bar.

  ![is .editorconfig enabled for the current editor](./images/cookbook/editorconfig/check&#32;if&#32;editorconfig&#32;is&#32;used&#32;by&#32;idea&#32;for&#32;the&#32;current&#32;file.png)

- __Further documentation__

  - [code style in IntelliJ Idea 2019.2 with .editorconfig](https://blog.jetbrains.com/idea/2019/06/managing-code-style-on-a-directory-level-with-editorconfig/)
