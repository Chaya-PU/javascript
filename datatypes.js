//This function will display each data is of which type
function toCheckTypeofData()
{
    var general = 6;
    document.write("Datatype of " +general +" is " +typeof general);
    document.write("<br>");

    general = "hi";
    document.write("Datatype of " +general +" is " +typeof general);
    document.write("<br>");

    general = true;
    document.write("Datatype of " +general +" is " +typeof general);
    document.write("<br>");

    general = null
    document.write("Datatype of " +general +" is " +typeof general);
    document.write("<br>");

    general = ["a","b","c","d","e"];
    document.write("Datatype of array [ " +general +" ]" +" is " +typeof general);
    document.write("<br>")

    var general = {
        name:"apple",
        type:"fruit"
    };
    document.write("Datatype of object [ " +general.name +", " +general.type +" ]" +" is " +typeof general);
    document.write("<br>")
}
toCheckTypeofData();



