'use strict';
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const express = require('express');

// Constants
const PORT = 8888;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`Hello world\n\n`);
});

let user = os.userInfo();
console.log(user);
app.listen(PORT, HOST);


// notes.asyncWork("foo")
//   .then((res) => {
//     console.log("Success!!", res);
//   }, (errorMsg) => {
//     console.log("Error: ", errorMsg);
//   });