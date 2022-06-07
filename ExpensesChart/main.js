var barGraphs = document.getElementsByClassName("PsuedoBox");
var numbers = [];
var totalText = document.getElementsByClassName("TextTotal");
var text = 0;
let i = 0;
function GetRandomSize(max)
{
    return Math.floor(Math.random() * max);
}
function ReturnString()
{
    fetch("data.json")
        .then(response=>response.json())
        .then(data=>{
    while(i < 7)
    {
        const num = data[i]["amount"];
        i++;
        numbers.push(num);
        text += num;    
    }
    text = text.toFixed(2);
    totalText[0].innerText = "$" + text;
    for(let i = 0; i < barGraphs.length; i++)
    {
        barGraphs[i].style.height = numbers[i].toString() + "px";
    }
}
)
}
ReturnString();



