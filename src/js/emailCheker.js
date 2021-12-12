export let registeredUsers = [
    {name:"Jose",Email:"Jose53@gmail.com",password:"123456789Josee"},
    {name:"Maria",Email:"Lapilli01@gmail.com",password:"45qwkdaq."},
    {name:"Pablo",Email:"pablo_el_mota@gmail.com",password:"pabloelcani13"}
]

export function emailCheker(){
    let emPosition = document.getElementById('emailInput')
    let emValue = document.getElementById('emailInput').value

    let emailRegex = "^([A-Za-z0-9_]{3,9})+@([a-zA-Z_])+.([/com/|/net/|/gov/]{3,3})$"
    let regexcheckem = new RegExp(emailRegex); 
    let regexResultEmail = regexcheckem.test(emValue);
    
    if(emValue == ''){
        emPosition.style.border = "2px red solid";
        return false


    }else if(regexResultEmail == false){
        emPosition.style.border = "2px red solid";
        showError.innerHTML = "Add a correct email, and try again"
        return false

    }
    else{
        let target = registeredUsers.find(e=>e.Email == emValue)
        if(target){
            emPosition.style.border = "2px red solid";
            showError.innerHTML = "Email already in use";
        }
        else{
            emPosition.style.border = "2px green solid";
            showError.innerHTML = "";

            
        }
        // emPosition.style.border = "2px green solid";
        // checkerEmail = 1;
        return true;
    }
}


