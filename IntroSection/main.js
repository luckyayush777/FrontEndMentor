
let collapsibleButtons = document.querySelectorAll(".NavigationElement");
let FeaturesPopUp = document.getElementById("FeaturesPopUp");
let FeaturePopUpStyle = FeaturesPopUp.style;
console.log(FeaturePopUpStyle);
let CompanyPopUp = document.getElementById("CompanyPopUp");
let CompanyPopUpStyle = CompanyPopUp.style;
console.log(CompanyPopUpStyle);
let styleString = "display : none";
FeaturesPopUp.style = styleString;
CompanyPopUp.style = styleString;
collapsibleButtons.item(0).addEventListener("click", (e) =>{
    if(FeaturesPopUp.style.display == "none")
    {
        FeaturesPopUp.style = FeaturePopUpStyle;
    }
    else
    {
        FeaturesPopUp.style = styleString;
    }
})
collapsibleButtons.item(1).addEventListener("click", (e) =>{
    if(CompanyPopUp.style.display == "none")
    {
        CompanyPopUp.style = CompanyPopUpStyle;
    }
    else
    {
        CompanyPopUp.style = styleString;
    }
})

