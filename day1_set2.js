'use strict'
function jediName(firstName, lastName) {
    return `${lastName.slice(0,3)}${firstName.slice(0,2)}`;
}
// console.log(jediName('Beyonce', 'Knowles'));



function beyond(num) {
  if (num === Infinity || num === -Infinity) {
    console.log("And beyond")
  } else if(num === 0) {
    console.log("Staying home");
  } else if(num < 0) {
    console.log("To negative infinity");
  } else if (num > 0) {
    console.log("To infinity");
  }
}

// beyond(0);
// beyond(-5);
// beyond(5);
// beyond(Infinity);
// beyond(-Infinity);


function decode(word) {
    let firstLetter = word.slice(0, 1);
    switch(firstLetter) {
        case 'a':
            return word[1];
            break;
        case 'b':
            return word[2];
            break;
        case 'c':
            return word[3];
            break;
        case 'd':
            return word[4];
            break;
        default:
            return ' ';
    }    
}
// console.log(decode('craft') 
// + decode('block') 
// + decode('argon') 
// + decode('meter') 
// + decode('bells') 
// + decode('brown') 
// + decode('croon') 
// + decode('droop'));

function daysInMonth(month, leapYear = false) {
  let days = 0;
  if (month === 'february' && leapYear === true) {
    return `${month} with a leap year has 29 days`;
  }
  switch(month) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
      days = 31;
      break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
      days = 30;
      break;
    case 'february':
      days = 28;
      break;
    default:
      return "Must provide a valid month.";
  }
  return `${month} has ${days} days`;
}

console.log(daysInMonth('january'));
console.log(daysInMonth('february'));
console.log(daysInMonth('february', true));
console.log(daysInMonth('march'));
console.log(daysInMonth('april'));
console.log(daysInMonth('may'));
console.log(daysInMonth('june'));
console.log(daysInMonth('july'));
console.log(daysInMonth('august'));
console.log(daysInMonth('september'));
console.log(daysInMonth('october'));
console.log(daysInMonth('november'));
console.log(daysInMonth('december'));
console.log(daysInMonth('asdf'));