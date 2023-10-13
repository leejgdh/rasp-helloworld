'use strict';
 
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();

const PORT = process.env.PORT || 8080;

// Set CORS option
app.use(cors());

// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// RESTful API route for DB
app.use('/', require('./route/route.js'));

// DB Connection
const db = require('./model/index.js');
      db.sequelizeConfig.sync();

// Default route for server status
app.get('/', (req, res) => {
  res.json({ message: `Server is running on port ${PORT}` });
});

// Set listen port for request
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});