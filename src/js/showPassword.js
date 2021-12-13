// muestra la contraseña cambiando el tipo de password a text 
export function showpassword(){
    var id = document.getElementById("passwordInput");
    if(id.type == "password"){
        id.type = "text";
    }else if (id.type == "text") {
        id.type = "password";
    }else {
        id.type = "password";
    }
}

export function showpasswordDos(){
    var id2 = document.getElementById("passwordInput2");
    if(id2.type == "password"){
        id2.type = "text";
    }else if (id2.type == "text") {
        id2.type = "password";
    }else {
        id2.type = "password";
    }
}

export function showpasswordTres(){
    var id3 = document.getElementById("passwordValue");
    if(id3.type == "password"){
        id3.type = "text";
    }else if (id3.type == "text") {
        id3.type = "password";
    }else {
        id3.type = "password";
    }
}

