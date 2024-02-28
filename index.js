
var allPieces = ["desert"
                ,"brick","brick","brick"
                ,"wood","wood","wood","wood"
                ,"ore","ore","ore"
                ,"sheep","sheep","sheep","sheep"
                ,"wheat","wheat","wheat","wheat"];

var allProbs = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];

var allShips = ["31", "31", "31", "31", "wheat", "ore", "wood", "brick", "sheep"];



function addTile(row, col, image) {
    var img = document.createElement("img");
    var imageSrc = "assets/tiles/" + image + ".png"
    img.src = imageSrc;
    var rowClass = "row_" + row;
    var colClass = "col_" + col;
    img.classList.add(rowClass);
    img.classList.add(colClass);
    img.classList.add("tile");
    document.body.appendChild(img);
}

