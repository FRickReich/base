"use strict"

var path = require("path");
var express = require("express");

require('dotenv').config()

var dist = path.join(__dirname, "dist");
var port = process.env.PORT;
var app = express();

//Serving the files on the dist folder
app.use(express.static(dist));

//Send index.html when the user access the web
app.get("*", function (req, res) {
  res.sendFile(path.join(dist, "index.html"));
});

app.listen(port, (err) =>
{
    if (err)
    {
        console.log(err);
    }

    console.log(`Express server listening on port ${ port.toString() }!`);
});