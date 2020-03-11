"use strict";

import express = require("express");
import mongoose = require("mongoose");

module.exports = (app: express.Application) => {
    app.get(`/api/test/`, (req, res, next) => {
        if (mongoose.connection.readyState) {
            res.json({
                success: true
            });
        } else {
            res.json({
                success: false
            });
        }
    });
};
