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