let num = 79;
let x;
for(x=2; x<num; ++x)
{	if (num%x==0)
	{
	console.log("not a prime");
	break;
	}
}
if(x==num)
	console.log("prime");
