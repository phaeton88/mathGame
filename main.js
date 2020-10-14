var answer;
var score = 0;
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
  console.log(num1);
  console.log(num2);
  console.log(answer);
};

generateQuestionAnswer();

$('input').keyup(function () {
  if ($('input').val() == answer) {
    score++;
    $('.showScore').html(score);
    $('input').val('');
    generateQuestionAnswer();
  }
});
