# Express Webserver Template

An express.js application template written in typescript, including basic docker-compose setup.

# Starting the application

**locally**

Install and start MongoDB, then:

* `npm start` Compiles and starts the application in JavaScript.
* `npm run build:dev` Starts the application in compiled typescript.
* `npm run start:dev` Starts and watches the application for changes.
* `npm run build:prod` Compiles the application to JavaScript.
* `npm start:prod` Starts the compiled application in JavaScript.

**Docker**
`docker-compose up` runs npm start in a docker-environment with the following containers:

- express - express Application.
- mongo - MongoDB instance.
- mongo-express - MongoDB administration UI.
