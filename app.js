//declaring some variables:
mainContainer = document.getElementById('main-container');
let cellNumber = 400; //Number of cells for the grid. In this case it is 16x16
let cellNumberArray = []; //Initializes the array holding the number of grid cells
let mouseIsDown = false;

//creates an array of consecutive numbers starting at 1, ending at cellNumber
for (let i = 0; i < cellNumber; i++) {
    cellNumberArray.push(i+1);
}
//Functiosn that change the value of mouseIsDown accordingly
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



//creates grid by making a div element for each array element and adding it to the mainContainer
cellNumberArray.forEach( () => {
    cell = document.createElement('div');
    cell.addEventListener("mouseover", divFilling);
    cell.addEventListener("mouseleave", divFilled);
    cell.addEventListener("mouseup", divFilled);
    mainContainer.appendChild(cell);
    });

//document.addEventListener()