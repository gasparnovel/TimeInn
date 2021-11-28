// declaramos variables globales

let id;
let name;
let date;
let desc;
let Patroc;
let imgNewss;
let arrNews = [];

//funcion que crea  las news
export var newsarr = [{
        id: 'default',
        nameEvent: 'Covid',
        dateEvent: '12/15/2021',
        descriptionEvent: 'Países Bajos confirma 13 casos..',
        isPat: "Patrocinado",
        imgNews: '../resources/img/covid.webp'
    },
    {
        id: 'default',
        nameEvent: 'Conducción',
        dateEvent: '1/30/2021',
        descriptionEvent: 'Difícil equilibrio entre salud..',
        isPat: "Patrocinado",
        imgNews: '../resources/img/conduccion.webp'
    },
    {
        id: 'default',
        nameEvent: 'Nieve',
        dateEvent: '12/2/2021',
        descriptionEvent: 'Alerta roja al País Vasco..',
        isPat: "Patrocinado",
        imgNews: '../resources/img/nieve.JPG'
    }, {
        id: 'default',
        nameEvent: 'Israel',
        dateEvent: '12/31/2021',
        descriptionEvent: 'Cierra sus fronteras..',
        isPat: "No Patrocinado",
        imgNews: '../resources/img/israel.png'
    },
    {
        id: 'default',
        nameEvent: 'Erupción ',
        dateEvent: '12/3/2021',
        descriptionEvent: 'Surge una nueva colada..',
        isPat: "Patrocinado",
        imgNews: '../resources/img/erupcion.jpg'
    },
    {
        id: 'default',
        nameEvent: 'Vacunar',
        dateEvent: '12/30/2021',
        descriptionEvent: 'Ya se puede vacunar..',
        isPat: "No Patrocinado",
        imgNews: '../resources/img/vacunar.webp'
    },
    {
        id: 'default',
        nameEvent: 'Pasaporte Covid',
        dateEvent: '1/10/2021',
        descriptionEvent: 'Ya se exige en seis..',
        isPat: "Patrocinado",
        imgNews: '../resources/img/pasaporte.jpg'
    },
    {
        id: 'default',
        nameEvent: 'Dimisión',
        dateEvent: '3/10/2021',
        descriptionEvent: 'Se exige a Dolores Delgado..',
        isPat: "Patrocinado",
        imgNews: '../resources/img/dimision.jpg'
    },
    {
        id: 'default',
        nameEvent: 'Polícias y Guardias',
        dateEvent: '12/29/2021',
        descriptionEvent: 'Marchan contra la reforma..',
        isPat: "No Patrocinado",
        imgNews: '../resources/img/policia.JPG'
    },
    {
        id: 'default',
        nameEvent: 'Afectados Volcán',
        dateEvent: '12/28/2021',
        descriptionEvent: 'Canarias cede viivendas..',
        isPat: "No Patrocinado",
        imgNews: '../resources/img/casa.jpg'
    }
]

// funcion que ordena el array de news por fecha
export var sortnews = newsarr.sort((a, b) => {
    return (new Date(a.dateEvent) > new Date(b.dateEvent)) ? 1 : -1;
})

// funcion con bucle que comprueba que no se repita el nombre de la new 
export function news() {
    sortnews.forEach(c => {

        if (arrNews.includes(c.nameEvent) == true) {

        } else {
            id = c.id;
            name = c.nameEvent;
            date = c.dateEvent;
            desc = c.descriptionEvent;
            imgNewss = c.imgNews
            Patroc = c.isPat
            newNews();
            arrNews.push(c.nameEvent);
        }
    })
}

// funcion que añade la tarjeta new 
function newNews() {
    let parentAreaa = document.getElementById('container');
    let parentArea = document.getElementById("news");

    let divParent = document.createElement('div');
    divParent.classList.add('card', 'cardGridLeft');

    let img = document.createElement('div');
    let imgValue = document.createElement('img');
    imgValue.src = imgNewss;
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

    newName.innerHTML = name;
    newDate.innerHTML = date;
    newDesc.innerHTML = desc;
    newPatrocin.innerHTML = Patroc;


    parentArea.appendChild(divParent);
    img.appendChild(imgValue);

    nameDescDiv.appendChild(newName);
    nameDescDiv.appendChild(newDesc);
    nameDescDiv.appendChild(newPatrocin);
    divButt.appendChild(butt);
    divFott.appendChild(newDate);

    divParent.appendChild(img);
    divParent.appendChild(nameDescDiv);
    divParent.appendChild(divButt);
    divParent.appendChild(divFott);
}