# Spring + React Localization (l10n) Administration

Template implementation of React i18n with translations in DB.

Backend implemented in Spring Boot with JPA. DB is H2, just for sample purposes.

Implementation stack (the latest possible to date):

* Spring Boot 2.5.0-M3
* React 17.0.2
* Java 16 (with an uugly workaround in the maven-compiler plugin in order for Lombok to work)

# Getting Started

## IntelliJ

IntelliJ version 21.1+ is required, as it is the earliest supporting Java 16.  
In addition, NodeJS version 10+ is required in order to run React.

### Local compile JVM options

In order for the application to run under IntelliJ, the following should be added to the compiler JVM settings (again due to Lombok vs. Java
16 incompatibility)

Settings > Build, Execution, Deployment > Compiler > Build process VM options:

```
--add-opens=jdk.compiler/com.sun.tools.javac.api=ALL-UNNAMED --add-opens=jdk.compiler/com.sun.tools.javac.code=ALL-UNNAMED --add-opens=jdk.compiler/com.sun.tools.javac.comp=ALL-UNNAMED --add-opens=jdk.compiler/com.sun.tools.javac.file=ALL-UNNAMED --add-opens=jdk.compiler/com.sun.tools.javac.main=ALL-UNNAMED --add-opens=jdk.compiler/com.sun.tools.javac.model=ALL-UNNAMED --add-opens=jdk.compiler/com.sun.tools.javac.parser=ALL-UNNAMED --add-opens=jdk.compiler/com.sun.tools.javac.processing=ALL-UNNAMED --add-opens=jdk.compiler/com.sun.tools.javac.tree=ALL-UNNAMED --add-opens=jdk.compiler/com.sun.tools.javac.util=ALL-UNNAMED --add-opens=jdk.compiler/com.sun.tools.javac.jvm=ALL-UNNAMED
```

### Better Strings building

Apart from the extra --add-opens...com.sun.tools.javac.api above that was needed in order for better-strings to work, IntelliJ seems it
cannot handle building the triple annotation processors on its own and it works only when building with Maven. As a bad workaround, enable:

Settings => Build, Execution Deployment => Maven => Runner: Delegate IDE build/run actions to maven

## Maven Toolchains

If you can't/won't have Java 16+ as main JVM (JAVA_HOME), use the [toolchains.xml](./External%20Resources/toolchains.xml) file (put it in
your .m2 user directory)

# Further Development Instructions

## New Locale

To add a new locale, e.g. `lo`:

* add its SVG icon (`lo.svg`) to static/flags
* add its code (`lo`) to locales in i18n.js
* add translations with `locale=lo` in DB

## New domain

To add or edit an existing domain properties you have to configure .env file. This file can be located externally on the actual environment.
See https://github.com/motdotla/dotenv#readme for more information.

If you need more than the already configured environments, add another domain variable as well as a boolean that points in which domain you
build for.

# Future Development

* Automated testing in the UI
* Continuous Delivery (e.g. on Google Cloud)

# Reference Documentation

For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/2.5.0-M3/maven-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/2.5.0-M3/maven-plugin/reference/html/#build-image)
* [Spring Web](https://docs.spring.io/spring-boot/docs/2.4.4/reference/htmlsingle/#boot-features-developing-web-applications)
* [Spring Data JPA](https://docs.spring.io/spring-boot/docs/2.4.4/reference/htmlsingle/#boot-features-jpa-and-spring-data)
* [Rest Repositories](https://docs.spring.io/spring-boot/docs/2.4.4/reference/htmlsingle/#howto-use-exposing-spring-data-repositories-rest-endpoint)
* [Flyway Migration](https://docs.spring.io/spring-boot/docs/2.4.4/reference/htmlsingle/#howto-execute-flyway-database-migrations-on-startup)

### Guides

The following guides illustrate how to use some features concretely:

* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/bookmarks/)
* [Accessing Data with JPA](https://spring.io/guides/gs/accessing-data-jpa/)
* [Accessing JPA Data with REST](https://spring.io/guides/gs/accessing-data-rest/)
* [Accessing Neo4j Data with REST](https://spring.io/guides/gs/accessing-neo4j-data-rest/)
* [Accessing MongoDB Data with REST](https://spring.io/guides/gs/accessing-mongodb-data-rest/)

