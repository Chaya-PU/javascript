//This function will change the background in random colors
function generateRandomColor()
{
    var arrElem = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    var randomColor = '#';
    for(var i=1;i<=6;i++)
    {
        var index = Math.floor(Math.random()*16);
        randomColor+=arrElem[index];
    }
    document.getElementsByTagName('body')[0].style.backgroundColor=randomColor;
}