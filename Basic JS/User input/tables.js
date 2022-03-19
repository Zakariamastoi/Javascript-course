let N,T;
let prompt = require ('prompt-sync')();

N = prompt('Enter N: ');
console.log("Get ready to print N tables...");
for(let A=1; A<=N; ++A)
{	
	T = prompt('Enter T: ');
	for(let c=1; c<5; c++)
	{
		console.log(`${T} * ${c} = ${c*T}`);
	}
	process.stdout.write("\n");
}
console.log("Allah Hafiz meri Jan... Phir milyn gy");
