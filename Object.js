//function create new object
function createObject()
{ 
    const person ={
        name:"john",
        birthYear:1999,
    
        age:function()
        {
            return 2022-this.birth-year
         }
    }
    return person
}
createObject();
module.exports=createObject;