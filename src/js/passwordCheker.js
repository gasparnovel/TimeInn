export function passwordCheker(){
    let passValue = document.getElementById('passwordInput').value
    let passPosition = document.getElementById('passwordInput')
    let passRegex = "([A-Za-z0-9\\W]{8,20})"
    let passArr = [...passValue];
    let lengArr = passArr.length;
    let regexcheckpass = new RegExp(passRegex);
    let regexResultPassword = regexcheckpass.test(passValue);

    if(passValue == ''){
    passPosition.style.border = "2px red solid";
        return false

        
    }else if(regexResultPassword == false){
        passPosition.style.border = "2px red solid";
        if(lengArr < 8){
            showError.innerHTML = "Password lenght needs to be between 8-20"
        }else{
            
        }
        return false
    }
    else{
        passPosition.style.border = "2px green solid";
        return true
    }
}