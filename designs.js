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
makeGrid = function (h, w) {matrix.innerHTML = ""; 
    for (let x = 0; x < h; x++) {
        let row = matrix.insertRow(x);
        for (let y = 0; y < w; y++) {
            let cell = row.insertCell(y);
            cell.addEventListener("click", function(evt) {
                let classes = evt.target.classList;
                let result = classes.toggle("style");
                if (result) {
                    evt.target.style.backgroundColor = color.value;
                }
            });
        }
    }
}
