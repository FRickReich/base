import * as http from "http";
import express = require('express');

const port: number = 3000;
const helloString: string = "Hello World!";

const app: express.Application = express();

app.get('/', function (req, res)
{
    res.send(helloString);
});

app.listen(port, function ()
{
  console.log(`Express server listening on port ${ port.toString() }!`);
});
