const addBtn = document.querySelector("#addNamesBtn");
const nameBar = document.querySelector("#barToInsrNames");
const divNames = document.querySelector("#names")
const winnerBtn = document.querySelector("#generateWinner")
const modal = document.querySelector("dialog")
const winnerName = document.querySelector("#winnerName")
//const trashBtn = document.querySelector(".fa-solid .fa-trash")
const namesList = []

//função que faz mostrar os nomes ja cadastrados
function printnames(name){
    const html = `<section class="nameAndTrash">
        <p>${name}</p>
        <i class="fa-solid fa-trash"></i>
    </section>
    <hr>`
    return html
}
//evento de click no botão de adicionar
addBtn.addEventListener("click", () => {
    divNames.innerHTML += printnames(nameBar.value)
    namesList.push(nameBar.value)
    nameBar.value = ""
});


//função para gerar um numero aleatorio de uma lista
function setWinner(){
    const abacate = namesList.length
    const indexWinner =  Math.floor(Math.random()*abacate)
    return namesList[indexWinner]
    
}

winnerBtn.onclick = function () {
    modal.showModal()
    console.log(namesList)
    winnerName.textContent = setWinner(namesList)
    console.log(winnerName.textContent)
}

// trashBtn.addEventListener("click", () => {
//     addBtn.remove()
// });