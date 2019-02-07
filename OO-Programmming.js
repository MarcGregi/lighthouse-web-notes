const dogSound = "woof";
let dogBreed = "shih tzu";

const dog = {
    sound: "woof", 
    speak: function() {
        console.log(this.sound); 
    }
}; 

dog.speak(); // dog.speak() is still logging out the sound property from the dog object. 

// In Express, we write endpoint handlers that take two arguments, a request and a response. 
app.get("/", (req, res) => {

}); 

app.get("/", (req, res) => {
    res.status()  // to set the status of the response
    res.set()    // to set outgoing headers of the response
    res.json()  // to send an object as JSON in the response-body
    res.get()  // to see what headers we have already set 
}); 


// jQuery
$('.myClass'); 

$('.myClass').length; // the number of elements in the jquery object 

// BUT - mostly we use Jquery on this object 
$('.myClass').text(); // Read the contents of a text node.
$('.myClass').text("🍕") // Set the contents of a text node. 


