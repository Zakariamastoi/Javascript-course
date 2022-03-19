let x1=6, x2=8;
let LCM=0;
for(let c=x1;c<x1*x2;c++)
{
	if(c%x1==0 && c%x2==0)
	{
		LCM=c;
		break;
	}
}
// now print the table of LCM
for(let x=8;x<=12;x++)
{
	console.log(`${LCM} * ${x} = ${LCM*x}`);
}