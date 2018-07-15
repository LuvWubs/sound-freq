const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const soundSchema = new Schema({
  name: { type: String, required: true },
  file: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now }
});

const Sound = mongoose.model("Sound", soundSchema);

module.exports = Sound;
