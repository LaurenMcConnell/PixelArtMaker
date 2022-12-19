// When size is submitted by the user, call makeGrid()
let gridForm = document.getElementById('sizePicker');
console.log(gridForm);
gridForm.addEventListener('submit', function (event) {
    event.preventDefault();
    removeGrid();
    //log the event for debugging
    console.log(event);
    var width = document.getElementById('inputWidth').value;
    console.log(width);
    var height = document.getElementById('inputHeight').value;
    console.log(height);
    makeGrid(width, height);
})

function makeGrid(width, height) {
    //For debugging
    //console.log(`will draw grid that's ${width}x${height}`);
    let gridContainer = document.getElementById('pixelCanvas');
    for (x = 1; x <= width; x++) {
        let row = document.createElement('tr');
        row.id = "row" + x;
        gridContainer.appendChild(row);
        let tableRow = document.getElementById("row" + x);
        for (y = 1; y <= height; y++) {
            let cell = document.createElement('td');
            cell.id = "cell" + x + "," + y;
            tableRow.appendChild(cell);
            var colorCell = document.getElementById("cell" + x + "," + y);
            colorCell.addEventListener('click', function(event){
                let color = document.getElementById('colorPicker').value;
                event.target.style.backgroundColor = color;
            })
        }
    }
 
} 
function removeGrid(){
    const oldGrid = document.getElementById('pixelCanvas');
    oldGrid.innerHTML = "";
}
