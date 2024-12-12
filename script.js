const addBtn = document.querySelector("#addNamesBtn");
const nameBar = document.querySelector("#typeBar");
const divNames = document.querySelector("#names")
const winnerBtn = document.querySelector("#generateWinner")
const modal = document.querySelector("dialog")
const winnerName = document.querySelector("#winnerName")
const loadSection = document.querySelector(".loaderSection")
const namesList = []


//função que faz mostrar os nomes ja cadastrados
function printnames(name){
    const html = `<section class="allNameSection">
        <section class="nameAndTrash">
            <p class="Textname">${name}</p>
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
        console.log("não há conteudo para ser adicionado")
        error()
        return false
    }
}
//verifica de há algum nome adicionado a lista de nomes
function verifyNames(){
    names = divNames.childNodes.length
    if (names == 0){
        error()
        console.log("não há nomes para sortear")
    }else {return true}
}
function error(){
    nameBar.classList.remove("normal")
    nameBar.classList.add("error")
}
nameBar.addEventListener("click", () =>{
    nameBar.classList.remove("error")
    nameBar.classList.add("normal")
} )

winnerBtn.onclick = function () {
    if (verifyNames()){
        console.log(loadSection)
        loadSection.style.display = "block"
        setTimeout(function(){
            // loadSection.style.display = "none"
            modal.showModal()
        },1500)
        console.log(namesList)
        winnerName.textContent = setWinner(namesList)
        console.log(winnerName.textContent)
    }
}

//evento de click no botão de adicionar
addBtn.addEventListener("click", () => {
    if (verifyTypeContent()){
        divNames.innerHTML += printnames(nameBar.value)
        namesList.push(nameBar.value.trim())
        nameBar.value = ""
    }
});
//código do chatGPT pra apagar os nomes adcionados
divNames.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-trash")) {
        const nameSection = event.target.closest(".allNameSection");
        const itemToRemove = event.target.closest(".nameAndTrash").textContent.trim();
        console.log(itemToRemove);
        if (nameSection) {
            const index = namesList.indexOf(itemToRemove)
            console.log(`"${index}"`)
            namesList.splice(index,1)
            nameSection.remove(); // Remove a seção inteira associada ao ícone do lixo
            console.log(namesList)
        }
    }
});

//preciso adicionar a função de remover nomes da lista (parece bem simples)
//preciso adicionar a animação de carregando e a animação do modal
