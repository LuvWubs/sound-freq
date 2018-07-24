const db = require("../models");
const Spotify = require('node-spotify-api');

module.exports = {
  findAll: function(req, res) {
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
    //console.log('req.body', req.body);
    // const { sounds } = req.body;
    //console.log('sounds', sounds);
    // sounds.forEach((sound) => {
      db.Sound
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
        // res.end();
    // });
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
    var spotify = new Spotify({
      // NOTE: put these somewhere safe
      id: 'a9c2de2dcf4c4f5c987c4f9682d0dea6',
      secret: 'aa353b60cbe34f45ac6ef717774a29f4'
      // redirect_uri: 'https://open.spotify.com/album/1Qb73C8hC76e3R8udyit5I'
    });


    // Spotify
    // GET 'https://accounts.spotify.com/authorize/?client_id=' + spotify.id + '&response_type=code&redirect_uri='
    app.get('/login', function(req, res) {
      var scopes = 'user-read-private user-read-email';
      res.redirect('https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' + 'a9c2de2dcf4c4f5c987c4f9682d0dea6');
      // +
      // (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      // '&redirect_uri=' + encodeURIComponent(redirect_uri));
    });
     // https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09'
      // NOTE search spotify by id first THEN by song track???
      // .search({ type: 'track', query: req.body.q })
      // .then (function(response) {
      //   let songs = response.tracks.items.preview_url;
      //   console.log('this is the spotify response: ', response.items);
      //   console.log('or is this the spotify response??? ', songs);
      // });
      // .catch(err => res.status(422).json(err));
      res.json();
  },
};
