'use strict';

let app = document.getElementById('app');
var counter = 0;
function movies(){
alert('Please answer with yes or no!');
var question1 = prompt('I cry when I watch romantic movies');
console.log('I cry when I watch romantic movies: no');
while (question1.toLowerCase() !== 'yes' && question1.toLowerCase() !== 'no') {
  question1 = prompt('Answer with yes/no');
}
switch (question1.toLowerCase()) {
case 'yes':
//console.log('Haha, I am not that emotional');
  alert('Haha, I am not that emotional');
  break;
default:
//console.log('You\'re right!');
  alert('You\'re right!');
  counter++;
  break;
}
}
function school(){
var question2 = prompt('I was almost suspended from school as a child');
console.log('I was almost suspended from school as a child: no');
while (question2.toLowerCase() !== 'yes' && question2.toLowerCase() !== 'no') {
  question2 = prompt('Answer with yes/no');
}

if (question2.toLowerCase() === 'yes') {

  //console.log('Haha, that\'s not true!');
  alert('Haha, that\'s not true!');
}

else {
  //console.log('You\'re right!');
  alert('You\'re right!');
  counter++;
}
}
function lie(){
var question3 = prompt('I am a good liar');
console.log('I am a good liar: yes');

while (question3.toLowerCase() !== 'yes' && question3.toLowerCase() !== 'no') {
  question3 = prompt('Answer with yes/no');
}

if (question3.toLowerCase() === 'yes') {
  //console.log('you\'re right!');
  alert('you\'re right!');
  counter++;
}
else {
  //console.log('Believe me, I am');
  alert('Believe me, I am');
}
}
function piano(){
var question4 = prompt('I can play the piano');
console.log('I can play the piano: no');
while (question4.toLowerCase() !== 'yes' && question4.toLowerCase() !== 'no') {
  question4 = prompt('Answer with yes/no');
}
if (question4.toLowerCase() === 'yes') {
  //console.log('Unfortunately, you\'re wrong');
  alert('Unfortunately, you\'re wrong');
}
else {
  //console.log('you guessed it!');
  alert('you guessed it!');
  counter++;
}
}
function dog (){
var question5 = prompt('I love dogs');
console.log('I love dogs: yes');
while (question5.toLowerCase() !== 'yes' && question5.toLowerCase() !== 'no') {
  question5 = prompt('Answer with yes/no');
}
if (question5.toLowerCase() === 'yes') {
  //console.log('You\'re right! I love dogs because they\'re loyal');
  alert('You\'re right! I love dogs because they\'re loyal');
  counter++;
}
else {
  //console.log('You\'re wrong');
  alert('You\'re wrong');
}
}

var userGuess = prompt('Now please guess a number, you have 4 attempts');
var user = parseInt(userGuess);
while (isNaN(user) || user === '') {
  user = prompt('Please insert a number');
}

var num = 6;

for (var i = 0; i<4 ; i++) {
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
    i = 10;
    counter++;
  }

}

alert('The correct number is ' + num);
console.log('insert a number: 6');

var question7 = prompt('Write the name of a music instrument');
console.log('name a music instrument: piano, guitar,violin');
var answer = ['piano', 'guitar', 'violin'];
for (var j = 0; j < 6; j++) {
  if (question7 !== answer[0] && question7 !== answer[1] && question7 !== answer[2]) {
    question7 = prompt('Try again');
  }
  else {
    alert('good job ' + question7 + ' is a type of musical instruments');
    j = 10;
    counter++;
  }
}
alert('The answer is: \n 1-' + answer[0] + '\n 2- ' + answer[1] + '\n 3-' + answer[2]);


alert('Your score is ' + counter + ' out of 7');

var uName = prompt('What\'s your name?');
alert('Welcome to my site, ' + uName + ', I hope you have a nice experience');
app.innerHTML = 'Welcome to my site, ' + uName + ', I hope you have a great time';
