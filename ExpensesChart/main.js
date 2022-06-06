var barGraphs = document.getElementsByClassName("PsuedoBox");
for(const bars of barGraphs)
{
    bars.style.height = GetRandomSize(100).toString() + "px";
}

function GetRandomSize(max)
{
    return Math.floor(Math.random() * max);
}


fetch("data.json")
.then(response=>response.json())
.then(data=>console.log(data))
