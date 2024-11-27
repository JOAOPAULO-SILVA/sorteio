const addBtn = document.querySelector("#addNamesBtn");
const nameBar = document.querySelector("#barToInsrNames");
const divNames = document.querySelector("#names")
const namesList = []
addBtn.addEventListener("click", () => {
    addBtn.style.color  = "red"
    divNames.innerHTML += `<p> ${nameBar.value}</p>`
    namesList.push(nameBar.value)
    nameBar.textContent = ""
});
console.log(namesList)

function printnames(name){
    
}