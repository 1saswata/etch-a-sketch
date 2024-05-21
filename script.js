let isSketch = 0;
let gridSize = 40;
let mode = 0;
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
            newDiv.addEventListener("mouseenter", (e) => sketch(e.target));   
        }
        container.appendChild(newRow);
    }
}

function sketch(element) {
    if(isSketch === 1) {
        switch (mode) {
            case 0:
                element.classList.add("sketched");
                break;
            case 1:
                element.style["background-color"] = 
                `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
                break;
            case 2:
                element.style["background-color"] = "black";
                if(+element.style.opacity !== 1){
                    element.style.opacity = .1 + +element.style.opacity;
                }
                break;
        }
    }
}
createGrid();
container.addEventListener("click", ()=>isSketch = (isSketch + 1)%2);
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", createGrid);

const gridButton = document.querySelector("#newGrid"); 
const userGridSize = document.querySelector("#gridSize");
gridButton.addEventListener("click", ()=>{
    if (+userGridSize.value > 100) {
        alert("You have entered more than max size of 100, using 100 instead!");
        gridSize = 100;
        userGridSize.value = gridSize;
    }
    else {
        gridSize = +userGridSize.value;
    }
    createGrid();
}) 

const modeSelect = document.querySelector("#mode");
modeSelect.addEventListener("change", (e)=>{
    createGrid();
    mode = +e.target.value;
});

