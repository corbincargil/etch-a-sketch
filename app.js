//declaring some variables:
mainContainer = document.getElementById('main-container');
let cellNumberArray = []; //Initializes the array holding the number of grid cells
let mouseIsDown = false;
let cellNumber;


//Prompting the user for desired grid size
let numberOfRowsAndColumns = prompt('How many rows and columns would you like? (Input a number 1-100.)')

//function that makes sure the # of rows/columns is between 1-50, updates the CSS to the right # of rows/columns, and outputs an array of the right size
const setGridSize = function(gridSize) {
    gridSize = numberOfRowsAndColumns;
    if (gridSize > 0 && gridSize < 101) {
        cellNumber = gridSize*gridSize; //Number of cells for the grid
        let root = document.querySelector(':root');
        root.style.setProperty('--number-of-rows-and-columns',gridSize);

        //creates an array of consecutive numbers starting at 1, ending at cellNumber
        for (let i = 0; i < cellNumber; i++) {
            cellNumberArray.push(i+1);
        }
        return cellNumberArray;
    } else {
        alert('Please use a number between 0 and 100.');
        return 0;
    }
}
 

//~~~ DOM manipulation that changes classes of the divs and fills them accordingly ~~~

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
const divFilled = function(divMouseLeave) {
    if (mouseIsDown) {
        divMouseLeave.target.setAttribute('class','filled');
    }
}


//~~~ Creating the grid ~~~

//creates the grid by making a div element for each array element and adding it to the mainContainer
myArray = setGridSize(numberOfRowsAndColumns);
myArray.forEach( () => {
    cell = document.createElement('div');
    cell.addEventListener("mouseover", divFilling);
    cell.addEventListener("mouseleave", divFilled);
    cell.addEventListener("mouseup", divFilled);
    mainContainer.appendChild(cell);
});
