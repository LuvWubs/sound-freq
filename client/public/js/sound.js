// import axios from 'axios';

$(document).ready(function() {

    $('.sound-nav').on('click', function(e) {
      e.preventDefault();
      var category = $(event.target)[0].id;
      // console.log('chosen category: ', category);
      $.get('/api/sounds/' + category, function(data) {
        console.log('getting ' + category + ' sounds from api-routes...');
        return data.JSON();
        // db.soundFreqFiles.findById({category});
        // randoNoise(data);
      })
    })

    // function randoNoise(sounds) {

      $(document).keydown(function() {
        var rando = sounds[Math.floor(Math.random()*sounds.length)];
        console.log('rando: ', rando);
        var randoFile = rando.file;
        console.log('on keydown ' + randoFile + ' was requested');
        playIt(randoFile);
      });
    // };

    function playIt(filepath) {
      console.log('this is the filepath in playIt(): ', filepath);
      var sound = new Howl({
        src: [filepath]
        //   autoplay: false,
        //   loop: false,
        //   volume: 0.5,
      })
      sound.play();
    }

  });
