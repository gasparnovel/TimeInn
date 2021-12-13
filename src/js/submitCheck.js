export let registeredUsers = [
    {name:"Jose",Email:"Jose53@gmail.com",password:"123456789Josee"},
    {name:"Maria",Email:"Lapilli01@gmail.com",password:"45qwkdaq."},
    {name:"Pablo",Email:"pablo_el_mota@gmail.com",password:"pabloelcani13"}
]

export function submitCheck(namechecker,emailchecker,passwordchecker){

        let showError = document.getElementById("showError");
        let addedSucc = document.getElementById("addedSucc")
        let delSucc = addedSucc.innerHTML = "";

        let emValue = document.getElementById('emailInput').value
        let passValue = document.getElementById('passwordInput').value
        let passValue2 = document.getElementById('passwordInput2').value
        let nameValue = document.getElementById('nameInput').value;

        let emPosition = document.getElementById('emailInput')
        let passPosition = document.getElementById('passwordInput')
        let passPosition2 = document.getElementById('passwordInput2')
        let namePosition = document.getElementById('nameInput');
        let newUser = {name:"test",Email:emValue,password:"testt"};
        let target = registeredUsers.find(e=>e.Email == emValue)


        if(namechecker == true && emailchecker == true && passwordchecker == true){
            showError.innerHTML = "";
        }
        else if(emValue === "" && passValue !== "" && nameValue !== "" && passValue2 !== ""){
            emPosition.style.border = "2px var(--error) solid";
            emPosition.focus();
            showError.innerHTML = "Email empty";
        }else if(passValue === "" && emValue !== "" && nameValue !== "" && passValue2 !== ""){
            passPosition.style.border = "2px var(--error) solid";
            passPosition.focus();
            showError.innerHTML = "Password empty";
        }else if(nameValue === ""  && emValue !== "" && passValue !== "" && passValue2 !== ""){
            namePosition.style.border = "2px var(--error) solid";
            namePosition.focus();
            showError.innerHTML = "Name empty";
            
        }else if(nameValue !== ""  && emValue !== "" && passValue !== "" && passValue2 === ""){
            namePosition.style.border = "2px var(--error) solid";
            namePosition.focus();
            showError.innerHTML = "Repeated password empty";
            
        }else if(nameValue !== ""  && emValue === "" && passValue === "" && passValue2 !== ""){
            emPosition.style.border = "2px var(--error) solid";
            emPosition.focus();
            passPosition.style.border = "2px var(--error) solid";
            showError.innerHTML = "Email and Password, can't be left empty";
        }
        else if(nameValue === ""  && emValue !== "" && passValue === "" && passValue2 !== ""){
            namePosition.style.border = "2px var(--error) solid";
            namePosition.focus();
            passPosition.style.border = "2px var(--error) solid";
            showError.innerHTML = "Name and Password, can't be left empty";
                
        }
        else if(nameValue === ""  && emValue === "" && passValue !== "" && passValue2 !== ""){
            namePosition.style.border = "2px var(--error) solid";
            namePosition.focus();
            emPosition.style.border = "2px var(--error) solid";
            showError.innerHTML = "Name and Email, can't be left empty";
        } 
        else if(nameValue === ""  && emValue !== "" && passValue !== "" && passValue2 === ""){
            namePosition.style.border = "2px var(--error) solid";
            namePosition.focus();
            passPosition2.style.border = "2px var(--error) solid";
            showError.innerHTML = "Name and Repeated password, can't be left empty";
            
        }        
        else if(nameValue !== ""  && emValue === "" && passValue !== "" && passValue2 === ""){
            emPosition.style.border = "2px var(--error) solid";
            emPosition.focus();
            passPosition2.style.border = "2px var(--error) solid";
            showError.innerHTML = "Email and Repeated password, can't be left empty";
        }   
        else if(nameValue !== ""  && emValue !== "" && passValue === "" && passValue2 === ""){
            passPosition.style.border = "2px var(--error) solid";
            passPosition.focus();
            passPosition2.style.border = "2px var(--error) solid";
            showError.innerHTML = "Password and Repeated password, can't be left empty";
        }   
        else if(nameValue === ""  && emValue === "" && passValue === "" && passValue2 !== ""){
            namePosition.style.border = "2px var(--error) solid";
            namePosition.focus();
            emPosition.style.border = "2px var(--error) solid";
            passPosition.style.border = "2px var(--error) solid";
            passPosition2.style.border = "2px var(--error) solid";
            showError.innerHTML = "Name, Email and Password can't be left empty";
        }   
        else if(nameValue === ""  && emValue !== "" && passValue === "" && passValue2 === ""){
            namePosition.style.border = "2px var(--error) solid";
            namePosition.focus();
            emPosition.style.border = "2px var(--error) solid";
            passPosition.style.border = "2px var(--error) solid";
            passPosition2.style.border = "2px var(--error) solid";
            showError.innerHTML = "Name, password and Repeated password can't be left empty";
        }        
        else if(nameValue === ""  && emValue === "" && passValue !== "" && passValue2 === ""){
            namePosition.style.border = "2px var(--error) solid";
            namePosition.focus();
            emPosition.style.border = "2px var(--error) solid";
            passPosition.style.border = "2px var(--error) solid";
            passPosition2.style.border = "2px var(--error) solid";
            showError.innerHTML = "Name, Email and Repeated password can't be left empty";
        }    
        else if(nameValue !== ""  && emValue === "" && passValue === "" && passValue2 === ""){
            emPosition.style.border = "2px var(--error) solid";
            emPosition.focus();
            namePosition.style.border = "2px var(--error) solid";
            passPosition.style.border = "2px var(--error) solid";
            passPosition2.style.border = "2px var(--error) solid";
            showError.innerHTML = "Email, Password and Repeated password can't be left empty";
        }  
        else if(nameValue === ""  && emValue === "" && passValue === "" && passValue2 == ""){
            namePosition.style.border = "2px var(--error) solid";
            namePosition.focus();
            emPosition.style.border = "2px var(--error) solid";
            passPosition.style.border = "2px var(--error) solid";
            passPosition2.style.border = "2px var(--error) solid";
            showError.innerHTML = "All the inputs are empty";
        }
}