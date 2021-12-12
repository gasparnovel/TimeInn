import { emailCheker } from "./emailCheker.js";
import { passwordCheker } from "./passwordCheker.js";
import { submitCheck } from "./submitCheck.js"
import { nameChecker } from "./nameChecker.js";

document.activeElement.addEventListener('click',checkData)
document.getElementById('login').addEventListener('click',()=>{
    submitCheck(nameChecker(),emailCheker(),passwordCheker())
})

function checkData(e){
    let emPosition = document.getElementById('emailInput')
    let passPosition = document.getElementById('passwordInput')
    let namePosition = document.getElementById('nameInput');

    if (document.readyState == "complete") {
        if(e.target != emPosition || e.target != passPosition || e.target != namePosition)  { 
            nameChecker()
            emailCheker()
            passwordCheker()
        }else{
        }
    }else{
    }
}