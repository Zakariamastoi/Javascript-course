/*
Variable Scope starts from its declaration and ends when its declaring block ends.
*/
let N, T;
let prompt = require('prompt-sync')();

N = prompt("Enter N:");
let i; // i has global scope (from its declaration to the end of the file)
for( i=1;i<=N;i++)
{	
	let P = 0;
	T = prompt("Enter T:");
	for(let j=1;j<=5;j++) // j has scope in the inner for loop only, because it is declared in the for loop.
	{
		console.log(P);
		console.log(T, " * ", j, " = ", T*j);
	}
}
// console.log(i); // Error: Scope of P is not defined here
console.log("Allah Hafiz");
