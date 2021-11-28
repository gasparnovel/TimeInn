//importando los modulos

import {
    event,
    sortevents
} from "./addEvent.js";
import {
    news,
    sortnews
} from "./newsCard.js";
import {
    layoutToggle,
    windowOnClick,
    layout
} from "./showLayout.js";

//Cuando el DOM se carge va a generar las cards, estas cards y news estaran ordenadas
document.addEventListener('DOMContentLoaded', () => {
    sortnews
    news();
    sortevents
    event();
})

//La funcion para elegir la nueva fecha, cuand ose crea un evento
$(function () {
    let date = new Date();
    let currDay = date.getTime();
    let currMonth = date.getMonth();
    let currYear = date.getFullYear();

    var startDate = new Date(currDay, currMonth, currYear);

    $("#dateValue").datepicker();
    $("#dateValue").datepicker("setDate", startDate);
});


//Al crear un nuevo evento, este guardara los valores en un array de objectos, para luego generar las cards
const btnsubm = document.getElementById("btnSubmit").addEventListener('click', (e) => {

       e.preventDefault();
    let name = document.getElementById("eventName").value;
    let desc = document.getElementById("eventDescription").value
    if (name == "" || desc == "") {
        
      document.getElementById("backEvent").style.visibility = "visible";

      
    } else {
        let arrFormValues = {
            nameEvent: name,
            dateEvent: document.getElementById("dateValue").value,
            descriptionEvent: desc,
        }
        sortevents.unshift(arrFormValues);
        layoutToggle();
        event();
    }
})

//esta funcion se encarga de poder eliminar una card
function rmEventos() {
    let btnRem = document.querySelectorAll('.remBtnn')
    if (btnRem.length == 0) {

    } else {
        btnRem.forEach((e) => {
            e.addEventListener('click', () => {
                e.style.display = "none";
            })
        })
    }
}
setInterval(rmEventos, 1000);
