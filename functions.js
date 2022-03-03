//These functions will show how to use functions

//This function will add 2 numbers
function addNumber()
{
    document.write("<h3>1. Named functions</h3>");
    var num1=100;
    var num2=200;
    function add(a,b)
    {
        return a+b;
    }
    var sum = add(num1,num2);
    document.write("The sum of "+num1 +" and " +num2 +" is" +sum);
}
addNumber();

//This function will calculate age
function calculateAge()
{
    document.write("<h3>2. Anonymous functions</h3>");
    var calculateage = function(year)
                    {
                        var age = 2022-year;
                        document.write("The age is "+age);
                    }
    calculateage(1999);
}
calculateAge();

//This function will calculate a percentage
function calculatePercentage()
{
    document.write("<h3>3.Constructor  functions</h3>");
    var calculatepercentage = new Function("secured_marks","total_marks","return (secured_marks/total_marks)*100;");
    document.write("Percentage is "+calculatepercentage(365,625));
}
calculatePercentage();

//This function will display square root
function calculateSquareRoot()
{
    document.write("<h3>4. Self Invoking  functions</h3>");
    (function(sqrt)
    {
        document.write("Square root of " +sqrt +" is " +sqrt*sqrt);
    }
    )(9); 
}
calculateSquareRoot();

//This function will display factorial of given number
function displayFactorial()
{
    document.write("<h3>5. Arrow functions</h3>");
    var factorial = (x) =>{
                            var fact=1;
                            for(var i=1;i<=x;i++)
                            {
                                fact = fact * i;
                            }
                            document.write("Factoial of "+x +" is "+fact);
                        };
                
    factorial(9);
}
displayFactorial();
