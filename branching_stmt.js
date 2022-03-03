document.write("<h3>1. Using if-else statement</h3>");

var num = 2;

if(num%2==0)
{
   
    document.write(num +" is a Even number");
}
else
{
    
    document.write(num +" is not a Even number");
}

document.write("<h3>2. Using if-else-if-else statement</h3>");

var one =10;
var two =20
		
if (one == two)
{
	document.write(one + " is equal to " + two + ".");
}
		
else if (one<two)
{
	document.write(one + " is less than " + two + ".");
}
else
{
	document.write(one + " is greater than " + two + ".");
}

document.write("<h3>3. Using switch statement</h3>");

let day = 3;
let dayName;

switch (day)
 {
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 7:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Invalid day';
}

document.write(dayName);