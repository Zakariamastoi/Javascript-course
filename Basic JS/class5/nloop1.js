

let prompt = require ('prompt-sync')();
ole= prompt("Enter outer:");
ile= prompt("Enter inner:");
for(let x=0; x<ole; ++x)
{
	for(let y=0; y<ile; ++y)
	{
	if(x==2 || x==4)
		console.log(`x = ${x} ,y = ${y});
	}
}	