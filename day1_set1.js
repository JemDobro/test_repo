'use strict';
function whoAmI(name, age) {
    let yearOfBirth = 2018 - age;
    console.log(`Hi, my is ${name} and I'm ${age} years old`);
    console.log(`I was born in ${yearOfBirth}`);
}
whoAmI("alex", 32);
