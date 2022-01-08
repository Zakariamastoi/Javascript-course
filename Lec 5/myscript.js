//This is recommended way
console.log("My First JS from an external file");
// JS is a lowsly typed language
var a = 5;
var b = 6;
console.log(a*b);
 //This is how we write our functions in JS
function sum(a,b) {
    return a + b;
}
console.log(sum(a,b));

// You can assighn function to variables;
var mysum = sum;
console.log(mysum);
