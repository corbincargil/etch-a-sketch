//declaring some variables:
let cellNumber = 400; //Number of cells for the grid. In this case it is 16x16.
let cellNumberArray = [];
mainContainer = document.getElementById('main-container');

//const cell = document.createElement('div');

//mainContainer.appendChild(document.createElement('div'));



//creates an array of consecutive numbers starting at 1, ending at cellNumber
for (let i = 0; i < cellNumber; i++) {
    cellNumberArray.push(i+1);
}

cellNumberArray.forEach( () => {
    cell = document.createElement('div');
    mainContainer.appendChild(cell);
    });