// Scoping in Javascript

// Root Scope // Parent Scope
var fun = 5;

function funFunction() {
  // Child scope
  var fun = "Hello";
  console.log(1, fun);
}

function funerFunction() {
  // Child Scope
  var fun = "bye";
  console.log(2, fun);
}

function funestFunction() {
  // Child Scope
  var fun = "Having a good time";
  console.log(3, fun);
}

console.log("Window: ", fun);
funFunction();
funerFunction();
funestFunction();
console.log(fun);




