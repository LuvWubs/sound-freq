const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
//const routes = require("./routes");
const Spotify = require('node-spotify-api');
// const path = require('path');

const routes = require('./routes');

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

// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "./client/public/index.html");
// });

//app.use(routes);
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/soundFreqFiles";
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('MongoDB Connected!');
});


//NOTE use spotify or dump this code

// app.get('/api/search', (req, res) => {
//
//   // /api/search?q=Griz
//   const query = req.params.q;
//
//   console.log('req.params', req.params);
//
//   var spotify = new Spotify({
//     // TODO: put these somewhere safe
//     id: '824fe7c92f5d4a48a4f0adb39cdfbf10',
//     secret: '6d0b2a4874844f1c88fe185bcbd95781'
//   });
//
//   spotify.search({ type: 'track', query: this.state.query }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
//
//     res.json(data);
//   });
//
// });

app.listen(port, () => console.log('Server running on port', port));
