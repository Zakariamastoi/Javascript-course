let start= 1, end = 100;
let sum_even = 0, sum_odd=0;

for(let x = start; x<=end; ++x)
{
	if (x%2==0)
		sum_even += x;
	else 
		sum_odd += x;
}
console.log(sum_even);
console.log(sum_odd);