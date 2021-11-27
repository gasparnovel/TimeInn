import { event,sortevents } from "./addEvent.js";
import { news,sortnews } from "./newsCard.js";
import {
    layoutToggle,
    windowOnClick,
    layout
} from "./showLayout.js";
import { contador } from "./showLayout.js";

document.addEventListener('DOMContentLoaded', () => {
    sortnews
    news();
    sortevents
    event();

})

$( function() {
    let date = new Date();
    let currDay = date.getTime();
    let currMonth = date.getMonth();
    let currYear = date.getFullYear();

    var startDate = new Date(currDay,currMonth,currYear);
  
    $("#dateValue").datepicker();
    $("#dateValue").datepicker("setDate", startDate);
  } );


const btnsubm = document.getElementById("btnSubmit").addEventListener('click', (e) => {

    //    e.preventDefault();
    let name = document.getElementById("eventName").value;
    let desc = document.getElementById("eventDescription").value
    if(name == "" || desc == ""){
        contador = 1;
        layoutToggle()
    }else{
    let arrFormValues = {
        nameEvent: name,
        dateEvent: document.getElementById("dateValue").value,
        descriptionEvent: desc,
        imgEvent: "party eating img"
    }
    sortevents.unshift(arrFormValues);
    layoutToggle();
    // console.log(sorted);
    event();
    }
})