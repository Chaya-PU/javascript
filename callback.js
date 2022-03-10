//unction using callback function
function callback () 
{
    return "Hello World";
}
setTimeout(callback, 1000);
module.exports = callback;