'use strict'

alert('Please answer with true or false!');
var question1 = prompt('I cry when I watch romantic movies');
while (question1.toLowerCase() !== 'true' && question1.toLowerCase() !== 'false'){
  question1=prompt('Answer with true/false');
}
switch (question1.toLowerCase()) {
  case 'true':
    //console.log('Haha, I am not that emotional');
    alert('Haha, I am not that emotional');
    break;
  case 'false':
    //console.log('You\'re right!');
    alert('You\'re right!');
    break;

  

    break;
}
var question2 = prompt('I was almost suspended from school as a child');
while (question2.toLowerCase() !== 'true' && question2.toLowerCase() !== 'false'){
  question2=prompt('Answer with true/false');
}

switch (question2.toLowerCase()) {
  case 'true':
    //console.log('Haha, that\'s not true!');
    alert('Haha, that\'s not true!');
    break;
  case 'false':
    //console.log('You\'re right!');
    alert('You\'re right!');
    break;

  

    

}
var question3 = prompt('I am a good liar');
while (question3.toLowerCase() !== 'true' && question3.toLowerCase() !== 'false'){
  question3=prompt('Answer with true/false');
}

if (question3.toLowerCase() === 'true') {
  //console.log('you\'re right!');
  alert('you\'re right!');
}
else  {
  //console.log('Believe me, I am');
  alert('Believe me, I am');
}


var question4 = prompt('I can play the piano');
while (question4.toLowerCase() !== 'true' && question4.toLowerCase() !== 'false'){
  question4=prompt('Answer with true/false');
}
if (question4.toLowerCase() === 'true') {
  //console.log('Unfortunately, you\'re wrong');
  alert('Unfortunately, you\'re wrong');
}
else  {
  //console.log('you guessed it!');
  alert('you guessed it!');
}




var question5 = prompt('I love dogs');
while (question5.toLowerCase() !== 'true' && question5.toLowerCase() !== 'false'){
  question5=prompt('Answer with true/false');
}

if (question5.toLowerCase() === 'true') {
  //console.log('You\'re right! I love dogs because they\'re loyal');
  alert('You\'re right! I love dogs because they\'re loyal');
}
else  {
  //console.log('You\'re wrong');
  alert('You\'re wrong');
}

 
  

var name = prompt('What\'s your name?');
alert('Welcome to my site, ' + name + ', I hope you have a nice experience');
document.write(' Welcome to my site, ' + name + ', I hope you have a great time');

