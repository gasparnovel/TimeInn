 var  tt = [];
 var sorted = [];
 
 
 document.addEventListener('DOMContentLoaded',()=>{
    tt = [{nameEvent:'Hiking',dateEvent:'2020-12-15',descriptionEvent:'hiking descr',imgEvent:'img Hiking'},
    {nameEvent:'wedding',dateEvent:'2020-12-30',descriptionEvent:'wedding descr',imgEvent:'wedding Hiking'},
    {nameEvent:'pary',dateEvent:'2020-12-10',descriptionEvent:'pary descr',imgEvent:'pary Hiking'}]

    sorted = tt.sort((a,b) =>{
    return (a.dateEvent > b.dateEvent) ? 1 : -1
    })
    console.log(sorted);
 })   
    
    var contador = 0;
    const layout = document.getElementById("backEvent");
    document.getElementById("addEventStyle").addEventListener('click',layoutToggle);
    document.getElementById("closeLayout").addEventListener('click',layoutToggle);
    window.addEventListener("click", windowOnClick);
 function layoutToggle() {
        if(contador == 0){
            document.getElementById("backEvent").style.visibility = "visible"
            contador++;
        }else{
            document.getElementById("backEvent").style.visibility = "hidden";
            contador = 0;
        }
    }
    
 function windowOnClick(event) {
        if (event.target === layout) {
            layoutToggle();
        }
    }

    const btnsubm = document.getElementById("btnSubmit").addEventListener('click',(e)=>{
        e.preventDefault();
        let arrFormValues = {
            nameEvent: document.getElementById("eventName").value,
            dateEvent: document.getElementById("dateValue").value,
            descriptionEvent: document.getElementById("eventDescription").value,
            imgEvent: "party eating img"
        }
        sorted.unshift(arrFormValues);
        layoutToggle();
        console.log(sorted);
    })