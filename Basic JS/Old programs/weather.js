/* 

let Temperature = 8;
if(Temperature<0)
	console.log("Freezing");
else
{
	if(Temperature>=0 && Temperature<10)
		console.log("Cold");
	else
	{
		if(Temperature>=10 && Temperature<25)
			console.log("Moderate");
		else
		{
			if(Temperature>=25)
				console.log("Hot");
		}
	}
}
*/

/* 4. Write a program to find the eligibility of admission for a professional course 
based on the following criteria:
Marks in Maths >=65
Marks in Physics >=55
Marks in Chemistry >=50
Total in all three subjects must be  >=180
Your programs shall print "Eligible for admission" or "Not eligible for admission", depending on results 
*/
let Temperature = 8;
let weather ;
if(Temperature<0)
{
	weather = "winter"; 
	console.log("Freezing");
}
else if(Temperature>=0 && Temperature<10)
{
	weather = "spring";
	console.log("Cold");
}
else if(Temperature>=10 && Temperature<25)
{
	console.log("Moderate");
}
else
	console.log("Hot");
		
	

