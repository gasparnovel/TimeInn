// importamos las funciones de otros js
import { emailCheker,registeredUsers } from "./emailCheker.js";
import { passwordCheker } from "./passwordCheker.js";
import { submitCheck } from "./submitCheck.js"
import { nameChecker } from "./nameChecker.js";
import { showpassword, showpasswordDos } from "./showPassword.js";

let eyeUno;
let eyeDos; 

// cuando hacemos click en login activamos una arrow function
document.getElementById('login').addEventListener('click',()=>{
    // pasamos como parametros las siguiente funciones
    submitCheck(nameChecker(),emailCheker(),passwordCheker())
    // condicionales
    if(nameChecker() == true && emailCheker() == true && passwordCheker() == true){
        let addedSucc = document.getElementById("addedSucc")

        let emPosition = document.getElementById('emailInput')

        let emValue = document.getElementById('emailInput').value
        let newUser = {name:"test",Email:emValue,password:"testt"};

        let target = registeredUsers.find(e=>e.Email == emValue)
        // si el email esta en uso 
        if(target){
            showError.innerHTML = "Email already in use";
            emPosition.style.border = "2px var(--error) solid";
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

// cuando hacemos click en eye activamos una function
document.getElementById('eye').addEventListener('click',showpassword);

// cuando hacemos click en eye activamos una function
document.getElementById('eyeDos').addEventListener('click',showpasswordDos);

// cuando hacemos click en cualquie parte activamos una arrow function
document.activeElement.addEventListener('click',(e)=>{

    let emPosition = document.getElementById('emailInput')
    let passPosition = document.getElementById('passwordInput')
    let passPosition2 = document.getElementById('passwordInput2')
    let namePosition = document.getElementById('nameInput');
    let eye = document.querySelector(".fa-eye");
    let eyeIdDos = document.querySelector(".eyeIdDos");

    // condicionales
    if (document.readyState == "complete") {
            if(e.target == emPosition || e.target == passPosition || e.target == passPosition2 || e.target == namePosition || e.target == eye || e.target == eyeIdDos)  { 
            }else if(e.target == document.getElementById("login")){
            }
            else{
                submitCheck(nameChecker(),emailCheker(),passwordCheker())
            }
    }else{
    }
})