const addBtn = document.querySelector("#addNamesBtn");
const nameBar = document.querySelector("#barToInsrNames");
const divNames = document.querySelector("#names")
const trashBtn = document.querySelector(".fa-solid .fa-trash")
const namesList = []


addBtn.addEventListener("click", () => {
    divNames.innerHTML += printnames(nameBar.value)
    namesList.push(nameBar.value)
    nameBar.value = ""
});
console.log(namesList)

trashBtn.addEventListener("click", () => {
    addBtn.remove()
});

function printnames(name){
    const html = `<section class="nameAndTrash">
        <p>${name}</p>
        <i class="fa-solid fa-trash"></i>
    </section>
    <hr>`
    return html
}