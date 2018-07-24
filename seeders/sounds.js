const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/soundFreqFiles"
);

const sounds = [
  {
    name: 'buzz',
    file: '/sounds/bug-buzz.wav',
    category: 'bug'
  },
  {
    name: 'call',
    file: '/sounds/bug-call.wav',
    category: 'bug'
  },
  {
    name: 'clicks',
    file: '/sounds/bug-clicks.wav',
    category: 'bug'
  },
  {
    name: 'fireants',
    file: '/sounds/bug-fireants.wav',
    category: 'bug'
  },
  {
    name: 'purring',
    file: '/sounds/bug-purring.wav',
    category: 'bug'
  },
  {
    name: 'wings',
    file: '/sounds/bug-wings.wav',
    category: 'bug'
  },
  {
    name: 'beatbox',
    file: '/sounds/drops-beatbox.wav',
    category: 'drops'
  },
  {
    name: 'explosion',
    file: '/sounds/drops-explosion.flac',
    category: 'drops'
  },
  {
    name: 'warble',
    file: '/sounds/drops-warble.ogg',
    category: 'drops'
  },
  {
    name: 'bubbles',
    file: '/sounds/electronics-bubbles.wav',
    category: 'electronics'
  },
  {
    name: 'chatting',
    file: '/sounds/electronics-chatting.wav',
    category: 'electronics'
  },
  {
    name: 'chords',
    file: '/sounds/electronics-chords.wav',
    category: 'electronics'
  },
  {
    name: 'circus',
    file: '/sounds/electronics-circus.wav',
    category: 'electronics'
  },
  {
    name: 'erie',
    file: '/sounds/electronics-erie.wav',
    category: 'electronics'
  },
  {
    name: 'gutteral',
    file: '/sounds/electronics-gutteral.wav',
    category: 'electronics'
  },
  {
    name: 'highhat',
    file: '/sounds/electronics-highhat.wav',
    category: 'electronics'
  },
  {
    name: 'laserhits',
    file: '/sounds/electronics-laserhits.wav',
    category: 'electronics'
  },
  {
    name: 'pipes',
    file: '/sounds/electronics-pipes.wav',
    category: 'electronics'
  },
  {
    name: 'signal',
    file: '/sounds/electronics-signal.wav',
    category: 'electronics'
  },
  {
    name: 'warble',
    file: '/sounds/electronics-warble.wav',
    category: 'electronics'
  },
  {
    name: 'frogs',
    file: '/sounds/nature-frogs.wav',
    category: 'nature'
  },
  {
    name: 'beads',
    file: '/sounds/noise-beads.wav',
    category: 'noise'
  },
  {
    name: 'boioing',
    file: '/sounds/noise-boioing.wav',
    category: 'noise'
  },
  {
    name: 'cat',
    file: '/sounds/noise-cat.wav',
    category: 'noise'
  },
  {
    name: 'electricwhoosh',
    file: '/sounds/noise-electricwhoosh.wav',
    category: 'noise'
  },
  {
    name: 'laughter',
    file: '/sounds/noise-laughter.wav',
    category: 'noise'
  },
  {
    name: 'metaltwang',
    file: '/sounds/noise-metaltwang.wav',
    category: 'noise'
  },
  {
    name: 'meteor',
    file: '/sounds/noise-meteor.wav',
    category: 'noise'
  },
  {
    name: 'minions',
    file: '/sounds/noise-minions.wav',
    category: 'noise'
  },
  {
    name: 'nailpull',
    file: '/sounds/noise-nailpull.wav',
    category: 'noise'
  },
  {
    name: 'noisemaker',
    file: '/sounds/noise-noisemaker.wav',
    category: 'noise'
  },
  {
    name: 'pied',
    file: '/sounds/noise-pied.wav',
    category: 'noise'
  },
  {
    name: 'raspberry',
    file: '/sounds/noise-raspberry.wav',
    category: 'noise'
  },
  {
    name: 'recordscratch',
    file: '/sounds/noise-recordscratch.wav',
    category: 'noise'
  },
  {
    name: 'squeek',
    file: '/sounds/noise-squeek.wav',
    category: 'noise'
  },
  {
    name: 'stungun',
    file: '/sounds/noise-stungun.wav',
    category: 'noise'
  },
  {
    name: 'thump',
    file: '/sounds/noise-thump.wav',
    category: 'noise'
  },
  {
    name: 'whizz',
    file: '/sounds/noise-whizz.wav',
    category: 'noise'
  }
];

db.Sound
  .remove({})
  .then(() => db.Sound.collection.insertMany(sounds))
  .then(data => {
    console.log("Sounds added to mongoDB");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
