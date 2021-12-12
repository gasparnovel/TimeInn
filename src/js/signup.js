import { emailCheker,registeredUsers } from "./emailCheker.js";
import { passwordCheker } from "./passwordCheker.js";
import { submitCheck } from "./submitCheck.js"
import { nameChecker } from "./nameChecker.js";

document.getElementById('login').addEventListener('click',()=>{
    
    submitCheck(nameChecker(),emailCheker(),passwordCheker())
    if(nameChecker() == true && emailCheker() == true && passwordCheker() == true){
        let addedSucc = document.getElementById("addedSucc")

        let emPosition = document.getElementById('emailInput')

        let emValue = document.getElementById('emailInput').value
        let newUser = {name:"test",Email:emValue,password:"testt"};

        let target = registeredUsers.find(e=>e.Email == emValue)

        if(target){
            showError.innerHTML = "Email already in use";

            emPosition.style.border = "2px red solid";
            console.log("Email already in use")
        }
        else{
            registeredUsers.push(newUser);
            addedSucc.innerHTML = "Account Created"
        }
    }else{
        console.log("not true")
        addedSucc.innerHTML = ""

    }
    console.log(registeredUsers);

})



document.activeElement.addEventListener('click',(e)=>{

    let emPosition = document.getElementById('emailInput')
    let passPosition = document.getElementById('passwordInput')
    let namePosition = document.getElementById('nameInput');
    
    if (document.readyState == "complete") {
        if(e.target == emPosition || e.target == passPosition || e.target == namePosition)  { 
            // console.log(e.target)
            // console.log("no checking")
            

        }else if(e.target == document.getElementById("login")){

        }
        else{
            submitCheck(nameChecker(),emailCheker(),passwordCheker())
            // console.log(e.target)
            // console.log("checking")

        }
    }else{
    }
})