//En esta funcion se va a comprovar si la cookie existe, si no existe entonces mostrara
// el layout para crear la cookie
export function createCookie(){
    if (document.cookie.indexOf("evacten=") >= 0) {
        document.getElementById("cookieWrapper").style.visibility = "hidden";

  }
  else {
      document.getElementById("cookieWrapper").style.visibility = "visible";
    }        
}

export function getCookie(cookieName) {
    var name = cookieName + "=";
    var splitCookie = document.cookie.split(';');
    for (var i = 0; i < splitCookie.length; i++) {
        var rmWhiteSpaces = splitCookie[i].trim();
        if ((rmWhiteSpaces.indexOf(name)) == 0) {
            // alert("found");
            let result = rmWhiteSpaces.substr(name.length)
            return result;
        }
    }
    alert("not found");
    return null;
}