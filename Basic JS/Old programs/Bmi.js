let wt_lb = 600;
let ht_in = 100;
let BMI = (703*wt_lb)/(ht_in*ht_in);
if(BMI < 18.5){
	status= "Underweight";
}else if(BMI >= 18.5 && BMI <= 24.9){
	status= "Normal";
}else if(BMI >= 25.0 &&  BMI <= 29.9){
	status= "Overweight";
}else { 
	status= "Obese";
}
console.log(status);