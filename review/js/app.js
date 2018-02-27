
// timeout
  // delaying some code
// setTimeout(function() {
//   console.log('run this code');
// }, 2000);


// // setInterval
//   // create an infinite repeated loop to run code over and over based on a delay time
// var count = 0;
// var timer = setInterval(function() {
//   console.log(count);
//   count++;

//   if ( count > 5 )
//     clearInterval(timer);
// }, 2000);


// function test(str, arr, num) {
//   console.log(arr);
// }

// test('some string', 5, ['one', 'two', 'three']);
// Functions won't run their code until They are Called
// function test(callback) {
//   // console.log(callback);
//   setTimeout(function() {
//     callback('some value');
//   }, 1500);

//   console.log('I ran first');
// }

// test(function(str) {
//   console.log(str);
// });


var score = 0;
var buttons = $('#crystals button');

function getNumBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log(ranNumBetween());

function selectButton() {
  var num = $(this).data('num');

  score += num;

  $('#score').text('Score: ' + score); // 'Score: 8'
}


function startGame() {
  score = 0;

  for ( var i = 0; i < buttons.length; i++ ) {
    $(buttons[i]).data('num', getNumBetween(1, 12));
  }
}

startGame();
buttons.on('click', selectButton);

