const form = document.getElementById("Form");
let firstName = document.getElementById("FName");
let lastName = document.getElementById("LName");
let email = document.getElementById("Email").value;
let password = document.getElementById("Password");
let validationFailed = true;
form.addEventListener('submit' , (e) => {
    if(EmailValidator(email) && PasswordValidator(password))
    {
        validationFailed = false;
        console.log("validation passed");
    }
    if(validationFailed)
    {
    e.preventDefault();
    console.log("validation failed");
    return false;
    }
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
        return false;
    }
    return true;
}

function PasswordValidator(password)
{
    if(password.length < 8)
    console.log("password too short!");
    return true;
}
