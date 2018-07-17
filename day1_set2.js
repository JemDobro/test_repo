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

beyond(0);
beyond(-5);
beyond(5);
beyond(Infinity);
beyond(-Infinity);