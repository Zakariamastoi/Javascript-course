let prompt = require('prompt-sync')();
let n= prompt('Num:');
let x= prompt('x:');
for(let x=1; x<=n; ++x)
{
	if(n%x==0)
		console.log(`Factors : ${x}`);
}