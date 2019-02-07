function isUserValid(val) {
    return val; 
}
    
const answer = isUserValid(true) ? "You may enter" : "Access Denied"; 

const automatedAnswer = "Your account # is " + (isUserValid(true) ? "1234" : "Not available"); 

function condition() {
    if (isUserValid(true)) {
        return "You may enter"; 
    }
    else {
        return "Access Denied"; 
    }
}

function moveCommand(direction) {
    var whatHappens; 
    switch (direction) {
        case "forward": 
        whatHappens = "you have encountered a monster"; 
            break; 
        case "back": 
        whatHappens = "you have arrived home"; 
            break; 
        case "right": 
        whatHappens = "you have found a river"; 
            break; 
        case "left": 
        whatHappens = "you are a monster"; 
            break; 
        default: 
        whatHappens = "Please enter a valid direction."
    }
    return whatHappens; 
}
