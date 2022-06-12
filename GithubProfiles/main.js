let searchButton = document.getElementById("SearchButton");
//class name of the name element is grid item 2
let userNameOnPage = document.getElementsByClassName("GridItem2")[0];
let joiningDateOnPage = document.getElementsByClassName("GridItem4")[0];
let lightModeSwitchButton = document.getElementById("LightModeSwitch");
lightModeSwitchButton.addEventListener("click", SwitchModes);
let lightMode = false;
let initialStyle = document.body.style;
let initialSearchBoxStyle = document.getElementById("SearchBox").style;
let initialBottomBoxStyle = document.getElementById("BottomBox").style;
function SwitchModes()
{
    if(lightMode == false)
    {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementById("SearchBox").style.backgroundColor = "#6b93ff";
        document.getElementById("BottomBox").style.backgroundColor = "#6b93ff";
        document.getElementById("BottomBox").style.color = "white";
        
        lightMode = true;
        
    }
    else 
    {
        document.body.style = initialStyle;
        lightMode = false;
        document.getElementById("SearchBox").style = initialSearchBoxStyle;  
        document.getElementById("BottomBox").style = initialBottomBoxStyle;
    }
}
searchButton.addEventListener("click", function(){
    let username = document.getElementById("SearchBar").value;
    return fetch('https://api.github.com/users/' + username)
    .then(response => response.json())
    .then(response =>  { console.log(response); 
        document.getElementsByClassName("GridItem2")[0].innerText = response.name;
        document.getElementsByClassName("GridItem3")[0].innerText = response.login;
        document.getElementsByClassName("GridItem4")[0].innerText = 
        FormatDate(response.created_at);
        document.getElementsByClassName("GridItem1")[0].src = response.avatar_url;
        document.getElementById("UserBio").innerText = response.bio;
        document.getElementsByClassName("UserDetailGridItem2")[0].innerText = response.public_repos;
        document.getElementsByClassName("UserDetailGridItem4")[0].innerText = response.followers;
        document.getElementsByClassName("UserDetailGridItem6")[0].innerText = response.following;
        document.getElementsByClassName("UserLocation")[0].innerText = LocationParser(response.location);
        document.getElementsByClassName("BlogLink")[0].href = response.blog;
    })
})

function FormatDate(date)
{
    let dateInYear = "";
    for(var i = 0; i < date.length; i++)
    {
        if(date.charAt(i) != 'T')
        {
            dateInYear += date.charAt(i);
            
        }           
        else 
        {
            break;
        }

    }
    let joiningYear = "";
    let joiningMonth = "";
    let joiningDay = "";
    for(var i = 0; i < dateInYear.length; i++)
    {
        if(i < 4)
        joiningYear += dateInYear.charAt(i);
        else if(i > 4 && i < 7)
        joiningMonth += dateInYear.charAt(i);
        else if(i > 7 && i < 10)
        joiningDay += dateInYear.charAt(i);


    }
    joiningMonth = ReturnMonthOnIndex(parseInt(joiningMonth));
    let dateEntryFormat = "";
    dateEntryFormat = `Joined ${joiningDay} ${joiningMonth} ${joiningYear}`;
    return dateEntryFormat;
}

function ReturnMonthOnIndex(index)
{
    let month = "";
    switch(index)
    {
        case 1 : month = "Jan";
        break;
        case 2 : month = "Feb";
        break;
        case 3 : month = "Mar";
        break;
        case 4 : month = "Apr";
        break;
        case 5 : month = "May";
        break;
        case 6 : month = "June";
        break;
        case 7 : month = "July";
        break;
        case 8 : month = "Aug";
        break;
        case 9 : month = "Sept";
        break;
        case 10 : month = "Oct";
        break;
        case 11 : month = "Nov";
        break;
        case 12 : month = "Dec";
        break;
    }
    return month;
}

function LocationParser(locationData)
{
    let cityLocation = "";
    for(var i = 0; i < locationData.length; i++)
    {
        if(locationData.charAt(i) != ",")
        cityLocation += locationData.charAt(i);
        else break;
    }
    return cityLocation;
}
