
console.log(6)

function createGrid(gridSize) {     
    console.log(gridSize);
    const container = document.querySelector("#container");
    const squareWidth = 600 / gridSize;
    container.textContent = "";
    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement("div");
        div.style.minWidth = `${squareWidth}px`;
        div.style.height = `${squareWidth}px`;
        div.classList.add("grid-item");
        container.appendChild(div);
    };
};

function addMouseDraw () { 
    console.log(9);
    const squares = document.querySelectorAll(".grid-item")
        console.log("brazil!");
        squares.forEach((square) => {
            square.addEventListener("mouseenter", () => {
                console.log("egg!");
                square.classList.add("painted");
            });
        });
};

createGrid(50);
addMouseDraw();