# etch-a-sketch

## Description:

This etch-sketch project is a simple sketching interface that will prompt users for the number of rows/columns they want the grid to have, and then allows the user to make pixel art by clicking and dragging their mouse through the grid. The grid can be reset and the number of rows & columns on the grid adjusted as well. The goal of this project was to primarily practice using CSS and JavaScript to manipulate the DOM and make an interactive web page.

## Live Preview: 

Use this link to access a live preview of the sketching interface: https://corbincargil.github.io/etch-a-sketch/

## Approach: 

The first step of this project was to create a 20x20 grid of 'divs' using JavaScript and CSS (instead of just hard-coding them into the HTML file). Next, DOM manipulation was used to change the background color of the any individual grid cells that the mouse hovered over. In an attempt to give the user more artistic freedom, another eventListener was used to determine if the mouse button is being pushed down, and only execute the background color change when the mouse was being clicked. This made it to where the user must click and drag the mouse instead of just hovering the mouse over the grid. Finally, a simple reset button was added as well as the ability for the user to pick a nuber 1-100 for the number of rows/columns in the grid. 

## Skills/Methods Used:

* DOM manipulation to make the webpage interactive
* Use of JavaScript functions, conditional statements, and loops as well as other JS fundamentals
* CSS variables for changing the grid size and CSS styling for the user interface
* Git & GitHub for version control 

## Technologies Used:

* HTML, CSS, JavaScript
* Git & GitHub
* Chrome dev. tools
* MacOS Terminal
* VS Code
