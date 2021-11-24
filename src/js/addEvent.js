 var  tt = [];
 var sorted = [];
 
 
 document.addEventListener('DOMContentLoaded',()=>{
    tt = [{nameEvent:'Hiking',dateEvent:'2020-12-15',descriptionEvent:'hiking descr',imgEvent:'img Hiking'},
    {nameEvent:'wedding',dateEvent:'2020-12-30',descriptionEvent:'wedding descr',imgEvent:'wedding Hiking'},
    {nameEvent:'pary',dateEvent:'2020-12-10',descriptionEvent:'pary descr',imgEvent:'pary Hiking'}]

    sorted = tt.sort((a,b) =>{
    return (a.dateEvent > b.dateEvent) ? 1 : -1
    })
    addCards();


 })   

 function addCards(){
    let parentArea = document.getElementById('container') // area message
    sorted.forEach( c => {
        let name = c.nameEvent;
        let date = c.dateEvent;
        let desc = c.descriptionEvent;
        console.log(name,date,desc);
        let divParent = document.createElement('div');
        divParent.classList.add('card','cardGridLeft');

        let nameDescDiv = document.createElement('div');
        nameDescDiv.className = 'cardBody';

        let newName = document.createElement('p');
        newName.className = 'name';

        let newDesc = document.createElement('p');
        newDesc.className = 'description';

        let divButt = document.createElement('div');
        divButt.className = 'buttonStyle';
        let butt = document.createElement('a');
        butt.className = 'linkStyle';

        let divFott = document.createElement('div');
        divFott.className = 'cardFooter';

        let newDate = document.createElement('p');
        newDate.className = 'date';
        
        newName.innerHTML = name;
        newDate.innerHTML = date;
        newDesc.innerHTML = desc;
        parentArea.appendChild(divParent);
        nameDescDiv.appendChild(newName);
        nameDescDiv.appendChild(newDesc);
        divButt.appendChild(butt);
        divFott.appendChild(newDate);

        divParent.appendChild(nameDescDiv);
        divParent.appendChild(divButt);
        divParent.appendChild(divFott);

    });
 }
    
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