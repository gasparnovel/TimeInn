export function createCookie(){
    if (document.cookie.indexOf("evacten=") >= 0) {
        document.getElementById("cookieWrapper").style.visibility = "hidden";

  }
  else {
      document.getElementById("cookieWrapper").style.visibility = "visible";
    }        
}