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
    for (let x = 0; x < h; x++) {
        let tr = matrix.insertRow(x);  //storing rows in variable
        for (let y = 0; y < w; y++) {
            let td = tr.insertCell(y); //storing columns in variable
            td.addEventListener("click", function(evt) {
                if (evt.target.hasAttribute("style")) {
                    evt.target.removeAttribute("style");
                } 
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
    for (let x = 0; x < h; x++) {
        let tr = matrix.insertRow(x);  //storing rows in variable
        for (let y = 0; y < w; y++) {
            let td = tr.insertCell(y); //storing columns in variable
            td.addEventListener("click", function(evt) {
                let classes = evt.target.classList;
                let result = classes.toggle("style");
                if (result) {
                    evt.target.style.backgroundColor = color.value;
                }
                else
            });
        }
    }
}*/
