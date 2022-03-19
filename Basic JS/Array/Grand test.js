/*
Hours = [8,15,20,11,10,23];
Minutes = [50,30,22,5,45,2];
Seconds = [28,2,20,50,33,10]; 
let count=1;
let format;
for(let i in Hours){
if(Hours[i]>12){
	
		format='Pm';
	}else{
	format='Am';
	}
	if(Hours[i]>12){
		Hours[i]=[Hours[i]-12];
	}
for(let x=0; x<1; ++x)
{
	for(let y=0 ; y<Hours.length; ++y)
	{
			{
		console.log(`Time ${count}: ${Hours[i]}:${Minutes[i]} ${format} (${Seconds[i]} Seconds)`);
		++count;
			} break;
		}
	}
}
*/
let Hours = [8,15,20,11,10,23];
let Minutes = [50,30,22,5,45,2];
let Min=Hours[0];
let Max=Hours[0];
let Minm=Minutes[0];
let Maxm=Minutes[0];
let Format=' ';
for(let i in Hours){
	if(Hours[i]>Max){
		Max=Hours[i];
	}
	if(Max>12){
		Max=[Max-12];
		Maxm=Minutes[i];
	}if(Hours[i]<Min){
		Min=Hours[i];
		Minm=Minutes[i];
	}if(Hours[i]>12){
	Format='Pm';
	}else{
	Format='Am';
	}
}console.log(`Maximum time = ${Max}:${Maxm} ${Format}\n Minimum time = ${Min}:${Minm}`);