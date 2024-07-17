
console.log(6)

function createGrid(gridSize) {
    console.log(gridSize);
    const container = document.querySelector("#container");
    container.textContent = "";
    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        container.appendChild(div);
    };
};


createGrid(16);