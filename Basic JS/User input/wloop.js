
let prompt = require ('prompt-sync')();
outer= prompt("Enter outer:");
inner= prompt("Enter inner:");
let x=0;
while(x<outer)
{
	let y=0;
	while(y<inner)
	{
			if(x==2 || x==4)
		console.log(`x = ${x} ,y = ${y}`);
		++y;
	}
	++x;
}	