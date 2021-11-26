// document.getElementById("btnSubmit").addEventListener('click',()=>{
//     document.getElementById("cookieWrapper").style.visibility = "hidden";
// })

// setTimeout(3000,setCookie())

// var contador = 0;
var id;
var name;
var date;
var desc;
var Patroc;
var inArr = [];

export var tt = [{
        id: 'default',
        nameEvent: 'Hiking',
        dateEvent: '2020-12-15',
        descriptionEvent: 'hiking descr',
        isPat: "Patrocinado",
        imgEvent: 'img Hiking'
    },
    {
        id: 'default',
        nameEvent: 'wedding',
        dateEvent: '2020-12-30',
        descriptionEvent: 'wedding descr',
        isPat: "Patrocinado",
        imgEvent: 'wedding Hiking'
    },
    {
        id: 'default',
        nameEvent: 'pary',
        dateEvent: '2020-12-10',
        descriptionEvent: 'pary descr',
        isPat: "Patrocinado",
        imgEvent: 'pary Hiking'
    }
]

export var sorted = tt.sort((a, b) => {
    return (a.dateEvent > b.dateEvent) ? 1 : -1;
})



export function check() {
    sorted.forEach(c => {

        if (inArr.includes(c.nameEvent) == true) {

        } else {
            id = c.id;
            name = c.nameEvent;
            date = c.dateEvent;
            desc = c.descriptionEvent;
            Patroc = c.isPat
            create();
            inArr.push(c.nameEvent);
            // contador++;

        }
        console.log(id, name, date, desc)
        // console.log(contador)
    })
}

function create() {
    let parentAreaa = document.getElementById('container');
    let parentArea = document.querySelector('.eventBackgorund');

    let divParent = document.createElement('div');
    divParent.classList.add('card', 'cardGridLeft');

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

    let divFott = document.createElement('div');
    divFott.className = 'cardFooter';

    let newDate = document.createElement('p');
    newDate.className = 'date';

    newName.innerHTML = name;
    newDate.innerHTML = date;
    newDesc.innerHTML = desc;
    newPatrocin.innerHTML = Patroc;


    parentAreaa.appendChild(parentArea);

    parentArea.appendChild(divParent);
    nameDescDiv.appendChild(newName);
    nameDescDiv.appendChild(newDesc);
    nameDescDiv.appendChild(newPatrocin);
    divButt.appendChild(butt);
    divFott.appendChild(newDate);

    divParent.appendChild(nameDescDiv);
    divParent.appendChild(divButt);
    divParent.appendChild(divFott);


    if (id == 'default') {

    } else {
        parentArea.prepend(divParent)
    }
}













