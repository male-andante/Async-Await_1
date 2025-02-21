
// 1. Definisco le costanti globali
// 2. Prendo l'url base
// 3. Faccio la fetch
// 4. Faccio la renderTable per la tabella e la chiamo nella fetch
// 5. Faccio la createRow per creare le righe.
// 6. Faccio la filterBy per l'input testuale con evento keyup
// 7. Faccio la localStorage per salvarmi il value della select


// 1. Definisco le costanti globali

const textInput = document.getElementById('textInput')
const tableSection = document.getElementById('tableSection')
const selectSearch = document.getElementById('selectSearch')

const baseUrl = 'https://jsonplaceholder.typicode.com/users'



