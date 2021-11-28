//importamos los modulos
import {
    header,
    footer
} from "./load_header_footer.js";
console.log(header, footer);

import {
    toTop,
    mybutton,
    widow,
    scrollFunction,
    topFunction,
} from "./toTop.js";
console.log(toTop, mybutton, widow(), scrollFunction(), topFunction());


import {
    event,
    sortevents
} from "./addEvent.js";
import {
    news,
    sortnews
} from "./newsCard.js";

import { createCookie } from "./checkCookie.js";


//Al entrar a la página lo que se hara es generar las cards y las news, de manera ordenada
document.addEventListener('DOMContentLoaded', () => {
    sortnews
    news();
    sortevents
    event();
//Este timeout, servira para que el layout de la cookie salga luego de 3s
    setTimeout(createCookie,3000);

})

//Esta funcion permitira eliminar un evento 
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
rmEventos()

setInterval(rmEventos, 1000);


//Al introducir un correo y dar-le  click al boton submit, se creara la cookie
document.getElementById("btnSubmit").addEventListener("click", () => {
    let email = document.getElementById("emailValue").value;
    if (email == "") {
        document.getElementById("cookieWrapper").style.visibility = "visible";
    } else {
        document.getElementById("cookieWrapper").style.visibility = "hidden";
        let expiry = new Date();
        expiry.setTime(expiry.getTime() + 86400000); 

        document.cookie = "evacten=cookieValue; expires=" + expiry.toGMTString();
    }
});

// variable que formatea la fecha de los meses

var monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

// variables que guardan fecha, dia o año
var currentDate = new Date();
var currentDay = currentDate.getDate();
var monthNumber = currentDate.getMonth();
var currentYear = currentDate.getFullYear();

var dates = document.getElementById("dates");
var month = document.getElementById("month");
var year = document.getElementById("year");

var prevMonthDOM = document.getElementById("prev-month");
var nextMonthDOM = document.getElementById("next-month");

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();


prevMonthDOM.addEventListener("click", () => lastMonth());
nextMonthDOM.addEventListener("click", () => nextMonth());

// funcion que escribe los dias del mes y les da diferentes clases segun si es dia acutal, del mes pasado o de este mes
const writeMonth = (month) => {
    for (var i = startDay(); i > 0; i--) {
        dates.innerHTML += ` <div class="calendarDate calendarItem calendarLastDays">
            ${getTotalDays(monthNumber - 1) - (i - 1)}
        </div>`;
    }

    for (var i = 1; i <= getTotalDays(month); i++) {
        if (i === currentDay) {
            dates.innerHTML += ` <a href='./eventos.html' class="calendarDate calendarItem calendarToday">${i}</a>`;
        } else {
            dates.innerHTML += ` <a href='./eventos.html' class="calendarDate calendarItem">${i}</a>`;
        }
    }
};

// funcion que escoge los dias del mes en funcion si es impar, par o por defecto como febrero
const getTotalDays = (month) => {
    if (month === -1) month = 11;

    if (
        month == 0 ||
        month == 2 ||
        month == 4 ||
        month == 6 ||
        month == 7 ||
        month == 9 ||
        month == 11
    ) {
        return 31;
    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;
    } else {
        return isLeap() ? 29 : 28;
    }
};

const isLeap = () => {
    return (
        (currentYear % 100 !== 0 && currentYear % 4 === 0) ||
        currentYear % 400 === 0
    );
};

// funcion que guarda el dia actual
const startDay = () => {
    var start = new Date(currentYear, monthNumber, 1);
    return start.getDay() - 1 === -1 ? 6 : start.getDay() - 1;
};

// funcion que detecta el mes anterior al actual
const lastMonth = () => {
    if (monthNumber !== 0) {
        monthNumber--;
    } else {
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
};

// funcion que detecta el mes siguiente al actual
const nextMonth = () => {
    if (monthNumber !== 11) {
        monthNumber++;
    } else {
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();
};

// funcion que añade todos los valores del mes siguiente o anterior
const setNewDate = () => {
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = "";
    writeMonth(monthNumber);
};

writeMonth(monthNumber);