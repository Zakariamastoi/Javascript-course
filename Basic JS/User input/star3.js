	
	for(let x=5; x>=1; --x)
	{
		for(let y=5; y>=1; --y)
		{
			if(x==1 || x==5 || y==1 || y==5)
				process.stdout.write("*");
			else
				process.stdout.write(" ");
		}
		process.stdout.write("\n");
	}	
