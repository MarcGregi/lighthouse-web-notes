function getLength (input) {
 return input.length
}

var getLength = (input) => input.length

function addLengths (input1, input2, input3) {
 console.log(“Hello”);
 return input1.length + input2.length + input3.length;
}

var addLengths_ = (input1, input2, input3) => {
 console.log(“Hello”);
 return input1.length + input2.length + input3.length;
}

function oldAdd(x, y) {
 return x + y;
}
console.log(oldAdd(2, 3));

function newerAdd(x) {
 return function(y) {
   return x + y;
 }
}
newerAdd(2)(3);

const newestAdd = x => y => x + y;
newestAdd(2)(3);

const plus3 = newestAdd(3);
plus3(5);