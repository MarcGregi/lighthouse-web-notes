// Playing arround with ES6 properties. 
// const 
// let 
// messing with objects 


const player = "James"; 
let experience = 100;
let wizzardLevel = false; 

if (experience > 90) {
    let wizzardLevel = true; 
}



const example = "Will Never adjust"; 
let example = "Can adjust"; 

function a(i) {
    let example = "Use inside of scopes"; 
    if (i === example) {
        console.log(i); 
    }
    return; 
}

const a = "Simon"; 
const b = true; 
const c = {}; 

// old way of adding to an object 

const obj = {
    a: a, 
    b: b, 
    c: c 
}

// new way 
const obj = { a, b, c}; 



// Template Strings 
const name = "Marc"; 
const age = 29; 
const hobby = "Running"; 

const greeting = `Hi ${name} who is ${age-5} and likes ${hobby}`; 

// default arguments 

function greet(name="", age=24, hobby="F45") {
    return `Hi ${name} who is ${age-5} and likes ${hobby}`; 

}

// Symbol 

let symb1 = symbol(); 
let symb2 = symbol("foo"); 
let symb3 = symbol("foo"); 

// arrow functions 
// old 

function add(a, b) {
    return a + b; 
}

// New function
const add = (a, b) => a + b;  

// or
 const add2 = (a, b) => {
    return a + b; 
}

// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

// new 
let a = "test"; 
const b = true; 
const c = 789; 
let a = "test2"

// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

// 
const { firstName, lastName, age, eyeColor } = person;


// Object properties
const a = 'test';
const b = true;
const c = 789;

var okObj = { a, b, c }; 


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

const message = `Hello ${firstname} have I met you before? I think we met in ${city} last summer no???`; 


// default arguments
// default age to 10;
const isValidAge = (age = 10) => age; 



// Symbol
// Create a symbol: "This is my first Symbol"
const symbolIsweird = symbol("This is my first symbol"); 

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI = (username, location) => {
    if (username && location) {
        return "I am lost"; 
    }
    else {
        return "I am totally lost"; 
    }

}





