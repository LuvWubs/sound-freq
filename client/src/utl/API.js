import axios from "axios";

export default {
  getSounds: function() {
    console.log('api.js get all sounds fired!');
    return axios.get("/api/sounds");
  },
  getSound: function(category) {
    console.log('api.js getSound function fired!');
    return axios.get("/api/sounds/" + category);
  },
  deleteSound: function(category) {
    return axios.delete("/api/sounds/" + category);
  },
  saveSound: function(soundData) {
    return axios.post("/api/sounds", soundData);
  }
};
