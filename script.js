let sketch = 0;
let gridSize = 16;
const container = document.querySelector(".container");
for (let i=0; i<gridSize; i++) {
    newRow = document.createElement("div");
    newRow.classList.add("row");
    for (let j=0; j<gridSize; j++) {
        newDiv = document.createElement("div");
        newDiv.classList.add("cell");
        newRow.appendChild(newDiv);
    }
    container.appendChild(newRow);
}
container.addEventListener("click", ()=>sketch = (sketch + 1)%2);
container.addEventListener("mouseenter", (e) => {
    if (e.target == "");
})

 