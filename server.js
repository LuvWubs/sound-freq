const express = require('express');
const bodyParser = require('body-parser');
const Spotify = require('node-spotify-api');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/client/public/index.html");
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
