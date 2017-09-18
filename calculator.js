var tol = "0";
var IsEqual= "false"; 

window.onload=function()
{
	document.getElementById('button').onclick = function()
	{
		var val = event.target.value;
		if (val == "ac") clear();
		else if (val == "=") equal();
		else input(val);
	}
}

function clear()
{
	document.getElementById("result").value = "0";
	tol = "0";
}


function input(num)
{
	if (IsEqual == "true")
	{
		document.getElementById("result").value = "0";
		tol = "0";
		IsEqual = "false";
	}

	if (tol == "0")
	{
		if (num >= 0 || num <= 9 || num=='(' || num == '+' || num == '-') 
		{
			tol = num;
		} 
		else if (num == '.' || num == '/' || num == '×' || num == '÷')
		{
			tol += num;
		}
	}
	else
	{
		if (num == '←')
		{
			if (tol.length == 1) 
			{
				tol = "0";
			}
			else 
			{
				tol = tol.substring(0, tol.length-1);
			}
		}
		else
		{
			if (num >= 0 || num <= 9 || num == '(') 
			{
				tol += num;
			} 
			else if (num == ')' && Match()) 
			{
				alert("Parenthesis error!");
			} 
			else if ((num == '*'|| num == '/') && operatorcheck() || num == '.' && dotcheck()) 
			{
				alert("Error!");
			} 
			else 
			{
				tol += num;
			}
		}
	}
	document.getElementById("result").value = tol;
	
}



function equal()
{
	try
	{
		if (IsEqual == "false")
		{
			if (eval(tol) == "Infinity")
			{
				tol = 0;
				IsEqual = "true";
				document.getElementById("result").value = "ERROR";
			}
			else
			{	
				document.getElementById("result").value = eval(tol);
				tol = eval(tol);
				IsEqual = "true";
			}
		
		}
		else
		{	
			if (tol != 0)
			{
				document.getElementById("result").value = document.getElementById("result").value;
			}
		
		}
	}
	catch(d)
	{
		tol = 0;
		IsEqual = "true";
		document.getElementById("result").value = "ERROR";
	}
	

}

function operatorcheck() 
{
	tol=document.getElementById("result").value;

	if (tol[tol.length-1] =='*' || tol[tol.length-1]=='/')
	{
		return true;
	}
	else
	{
		return false;
	}
}

function dotcheck() 
{
	tol=document.getElementById("result").value;

	if (tol[tol.length-1]=='.')
	{
		return true;
	}
	else
	{
		return false;
	}
}

function Match() 
{
	tol=document.getElementById("result").value;
	var lo=0, ro=0;
	var i;

	for(i=0; i < tol.length; i++) 
	{
		if(tol[i]=='(') ++lo;
		if(tol[i]==')') ++ro;
	}

	if (lo == ro) 
	{
		return true;
	}

	return false;
}