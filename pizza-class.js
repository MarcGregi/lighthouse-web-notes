class Pizza  {

    constructor() {
        this.toppings = ["cheese"]; 
    }

    addToppings(topping) {
        this.toppings.push(topping); 
    }
    
} 

module.exports = Pizza; 

