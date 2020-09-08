'use strict';

let app = document.getElementById('app');

alert('Please answer with yes or no!');
var question1 = prompt('I cry when I watch romantic movies');
while (question1.toLowerCase() !== 'yes' && question1.toLowerCase() !== 'no') {
  question1 = prompt('Answer with yes/no');
}
if (question1.toLowerCase() === 'yes') {
  //console.log('Haha, I am not that emotional');
  alert('Haha, I am not that emotional');
}
else {
  //console.log('You\'re right!');
  alert('You\'re right!');
}


var question2 = prompt('I was almost suspended from school as a child');
while (question2.toLowerCase() !== 'yes' && question2.toLowerCase() !== 'no') {
  question2 = prompt('Answer with yes/no');
}

if (question2.toLowerCase() === 'yes') {

  //console.log('Haha, that\'s not yes!');
  alert('Haha, that\'s not yes!');
}

else {
  //console.log('You\'re right!');
  alert('You\'re right!');
}

var question3 = prompt('I am a good liar');
while (question3.toLowerCase() !== 'yes' && question3.toLowerCase() !== 'no') {
  question3 = prompt('Answer with yes/no');
}

if (question3.toLowerCase() === 'yes') {
  //console.log('you\'re right!');
  alert('you\'re right!');
}
else {
  //console.log('Believe me, I am');
  alert('Believe me, I am');
}
var question4 = prompt('I can play the piano');
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
}
var question5 = prompt('I love dogs');
while (question5.toLowerCase() !== 'yes' && question5.toLowerCase() !== 'no') {
  question5 = prompt('Answer with yes/no');
}
if (question5.toLowerCase() === 'yes') {
  //console.log('You\'re right! I love dogs because they\'re loyal');
  alert('You\'re right! I love dogs because they\'re loyal');
}
else {
  //console.log('You\'re wrong');
  alert('You\'re wrong');
}
var name = prompt('What\'s your name?');
alert('Welcome to my site, ' + name + ', I hope you have a nice experience');
app.innerHTML = 'Welcome to my site, ' + name + ', I hope you have a great time'



