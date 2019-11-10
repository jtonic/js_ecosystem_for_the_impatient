# Spring ecosystem cookbook

## How to streamline the springboot application development with spring-boot devtools (and IntelliJ Idea)

- __Intent__

  Spring boot devtools goal is to make the spring boot application more efficient.
  It provides application reload, live reload, disable cache, remote reload and more.

  For me (as a daily backend developer) the most important feature of devtools is the spring application reload.
  In fact devtools doesn't reload entire application context. It has 2 class loaders, one of them is the one responsible for loading the project classes and resources.

  Enough with the theory and let's jump into the practical example.
  For further information about the spring-boot devtools go to the [links below](useful-links).

- __Steps__

  - Add the following dependency to spring boot (maven based) application

  ```xml
  <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-devtools</artifactId>
  </dependency>
  ```

  - configure the trigger file in `application.yaml`

  ```yaml
  spring:
      devtools:
          restart:
              trigger-file: .reloadtrigger
  ```

  > This is useful because we don't want to trigger a spring application reload whenever we modified a java type or resource

  - create the file `.reloadtrigger` in the folder `/${PRJ_HOME}/src/main/resources`

  - start springboot application

  - modify the code (java types or some configuration files)

  - change the file `.reloadtrigger` and save it.

  > spring restarts the application in a very short time (see the explanation about with the custom classloader)

  - Starting with the spring-boot 2.2 all the application beans could be configured as lazy through an application configuration (no code changes).
  It is debatable if this is useful for production but for development/tests this is definitely very handy.

  Configure all application beans as lazy.

  ```yaml
  spring:
    main:
      lazy-initialization: true
  ```

### How to make springboot devtools more pleasant with IntelliJ Idea?

  - tbd

### Useful links

- [medium article](https://www.vojtechruzicka.com/spring-boot-devtools/)
- [official documentation](https://docs.spring.io/spring-boot/docs/current/reference/html/using-spring-boot.html#using-boot-devtools)
- [spring-boot devtools by baeldung](https://www.baeldung.com/spring-boot-devtools)
