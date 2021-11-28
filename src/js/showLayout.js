// variable global contador inicializado a 0

var contador = 0;

// guarda y exporta la variable 
export const layout = document.getElementById("backEvent");

// se aplican los siguientes eventos si clicamos encima de las etiquetas con ese id
document.getElementById("addEventStyle").addEventListener('click',layoutToggle);
document.getElementById("closeLayout").addEventListener('click',layoutToggle);
window.addEventListener("click", windowOnClick);

// cambia la visibilidad del elemento con id backevent segun el contador
export function layoutToggle() {
    if(contador == 0){
        document.getElementById("backEvent").style.visibility = "visible"
        contador++;
    }else{
        document.getElementById("backEvent").style.visibility = "hidden";
        contador = 0;
    }
}

// funcion que cierra el layout
export function windowOnClick(event) {
    if (event.target === layout) {
        layoutToggle();
    }
}