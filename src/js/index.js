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

// var contador = 0;

import {
    event,
    sortevents
} from "./addEvent.js";
import {
    news,
    sortnews
} from "./newsCard.js";

document.addEventListener("DOMContentLoaded", () => {
    sortnews;
    news();
    sortevents;
    event();
    if (document.cookie.indexOf("evacten=") >= 0) {
        document.getElementById("cookieWrapper").style.visibility = "hidden";
    } else {
        setTimeout(3000, () => {
            document.getElementById("cookieWrapper").style.visibility = "visible";
        });
    }
});

document.getElementById("btnSubmit").addEventListener("click", () => {
    let email = document.getElementById("emailValue").value;
    if (email == "") {
        document.getElementById("cookieWrapper").style.visibility = "visible";
    } else {
        document.getElementById("cookieWrapper").style.visibility = "hidden";
        let expiry = new Date();
        expiry.setTime(expiry.getTime() + 30000); // Ten minutes

        document.cookie = "evacten=cookieValue; expires=" + expiry.toGMTString();
        // alert("this is your first time");
    }
});
// document.addEventListener('DOMContentLoaded', () => {
//     sorted
//     check();
// })

// Gaspar

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

// llaman a la funcion para pasar el mes o retroceder

prevMonthDOM.addEventListener("click", () => lastMonth());
nextMonthDOM.addEventListener("click", () => nextMonth());

// Devuelve los numeros del calenadrio

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

const startDay = () => {
    var start = new Date(currentYear, monthNumber, 1);
    return start.getDay() - 1 === -1 ? 6 : start.getDay() - 1;
};

const lastMonth = () => {
    if (monthNumber !== 0) {
        monthNumber--;
    } else {
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
};

const nextMonth = () => {
    if (monthNumber !== 11) {
        monthNumber++;
    } else {
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();
};

const setNewDate = () => {
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = "";
    writeMonth(monthNumber);
};

writeMonth(monthNumber);