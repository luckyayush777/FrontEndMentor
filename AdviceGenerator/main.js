let adviceTextID = null;
let adviceText = null;
let adviceTextIDHolder = document.getElementById("AdviceID");
let adviceTextHolder = document.getElementById("AdviceText");
fetch('https://api.adviceslip.com/advice')
.then((response) =>{
    return response.json();
})
.then((myJson) =>{
    adviceTextID = myJson.slip["id"];
    adviceText = myJson.slip["advice"];
    adviceTextIDHolder.innerText = "ADVICE# " + adviceTextID;
    adviceTextHolder.innerText = adviceText;
});

