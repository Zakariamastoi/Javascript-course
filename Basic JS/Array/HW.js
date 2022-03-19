// Question=4
let prompt= require('prompt-sync')();
let input = prompt("Enter Number: ");
let Array=[1, 2,3,4,6,7,8,9,15,23,17];
let sum =0, Max = Array[0], Min = Array[0];
if( input==1){
		for(let i of Array)
		sum+=i;
	console.log(sum);
	}else if
		(input==2)
		for(let j in Array){
		for(let j=0; j<Array.length; ++j)
				
		if(Array[j]>Max){
			Max=Array[j];
			{
		if(Array[j]<Min)
			Min=Array[j];
			}
		}console.log(Max, Min);
	}
	else if (input==3){
		
		for(a=Array.length-1; a>= 0; --a)
			
			console.log(Array[a]);
	}
	/* Question#2
num=[0,1,2,-3,4,-5,8,9,0,-10];
let sum1=0;
let sum2=0;
let sum3=0;
for (let i in num)
{	
	{	if(num[i]<0)
		sum2+=1;
	
		if(num[i]==0)
		sum3+=1;
	
		if(num[i]>0)
		sum1+=1;
	}
}console.log(sum1 , sum2,  sum3)

Question#3
array1=[3,4,5,8,9];
Array= ' ';
for(let i of array1)
	for(let x=0; x<array1.length; ++x)
	{	
		Array+=[[i],[,]];
		
		break;
	} 
console.log(Array);


 Question#4

Array=[1,2,3,4,5,6,7,8,9,10];
var num =prompt("input num: ");
for(let i of Array)
	{	
		if(Array[i]==num)
		{	
		console.log(i + " " +Array[i]);
		}
	}




// Question#5
array=[11,21,31,45,56,69,71];
for(let i in array)
{	
	for(let j=2; j<array[i]; ++j)
	{
		if(j==i)
	console.log(array[i]);
	}
}*/