// comprueba si el password es correcto 
export function passwordCheker(){
    let passValue = document.getElementById('passwordInput').value
    let passPosition = document.getElementById('passwordInput')
    let passValue2 = document.getElementById('passwordInput2').value
    let passPosition2 = document.getElementById('passwordInput2')
    // regex
    let passRegex = "([A-Za-z0-9\\W]{8,20})"
    let passArr = [...passValue];
    let lengArr = passArr.length;
    let regexcheckpass = new RegExp(passRegex);
    let regexResultPassword = regexcheckpass.test(passValue);
    // condicionales
    if (passValue2 == '') {
        passPosition.style.border = "2px var(--error) solid";
    } else if(passValue == ''){
    passPosition.style.border = "2px var(--error) solid";
        showError.innerHTML = "Password empty";
        return false
    }else if(regexResultPassword == false){
        passPosition.style.border = "2px var(--error) solid";
        if(lengArr < 8){
            showError.innerHTML = "Password lenght needs to be between 8-20"
            // focus
            passPosition.focus();
        }else{
        }
        return false
    } else if(passValue != passValue2 || passValue2 != passValue) {
        passPosition.style.border = "2px var(--error) solid";
        showError.innerHTML = "Passwords do not match please try again"
        return false
    }
    else{
        passPosition.style.border = "2px var(--correct) solid";
        passPosition2.style.border = "2px var(--correct) solid";
        return true
    }
}
