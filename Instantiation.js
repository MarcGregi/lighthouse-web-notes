// Reference 

let object1 = { value: 10}; 
let object2 = object1; 
let object3 = { value: 10}; 

// context vs scope 

const newObject = {
    a: function() {
        console.log(this)
    }
}

// instantiation 

// think of a class as something that I want to make a copy of. If we have a game and there will be varies different types of players from warriors to pickers to builders age of empire reference. 


class Player {
    constructor(name, type) {
        console.log('player', this); 
        this.name = name; 
        this.type = type; 
    }
    introduce() {
        console.log(`Hi, I am ${this.name}: I am boss at ${this.type}`); 
    }
}

class Wizzard extends Player {
    constructor(name, type) { 
        super(name, type)  
    }
    play() {
        console.log(`I am a ${this.type}`); 
    }
}

const wizzard1 = new Wizzard('James', 'Warrior');
const wizzard2 = new Wizzard('Kelly', 'Healer');  


//Evaluate these:
//#1
[2] === [2] 
{} === {} 

false 
false 

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // a = 4; 
const object2 = object1; // a = 4; 
const object3 = object2; // a = 4; 
const object4 = { a: 5}; // a = 5 
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Mammal {
    constructor(name, type, color) {
        this.name = name; 
        this.type = type; 
        this.color = color; 
    }
}

class Animal extends Mammal {
    constructor(name, type, color) {
        super(name, type, color)
    }
    sound() {
        console.log(`moo I am ${this.name} and I am a fat ${this.type} and I look like ${this.color}`); 
    }
}

const cow1 = new Animal("Betty", "Cow", "Red"); 
