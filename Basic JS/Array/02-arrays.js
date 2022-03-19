let array = [50, 32, 60, 80, 0, 23];
let sum = 0;
let temp = array[0];
for(let i in array)
{
	if(array[i]>temp)
	{
		temp = array[i];
	}
	sum+=array[i];
	if(array[i] % 2 == 0)
		console.log(array[i]);
}
console.log(sum/array.length);
console.log(temp);
	
	