# MERN Stack Template

A basic MERN Stack, utilizing MongoDB, Express.js, React.js and Node.js - Docker-ized, backend written in TypeScript.

## Starting the application

**locally**

-   `npm start` Compiles and starts the application in JavaScript.
-   `npm run build:dev` Starts the application in compiled typescript.
-   `npm run start:dev` Starts and watches the application for changes.
-   `npm run build:prod` Compiles the application to JavaScript.
-   `npm run start:prod` Starts the compiled application in JavaScript.

**Docker**
`docker-compose up` runs `npm run start:dev` in a docker environment together with a mongoDB image.

## Content

### Server

Server code can be found in the server directory, additional api routes can be created in the routes/api directory, and will be automatically added to the express router.

### Client

React code can be found in the app directory, wich is divided into a components directory for react-components, and a containers directory for whole pages - new Pages have to be added in the routing part of the initialize.js file.

### .env file

The following informations are the defaults to be filled into the .env file:

-   PORT=3000
-   DATABASE_URL=mongodb://mongo:27017/db
