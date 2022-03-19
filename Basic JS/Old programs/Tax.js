var age = 85;
var income = 35000;
if(age<60 && income<25000)
	tax=0;
else if(age<60 && (income>= 25000 && income <=50000))
	tax= income*0.2;
else if(age<60 && income>50000)
	tax= income*0.3;
else if(age>=60 && age<=80 && income<30000)
	tax=0;
else if(age>=60 && age<=80 && income>=30000 && income<=40000)
	tax= income*0.2;
else if(age>=60 && (age<=80 && income>40000))
	tax= income*0.3;
else if(age>80 && income<50000)
	tax=0;
else if(age>80 && income>50000)
	tax= income*0.2;
	console.log(tax);