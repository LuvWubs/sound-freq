const db = require("../models");

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
      // TODO: put these somewhere safe
      id: '824fe7c92f5d4a48a4f0adb39cdfbf10',
      secret: '6d0b2a4874844f1c88fe185bcbd95781'
    });

    spotify.search({ type: 'track', query: req.params.query }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      // TODO: save sound to db
      db.Sound
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

      // res.json(data);
    });
  },
};
