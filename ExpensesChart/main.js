var barGraphs = document.getElementsByClassName("PsuedoBox");
let numbers = [];


function GetRandomSize(max)
{
    return Math.floor(Math.random() * max);
}
let i = 0;
function ReturnString()
{
    fetch("data.json")
.then(response=>response.json())
.then(data=>{
    while(i < 7){
    const num = data[i]["amount"];
    i++;
    numbers.push(num);
    }
    for(const num of numbers)
    {
        console.log(num);
    }
    for(let i = 0; i < barGraphs.length; i++)
    {
    barGraphs[i].style.height = numbers[i].toString() + "px";
    }
}
)
}
ReturnString();



