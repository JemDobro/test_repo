'use strict';
function yearOfBirth(age) {
  let yearOfBirth = 2018 - age;
}

function whoAmI(name, age) {
    console.log(`Hi, my is ${name} and I'm ${age} years old`);
    console.log(`I was born in ${yearOfBirth}`);
}
whoAmI("alex", 32);
yearOfBirth(40);