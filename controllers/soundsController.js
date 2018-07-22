const db = require("../models");
const Spotify = require('node-spotify-api');

module.exports = {
  findAll: function(req, res) {
    db.Sound
      .find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      // res.end();
  },
  findByCategory: function(req, res) {
    db.Sound
      .find({where: req.params.category})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    //console.log('req.body', req.body);
    const { sounds } = req.body;
    //console.log('sounds', sounds);
    sounds.forEach((sound) => {
      db.Sound
        .create(sound)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
        // res.end();
    });
  },
  update: function(req, res) {
    db.Sound
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Sound
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  querySpotify: function(req, res) {
    console.log('querySpotify req.body', req.body);
    var spotify = new Spotify({
      // NOTE: put these somewhere safe
      id: '824fe7c92f5d4a48a4f0adb39cdfbf10',
      secret: '6d0b2a4874844f1c88fe185bcbd95781'
    });

    spotify.search({ type: 'track', query: req.body }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      // NOTE: save sound to db
      // db.Sound
      //   .then(dbModel => res.json(dbModel));
      //   .catch(err => res.status(422).json(err));

      res.json(data);
    });
  },
};
let spotified = require('node-spotify-api');

var spotify = function(keys) {
  var musicClient = new spotified(keys);
  this.findMySong = function(commandValue) {
    var song = commandValue || "The Sign, Ace of Base";
    musicClient.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        };
        data.tracks.items.map(function(songValue) {
          var responseObj = {};
          responseObj.artist = songValue.artists[0].name;
          responseObj.name = songValue.name;
          responseObj.albums = songValue.album.name;
          responseObj.preview = songValue.preview_url;

          console.log(responseObj);
        });
    });
  }
};
