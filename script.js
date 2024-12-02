const addBtn = document.querySelector("#addNamesBtn");
const nameBar = document.querySelector("#typeBar");
const divNames = document.querySelector("#names")
const winnerBtn = document.querySelector("#generateWinner")
const modal = document.querySelector("dialog")
const winnerName = document.querySelector("#winnerName")
//const trashBtn = document.querySelector(".fa-solid .fa-trash")
const namesList = []



//função que faz mostrar os nomes ja cadastrados
function printnames(name){
    const html = `<section class="allNameSection">
        <section class="nameAndTrash">
            <p>${name}</p>
            <i class="fa-solid fa-trash"></i>
        </section>  
        <hr>
    </section>`    
    return html
}

//função para gerar um numero aleatorio de uma lista
function setWinner(){
    const listSize = namesList.length
    const indexWinner =  Math.floor(Math.random()*listSize)
    return namesList[indexWinner]
    
}
//verifica se há algum conteúdo adicionado na barra de nomes
function verifyTypeContent(){
    if (nameBar.value != ""){
        return true
    } else { 
        error()
        verifyNames()
        return false
    }
}
//verifica de há algum nome adicionado a lista de nomes
function verifyNames(){
    names = divNames.childNodes.length
    if (names == 0){
        error()
    }else {return true}
}
function error(){
    console.log("oi")
    nameBar.classList.remove("normal")
    nameBar.classList.add("error")
}
nameBar.addEventListener("click", () =>{
    nameBar.classList.remove("error")
    nameBar.classList.add("normal")
} )

winnerBtn.onclick = function () {
    if (verifyNames()){
        modal.showModal()
        console.log(namesList)
        winnerName.textContent = setWinner(namesList)
        console.log(winnerName.textContent)
    }
}

//evento de click no botão de adicionar
addBtn.addEventListener("click", () => {
    if (verifyTypeContent()){
        divNames.innerHTML += printnames(nameBar.value)
        namesList.push(nameBar.value)
        nameBar.value = ""
    }
});
//código do chatGPT pra apagar os nomes adcionados
divNames.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-trash")) {
        const nameSection = event.target.closest(".allNameSection");
        if (nameSection) {
            nameSection.remove(); // Remove a seção inteira associada ao ícone do lixo
        }
    }
});

//precisso adicionar a função de remover nomes da lista (parece bem simples)