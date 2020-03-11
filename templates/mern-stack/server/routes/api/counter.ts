"use strict";

import express = require("express");
import mongoose = require("mongoose");

import Counter, { ICounter } from "./../../models/Counter";

module.exports = (app: express.Application) => {
    // Get counters
    app.get(`/api/counter/all`, (req, res, next) => {
        Counter.find((err, counters) => {
            if (err) {
                console.log("error:", err);
                return res.send({
                    success: false,
                    message: err
                });
            }

            return res.send({
                success: true,
                counters
            });
        });
    });

    // Create counter
    app.post(`/api/counter/`, (req, res, next) => {
        const { body } = req;
        const { initialAmount } = body;

        const newCounter = new Counter();
        newCounter.amount = initialAmount;

        newCounter.save((err, counter) => {
            if (err) {
                return res.send({
                    success: false,
                    message: err.message
                });
            }
            return res.send({
                success: true
            });
        });
    });

    // Get Single Counter
    app.get(`/api/counter/:id`, (req, res, next) => {
        Counter.findById(req.params.id, (err, counter: any) => {
            if (err) {
                console.log("error:", err);
                return res.send({
                    success: false,
                    message: err
                });
            }

            return res.send({
                success: true,
                counter
            });
        });
    });

    // Update Counter
    app.put(`/api/counter/:id`, (req, res, next) => {
        const { body } = req;
        const { amount } = body;

        Counter.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    amount
                }
            },
            (err: any, counter: any) => {
                if (err) {
                    console.log("error:", err);
                    return res.send({
                        success: false,
                        message: err
                    });
                }

                return res.send({
                    success: true
                });
            }
        );
    });

    // Delete Counter
    app.delete(`/api/counter/:id`, (req, res, next) => {
        Counter.findOneAndRemove(req.params.id, (err, counter) => {
            if (err) {
                console.log("error:", err);
                return res.send({
                    success: false,
                    message: err
                });
            }

            return res.send({
                success: true
            });
        });
    });
};
