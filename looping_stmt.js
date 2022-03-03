//These functions shows how to use looping staements

//This function will print even and odd numbers
function toFindEvenOrOdd()
{
    document.write("<h3>1.Using for loop</h3>")
    for(let i=1;i<=10;i++)
    {
        if(i%2==0)
        {
            document.writeln(i +" is even number <br>");
        }
        else
        {
            document.writeln(i +" is odd number <br>");
        }
    }
}
toFindEvenOrOdd();

//This function will print array values using for - in loop
function displayArrayValues()
{
    document.write("<h3>2.Using for-in loop</h3>");
    var arr=[10,20,30,40];
    document.write("Array values are <br>");
    for(var a in arr)
    {
        document.write('arr[',a,']=>'+arr[a] +"<br>");
    }
}
displayArrayValues();

//This function will print array values using for - of loop
function displayArray()
{
    document.write("<h3>3.Using for-of loop</h3>");
    var arr=["Banana","Grapes","Cherry","Kiwi"];
    for( a of arr)
    {
        document.write(a +"<br>");
        
    }
}
displayArray();

//This function will display fibonacci numbers
function displayFibonacciNumber()
{
    document.write("<h3>4.Using while loop</h3>");
    var i = 0, j = 1, k;
    document.write("Fibonacci series from 0 to 100 <br>");
    while(i<100)
    {
        document.writeln(i);

        k = i+j;
        i = j;
        j = k;
    }
}
displayFibonacciNumber();

//This function will display even numbers from 1 to 20
function even()
{
    document.write("<h3>5.Using do-while loop</h3>");
    var i = 2;
    document.write("Even numbers less than 20<br>");
    do
    {
        document.write(i + "<br>");
        i = i + 2;
    }while(i<20)
}
even();

    
