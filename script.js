let sketch = 0;
let gridSize = 16;
const container = document.querySelector(".container");
function createGrid() {
    rows = document.querySelectorAll(".row");
    rows.forEach(row=>row.remove());
    for (let i=0; i<gridSize; i++) {
        newRow = document.createElement("div");
        newRow.classList.add("row");
        for (let j=0; j<gridSize; j++) {
            newDiv = document.createElement("div");
            newDiv.classList.add("cell");     
            newRow.appendChild(newDiv);
            newDiv.addEventListener("mouseenter", (e) => {
                if(sketch === 1)
                    e.target.classList.add("sketched");
            })   
        }
        container.appendChild(newRow);
    }
}

createGrid();
container.addEventListener("click", ()=>sketch = (sketch + 1)%2);
function resetAll () {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.classList.remove("sketched"));
}
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetAll);

const gridButton = document.querySelector("#newGrid"); 
const userGridSize = document.querySelector("#gridSize");
gridButton.addEventListener("click", ()=>{
    gridSize = +userGridSize.value;
    createGrid();
})