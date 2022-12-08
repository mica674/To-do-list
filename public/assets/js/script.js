// Modele de stockage des données
let elements =[
    {
        id : 1,
        title : "Ouvrir",
        time : "12:30",
        text : "Tourner la clé et ouvrir la trappe à essence",
        check : false
    },
    {
        id : 2,
        title : "Remplir",
        time : "12:31",
        text : "Remplir le réservoir d'essence",
        check : false
    },
    {
        id : 3,
        title : "Fermer",
        time : "12:35",
        text : "Fermer la trappe à essence",
        check : false
    },
    {
        id : 4,
        title : "Démarrer",
        time : "12:36",
        text : "Mettre la clé dans le contact et démarrer",
        check : false
    }
]

// Déclaration des variables
let elements = [
  {
    id: 1,
    title: 'Ouvrir',
    time: '12:30',
    text: 'Tourner la clé et ouvrir la trappe à essence',
    check: false,
  },
  {
    id: 2,
    title: 'Remplir',
    time: '12:31',
    text: "Remplir le réservoir d'essence",
    check: false,
  },
  {
    id: 3,
    title: 'Fermer',
    time: '12:35',
    text: 'Fermer la trappe à essence',
    check: false,
  },
  {
    id: 4,
    title: 'Démarrer',
    time: '12:36',
    text: 'Mettre la clé dans le contact et démarrer',
    check: false,
  },
]

// recuperer les données du localStorage
localStorage.setItem('elements', JSON.stringify(elements))
let elements2 = JSON.parse(localStorage.getItem('elements'))
function display() {
  const main = document.getElementById('container')
  elements2.forEach((element) => {
    let title = element.title
    let time = element.time
    let message = element.text
    let id = element.id
    main.innerHTML += ` <div class="container">
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
display()

// supprimer les données du localStorage
let deleteNote = document.getElementById('delete')
deleteNote.addEventListener('click', function () {
  localStorage.removeItem(`${message}`)
})

// Ciblage des élements HTML
const btnCreate = document.querySelector('.create');
const inputCreateTitle = document.querySelector('#inputCreateTitle');
const inputCreateText = document.querySelector('#inputCreateText');
const inputCreateTime = document.querySelector('#inputCreateTime');
const elementParent = document.querySelector('.elementTest');

// Local Storage

// let currentValuesObj = localStorage.getItem('')
// currentValuesJson = JSON.parse(currentValuesObj)

// FONCTIONS
// Fonction pour récupérer "id" le plus grand existant du tableau elements
function idMax() {
    let id = 0;
    elements.forEach((element)=>{
        if (element.id > id) {
            id = element.id
        }
    })
    return id;
}

// Fonction pour créer un nouvel item
// en récupérant les valeurs données dans l'item
function createElements(titleVal, timeVal, textVal) {
    let newId = idMax()+1;
    let item = {
        id : newId,
        title : titleVal,
        time : timeVal,
        text : textVal,
        check : false
    };
    return item;
}

function display(newItem) {
    
        container.innerHTML += 
        `
        <div>
        <h2 class="elementTitle" id="elementTitle${newItem.id}">${newItem.title}</h2>
        <span class="elementTime" id="elementTime${newItem.id}">${newItem.time}</span>
        <p class=""elementText" id="elementText${newItem.id}">${newItem.text}</p>
        </div>
        `;
}

// EVENTS
// Au clique sur le bouton (+)
// appel de la fonction pour créer un nouvel élément 'newitem'
// push de cet élément dans le tableau 'elements'
btnCreate.addEventListener('click', ()=>{
    let dHoursMin = new Date();
    dHoursMin = d.getHours()+':'+ d.getMinutes();
    let newItem = createElements(inputCreateTitle.value, dHoursMin, inputCreateText.value);
    elements.push(newItem);
    display(newItem);
    localStorage.setItem('elements', JSON.stringify(elements));
})