// Déclaration des variables
let elements2 =[];
// Ciblage des élements HTML
const btnCreate = document.querySelector('.addTache');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('description');
const elementParent = document.querySelector('.elementTest');
const main = document.getElementById('container');
const saveElement = document.getElementById('save');
const deleteNote = document.getElementById('delete');
const dot = document.querySelectorAll('.dot');

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
// en récupérant les valeurs données dans l'item
function createElements(newId,titleVal, timeVal, textVal) {
    let item = {
        id : newId,
        title : titleVal,
        time : timeVal,
        text : textVal,
        check : false
    };
    return item;
}

// Fonction pour afficher un nouvel élément créé
function displayNewItem(newItem) {
    let id = newItem.id;
    let title = newItem.title;
    let time = newItem.time;
    let message = newItem.text;

    main.innerHTML += 
    `        
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
            <div class="col-2 dot text-end" id="dot${id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <p>...</p>
            </div>
        </div>
    </div>
    `;
}

// Fonction UPDATE
function updateElement(element) {
        let card = element.parentNode;
        let cardId = card.id;
        elements2.forEach((e)=>{
            if (cardId.substr(7) == e.id) {
                modalTitle.innerHTML = e.title;
                modalDescription.value = e.text;

                saveElement.addEventListener('click', () => {
                    e.title = modalTitle.innerHTML;
                    e.text = modalDescription.value;
                })
            }
        })

}



// Fonction d'affichage de tous les éléments au chargement de la page
function display() {
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
            <div class="col-2 dot text-end" id="dot${id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <p>...</p>
            </div>
            </div>
        </div>`
    })
  }

// EVENTS
// Au clique sur le bouton (+)
// appel de la fonction pour créer un nouvel élément 'newitem'
// push de cet élément dans le tableau 'elements2'
btnCreate.addEventListener('click', ()=>{
    let d = new Date();
    dHoursMin = d.getHours()+':'+ d.getMinutes();
    let newId = idMax()+1;

    saveElement.addEventListener('click',()=>{
        let newItem = createElements(newId, modalTitle.innerHTML, dHoursMin, modalDescription.value);
    elements2.push(newItem);
    displayNewItem(newItem);
    localStorage.setItem('elements', JSON.stringify(elements2));
    })
})

// Au clique --> Update
dot.forEach(element => {
    element.addEventListener('click', () => {
        updateElement(element);
    }); 
});


// Supprimer les données du localStorage
deleteNote.addEventListener('click', function () {
    localStorage.removeItem(`${message}`)
  })

// MAIN
display();