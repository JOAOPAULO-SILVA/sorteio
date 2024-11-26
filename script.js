const addBtn = document.querySelector("#addNamesBtn");
const nameBar = document.querySelector("#bartoInsrNames");
const testing = document.querySelector("#teste")
addBtn.addEventListener("click", () => {
    addBtn.style.color  = "red"
    const nameValue = nameBar.value;
    testing.textContent = '${nameValue}'
});
console.log(namevalue)
// console.log(testing)