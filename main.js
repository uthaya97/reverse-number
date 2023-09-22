var a=parseInt(prompt("enter number"));
var result=0;
var b;
document.write("enter number"+" "+a+"<br>");
while(a>0)
{
	b=a%10;
	result=result*10+b;
	a=parseInt(a/10);
}
document.write("reverse number is"+" "+result);