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

// Local Storage

// let currentValuesObj = localStorage.getItem('')
// currentValuesJson = JSON.parse(currentValuesObj)

// FONCTIONS

// EVENTS
