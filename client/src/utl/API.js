import axios from "axios";
// const Spotify = require('node-spotify-api');

export default {
  getSounds: function() {
    console.log('api.js get all sounds fired!');
    return axios.get("/api/sounds/");
  },
  // getSound: function(category) {
  //   console.log('api.js getSound function fired!');
  //   return axios.get("/api/sounds/" + category);
  // },
  // deleteSound: function(category) {
  //   return axios.delete("/api/sounds/" + category);
  // },
  // saveSound: function(soundData) {
  //   return axios.post("/api/sounds", soundData);
  // },
  querySpotify: function(query) {
    console.log(2, query);
    //NOTE should this be something besides axios, maybe bring in multer???
    // return axios.get("https://api.spotify.com/v1/tracks/" + {q: query});
    return axios.post("/api/sounds", {q: query});
  }
};
