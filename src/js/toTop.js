// Añadimos despues del div con el id toTop la etiqueta a
let toTop= document.getElementById("toTop").innerHTML =
    "<a href='#' id='scrollTop'>🡹</a>";

//Metemos a en una variable
let mybutton = document.getElementById("scrollTop");

//Cuando usamos el scroll y bajamos 20 pixeles de lo alto del documento, mostramos el a
let widow= window.onscroll = function () {
    scrollFunction()
};

/* Funcion con condicional , si el body es mayor que 20 o el document element es mayor que 20 
* Le añadimos el estilo al link display block
*Sino le añadimos el estilo al link display none 
*/ 
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

//Cuando el usuario clicka en el a el scroll nos lleva a lo alto del documento 
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export { toTop, mybutton, widow, scrollFunction, topFunction };