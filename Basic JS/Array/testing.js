// for(let x=0;x<10;++x)
	// {
		// for(let y=0;y<5;y++)
		// {
			// console.log(`Ishfaq = ${x}, Safi = ${x}`);
		// } break;
	// }

// let prompt = require('prompt-sync')();

// outerloopend = prompt("Enter outer:");
// innerloopend = prompt("Enter inner:");
// let count=1;
// if(count<outerloopend){
// for(let x=0;x<outerloopend;++x)
// {
	// console.log("outer loop iteration started" ,count ,"time");
	// for(let y=0;y<innerloopend;y++)
	// {
		// console.log("x = ", x, "y = ", y);
		
	// }
	// console.log("outer loop iteration completed", count ,"time");
	// count+=1;
// } 
// }

let num = 17; 
let factors = 0;

for (let j = 2; j < num; j++) {
  if (num % j == 0){ 
	factors++;  
		break;

  }
}

console.log("factors = " + factors);

if(factors < 1 )
	console.log("number is prime");
else 
	console.log("number is not prime");
	console.log("\n");
let prompt =require('prompt-sync')();
let yob =prompt("Enter year of birth:");
if (yob < 2021) {
  let age = 2021 - yob;
  if (age>20){
	  console.log("Your age is :",age);
  console.log("Suno..! Ab to Shadi kar lo nai to Sharam sy Doob maro");
  }else if
	  (age=>16 && age<20){
		  	  console.log("Your age is :",age);
	  console.log("Suno..! Shadi ki tayari pakrro ");
	}
}