$(document).ready(function() {

    $('.sound-nav').on('click', function(e) {
      e.preventDefault();
      var category = $(event.target)[0].id;
      console.log('chosen category: ', category);
      $.get('/sounds/' + category, function(data) {
        console.log('getting ' + category + ' sounds from api-routes...');

        randoNoise(data);
      })
    })

    function randoNoise(sounds) {

      $(document).keydown(function() {
        for (i = 0; i < sounds.length; i++) {
          var rando = sounds[i].file;
        };
        var rando = sounds[Math.floor(Math.random()*sounds.length)];
        console.log('rando: ', rando);
        var randoFile = rando.file;
        console.log('on keydown ' + randoFile + ' was requested');
        playIt(randoFile);
      });
    };

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
