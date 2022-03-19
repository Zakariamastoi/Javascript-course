// let marks = [20,40,50,60,70];
// for(let i = 0; i<5; ++i){
	// if(marks[i]>50){
	// console.log(marks[i]);
	// }
// }
// let marks = [20,40,50,60,70];
// marks[5]=100;
// let sum =0;
// for(let i = 0; i<marks.length; ++i){
	// sum+=marks[i];
// }
// let avg= sum/marks.length;
// console.log("Total marks of all students are: " ,sum);
// console.log("Average marks of all students are: " ,avg);

// let marks = [20,40,50,60,70];
// let sum =0;
// let avg = marks[0];
// for(let i = 0; i<marks.length; ++i){
	// sum+=marks[i];
	// if(i<marks.length-1){
	// avg= (marks[i +1] + avg)/2;
	// }
// }
// console.log("Total marks of all students are: " ,sum);
// console.log("Average marks of all students are: " ,avg);

// let marks = [20,40,50,60,70,90,100,70];
// let count =0;
// let i;
// for(i = 0; i<marks.length; ++i){
	// if(marks[i]>=50){
	// count++;
	// }
// }
// console.log("count is :", count);

let marks = [20,40,50,60,70,90,100,70];
marks.push(110);
marks[0]='safi';
marks.unshift(20);
console.log(marks);