class EtchASketch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.mouseIsDown = false;
    this.numberOfRowsAndColumns = 30;
  }

  connectedCallback() {
    this.render();
    this.initializeFunctionality();
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: Helvetica, sans-serif;
                    background-color: rgb(44, 114, 193);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    box-sizing: border-box;
                }

                :root {
                    --number-of-rows-and-columns: 20;
                }

                #title {
                    font-size: 50px;
                    color: rgb(233, 233, 233);
                    text-align: center;
                    word-spacing: 10px;
                    text-shadow: 4px 4px black;
                    margin: 5px 0px 15px;
                }

                #main-body-container{
                    display: flex;
                }

                div.instructions,
                div.controls {
                    margin: 0px;
                    padding: 10px;
                    background-color: rgba(255, 255, 255, 0.6);
                    border: 1px solid black;
                    border-radius: 10px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
                }

                div.instructions {
                    font-size: 16px;
                    max-width: 200px;
                }

                h2 {
                    text-decoration: underline;
                    border: none;
                }

                div.controls {
                    display: flex;
                    flex-direction: column;
                    flex-shrink: 1;
                    align-items: left;
                    gap: 15px;
                    height: 588px;
                    max-width: 200px;
                }

                #grid-slider-container{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                #color-picker{
                    border-radius: 8px;
                }

                #eraser-container{
                    width: 56px;
                }

                .eraser-on {
                    color: white;
                    background-color: black;
                }

                #reset-button {
                     width: 80px;
                    height: auto;
                }

                #reset-button-box {
                    border: none;
                    text-align: center;
                }

                .controls-component {
                    padding: 10px;
                    border: 2px solid rgb(63, 63, 63);
                    border-radius: 10px;
                }

                #main-grid-container {
                    margin: 0px 25px;
                    padding: 5px;
                    background-color: rgb(0, 0, 0);
                    display: grid;
                    grid-template-columns: repeat(var(--number-of-rows-and-columns), minmax(0,1fr));
                    grid-template-rows: repeat(var(--number-of-rows-and-columns), minmax(0,1fr));
                    flex: none;
                    width: 600px;
                    height: 600px;
                    box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 8px, rgba(0, 0, 0, 0.3) 0px 10px 16px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
                }

                #main-grid-container div {
                    aspect-ratio: 1;
                    background-color: rgb(255, 255, 255);
                    border-top: 1px solid rgba(0, 0, 0, 0.35);
                    border-left: 1px solid rgba(0, 0, 0, 0.35);
                }

                #main-grid-container .filling {
                    background-color: rgb(40, 40, 40);
                }

                #main-grid-container .grid-off {
                     border: none;
                }

                .footer{
                    margin: 20px 0px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 6px;
                    opacity: 80%;
                    font-size: 13px;
                }

                .footer img  {
                    aspect-ratio: 1;
                    width: 18px;
                    height: 18px;
                    flex-shrink: none;
                }

                .footer div{
                    display: flex;
                    gap: 6px;    
                    align-items: center;
                    color: white;
                }

                .footer a:hover {
                    transform: scale(1.05);
                    transition: .2s;
                }

                .footer a:hover img {
                    transform: rotate(1turn);
                    transition: 1s;
                }

                a:visited {
                    text-decoration: none;
                    color: rgb(255, 255, 255);
                }
            </style>

            <h1 id="title">Pixel Art Sketching</h1>
            <div id="main-body-container">
                <div class="controls">
                    <h2>Controls:</h2>
                    
                    <div id="grid-slider-container" class="controls-component">
                        <p>Grid Size:</p>
                        <input type="range" min="2" max="80" class="slider" id="grid-slider" value="30">
                    </div>

                    <div id="color-picker-container" class="controls-component">
                        <label for="color-picker">Color Picker:</label>
                        <input type="color" name="color-picker" value="#0075ff" id="color-picker">
                    </div>

                    <div id="eraser-container" class="controls-component">
                        <button id="eraser-button">Eraser</button>
                    </div>

                    <div id="reset-button-box" class="controls-component">
                        <button id="reset-button"><strong>Clear</strong></button>
                        <p><em>Warning:</em> Pressing this button will erase all your work!</p>
                    </div>
                </div>

                <div id="main-grid-container">
                    
                </div>

                <div class="instructions">
                    <h2>Instructions:</h2>
                    <ol>
                        <li>Click and drag the mouse over the grid to paint.</li>
                        <li>Use the controls to the left to change the grid size, pick a color, and toggle the eraser. </li>
                        <li>When you are done painting, you can click the "Clear" button to clear the canvas.</li>
                    </ol>
                    
                    <h3><em>Tips:</em></h3> 
                    <ul>
                        <li>To decrease the size of the pixels, slide the Grid Size slider to the right</li>
                        <li>Note that changing the grid size will erase your current work.</li>
                        <li>If the eraser is not working, try clicking the Clear button to reset the grid.</li> 
                    </ul>
                    <h3>Enjoy!</h3>
                </div>
            </div>

            <div class="footer"> 
                <div>Created by <strong>Corbin Cargil</strong><a href="https://github.com/corbincargil"><img src="./img/github-logo.png" alt="Corbin's Github"></a></div>
            </div>
        `;
  }

  initializeFunctionality() {
    const mainGridContainer = this.shadowRoot.getElementById(
      "main-grid-container"
    );
    const colorPicker = this.shadowRoot.querySelector(
      'input[name="color-picker"]'
    );
    const slider = this.shadowRoot.getElementById("grid-slider");
    const resetButton = this.shadowRoot.getElementById("reset-button");

    mainGridContainer.addEventListener("mousedown", () => {
      this.mouseIsDown = true;
    });
    mainGridContainer.addEventListener("mouseup", () => {
      this.mouseIsDown = false;
    });

    const divFilling = (divMouseOver) => {
      if (this.mouseIsDown) {
        divMouseOver.target.classList.add("filling");
      }
    };

    const divFilled = (divMouseLeave) => {
      if (this.mouseIsDown) {
        let backgroundColor;
        if (divMouseLeave.target.classList.contains("eraser")) {
          backgroundColor = "#ffffff";
          divMouseLeave.target.style.backgroundColor = backgroundColor;
        } else {
          backgroundColor = colorPicker.value;
          divMouseLeave.target.style.backgroundColor = backgroundColor;
        }
      }
    };

    //function that creates the grid
    const createGrid = (gridSize) => {
      gridSize = this.numberOfRowsAndColumns;

      //guard clause checking that gridSize is a number 1-100
      if (gridSize > 1 && gridSize < 81) {
        this.style.setProperty("--number-of-rows-and-columns", gridSize);

        //Adds a div  to each grid item with the following eventListeners
        const cellNumber = gridSize * gridSize;
        for (let i = 0; i < cellNumber; i++) {
          const cell = document.createElement("div");
          cell.classList.add("grid-cell");
          cell.addEventListener("mouseover", divFilling);
          cell.addEventListener("mouseleave", divFilled);
          cell.addEventListener("mouseup", divFilled);
          mainGridContainer.appendChild(cell);
        }

        const eraser = this.shadowRoot.getElementById("eraser-button");
        const gridDivs = this.shadowRoot.querySelectorAll(".grid-cell");
        eraser.addEventListener("click", () => {
          for (const gridDiv of gridDivs) {
            gridDiv.classList.toggle("eraser");
          }
          if (eraser.classList.contains("eraser-on")) {
            eraser.classList.remove("eraser-on");
          } else {
            eraser.classList.add("eraser-on");
          }
        });
      } else {
        alert("Please use a number between 2 and 80.");
        return 0;
      }
    };

    //Function to remove existing grid
    const removeGrid = () => {
      while (mainGridContainer.firstChild) {
        mainGridContainer.removeChild(mainGridContainer.firstChild);
      }
    };

    createGrid(this.numberOfRowsAndColumns);

    // Grid size slider
    slider.addEventListener("change", () => {
      const confirmation = confirm(
        "Are you sure you want to change the grid size? This will erase all your current work."
      );
      if (confirmation) {
        this.numberOfRowsAndColumns = slider.value;
        removeGrid();
        createGrid(this.numberOfRowsAndColumns);
        console.log(this.numberOfRowsAndColumns);
      }
    });

    // Reset button
    resetButton.addEventListener("click", () => {
      removeGrid();
      createGrid(this.numberOfRowsAndColumns);
    });
  }
}

customElements.define("etch-a-sketch", EtchASketch);
