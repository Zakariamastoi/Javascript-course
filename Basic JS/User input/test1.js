let prompt= require('prompt-sync')();
let x1= prompt('num1:');
let x2= prompt('num2:');
let Lcm=0;
for(let a=x1;a<x1*x2;c++)
{
	if(a%x1==0 && a%x2==0)
	{
	Lcm=a;
	break;
	}
} 
console.log(`The LCM is: ${LCM}`);
for(let x=8;x<=12;x++)
{
	console.log(`${LCM} * ${x} = ${LCM*x}`);
}