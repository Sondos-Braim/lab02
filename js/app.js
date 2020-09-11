'use strict';

let app = document.getElementById('app');
var counter = 0;
var questions=[
  'I was almost suspended from school as a child',
  'I cry when I watch romantic movies',
  'I am a good liar',
  'I can play the piano',
  'I love dogs',
];
var answers=['no','no','yes','no','yes'];
var shortAnswers=['n','n','y','n','y'];
function theFiveQuestions() {
  alert('Please answer with yes or no!');
  for(var i=0;i<questions.length;i++){
    var userAnswer= prompt(questions[i]);
    while (userAnswer.toLowerCase() !== 'yes' && userAnswer.toLowerCase() !== 'no'&&userAnswer.toLowerCase() !== 'y' && userAnswer.toLowerCase() !== 'n')
    {
      userAnswer = prompt('Answer with yes/no');
    }
    if (userAnswer.toLowerCase() === answers[i]||userAnswer.toLowerCase() === shortAnswers[i]) {
      alert('You\'re right');
      counter++;
    }
    else
      alert('You\'re wrong');

  }
}
function number() {
  var userGuess = prompt('How many times did I watch the Titanic movie, you have 4 attempts');
  var user = parseInt(userGuess);
  while (isNaN(user) || user === '') {
    user = prompt('Please insert a number'); }

  var num = Math.floor(Math.random() * 10);
  var correctNum= false;
  for (var i = 0; i < 3; i++) {

    if (user > num) {
      alert('Too high');
      user = prompt('Try again');
    }
    else if (user < num) {
      alert('Too low');
      user = prompt('Try again');
    }
    else {
      alert('good job');
      counter++;
      correctNum=true;
      break;
    }
  }
  if (correctNum===false){ alert('The correct number is ' + num);}

}
function music() {
  var question7 = prompt('Write the name of a music instrument');
  console.log('name a music instrument: piano, guitar,violin');
  var answer = ['piano', 'guitar', 'violin'];
  for (var j = 0; j < 5; j++) {
    if (question7 === answer[0] || question7 === answer[1] || question7 === answer[2]) {
      alert('good job ' + question7 + ' is a type of musical instruments');
      j = 10;
      counter++;
      break;
    }
    else {
      question7 = prompt('Try again');
    }
  }
  alert('The answer is: \n 1-' + answer[0] + '\n 2- ' + answer[1] + '\n 3-' + answer[2]);
}




function theName() {
  var uName = prompt('What\'s your name?');
  alert('Welcome to my site, ' + uName + ', I hope you have a nice experience');
  app.innerHTML = 'Welcome to my site, ' + uName + ', I hope you have a great time';
}
theName();
theFiveQuestions();
number();
music();
alert('Your score is ' + counter + ' out of 7');




