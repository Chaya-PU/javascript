//These functions shows how to use branching statements

//This function will check for given number even number or not
function toDisplayEvenNumber()
{
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
}
toDisplayEvenNumber();

//This function is used to check whether the given number is prime or not
function testPrimeOrNot(n)
{
    document.write("<h3>2. Using if-else-if-else statement</h3>");
    if (n===1)
    {
        return false;
    }
    else if(n === 2)
    {
        return true;
    }
    else
    {
        for(var x = 2; x < n; x++)
        {
            if(n % x === 0)
            {
                return false;
            }
        }
        return true;  
    }
}
document.write(testPrimeOrNot(37));

//This function will display the dayname 
function toCheckGivenDay()
{
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
}
toCheckGivenDay();
