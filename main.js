var answer;
var score = 0;
var hiScore = 0;
var seconds = 10;
var generateQuestionAnswer = function () {
  var num1 = 0;
  var num2 = 0;
  var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  num1 = getRandomInt(1, 11);
  num2 = getRandomInt(1, 11);
  answer = num1 + num2;
  $('h1').html(num1 + '+' + num2);
};

$('input').keyup(function () {
  if ($('input').val() == answer) {
    score++;
    seconds++;
    $('.showScore').html(score);
    $('input').val('');
    generateQuestionAnswer();
  }
});

var timer = null;
var startTimer = function () {
  if (!timer) {
    timer = setInterval(function () {
      seconds--;
      $('.countdown').html(seconds);
      if (seconds === 0) {
        $('input').attr('disabled', 'disabled');
        stopTimer();
        updateHighScore();
        $('h1').html('Game Over. Press start to play again');
      }
    }, 1000);
  }
};

var stopTimer = function () {
  window.clearInterval(timer);
  timer = null;
};

$('.btn-danger').click(function () {
  seconds = 10;
  score = 0;
  $('input').removeAttr('disabled');
  $('.countdown').html('10');
  $('.showScore').html(score);
  startTimer();
  generateQuestionAnswer();
});

var updateHighScore = function () {
  if (hiScore <= score) {
    hiScore = score;
    $('.highScore').html(hiScore);
  }
};
