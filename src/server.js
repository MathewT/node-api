'use strict';
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

// Constants
const PORT = 8888;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(`Hello node\n\n`);
});

app.post('/api/reviews', (req, res) => {
  console.log(`request headers: ${req}`);
  for (var key in req) {
    console.log(key);
  }

  console.log(req.hostname);
  console.log(req.route);
  console.log(req.path);
  console.log(req.body);

  // console.log("now the response object...\n\n\n\n");
  // for (var key in res) {
  //   console.log(key);
  // }


  res.send('reviews post');
})

let user = os.userInfo();
console.log(user);
app.listen(PORT, HOST);


// notes.asyncWork("foo")
//   .then((res) => {
//     console.log("Success!!", res);
//   }, (errorMsg) => {
//     console.log("Error: ", errorMsg);
//   });