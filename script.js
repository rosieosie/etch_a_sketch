
createGrid(25);

const resButton = document.querySelector("#res");
resButton.addEventListener("click", () => {
    let resNumber 
    
    while(true) {
        resNumber = prompt("Enter a number between 1 & 100");

        if (!isNaN(resNumber) && resNumber >= 1 && resNumber <=100) {
            break;
        };

        alert("Please enter a valid number between 1 & 100.");
    };

    console.log(resNumber);
    createGrid(resNumber);
    
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
    addMouseDraw();
};

function addMouseDraw () { 
    console.log(9);
    const squares = document.querySelectorAll(".grid-item")
        console.log("brazil!");
        squares.forEach((square) => {
            square.addEventListener("mouseenter", () => {
                square.classList.add("painted");
            });
        });
};



// TODO 
// resolution button functionality !
// start w functioning grid !
// res button turn to res adjust and clear canvas when canvas painted 
// separate clear canvas button
// display canvas resolution
// change colour + random colour
// stop and start painting w/ click
// save file - potentially