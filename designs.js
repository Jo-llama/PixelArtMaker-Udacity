//Select color input
const color = document.getElementById("colorPicker")
//Select size input
const matrix = document.getElementById("pixelCanvas");
const size = document.getElementById("sizePicker");

//Submitting grid size
size.addEventListener("submit", function(evt) {
    evt.preventDefault();
    const h = document.getElementById("inputHeight").value;
    const w = document.getElementById("inputWidth").value;
    makeGrid(h, w);
    
});

//When size is submitted by the user, call makeGrid()
 function makeGrid(h, w) {
    matrix.innerHTML = "";
     //creating the grid by adding rows and cells
    for (let x = 0; x < h; x++) {
        let tr = matrix.insertRow(x);  
        for (let y = 0; y < w; y++) {
            let td = tr.insertCell(y);
            //removing color from the cell if the cell isn't white
            td.addEventListener("click", function(evt) {
                if (evt.target.hasAttribute("style")) {
                    evt.target.removeAttribute("style");
                } 
                //applying color to white cell
                else { 
                    evt.target.style.backgroundColor = color.value;
                }
            });
        }
    }
}

/* I also tried to use the toggle method, rather than if-else statement. 
However it doesn't work perfectly.
Once the cell is colored, the clicking doesn't undo the color, 
but if I pick another color from the picker after double click the cell color changes:

function makeGrid(h, w) {
    matrix.innerHTML = "";
    //creating the grid by adding rows and cells
    for (let x = 0; x < h; x++) {
        let tr = matrix.insertRow(x);  
        for (let y = 0; y < w; y++) {
            let td = tr.insertCell(y);
            //applying color to the cell
            td.addEventListener("click", function(evt) {
                let classes = evt.target.classList;
                let result = classes.toggle("style");
                if (result) {
                    evt.target.style.backgroundColor = color.value;
                }
            });
        }
    }
}*/
