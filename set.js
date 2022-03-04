//this function shows how to create set,how to add and access elements to/from set

const numbers = new Set();//create a set

numbers.add(10);//add elements to the set
numbers.add(20);
numbers.add(30);
numbers.add(40);
numbers.add(50);

//this function will display all entries from the set
function displayAll()
{
   document.write("<h3> Using values() display all entries from the set</h3>");
    let text = " ";
    for (var value of numbers.values() )
    {
        text+=value + "<br>";
    }
    document.write("The values from the set : <br>"+text );
}
displayAll();
//this function will return the length of the set
function lengthOfSet()
{
    document.write("<h3>Using size property it return length of the set</h3> ");
    document.write("The length of the set : " +numbers.size);
}
lengthOfSet();
