import express = require("express");

export class ExpressConfig {
    constructor(app: express.Application) {
        app.use(require("express").static(require("path").join("public")));
        app.use(require("express").urlencoded({ extended: true }));
        app.use(require("express").json());
    }
}
