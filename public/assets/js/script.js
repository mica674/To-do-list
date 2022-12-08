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
    let message1 = element.text
    main.innerHTML += ` <div class="contenair">
      <div class="row ms-lg-5" id="rowCard1">
        <div class="col-6 text-start">
          <h2 id="title1">${title}</h2>
        </div>
        <div class="col-6 text-end" id="time1">
          <p>${time}</p>
        </div>
        <div class="col-10 text-start">
          <p id="message1">${message1}</p>
        </div>
        <div class="col-2 text-end" id="dot3">
          <p>...</p>
        </div>
      </div>
    </div>`
  })
}
display()
// Ciblage des élements HTML

// Local Storage

// let currentValuesObj = localStorage.getItem('')
// currentValuesJson = JSON.parse(currentValuesObj)

// FONCTIONS

// EVENTS
