// // import axios from 'axios';
//
// $(document).ready(function() {
//
//     $('.sound-nav').on('click', function(e) {
//       e.preventDefault();
//       var category = $(event.target)[0].id;
//       console.log('chosen category: ', category);
//       $.get('/api/sounds' + category, function(data) {
//         console.log('getting ' + category + ' sounds from api-routes...');
//
//         db.soundFreqFiles.findById({category})
//         .then(data => e.JSON(data));
//       })
//     })
//
//     function playIt(filepath) {
//       console.log('this is the filepath in playIt(): ', filepath);
//       var sound = new Howl({
//         src: [filepath]
//       })
//       sound.play();
//     }
//
//   });
