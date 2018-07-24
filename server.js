const seeders = require('./seeders/sounds.js');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const Spotify = require('node-spotify-api');
// const path = require('path');
const routes = require('./routes');
const db = require("./models");
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.post('/api/sounds', (req, res) => {
  //console.log('req.body', req.body);
//});

app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(port, () => console.log('Server running on port', port));
