/* const ternaryOperator = require('./callbackFunction');
test("to check 2 number" ,()=>{expect(ternaryOperator(5,10)).toBe(false)}); */

/* const toCheckGivenDay = require('./branching_stmt')
test("to check given day" ,()=>{expect(toCheckGivenDay(3)).toBe("Tuesday")}); */

/* const callbackFunction = require('./callback')
test("print statement after 1 second",()=>{expect(callback()).toBe("Hello World")});

 */const createObject = require('./Object');
test("display an object",()=>{
    var person={
        name:"john",
        birthYear:1999,
       
        age:function(){
            return 2022-this.birth-year
        }
    }
    expect(JSON.stringify(createObject())).toBe(JSON.stringify(person))
});

