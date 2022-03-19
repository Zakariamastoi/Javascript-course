data1 = [7, 6, 9];

data2 = [[7, 6, 9], 
		 [1, 10, 8],
		 [5, 4, 3]];

//console.log(data2);

for(let x=0;x<data2.length;x++)
{
	console.log(data2[x][0]);
}
for(let x=0;x<data2.length;x++)
{
	console.log(data2[0][x]);
}
for(let x=0;x<data2.length;x++)
{
	console.log(data2[x][x]);
}


data2 = [[ 6, 9, 10], 
		 [ 10, -8, -1],
		 [	 -4, 3, 1]];
		 


for(let x=0;x<data2.length;x++)
{
	console.log(data2[x][0], data2[x][1], data2[x][2]);
}


data2 = [[7, 6, 9, 10], 
		 [1, 10, -8, -1],
		 [5, -4, 3, 1]];
		 
		 
console.log("Test");
let sum=0;
let count=0;
for(let x=0;x<data2.length;x++)
{
	for(let y=0;y<data2[x].length;y++)
	{
		sum+=data2[x][y];
		if(data2[x][y]>0)
		{
			console.log(data2[x][y]);
			count++;
		}
	}
}
console.log(sum, count);
	
data2 = [[7, 6, 9], 
		 [1, 10, -8],
		 [5, -4, 3]];	 
		 
console.log("Test");
for(let x=data2.length-1;x>=0;x--)
{
	for(let y=data2[x].length-1;y>=0;y--)
	{
		console.log(data2[x][y]);
	}
}

console.log("Test");
//data1d = [1, 2, 3, 2, 1];

data2 = [[7, 6, 9, 10], 
		 [1, 10, -8, -1],
		 [5, -4, 3, 1]];
for(let i of data2)
{
	for(let j of i)
	{
		console.log(j);
	}
}
console.log("Test");
/*
for(let i in data2)
{
	for(let j in data2[i])
	{
		data2[i][j] = prompt("Enter value:");
	}
}
*/
for(let i in data2)
{
	for(let j in data2[i])
	{
		console.log(data2[i][j]);
	}
}

		 
		 