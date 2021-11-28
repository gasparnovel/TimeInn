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
// import { contador } from "./showLayout.js";

document.addEventListener('DOMContentLoaded', () => {
    sortnews
    news();
    sortevents
    event();
    // let inArr = arrEvents;
})

$(function () {
    let date = new Date();
    let currDay = date.getTime();
    let currMonth = date.getMonth();
    let currYear = date.getFullYear();

    var startDate = new Date(currDay, currMonth, currYear);

    $("#dateValue").datepicker();
    $("#dateValue").datepicker("setDate", startDate);
});


const btnsubm = document.getElementById("btnSubmit").addEventListener('click', (e) => {

    //    e.preventDefault();
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
        // console.log(sorted);
        event();
    }
})

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
// var cards = document.querySelectorAll(".remBtn");
// cards.forEach((e)=>{
//     e.addEventListener('click',()=>{
//         console.log(e)
//     })
// })