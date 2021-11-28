var id;
var name;
var date;
var desc;
var Patroc;
var arrNews = [];

export var newsarr = [{
        id: 'default',
        nameEvent: 'Hiking',
        dateEvent: '12/15/2021',
        descriptionEvent: 'hiking descr',
        isPat: "Patrocinado",
        imgEvent: 'img Hiking'
    },
    {
        id: 'default',
        nameEvent: 'wedding',
        dateEvent: '12/30/2021',
        descriptionEvent: 'wedding descr',
        isPat: "Patrocinado",
        imgEvent: 'wedding Hiking'
    },
    {
        id: 'default',
        nameEvent: 'pary',
        dateEvent: '12/2/2021',
        descriptionEvent: 'pary descr',
        isPat: "Patrocinado",
        imgEvent: 'pary Hiking'
    },{
        id: 'default',
        nameEvent: 'one',
        dateEvent: '12/1/2021',
        descriptionEvent: 'hiking descr',
        isPat: "No Patrocinado",
        imgEvent: 'img Hiking'
    },
    {
        id: 'default',
        nameEvent: 'two',
        dateEvent: '12/3/2021',
        descriptionEvent: 'wedding descr',
        isPat: "Patrocinado",
        imgEvent: 'wedding Hiking'
    },
    {
        id: 'default',
        nameEvent: 'three',
        dateEvent: '12/10/2021',
        descriptionEvent: 'pary descr',
        isPat: "Patrocinado",
        imgEvent: 'pary Hiking'
    }
    
]


export var sortnews = newsarr.sort((a, b) => {
    return (new Date(a.dateEvent) > new Date(b.dateEvent)) ? 1 : -1;
})


export function news() {
    sortnews.forEach(c => {

        if (arrNews.includes(c.nameEvent) == true) {

        } else {
            id = c.id;
            name = c.nameEvent;
            date = c.dateEvent;
            desc = c.descriptionEvent;
            Patroc = c.isPat
            newNews();
            arrNews.push(c.nameEvent);
            // contador++;

        }
        // console.log(id, name, date, desc)
        // console.log(contador)
    })
}




function newNews() {
    let parentAreaa = document.getElementById('container');
    let parentArea = document.getElementById("news");

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


    parentArea.appendChild(divParent);
    nameDescDiv.appendChild(newName);
    nameDescDiv.appendChild(newDesc);
    nameDescDiv.appendChild(newPatrocin);
    divButt.appendChild(butt);
    divFott.appendChild(newDate);

    divParent.appendChild(nameDescDiv);
    divParent.appendChild(divButt);
    divParent.appendChild(divFott);
}




