let array =[100, 32, 33, 50,70];
let sum = 0;
for(let i in array)
{ 
	sum+=array[i];
	if(array[i]%2 ==0)
		console.log(array[i]);
	}
	console.log(sum);