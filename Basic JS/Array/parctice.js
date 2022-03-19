/*let i = Number(prompt("Enter number"));
let sum = 0;
for (let x=i; x<100; x+=3)
	{
		console.log(x);
		{ if(x%5===0)
		sum+=x;
		}
	}
console.log("The sum those integers that are divisible by 5 is: ", sum);
*//*
let prompt = require ('prompt-sync')();
let x= prompt ('Enter value');
// for(let x= color; x<10; ++x)
{	if
		(x==1 || x==2){
		console.log("RED");
	} else if
	
		(x==3 || x==4){
	console.log("GREEN");
	}else if 
	
		(x==5 || x==6){
	console.log("BLUE");
	}else if
		(x>6){
	console.log("WHITE");
	}else if
		(x==0 ){
	console.log("BLACK");
	}else if
		(x<0){
	console.log("ERROR");
	}
}	*/
let prompt = require ('prompt-sync')();
for(let x= 0; x<10; ++x){
x = prompt ('Enter value');
	if
		(x==1 || x==2){
		console.log("RED");
	} else if
		(x==3 || x==4){
	console.log("GREEN");
	}else if 
		(x==5 || x==6){
	console.log("BLUE");
	}else if
		(x>6){
	console.log("WHITE");
	}else if
		(x==0 ){
	console.log("BLACK");
		}
		if 
		(x<0){
	console.log("No more inputs");
		{break;}
		}
}
