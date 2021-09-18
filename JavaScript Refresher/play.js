/* 1) var: it is used for declare variable. 
   2) function keyword used for function declaration. */
var name = 'Shani';
var age = 24;
var hobby = true;

console.log(typeof name, typeof age, typeof hobby);

function summarizeUser(name, age, hobby) {
    return ('Name is ' + name + ' age is ' + age + ' and the user has hobbies: ' + hobby);
}

console.log(summarizeUser(name, age, hobby));

/*
    let and const: ES6 Features used for variable declaration
*/

let userName = 'Hello';
const age = 22;


