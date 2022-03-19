let mat1=[[1,2,3],[2,3,4],[3,4,5]];
let mat2=[[1,2,3],[2,3,4],[3,4,5]];
let result=[[1,2,3],[2,3,4],[3,4,5]];
let prompt=require('prompt-sync')();
for(let x=0; x<mat1.length; ++x)
{
	for(let y=0; y<mat2.length; ++y)
	{
		mat1[x][y]=Number(prompt("enter value("+x+" , "+y+")"));
	}
}
for(let x=0; x<mat1.length; ++x)
{
	for(let y=0; y<mat2.length; ++y)
	{
		process.stdout.write(mat1[x][y] + " ");
	}
	process.stdout.write("\n");
}
for(let x=0; x<mat1.length; x++)
{
	for(let y=0; y<mat2.length; y++)
    {
	result[x][y] =mat1[x][y] + mat2[x][y];
    }
}
console.log("Result is: ");
for(let z=0; z<result.length; z++)
{
	for(let n=0; n<result[z].length; n++)
	{
		process.stdout.write(result[z][n] + " ");
	}
	process.stdout.write("\n");
}