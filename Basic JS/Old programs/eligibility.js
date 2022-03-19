/* 4. Write a program to find the eligibility of admission for a professional course 
based on the following criteria:
Marks in Maths >=65
Marks in Physics >=55
Marks in Chemistry >=50
Total in all three subjects must be  >=180
Your programs shall print "Eligible for admission" or "Not eligible for admission", depending on results 
*/
let math_marks = 70, physics_marks=56, computer_marks=51;

let total = math_marks + physics_marks + computer_marks;
// ampersand : &
if(math_marks>=65 && physics_marks>=55 && computer_marks>=50 && total>=180)
//  True && True && True && false
//  (((True && True) && True) && false)
/*
	((True && True) && false)
	(True && false)
	(false)
*/
	console.log("Eligible");
else
	console.log("Not Eligible");