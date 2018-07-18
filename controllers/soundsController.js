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
  }
};
