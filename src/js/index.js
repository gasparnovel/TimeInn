// var contador = 0;
var id;
var name;
var date;
var desc;
var Patroc;
var inArr = [];

export var tt = [{id:'default', nameEvent:'Hiking',dateEvent:'2020-12-15',descriptionEvent:'hiking descr', isPat:"Patrocinado",imgEvent:'img Hiking'},
{id:'default',nameEvent:'wedding',dateEvent:'2020-12-30',descriptionEvent:'wedding descr', isPat:"Patrocinado",imgEvent:'wedding Hiking'},
{id:'default',nameEvent:'pary',dateEvent:'2020-12-10',descriptionEvent:'pary descr', isPat:"Patrocinado",imgEvent:'pary Hiking'}]

export var sorted = tt.sort((a,b) =>{
return (a.dateEvent > b.dateEvent) ? 1 : -1;
})



export function check(){
    sorted.forEach(c =>{

        if (inArr.includes(c.nameEvent) == true){

        }else{
            id = c.id;
            name = c.nameEvent;
            date = c.dateEvent;
            desc = c.descriptionEvent;
            Patroc = c.isPat
            create();
            inArr.push(c.nameEvent);
            // contador++;

        }
        console.log(id,name,date,desc)
        // console.log(contador)
    })
}

 function create(){
     let parentAreaa = document.getElementById('container');
    let parentArea = document.querySelector('.eventBackgorund');

    let divParent = document.createElement('div');
    divParent.classList.add('card','cardGridLeft');

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

    
    if(id == 'default'){
        
    }else{
        parentArea.prepend(divParent)
    }
}



















// Gaspar

var monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];

var currentDate = new Date();
var currentDay = currentDate.getDate();
var monthNumber = currentDate.getMonth();
var currentYear = currentDate.getFullYear();

var dates = document.getElementById('dates');
var month = document.getElementById('month');
var year = document.getElementById('year');

var prevMonthDOM = document.getElementById('prev-month');
var nextMonthDOM = document.getElementById('next-month');

month.textContent = monthNames[monthNumber];
year.textContent =  currentYear.toString();


// llaman a la funcion para pasar el mes o retroceder

prevMonthDOM.addEventListener('click', ()=>lastMonth());
nextMonthDOM.addEventListener('click', ()=>nextMonth());


// Devuelve los numeros del calenadrio

const writeMonth = (month) => {

    for(var i = startDay(); i>0;i--){
        dates.innerHTML += ` <div class="calendarDate calendarItem calendarLastDays">
            ${getTotalDays(monthNumber-1)-(i-1)}
        </div>`;
    }

    for(var i=1; i<=getTotalDays(month); i++){
        if(i===currentDay) {
            dates.innerHTML += ` <a href='./eventos.html' class="calendarDate calendarItem calendarToday">${i}</a>`;
        }else{
            dates.innerHTML += ` <a href='./eventos.html' class="calendarDate calendarItem">${i}</a>`;
        }
    }
}

const getTotalDays = month => {
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return  31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;

    } else {

        return isLeap() ? 29:28;
    }
}

const isLeap = () => {
    return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

const startDay = () => {
    var start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

const lastMonth = () => {
    if(monthNumber !== 0){
        monthNumber--;
    }else{
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
}

const nextMonth = () => {
    if(monthNumber !== 11){
        monthNumber++;
    }else{
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();
}

const setNewDate = () => {
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);
}

writeMonth(monthNumber);