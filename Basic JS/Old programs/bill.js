let unit = 199;
if(unit<200)
{	console.log("Bill No.1 is: " , unit*1.20);
	console.log(" ");
} 
unit+=151;
if(unit>200 && unit<400)
{	console.log("Bill No.2 is: " , unit*1.50);
	console.log("Bill No.2 with 15% surcharged is: " , (unit*1.50)+(unit*1.50*0.15));
	console.log(" ");
}
unit+=150;
if(unit>400 && unit<600)
{	console.log("Bill No.3 is: " , unit*1.80);
	console.log("Bill No.3 with 15% surcharged is: " , (unit*1.80)+(unit*1.80*0.15));
	console.log(" ");
}
unit+=150;
if(unit>600)
{	console.log("Bill No.4 is: " , unit*2.00);
	console.log("Bill No.4 with 15% surcharged is: " , (unit*2.00)+(unit*2.00*0.15));
}