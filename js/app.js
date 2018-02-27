// Timers

// setTimeout(function() {
//   $('body').css('background', '#fff');
// }, 4000);

// var amount = 0;

// window.test = setInterval(function() {
//   count++;

//   if ( count > 5 ) 
//     clearInterval(window.test);
//   else console.log('nope, not over 5 yet');

//   console.log(count);

//   $('#counter').text(count);

// }, 2000);


// $('#counter').text('<span>' + count + '</span>');


// var timer = setInterval(function () {
//   console.log(amount);
//   amount++;
//   if (amount > 3) clearInterval(timer);
// }, 1000);



// function test() {
//   console.log('ran this code');
// }


// var another = test();



// var someFunc = function() {

// }

// someFunc();

// References are parameters and values passed in are arguments
// Step 1
// function test(callback) {
//   // console.log(callback);
//   callback('some string passed to the callback');
// }

// // Step 2
// test(function(str) {
//   console.log(str);
// }); // Callback functions -- Functions passed as an argument to another function



// console.log(test);

// var some_var; 

// console.log(some_var);

// setTimeout(function() {

// }, 2000);

// function timer(callback, num) {
//   setTimeout(callback, num); 
// }

// timer(function() { console.log('blah') }, 1500);


// var buttons = $('#crystals button');

// // console.log(buttons[2]);
// for ( var i = 0; i < buttons.length; i++ ) {
//   // console.log(i);
//   // console.log($(buttons[i]).data('color'));
//   // console.log(buttons[i].dataset.color);
// }


// for loops aren't just for arrays
// they're for looping and running code a certain amount of times
var score = 0;


function getNumBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function selectButton() {
  var num = $(this).data('num');

  score += num;

  $('#score').text(score);

  // score = score + num;
}


function startGame() {
  score = 0;
  // num to guess = generator()

  var buttons = $('#crystals button');

  for (var i = 0; i < buttons.length; i++) {
    $(buttons[i]).data('num', getNumBetween(1, 12));
    // console.log(i);
    // console.log($(buttons[i]).data('color'));
    // console.log(buttons[i].dataset.color);
  }

}

startGame();
$('#crystals button').on('click', selectButton);






