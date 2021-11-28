var id;
var name;
var date;
var desc;
var imgEventt;
var Patroc;
export var arrEvents = [];

export var eventarr = [{
    id: 'default',
    nameEvent: 'Feria del Libro',
    dateEvent: '12/15/2021',
    descriptionEvent: 'Vuelve la feria del libro..',
    isPat: "00:30",
    imgEvent: '../resources/img/feria.jpg'
},
{
    id: 'default',
    nameEvent: 'Desfile',
    dateEvent: '12/30/2021',
    descriptionEvent: 'imagenes del desfile neoyorquino..',
    isPat: "16:30",
    imgEvent: '../resources/img/desfile.webp'
},
{
    id: 'default',
    nameEvent: 'Premios Dial',
    dateEvent: '12/2/2021',
    descriptionEvent: 'Los premidos de la noche..',
    isPat: "17:30",
    imgEvent: '../resources/img/dial.jpg'
},{
    id: 'default',
    nameEvent: 'Gala Emmy',
    dateEvent: '12/1/2021',
    descriptionEvent: 'La gala se celebró..',
    isPat: "16:00",
    imgEvent: '../resources/img/emmy.jpg'
},
{
    id: 'default',
    nameEvent: 'Exposición Alfonso',
    dateEvent: '12/3/2021',
    descriptionEvent: 'exposición cuidado con..',
    isPat: "19:00",
    imgEvent: '../resources/img/exposicion.jpg'
},
{
    id: 'default',
    nameEvent: 'Salon del Manga',
    dateEvent: '12/10/2021',
    descriptionEvent: 'Se celebró den Barcelona..',
    isPat: "22:00",
    imgEvent: '../resources/img/salon.jpg'
}

]



export var sortevents = eventarr.sort((a, b) => {
    return (new Date(a.dateEvent) > new Date(b.dateEvent)) ? 1 : -1;
})


export function event() {
    sortevents.forEach(c => {

        if (arrEvents.includes(c.nameEvent) == true) {

        } else {
            id = c.id;
            name = c.nameEvent;
            date = c.dateEvent;
            desc = c.descriptionEvent;
            imgEventt = c.imgEvent
            Patroc = c.isPat
            newEvent();
            arrEvents.push(c.nameEvent);
            // contador++;

        }
        // console.log(id, name, date, desc)
        // console.log(contador)
    })
}

function newEvent() {
    let parentAreaa = document.getElementById('container');
    let parentArea = document.getElementById("events");

    let divParent = document.createElement('div');
    divParent.classList.add('card','remBtnn');

    let img = document.createElement('div');
    let imgValue = document.createElement('img');
    imgValue.src = imgEventt;
    imgValue.className = "profileImg";

    let nameDescDiv = document.createElement('div');
    nameDescDiv.className = 'cardBody';

    let newName = document.createElement('p');
    newName.className = 'name';

    let newDesc = document.createElement('p');
    newDesc.className = 'description';

    let newPatrocin = document.createElement('p');
    newPatrocin.className = 'description';


    let divButt = document.createElement('div');
    divButt.className = 'buttonStyle';
    let butt = document.createElement('a');
    butt.innerHTML = 'Saber más';
    butt.className = 'linkStyle';
    butt.href = "./eventos.html"

    let divFott = document.createElement('div');
    divFott.className = 'cardFooter';

    let newDate = document.createElement('p');
    newDate.className = 'date';

    let remBtn = document.createElement("button");
    remBtn.classList.add('btnSty','remBtnn');
    remBtn.innerHTML = "Remove";

    newName.innerHTML = name;
    newDate.innerHTML = date;
    newDesc.innerHTML = desc;
    newPatrocin.innerHTML = Patroc;
    // parentAreaa.appendChild(parentArea);

    parentArea.appendChild(divParent);
    img.appendChild(imgValue);
    nameDescDiv.appendChild(newName);
    nameDescDiv.appendChild(newDesc);
    nameDescDiv.appendChild(newPatrocin);
    divButt.appendChild(butt);
    divFott.appendChild(newDate);
    divFott.appendChild(remBtn);

    divParent.appendChild(img);
    divParent.appendChild(nameDescDiv);
    divParent.appendChild(divButt);
    divParent.appendChild(divFott);



    divParent.appendChild(nameDescDiv);
    divParent.appendChild(divButt);
    divParent.appendChild(divFott);


    if (id == 'default') {

    } else {

        newPatrocin.innerHTML = "New Event";
        parentArea.prepend(divParent)
        let newSrcImg = document.getElementById("eventImage").files[0].name
        imgValue.src =  "../resources/img/" + newSrcImg;
        console.log(newg)
    }
}