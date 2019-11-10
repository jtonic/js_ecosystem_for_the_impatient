## Format code using IntelliJ Idea and .editorconfig

- __Background__
It is always important to comply with the best practices, code styles.
Even more, having a format configuration shared (git) between developers was one of major goals.

.editorconfig is a trend in terms of code format.

- __Intent__

Configure the .editorconfig in IntelliJ Idea.

> Even further, besides the builtin .editorconfig formatting rules, IntelliJ Idea (2019.2+) supports additional ones, corresponding to the ones existent in this IDE.
>
> Moreover .editorconfig files could be arranged hierarchically so as in a particular folder some rules might be overridden.

- __Steps__

  - create a new .editorconfig file in the project root

  ![create new editorconfig in project root](./images/cookbook/editorconfig/new&#32;editorconfig.png)

  - select the ij specific rules (as comments) for specific languages/file types.

  ![select ij specific config](./images/cookbook/editorconfig/select&#32;ij&#32;configuration&#32;-&#32;commented.png)

  - check the .editorconfig changes using the preview

  ![run the editorconfig preview](images/cookbook/editorconfig/preview&#32;editorconfig&#32;changes.png)

  ![see the editorconfig changes in preview](./images/cookbook/editorconfig/editorconfig&#32;and&#32;preview&#32;side&#32;by&#32;side.png)

  - see if the .editorconfig support is enabled in Idea.

  Idea automatically see this file and configured it.

  ![.editorconfig enabled in idea](images/cookbook/editorconfig/enable&#32;editorconfig&#32;support.png)

  - check if the file opened in the current idea editor uses the .editorconfig.
  Check it on the right hand side of the status bar.

  ![is .editorconfig enabled for the current editor](./images/cookbook/editorconfig/check&#32;if&#32;editorconfig&#32;is&#32;used&#32;by&#32;idea&#32;for&#32;the&#32;current&#32;file.png)

- __Further documentation__

  - [code style in IntelliJ Idea 2019.2 with .editorconfig](https://blog.jetbrains.com/idea/2019/06/managing-code-style-on-a-directory-level-with-editorconfig/)
