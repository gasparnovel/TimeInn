export let registeredUsers = [
    {name:"Jose",Email:"Jose53@gmail.com",password:"123456789Josee"},
    {name:"Maria",Email:"Lapilli01@gmail.com",password:"45qwkdaq."},
    {name:"Pablo",Email:"pablo_el_mota@gmail.com",password:"pabloelcani13"}
]

export function submitCheck(namechecker,emailchecker,passwordchecker){

        let showError = document.getElementById("showError");
        let addedSucc = document.getElementById("addedSucc")

        let emValue = document.getElementById('emailInput').value
        let passValue = document.getElementById('passwordInput').value
        let nameValue = document.getElementById('nameInput').value;

        let emPosition = document.getElementById('emailInput')
        let passPosition = document.getElementById('passwordInput')
        let namePosition = document.getElementById('nameInput');
        let newUser = {name:"test",Email:emValue,password:"testt"};
        let target = registeredUsers.find(e=>e.Email == emValue)

        if(emValue === "" && passValue !== "" && nameValue !== ""){
            emPosition.style.border = "2px red solid";
            showError.innerHTML = "email empty";
            
        }else if(passValue === "" && emValue !== "" && nameValue !== ""){
            passPosition.style.border = "2px red solid";
            showError.innerHTML = "password empty";

            
        }else if(nameValue === ""  && emValue !== "" && passValue !== ""){
            showError.innerHTML = "name empty";
            namePosition.style.border = "2px red solid";
            
        }else if(nameValue !== ""  && emValue === "" && passValue === ""){
            emPosition.style.border = "2px red solid";
            passPosition.style.border = "2px red solid";
            showError.innerHTML = "Email and Password, can't be left empty";

            
        }
        else if(nameValue === ""  && emValue !== "" && passValue === ""){
            namePosition.style.border = "2px red solid";
            passPosition.style.border = "2px red solid";
            showError.innerHTML = "Name and Password, can't be left empty";
                
        }
        else if(nameValue === ""  && emValue === "" && passValue !== ""){
            namePosition.style.border = "2px red solid";
            emPosition.style.border = "2px red solid";
            showError.innerHTML = "Name and Email, can't be left empty";
            
        }       
        else if(nameValue === ""  && emValue === "" && passValue === ""){
            namePosition.style.border = "2px red solid";
            emPosition.style.border = "2px red solid";
            passPosition.style.border = "2px red solid";
            showError.innerHTML = "All the inputs are empty";
            
        }
        else if(target){
            emPosition.style.border = "2px red solid";
            showError.innerHTML = "Email already in use";
            

        }
        else{
            showError.innerHTML = "";

        }
        if(namechecker == true && emailchecker == true && passwordchecker == true){
            if(target){
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
}
