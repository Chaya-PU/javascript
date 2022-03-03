//These functions will shows using var,let and const keyword how to declare the variable, initialize, re-declare, re-initialize the value.
function usingVarKeyword()
{
    document.write("<h3>1. Using var keyword</h3>");

    var x;//declaration
    document.write("Here declared variable 'x' is " +x +" because variable 'x' not intialized");
    document.write("<br>");

    x=10;//initialization
    document.write("Initialized value of X is = " +x);
    document.write("<br>");

    x=100;//re-initialization
    document.write("Re-initialized value of X is = "+x);
    document.write("<br>");

    var x;//re-declaration
    document.write("Re-declared value of X is also = "+x + " because it consider last effected value");
    document.write("<br>");
}
usingVarKeyword();

function usingLetKeyword()
{
    document.write("<h3>2. Using let keyword</h3>");

    let y;//declaration
    document.write("Here declared variable 'y' is " +y +" because variable 'y' not intialized");
    document.write("<br>");

    y=10;//initialization
    document.write("Initialized value of Y is = " +y);
    document.write("<br>");

    y=100;//re-initialization
    document.write("Re-initialized value of Y is = "+y);
    document.write("<br>");

    /* let y//re-declaration is not possible
    document.write(y);
    document.write("<br>"); */
}
usingLetKeyword();

function usingConstKeyword()
{
    document.write("<h3>3. Using const keyword</h3>");

    /* const z;
    z=10;
    document.write(z);//declaration and initialization must be done in single line */

    const z=10;
    document.write("The value of Z is ="+z);

    /* z=100;
    document.write("The value of Z is ="+z);//re-initialization is not possible*/
}
usingConstKeyword();