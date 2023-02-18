
let personList = [];

function addPersonToJSON(name, origin, destination, nPersons, date) {
    let newPerson = {
        name : name,
        origin : origin,
        destination : destination,
        nPersons : nPersons,
        date : date
    };
    personList.push(newPerson);
    console.log(personList);
}

function savePerson(){
    let name = document.getElementById('name').value,
        origin = document.getElementById('origin').value,
        destinations = document.getElementById('destination').value,
        nPersons = document.getElementById('nPersons').value,
        date = document.getElementById('date').value

        addPersonToJSON(name, origin, destinations, nPersons, date)
}

let main = document.querySelector('main');

function filterDestination() {
    let personasADestion = []
    for (const person of personList) {
        if (person.destination.toUpperCase() == ('CANARIAS' || 'GALICIA || MALLORCA')) {
            personasADestion.push(person)
        }
    }
    let personScreen = JSON.stringify(personasADestion);
    main.innerHTML += `<p>Hello:${personScreen}</p>`;
}

let info = document.getElementById('info');
let filtro = document.getElementById('filter')
