// Déclaration des variables
let elements2 =[];
// Ciblage des élements HTML
const btnCreate = document.querySelector('.addTache');
const modalTitleUpdate = document.getElementById('modalTitleUpdate');
const modalDescriptionUpdate = document.getElementById('modalDescriptionUpdate');
const elementParent = document.querySelector('.elementTest');
const main = document.getElementById('container');
const saveElement = document.getElementById('save');
const updateElement = document.getElementById('update');
const deleteNote = document.getElementById('delete');

// Local Storage
// localStorage.setItem('elements', JSON.stringify(elements))
if (!localStorage.getItem('elements')) {
    localStorage.setItem('elements', JSON.stringify(elements2));
}

elements2 = JSON.parse(localStorage.getItem('elements'))

// let currentValuesObj = localStorage.getItem('')
// currentValuesJson = JSON.parse(currentValuesObj)

// FONCTIONS
// Fonction pour récupérer "id" le plus grand existant du tableau elements
function idMax() {
    let id = 0;
    elements2.forEach((element)=>{
        if (element.id > id) {
            id = element.id
        }
    })
    return id;
}

// Fonction pour créer un nouvel item
function createElements() {
    let d = new Date();
    dHoursMin = d.getHours()+':'+ d.getMinutes();
    let newId = idMax()+1;
    let item = {
        id : newId,
        title : modalTitleCreation.innerHTML,
        time : dHoursMin,
        text : modalDescriptionCreation.value,
        check : false
    };

    elements2.push(item);
    localStorage.setItem('elements', JSON.stringify(elements2));
    display();
}

// Fonction UPDATE
function update(element) {
        let card = element.parentNode;
        let cardId = card.id;
        elements2.forEach((e)=>{

            console.log(1);
            if (cardId.substr(7) == e.id) {
                console.log(1);
                modalTitleUpdate.innerHTML = e.title;
                modalDescriptionUpdate.value = e.text;

            updateElement.addEventListener('click', () => {
                e.title = modalTitleUpdate.innerHTML;
                e.text = modalDescriptionUpdate.value;
                localStorage.setItem('elements', JSON.stringify(elements2));
                display();
            })
            }
        })
}

// Fonction d'affichage de tous les éléments au chargement de la page
function display() {
    main.innerHTML = '';
    elements2 = JSON.parse(localStorage.getItem('elements'))

    elements2.forEach((element) => {
        let id = element.id
        let title = element.title
        let time = element.time
        let message = element.text
        main.innerHTML += ` 
        <div class="container">
            <div class="row rowCard ms-lg-5" id="rowCard${id}">
            <div class="col-6 text-start">
                <h2 class="title" id="title${id}">${title}</h2>
            </div>
            <div class="col-6 time text-end" id="time${id}">
                <p>${time}</p>
            </div>
            <div class="col-10 text-start">
                <p class="message" id="message${id}">${message}</p>
            </div>
            <div class="col-2 dot text-end" id="dot${id}" data-bs-toggle="modal" data-bs-target="#modalUpdate">
                <p>...</p>
            </div>
            </div>
        </div>`
    })
    var dot = document.querySelectorAll('.dot');

    dot.forEach((element) => {
            element.addEventListener('click', () => {
            update(element);
        }); 
    });
  }

// EVENTS

saveElement.addEventListener('click', createElements);

// MAIN
display();
