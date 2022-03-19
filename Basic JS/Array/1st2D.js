// 2D Array
data1 = [7,6,9];
data2 = [[7,6,9,1],
		[1,10,7,1],
		[3,2,11,1],
		[12,22,23,1]];
// console.log(data2[1][1]);
// for(let x= 0; x<data2.length; x++)
// {	
	// console.log(data2[x][0]);
// }
// for(let x=0; x<data2.length; x++)
// { 
	// console.log(data2[0][x]);
// }
// for (let x=0; x<data2.length; x++)
// {
	// console.log(data2[x][x]);
// }
// for (let x=0; x<data2.length; x++)
// {
	// for(let y=0; y<data2[x].length;++y)
	// {
	// console.log(data2[x][y]);
	// }console.log("\n");
// }
for (let x=data2.length-1; x>=0; x--)
{
	for(let y=data2[x].length-1; y>=0; --y)
	{
	console.log(data2[x][y]);
	}console.log("\n");
}
