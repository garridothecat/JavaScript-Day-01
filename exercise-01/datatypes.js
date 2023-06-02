/*<<<<<<<<<<<<<<<<<<<<Typeof operator><>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// console.log(typeof variablename);

const myName = 'Garrido';
console.log(typeof myName); // string

const myAge = 25;
console.log(typeof myAge); // number

const iLikeEating = true;
console.log(typeof iLikeEating); // boolean

let myVariable = null;
console.log(typeof myVariable); // Output: null

const sym1 = Symbol();
console.log(typeof sym1); // Output: symbol

const bigInt1 = BigInt(9007199254740991); // Within the safe range of number type

//Declare variables without values

var pikachu;

let bulbasaur;

var squirtle;

//Declare variables with assigned values

var charmander = 'Fire Type';
console.log(charmander);
var squirtle = 'Water Type';
console.log(squirtle);
var bulba = 'Grass Type';
console.log(bulba);

//Declare variables to store your first name, last name, marital status, country and age in multiple lines

const firstName = 'João';
const lastName = 'Garrido';
const maritalStatus = 'Single';
const country = 'Portugal';
const age = 25;

// Declare variables to store your first name, last name, marital status, country and age in a single line
console.log(`I am ${firstName} ${lastName} ${maritalStatus}`);

//Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

const mAge = 25;
const yourAge = 35;
console.log(`I am ${mAge} years old.`);
console.log(`You are ${yourAge} years old.`);
