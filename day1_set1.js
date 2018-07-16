'use strict';
function yearOfBirth(age) {
  let yearOfBirth = 2018 - age;
  return yearOfBirth;
}


function whoAmI(name, age) {
    if (age<0) {
        throw new Error ('Age cannot be negative');
    }
    let yob = yearOfBirth(age);
    console.log(`Hi, my is ${name} and I'm ${age} years old`);
    console.log(`I was born in ${yob}`);
}


try {
    whoAmI("alex", 32);
    whoAmI('John', -5);
   } catch(e) {
    console.error(e.message);
   }