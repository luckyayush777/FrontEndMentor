const form = document.getElementById("Form");
let firstName = document.getElementById("FName");
let lastName = document.getElementById("LName");
let email = document.getElementById("Email").value;
let password = document.getElementById("Password");
form.addEventListener('submit' , (e) => {
    EmailValidator(email);
    e.preventDefault();
})

function EmailValidator(email)
{
    let foundAtSymbol = false;
    let foundDotSymbol = false;
    for(let i = 0; i < email.length; i++)
    {
        if(email[i] == '@')
        {
            foundAtSymbol = true;
        }
        else if(email[i] == '.')
        {
            foundDotSymbol = true;
        }
    }
    if(!foundAtSymbol || !foundDotSymbol)
    {
        console.log("INVALID ADDRESS");
    }
}

function PasswordValidator(password)
{
    if(password.length < 8)
    console.log("password too short!");
}
