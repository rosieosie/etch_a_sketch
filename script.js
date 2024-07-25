const resButton = document.querySelector("#res");
const clearButton = document.querySelector("#clear");
const resDisplay = document.querySelector("#res-display");

createGrid(25);
resDisplay.textContent = "Canvas resolution: " + 25 + " x " + 25;

resButton.addEventListener("click", () => {
    let resNumber;
    
    while(true) {
        resNumber = prompt("Enter a number between 1 & 100");

        if (!isNaN(resNumber) && resNumber >= 1 && resNumber <=100) {
            break;
        };

        alert("Please enter a valid number between 1 & 100.");
    };

    console.log(resNumber);
    createGrid(resNumber);
    resDisplay.textContent = "Canvs resolution: " + resNumber + " * " + resNumber;
    
});

clearButton.addEventListener("click", () => {
    clearGrid()
});

function createGrid(gridSize) {     
    console.log(gridSize);
    const container = document.querySelector("#container");
    const squareWidth = 800 / gridSize;
    container.textContent = "";
    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement("div");
        div.style.minWidth = `${squareWidth}px`;
        div.style.height = `${squareWidth}px`;
        div.classList.add("grid-item");
        container.appendChild(div);
    };
    resButton.textContent = "Change canvas resolution";
    addMouseDraw();
};

function addMouseDraw() { 
    console.log(9);
    const squares = document.querySelectorAll(".grid-item");
        console.log("brazil!");
        squares.forEach((square) => {
            square.addEventListener("mouseenter", () => {
                drawn = true;
                square.classList.add("painted");
                resButton.textContent = "Change canvas resolution and clear canvas";
            });
        });
};

function clearGrid() {
    const squares = document.querySelectorAll(".grid-item");
    squares.forEach((square) => {
        square.classList.remove("painted");
    })
};





// TODO 
// resolution button functionality !
// start w functioning grid !
// res button turn to res adjust and clear canvas when canvas painted !
// separate clear canvas button !
// display canvas resolution 
// change colour + random colour
// stop and start painting w/ click
// save file - potentially