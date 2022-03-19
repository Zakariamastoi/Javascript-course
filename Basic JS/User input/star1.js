let prompt = require ('prompt-sync')();
outer= prompt("Enter outer:");
inner= prompt("Enter inner:");
for(let x=0; x<outer; ++x)
{
	for(let y=0; y<inner; ++y)
	{
		process.stdout.write("*");
	}
	process.stdout.write("\n");
}	