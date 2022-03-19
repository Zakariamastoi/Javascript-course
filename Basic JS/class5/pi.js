let start= 1, end = 999;
let term= 1;
let sume= 0, sumo=0;
let x;
for(let x=start; x<end; x+=2)
{
	if (term%2==0)
		sume -= 1/x;
	else 
		sumo+= 1/x;
	term++;
}
let pi=4*(sume+sumo);
console.log(pi);

