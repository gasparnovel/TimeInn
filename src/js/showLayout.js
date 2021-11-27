export var contador = 0;
export const layout = document.getElementById("backEvent");
document.getElementById("addEventStyle").addEventListener('click',layoutToggle);
document.getElementById("closeLayout").addEventListener('click',layoutToggle);
window.addEventListener("click", windowOnClick);
export function layoutToggle() {
    if(contador == 0){
        document.getElementById("backEvent").style.visibility = "visible"
        contador++;
    }else{
        document.getElementById("backEvent").style.visibility = "hidden";
        contador = 0;
    }
}

export function windowOnClick(event) {
    if (event.target === layout) {
        layoutToggle();
    }
}