/* //These functions shows how to use branching statements

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

//This function will display the dayname  */
function toCheckGivenDay(days)
{
    switch (days)
    {
        case 1:
            return 'Sunday';
            
        case 2:
            return 'Monday';
            
        case 3:
            return 'Tuesday';
            
        case 4:
            return 'Wednesday';
            
        case 5:
            return 'Thursday';
            
        case 6:
            return 'Friday';
            
        case 7:
            return 'Saturday';
            
        default:
            return 'Invalid day';
    }
    
}
const day = toCheckGivenDay(3);
console.log(day);
module.exports = toCheckGivenDay;