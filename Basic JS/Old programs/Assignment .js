//Program No.1//
let Marks= 91;
if(Marks>90)
{	console.log("A Grade");
}
Marks-=10;
if(Marks>80 &&  Marks<90)
{	console.log("B Grade");
}
Marks-=10;
if(Marks>70 &&  Marks<80)
{	console.log("C Grade");
}
Marks-=10;
if(Marks<70)
{	console.log("Fail");
}
// Program No.2//

var temp= -1;
if(temp<0) 
{	console.log("Freezing Weather");
}
temp+=10;
if(temp>0 && temp<10)
{	console.log("Very Cold Weather");
}
temp+=10;
if(temp>10 && temp<20)
{	console.log("Cold Weather");
}
temp+=10;
if(temp>20 && temp<30)
{	console.log("Normal in Temp");
}
temp+=10;
if(temp>30 && temp<40)
{	console.log("Its Hot");
}
temp+=10;
if(temp>40)
{	console.log("Its very hot");
}
// Program No.3//

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