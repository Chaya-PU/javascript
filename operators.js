//These functions shows how to use operators

//This function perform operations based on arithmetic operators
function performArithmeticOperation()
{
    document.write("<h3>1.Using Arithmetic Operator(+,-,*,/,%,++,--)</h3>");

    var diff = 3-2;
    document.write("The difference of given number  is " +diff +"<br>"); 

    var product = 7*9;
    document.write("The product of given number is " +product +"<br>");

    var div=4/2;
    document.write("The division of given number is " +div +"<br>"); 

    var mod=4%2;
    document.write("The mod of given number is " +mod +"<br>"); 

    diff++;//diff=diff+1
    document.write("The increment of given number is " +diff +"<br>");

    product--;//product=product-1
    document.write("The decrement of given number is " +product +"<br>");

}
performArithmeticOperation();

//This function perform operations based on Assignment operators
function performAssignmentOperation()
{
    document.write("<h3>2.Using Assignment Operator (=,+=,-=,*=,/=,%=)</h3>");
    var a=9;
    document.write("a = "+a +"<br>");
    a+=8;//a=a+8
    document.write("The value of a is "+a +"<br>");

    var b=8;
    b-=9;//b=b+8
    document.write("The value of b is "+b +"<br>");
}
performAssignmentOperation();

//This function will check if the given number is equal,greater than or less than based on comparision operators
function performComparisionOperation()
{
    document.write("<h3>3.Using comparision Operator (==,!=,>,<,<=,===,!==)</h3>");

    var num1 = 10;
    var num2 = 20;
    if(num1==num2)
    {
        document.write(num1 +" is equal to " +num2 +"<br>");
    }
    else if (num1<num2) 
    {
        document.write(num1 +" is greater than " +num2 +"<br>");
        
    } 
    else
    {
        document.write(num1 +" is less than " +num2 +"<br>");
    }
}
performComparisionOperation();

//This function will check both the condition is true or not using && operator (Boolean operators)
function performBooleanOperation()
{
    document.write("<h3>4.Using Boolean Operator (&&,||,!)</h3>");
    document.write("<h4> i. &&(AND)</h4>");
    var num1 = 10;
    var num2 = "10";
    if(num1==num2 && num1===num2)
    {
        document.write(num1 +" is equal to " +num2 +"<br>");
    }
    else
    {
        document.write(num1 +" is equal to " +num2 +" but type is mismatcing <br>");
    }
}
performBooleanOperation();

//This function will check the condition if 1 condition is true, it will display if block using || operator (Boolean operators)
function performBooleanOperation1()
{
    document.write("<h4> ii. ||(OR)</h4>");
    var num1 = 10;
    var num2 = "10";
    if(num1==num2 || num1===num2)
    {
        document.write(num1 +" is equal to " +num2 +"<br>");
    }
    else
    {
        document.write(num1 +" is equal to " +num2 +" but type is mismatcing <br>");
    }
}
performBooleanOperation1();

//This function will check given number is greater or not using Ternary operator (Boolean operators)
function performTernaryOperation()
{
    document.write("<h3>5.Using Ternary Operator </h3>");

    var num1 = 10;
    var num2 = 20;
    document.write(num1 > num2 ? +num1 +"is greater than " +num2 : +num1 +" is less than " +num2);
}
performTernaryOperation();
