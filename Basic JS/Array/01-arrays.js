
// arrays are used to store multiple elements for easy usage / processing

// [] is array literal. so its used to define the array

let webStudents = ["Khalid", "Abdullah"]; // strings array
let marks = [7, 8, 9, 3, 3]; // numbers array
console.log(webStudents[0] );
webStudents[0] = "Ashraf";

console.log(webStudents[0] );
console.log(marks[0] + marks[4]*2);
webStudents[2] = "Danish";
webStudents[4] = "Ali";
console.log(webStudents[0] + webStudents[1]);
//let webStudents = new Array("Khalid", "Abdullah");
// let marks = new Array(7, 8, 9, 3, 0);

console.log("array data...");
console.log(webStudents);
console.log(webStudents[2]);

// size of array is dynamic, you add elements, sizes increases automatically

console.log("added : Danish");
console.log(webStudents);

// empty means, array with 0 elements

// element type can be different, we can mix different types of elements, and index order is not required when adding
webStudents[3] = 50;
webStudents[8] = "Aamir";
webStudents[5] = "Uzair";
console.log(webStudents);

console.log("array size = " + webStudents.length);

//               ------------------------

// we can iterate indexes using for-in loop
// it will iterate only valid index. and skip the missing indexes
console.log("iterating indexes");
for (let i in webStudents) 
{
	console.log(webStudents[i]);
	//webStudents[i] =  "MAGIC";
}
console.log(webStudents);

console.log("value at 4th index : " + webStudents[4]);

// we can fetch the value, using index
console.log("iterating indexes and reading values at each index.");
for (let index in webStudents) 
{
	console.log(index, webStudents[index]);
}

// if we are interesting to read only array elements
// (and not the indexes) we can use for-of loop
// for-of loop iterate all the indexes, even the undefined ones

console.log("using for-of loop to iterate array elements");
for (let element of webStudents) 
	console.log(element);

console.log("Next");
// Array elements with user input
let prices=[1, 2, 3, 4, 5];
console.log("Enter 5 values: ");
let prompt = require('prompt-sync')();
for(let i in prices)
{
	prices[i] = prompt("Enter value: ");
}
console.log(typeof(prices[0])); // This statement tells the type of a variable
console.log(prices);
prices[0] = Number(prices[0]); // This statement converts string to integer
console.log(prices);

for (let j = 0; j < webStudents.length; j++) {
  console.log(webStudents[j]);
}
console.log("...END...");


console.log("end of iterating arrays. ");

//               ------------------------

// push and pop elements from array, so we can use array like stack
console.log("we can use array like a stack using push and pop methods.");

//console.clear();
elements = ["a", "b"];
console.log(elements);

console.log("add c into array using push method");
elements.push("c");
console.log(elements);

console.log("removed last element from array using pop");
elements.pop();
console.log(elements);

console.log("we can use array like a queue");
console.log("here are the elements before and after shift operation");
elements.push("c");
console.log(elements);
e = elements.shift();

console.log(
  "shift method returns the elements removed i.e. ",
  e,
  ".. after removing: "
);
console.log(elements);

console.log("we can add elements in start too. after adding f");
elements.unshift("f");
console.log(elements);

//               ------------------------

console.log("Split, Join, Reverse methods");
var sentense = "The quick brown fox";
console.log(sentense, " - after split : ");
var a = sentense.split(" ");
console.log(a);
var b = a.join(" ");
console.log("re-joined : " + b);
console.log("Reverse an array elements: : " + sentense.split(" ").reverse());

//               ------------------------

elements.push("w");
elements.sort();
console.log(elements);

console.log("to sort in descending order, use reverse on sorted array ");
elements.reverse();
console.log(elements);
