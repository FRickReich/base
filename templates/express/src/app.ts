import * as http from "http";
import path from 'path';
import express = require('express');
import { config } from "dotenv"

config({ path: path.resolve(__dirname, "../.env") })

const port: number = Number(process.env.PORT) || 3000;
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
