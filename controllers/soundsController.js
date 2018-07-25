const db = require("../models");
const Spotify = require('node-spotify-api');
require("dotenv").config();
const key = require('../key.js');

module.exports = {
  findAll: function(req, res) {
    console.log('query: ', req.query);
    db.Sound
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCategory: function(req, res) {
    db.Sound
      .find({where: req.params.category})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const { sounds } = req.body;
    sounds.forEach((sound) => {
      db.Sound
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
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
    console.log('querySpotify req.body: ', req.body.q);
    var spotify = new Spotify(key.spotify);

    // spotify.search({ type: 'track', query: req.params.query }, function(err, data) {
    //   if (err) {
    //     return console.log('Error occurred: ' + err);
    //   };
      spotify.search({ type: 'track', query: req.body.q })
      // .then (function(response) {
      //   let songs = response.tracks.items.preview_url;
      //   console.log('this is the spotify response: ', response.items);
      //   console.log('or is this the spotify response??? ', songs);
      // });
      // .catch(err => res.status(422).json(err));
      res.json();
    // }),
  },
};
