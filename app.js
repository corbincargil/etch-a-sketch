//declaring some variables:
let mainGridContainer = document.getElementById('main-grid-container');
let mouseIsDown = false;
let numberOfRowsAndColumns = 30;

//Functions that change the value of mouseIsDown accordingly
mainGridContainer.addEventListener('mousedown', function() {mouseIsDown = true});
mainGridContainer.addEventListener('mouseup', function() {mouseIsDown = false});

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
    if (gridSize > 1 && gridSize < 81) { 

    } else {
        alert('Please use a number between 2 and 80.');
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
        mainGridContainer.appendChild(cell);
    }
}

//Function to remove existing grid
const removeGrid = function () {
    while (mainGridContainer.firstChild) {
        mainGridContainer.removeChild(mainGridContainer.firstChild);
    }
}

createGrid(numberOfRowsAndColumns);

//Grid size slider
const slider = document.getElementById("grid-slider");
slider.addEventListener('change', () => {
    const confirmation = confirm("Are you sure you want to change the grid size? This will erase all your curent work.");
    if (confirmation) {
        numberOfRowsAndColumns = slider.value;
        removeGrid();
        createGrid(numberOfRowsAndColumns);
        console.log(numberOfRowsAndColumns);
    }
});

//Reset button
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener("click", () => {
    removeGrid();
    createGrid(numberOfRowsAndColumns);
});
