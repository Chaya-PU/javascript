//These function shows how to use arrays and methods
document.write("<p id='demo'></p>")
//Creating an array
var students =  new Array(
                    {Firstname:"Gagan",lastname:"PB",marks:450},
                    {Firstname:"Chethu",lastname:"MB",marks:500},
                    {Firstname:"Rahul",lastname:"AR",marks:625},
                    {Firstname:"Tejas",lastname:"BB",marks:480},
                    {Firstname:"Sinchu",lastname:"KR",marks:400}

)

//this function will add new data to the array at last
function addNewStudent()
{
   document.write("<h3>Using push() new data is added at last</h3>");
   students.push( {Firstname:"Havya",lastname:"PU",marks:550});
   for(var student of students)
   {
       document.writeln("Firstname:"+student.Firstname +", " +"lastname:"+student.lastname +", " +"marks:"+student.marks +"<br>");
   }
}
addNewStudent();

//this function will remove data from last
function removeLastStudent()
{
   document.write("<h3>Using pop() data is removed from last</h3>");
   students.pop();
   for(var student of students)
   {
       document.writeln("Firstname:"+student.Firstname +", " +"lastname:"+student.lastname +", " +"marks:"+student.marks +"<br>");
   }
}
removeLastStudent();

//this function will add new data to the array at first
function addStudentToFirst()
{
   document.write("<h3>Using unshift() new data is added at first</h3>");
   students.unshift( {Firstname:"Ranjith",lastname:"RK",marks:480});
   for(var student of students)
   {
       document.writeln("Firstname:"+student.Firstname +", " +"lastname:"+student.lastname +", " +"marks:"+student.marks +"<br>");
   }
}
addStudentToFirst();

//this function will remove data from first
function removeStudentAtFirst()
{
   document.write("<h3>Using shift() new data is removed from first</h3>");
   students.shift();
   for(var student of students)
   {
       document.writeln("Firstname:"+student.Firstname +", " +"lastname:"+student.lastname +", " +"marks:"+student.marks +"<br>");
   }
}
removeStudentAtFirst();

//this function return length of the array
function numberOfStudents()
{
   document.write("<h3>Using length it returns number of data</h3>");
   document.writeln(students.length);
}
numberOfStudents();

//this function will delete from the array
function deleteStudent()
{
   document.write("<h3>Using splice() data is deleted</h3>");
   students.splice(students.indexOf(students.length),1);
   for(var student of students)
   {
       document.writeln("Firstname:"+student.Firstname +", " +"lastname:"+student.lastname +", " +"marks:"+student.marks+"<br>");
   }
}
deleteStudent();



