import {
    check,
    sorted,
    tt
} from "./indextest.js";
import {
    layoutToggle,
    windowOnClick,
    layout
} from "./showLayout.js";

document.addEventListener('DOMContentLoaded', () => {
    sorted
    check();
})



const btnsubm = document.getElementById("btnSubmit").addEventListener('click', (e) => {
    //    e.preventDefault();
    let arrFormValues = {
        nameEvent: document.getElementById("eventName").value,
        dateEvent: document.getElementById("dateValue").value,
        descriptionEvent: document.getElementById("eventDescription").value,
        imgEvent: "party eating img"
    }
    sorted.unshift(arrFormValues);
    layoutToggle();
    // console.log(sorted);
    check();
})