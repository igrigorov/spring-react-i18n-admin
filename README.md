# Spring + React Localization (l10n) Administration

Template implementation of React i18n with translations in DB.

Backend implemented in Spring Boot with JPA. DB is H2, just for sample purposes.

Implementation stack (the latest possible to date):
* Spring Boot 2.5.0-M3
* React XXX
* Java 16 (with a baad workaround in the maven-compiler plugin in order for Lombok to work)

# Getting Started

## IntelliJ

IntelliJ version 21.1 is required, as it is the earliest supporting Java 16.

### Local compile JVM options

In order for the application to run under IntelliJ, the following should be added to the compiler JVM settings (again due to Lombok vs. Java 16 incompatibility)

Settings > Build, Execution, Deployment > Compiler > Build process VM options:

```
--add-opens=jdk.compiler/com.sun.tools.javac.code=ALL-UNNAMED --add-opens=jdk.compiler/com.sun.tools.javac.comp=ALL-UNNAMED --add-opens=jdk.compiler/com.sun.tools.javac.file=ALL-UNNAMED --add-opens=jdk.compiler/com.sun.tools.javac.main=ALL-UNNAMED --add-opens=jdk.compiler/com.sun.tools.javac.model=ALL-UNNAMED --add-opens=jdk.compiler/com.sun.tools.javac.parser=ALL-UNNAMED --add-opens=jdk.compiler/com.sun.tools.javac.processing=ALL-UNNAMED --add-opens=jdk.compiler/com.sun.tools.javac.tree=ALL-UNNAMED --add-opens=jdk.compiler/com.sun.tools.javac.util=ALL-UNNAMED --add-opens=jdk.compiler/com.sun.tools.javac.jvm=ALL-UNNAMED
```

## Maven Toolchains

If you can't/won't have Java 16 as main (JAVA_HOME) JVM, use the [toolchains.xml](./External%20Resources/toolchains.xml) file (put it in your .m2 user directory)


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

