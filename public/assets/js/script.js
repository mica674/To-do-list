
// Ciblage des élements HTML

let modalTitle = document.getElementById('exampleModalLabel');
let modalDescription = document.getElementById('description');
let saveElement = document.getElementById('save');

// Local Storage

// let currentValuesObj = localStorage.getItem("");
// currentValuesJson = JSON.parse(currentValuesObj);


// FONCTIONS
function updateElement(element) {
        let card = element.parentNode;
        let cardId = card.id;
        elements.forEach((e)=>{
            if (cardId.substr(7) == e.id) {
                modalTitle.innerHTML = e.title;
                modalDescription.value = e.text;

                saveElement.addEventListener('click', () => {
                    // e.title = modalTitle.innerHTML;
                    e.text = modalDescription.value;
                    console.log(elements[0].text);
                })
            }
        })

}

let dot = document.querySelectorAll('.dot');

dot.forEach(element => {
    element.addEventListener('click', () => {
        updateElement(element);
    });
        
});



// EVENTS