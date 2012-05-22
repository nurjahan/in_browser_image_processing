function BrightnessGradient(image,Ort,bin,radius,w,h)
{
	GrayImage=RGBtoGray(image,w,h);
	BMap=BrightnessMap(GrayImage,bin,w,h);
	var BrGm = new Array(h);
		for (i = 0; i <h; ++ i)
		{
			BrGm[i] = new Array(w);
			for (j = 0; j <w; ++ j)
				BrGm[i][j] = new Array(Ort);
		}
	var theta=new Array();
	for(var i=0;i<=0;i++)
	{
		theta[i]=0*Math.PI/Ort;
		BGMagnitude=GradientComputation(BMap,bin,radius,theta[i],w,h);
		for(l=0;l<h;l++)
		{
			for(m=0;m<w;m++)
			{
				BrGm[l][m][i]=BGMagnitude[l][m];						
			}
		}	
	}
	//document.write(BGMagnitude[4][4]);
	/*for(i1=0;i1<h;i1++)
	{
		for(j1=0;j1<w;j1++)
		{
			document.write(BGMagnitude[i1][j1]);
			document.write(" ,");	
		}
		document.write("<br>");
		document.write("<br>");
	}*/
	FComb=FeatureCombination(BrGm,Ort,w,h);
	return BGMagnitude;
}