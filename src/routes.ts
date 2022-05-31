import { response, Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { cors } from "cors";
import * as dotenv from 'dotenv';

const router = Router()

let corsOptions = {
  origin: process.env.CORS_ORIGIN
}

router.use(cors(corsOptions))

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

router.get('/hello', function(request, response) {
    response.send('Hello world')
});

export {router}


/*var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})*/