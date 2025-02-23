
//? 1. Definisco le costanti globali
//? 2. Prendo l'url base
//? 3. Faccio la fetch
//? 4. Faccio la renderTable per la tabella e la chiamo nella fetch, parziale forse
//? 5. Faccio la createRow per creare le righe.
//? 6. Faccio la filterBy per l'input testuale con evento keyup
// 7. Faccio la localStorage per salvarmi il value della select
// 8. Collego la localStorage al filtro per impedire che si filtrino mele con pere
//? 9. Chiamo la fetch


//! 1. Definisco le costanti globali

const textInput = document.getElementById('textInput')
const tableSection = document.getElementById('tableSection')
const selectSearch = document.getElementById('selectSearch')
const tbody = document.getElementById('tbody')

let allUsers = []


//! 2. Prendo l'url base

const baseUrl = 'https://jsonplaceholder.typicode.com/users'


//! 3. Faccio la fetch con async await


    async function getInput() {
        try{
        const res = await fetch(baseUrl)
        const users = await res.json()
        allUsers = users
        console.log(users)
        renderTable(users)
    } catch(error){
    console.log(error)
}
    }

//! 4. Faccio la renderTable per la tabella e la chiamo nella fetch

function renderTable(myUsers) {
    tbody.innerHTML = ''  // così resetto il body della tabella ad ogni nuova chiamata

    const rowUsers = myUsers.map((users) => createRow(users))
    
    tbody.append(...rowUsers)

}

//! 5. CreateRow per creare le righe delle tabelle di utenti.

function createRow({ name, username, email }) {
    const tableRow = document.createElement('tr')
    tableRow.className = 'tableRow'
    tableRow.innerHTML = `<td>${name}</td><td>${username}</td><td>${email}</td>`

    return tableRow
}

//! 6. Faccio la filterBy per l'input testuale con evento keyup

textInput.addEventListener('keyup', filterBy)

function filterBy(){
    const searchValue = textInput.value.trim().toLowerCase()
    if (searchValue.length >= 2) {
        const filteredUsers = allUsers.filter(
            (user) => {
                if (user.name.toLowerCase().includes(searchValue) || user.username.toLowerCase().includes(searchValue)|| user.email.toLowerCase().includes(searchValue)) {
                    return true
                }
                return false
            }
        )
        renderTable(filteredUsers)
    } else {
        renderTable(allUsers)
    }

}

// 7. Faccio la localStorage per salvarmi il value della select



//! 9. Chiamo la fetch
getInput()
