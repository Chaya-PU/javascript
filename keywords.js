document.write("<h3>1. Using var keyword</h3>");

var x;//declaration
document.write("Here declared variable 'x' is " +x +" because variable 'x' not intialized");//undefined
document.write("<br>");

x=10;//initialization
document.write("Initialized value of X is = " +x);//10
document.write("<br>");

x=100;//re-initialization
document.write("Re-initialized value of X is = "+x);//100
document.write("<br>");

var x;//re-declaration
document.write("Re-declared value of X is also = "+x + " because it consider last effected value");//100
document.write("<br>");

document.write("<h3>2. Using let keyword</h3>");

let y;//declaration
document.write("Here declared variable 'y' is " +y +" because variable 'y' not intialized");//undefined
document.write("<br>");

y=10;//initialization
document.write("Initialized value of Y is = " +y);//10
document.write("<br>");

y=100;//re-initialization
document.write("Re-initialized value of Y is = "+y);//100
document.write("<br>");

/* let y//re-declaration
document.write(y);//SyntaxError:Identifier 'y' has already been declared, because re-declaration is not possible in let keyword
document.write("<br>"); */

document.write("<h3>3. Using const keyword</h3>");

/* const z;
z=10;
document.write(z);//SyntaxError:Missing initializer in const declaration */
const z=10;
document.write("The value of Z is ="+z);
/* z=100;
document.write("The value of Z is ="+z);//TypeError:Assignment to constant variable. */

