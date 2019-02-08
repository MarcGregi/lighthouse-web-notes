function first() {
    var greet = "Hi"; 
    function second() {
        alert(greet); 
    }
    return second; 
}



const first = () => {
    const greet = "Hi"; 
    const second = () => {
     alert(greet);    
    }
        return second; 
}



// closures - a function ran. The function executed. It is never going to excute again, but it is going to remember that there are references to those variables. Children scope always have access to the parent scope, but parents do not always have access to children scope variables.


// Curry 
const multiply = (a, b) => a * b; 
const curriedMultiply = (a) => (b) => a * b; 

curriedMultiply(3)(4); // you have to call the parameters in seperate brackets.


 // Compose. Putting two functions together. 


const compose = (f, g) => (a) => f(g(a)); 

const sum = (number) => number + 1; 

compose(sum, sum)(5); 

// Avoiding side effects and creating functional purity. 


