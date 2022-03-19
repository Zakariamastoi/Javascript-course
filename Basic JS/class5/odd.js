let start= 5, end = 7;
let sum= 0;
for(let x = start; x<=end; ++x)
{
	if (x%2==1)
		sum+=(x*x);
}
console.log(sum);
