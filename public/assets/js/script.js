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


// Ciblage des élements HTML
const btnCreate = document.querySelector('.create');
const inputCreateTitle = document.querySelector('#inputCreateTitle');
const inputCreateText = document.querySelector('#inputCreateText');
const inputCreateTime = document.querySelector('#inputCreateTime');
const elementParent = document.querySelector('.elementTest');

// Local Storage
// let currentValuesJson =  localStorage.getItem(JSON.parse('key'));


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


let d = new Date()
console.log(d.getHours()+':'+ d.getMinutes());