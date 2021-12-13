// comprueba si el nombre es valido
export function nameChecker(){
    let namePosition = document.getElementById('nameInput');
    let nameValue = document.getElementById('nameInput').value;
    let showError = document.getElementById("showError");
    let nameArr = [...nameValue];
    let lengArr = nameArr.length;
    // regex
    let nameRegex = "^(\\w{4,20})$"
    let regexcheckname = new RegExp(nameRegex);
    let regexResultName = regexcheckname.test(nameValue);
    // condicionales
    if(nameValue == ''){
        namePosition.style.border = "2px var(--error) solid";
        return false
    }
    else if(regexResultName == false){
        namePosition.style.border = "2px var(--error) solid";
        if(lengArr < 4){
            showError.innerHTML = "Name lenght needs to be between 4-20"
        }else{
            
        }
        return false
    }
    else{
        namePosition.style.border = "2px var(--correct) solid";
        return true;
    }
}


