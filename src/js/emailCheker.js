// array de usuarios registrados
export let registeredUsers = [
    {name:"Jose",Email:"Jose53@gmail.com",password:"123456789Josee"},
    {name:"Maria",Email:"Lapilli01@gmail.com",password:"45qwkdaq."},
    {name:"Pablo",Email:"pablo_el_mota@gmail.com",password:"pabloelcani13"}
]
// comprueba si el email es correcto 
export function emailCheker(){
    let emPosition = document.getElementById('emailInput')
    let emValue = document.getElementById('emailInput').value
    // regex
    let emailRegex = "^([A-Za-z]{1})([a-z]{8})@([a-z]{5,10})\.(com|net|gov)$"
    let regexcheckem = new RegExp(emailRegex); 
    let regexResultEmail = regexcheckem.test(emValue);
    // condicionales 
    if(emValue == ''){
        emPosition.style.border = "2px var(--error) solid";
        return false
    }else if(regexResultEmail == false){
        emPosition.style.border = "2px var(--error) solid";
        showError.innerHTML = "Add a correct email, and try again"
        return false
    }
    else{
        // comprueba si el email esta en uso 
        let target = registeredUsers.find(e=>e.Email == emValue)
        if(target){
            emPosition.style.border = "2px var(--error) solid";
            showError.innerHTML = "Email already in use";
        }
        else{
            emPosition.style.border = "2px var(--correct) solid";
            showError.innerHTML = "";
        }
        return true;
    }
}
