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
console.log(decode('craft') 
+ decode('block') 
+ decode('argon') 
+ decode('meter') 
+ decode('bells') 
+ decode('brown') 
+ decode('croon') 
+ decode('droop'));

