
//Select color input
const color = document.getElementById("colorPicker")
//Select size input
const matrix = document.getElementById("pixelCanvas");
const size = document.getElementById("sizePicker");

size.addEventListener("submit", function(event) {
    event.preventDefault();
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    makeGrid(height, width);
    
});
// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {matrix.innerHTML = "";
    for (let x = 0; x < height; x++) {
        var row = matrix.insertRow(x);
        for (let y = 0; y < width; y++) {
            var cell = row.insertCell(y);
            cell.addEventListener("click", function(event) {
                if (event.target.hasAttribute("style")) {
                    event.target.removeAttribute("style");
                } else {
                    event.target.style.backgroundColor = color.value;
                }
            });
        }
    }
}