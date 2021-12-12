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
        let nameValue = document.getElementById('nameInput').value;

        let emPosition = document.getElementById('emailInput')
        let passPosition = document.getElementById('passwordInput')
        let namePosition = document.getElementById('nameInput');
        let newUser = {name:"test",Email:emValue,password:"testt"};
        let target = registeredUsers.find(e=>e.Email == emValue)


        if(namechecker == true && emailchecker == true && passwordchecker == true){
            showError.innerHTML = "";
        }
        else if(emValue === "" && passValue !== "" && nameValue !== ""){
            emPosition.style.border = "2px var(--error) solid";
            showError.innerHTML = "email empty";
            
        }else if(passValue === "" && emValue !== "" && nameValue !== ""){
            passPosition.style.border = "2px var(--error) solid";
            showError.innerHTML = "password empty";

            
        }else if(nameValue === ""  && emValue !== "" && passValue !== ""){
            showError.innerHTML = "name empty";
            namePosition.style.border = "2px var(--error) solid";
            
        }else if(nameValue !== ""  && emValue === "" && passValue === ""){
            emPosition.style.border = "2px var(--error) solid";
            passPosition.style.border = "2px var(--error) solid";
            showError.innerHTML = "Email and Password, can't be left empty";

            
        }
        else if(nameValue === ""  && emValue !== "" && passValue === ""){
            namePosition.style.border = "2px var(--error) solid";
            passPosition.style.border = "2px var(--error) solid";
            showError.innerHTML = "Name and Password, can't be left empty";
                
        }
        else if(nameValue === ""  && emValue === "" && passValue !== ""){
            namePosition.style.border = "2px var(--error) solid";
            emPosition.style.border = "2px var(--error) solid";
            showError.innerHTML = "Name and Email, can't be left empty";
            
        }       
        else if(nameValue === ""  && emValue === "" && passValue === ""){
            namePosition.style.border = "2px var(--error) solid";
            emPosition.style.border = "2px var(--error) solid";
            passPosition.style.border = "2px var(--error) solid";
            showError.innerHTML = "All the inputs are empty";
        }
}