//declaring some variables:
let mainContainer = document.getElementById('main-container');
let mouseIsDown = false;
let numberOfRowsAndColumns = 20;

//Functions that change the value of mouseIsDown accordingly
mainContainer.addEventListener('mousedown', function() {mouseIsDown = true});
mainContainer.addEventListener('mouseup', function() {mouseIsDown = false});

//Function that adds a class name to a div. Called when the div is hovered over
const divFilling = function(divMouseOver) {
    if (mouseIsDown) {
        divMouseOver.target.setAttribute('class', 'filling');
    }
}

//Function that adds a class name to a div. Called when the mouse leaves the div.
const colorRadioButtons = document.querySelectorAll('input[name="color-selector');

const divFilled = function(divMouseLeave) {
    if (mouseIsDown) {
        for (const radioButton of colorRadioButtons) {
           if (radioButton.checked) {
            colorClass = radioButton.value;
            divMouseLeave.target.setAttribute('class', colorClass);
            } 
        } 
        
        
    }
}

//function that creates the grid
const createGrid = function(gridSize) {
    gridSize = numberOfRowsAndColumns;

    //guard clause checking that gridSize is a number 1-100
    if (gridSize > 0 && gridSize < 101) { 

    } else {
        alert('Please use a number between 1 and 100.');
        return 0;
    }

    //Creates CSS grid with desired number of rows/columns
    let root = document.querySelector(':root');
    root.style.setProperty('--number-of-rows-and-columns',gridSize);

    //Adds a div  to each grid item with the following eventListeners
    let cellNumber = gridSize*gridSize;
    for (let i = 0; i < cellNumber; i++) {
        cell = document.createElement('div');
        cell.addEventListener("mouseover", divFilling);
        cell.addEventListener("mouseleave", divFilled);
        cell.addEventListener("mouseup", divFilled);
        mainContainer.appendChild(cell);
    }
}

//Function to remove existing grid
const removeGrid = function () {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
}

createGrid(numberOfRowsAndColumns);

//Getting # of rows and columns from "Go" button
const goButton = document.getElementById('row-column-go');
const rowColumnInput = document.querySelector('input[name="row-column-input"]');

//"Go" button to changge the number of rows/columns
goButton.addEventListener("click", () => {
    removeGrid()
    numberOfRowsAndColumns = rowColumnInput.value;
    createGrid(numberOfRowsAndColumns);
});    

//Reset button
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener("click", () => {
    removeGrid() 
    createGrid(numberOfRowsAndColumns)
});
