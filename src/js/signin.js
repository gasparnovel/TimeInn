import { registeredUsers } from "./emailCheker.js";

let contadorError = 0;
console.log(registeredUsers)

document.getElementById("loginBtn").addEventListener('click',()=>{
    let emailposit = document.getElementById("emailValue");
    let passwoposit = document.getElementById("passwordValue")
    let showerrors = document.getElementById("showError");
    let succ = document.getElementById("addedSucc");
    let emailval = document.getElementById("emailValue").value
    let passvalue = document.getElementById("passwordValue").value 

    if(emailval === '' && passvalue === ''){
        showerrors.innerHTML = "Email and Password can't be empty"
        emailposit.style.border = "2px red solid";
        passwoposit.style.border = "2px red solid";
        succ.innerHTML = ""
        // succ.innerHTML = ""

    }  
  
  
    else if(emailval === ''){
        showerrors.innerHTML = "Email can't be empty"
        emailposit.style.border = "2px red solid";
        succ.innerHTML = ""
    }
    else if(passvalue === ''){
        showerrors.innerHTML = "Password can't be empty"
        passwoposit.style.border = "2px red solid";
        succ.innerHTML = ""
    }
    else{
            registeredUsers.forEach(e => {
                if(contadorError == 0){
            
                if(e.Email !== emailval){
                    showerrors.innerHTML = "Email doesn't exist"
                    emailposit.style.border = "2px red solid";
                    succ.innerHTML = ""
                    // contadorError++
                }
                else if(e.Email === emailval && e.password !== passvalue){
                    passwoposit.style.border = "2px red solid";
                    showerrors.innerHTML = "Password wrong"
                    succ.innerHTML = ""
                    contadorError++
                }
                else if(e.Email === emailval && e.password === passvalue){
                    showerrors.innerHTML = ""
                    succ.innerHTML = "Nice"
                    emailposit.style.border = "2px green solid";
                    passwoposit.style.border = "2px green solid";
                    contadorError++
                    let expiryDate = new Date();
                    expiryDate.setTime(expiryDate.getTime() + 30000); 
                    document.cookie = "Name=" + e.name +";" + " expires=" + expiryDate.toGMTString();
                    // window.location = "./index.html"
                }
            }else{
            }
        });
        contadorError = 0;
    }
})
