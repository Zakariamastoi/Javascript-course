// let prompt = require ('prompt-sync')();
// let a;
// let b;
// let temp=0;
// a = prompt(" Enter the value of A :");
// b = prompt(" Enter the value of B :");
// temp=a;
// a= b;
// b=temp;
// console.log(a,b);

				
			// Question 1
			
// let EmpRate=[300,400,500,600,700];
// let Hours = [2,5,6,8,9,7];
// let E = ' ';
// let H = ' ';
	// for(let a=0; a<EmpRate.length; ++a){
		// E+=EmpRate[a];
		// if(a<EmpRate.length-1)
		// E+=",";
	// }
	// console.log(E);
	
	// for(let i=0; i<Hours.length; ++i){
		// H+=Hours[i];
		// if(i<Hours.length-1)
		// H+=",";
	// }
	// console.log(H);
	
	// Question 2
	
EmpRate=[600,300,400,500,700];
Hours = [5,6,7,3,10];
let pay=[];
let sum=0;
let avg=0;
let count=0;
	for(let i in EmpRate){
		pay[i]=(EmpRate[i]*Hours[i]);
		sum+=pay[i];
		avg+=sum;
			if(count<Hours.length){
				++count;
		process.stdout.write("Payment of Employee " +count+": "+ EmpRate[i] + "x" + Hours[i] +"="+pay[i]+"\n"+"\n" );
		process.stdout.write("\n");
		}
	}
	
	
	// Question 3
		
// EmpRate=[600,300,400,500,700];
// Hours = [5,6,7,3,10];
// let pay=[];
// let sum=0;
// let avg=0;
// let count=0;
	// for(let i in EmpRate){
		// pay[i]=(EmpRate[i]*Hours[i]);
		// sum+=pay[i];
		// avg+=sum;
			// if(count<Hours.length){
				// ++count;
		// process.stdout.write("Payment of Employee " +count+": "+ EmpRate[i] + "x" + Hours[i] +"="+pay[i]+"\n"+"\n" );
		// }
	// }process.stdout.write("Total of payments: " +sum+"\n"+"\n"+"Average of payments: " +avg/EmpRate.length);
	
	// Question 4
	
// let Salary=[3000,1800,2800,1500,7000];
// let min=Salary[0];
// let bouns=500;
// let payment=0;
// let per=0.20;
// for(let i in Salary){
	// if(Salary[i]<min){
		// min=Salary[i];
		// payment+= min+(min*per);
		// if(min>1000 && min<2000){
			// payment+=bouns;
		// }
	// }payment+= min+(min*per);
// }
// console.log("The minimum pay with bouns is :",payment);
