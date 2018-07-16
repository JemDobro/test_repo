'use strict';

function yearOfBirth(age) {
    if (age < 0) {
        throw new Error('Age cannot be negative');
    }
    let yearOfBirth = 2018 - age;
    return yearOfBirth;
}


function whoAmI(name, age) {
  if(typeof name !== "string" || typeof age !== 'number') {
    console.error("Arguments not valid");
    return;
  }
  try {
    let yob = yearOfBirth(age);
    console.log(`Hi, my is ${name} and I'm ${age} years old`);
    console.log(`I was born in ${yob}`);
  } catch (e) {
    console.error(e.message);
  }
}

whoAmI("alex", 28);
whoAmI('John', -5);
whoAmI('Iolanthe', -8);
whoAmI();
