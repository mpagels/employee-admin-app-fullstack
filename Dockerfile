FROM openjdk:20

ENV ENVIRONMENT=prod

LABEL maintainer="martin.pagels@neuefische.de"

EXPOSE 8080

ADD backend/target/employee-fullstack-app.jar app.jar

CMD [ "sh", "-c", "java -jar /app.jar" ]