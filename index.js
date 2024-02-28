
var allPieces = ["desert"
                ,"brick","brick","brick"
                ,"wood","wood","wood","wood"
                ,"ore","ore","ore"
                ,"sheep","sheep","sheep","sheep"
                ,"wheat","wheat","wheat","wheat"];

var allProbs = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];

var allPorts = ["31", "31", "31", "31", "wheat", "ore", "wood", "brick", "sheep"];

$("#generate").on("click", function () { 
    removeAll();
    addAllTiles();

 });


 function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function addPorts() {
    shuffle(allPorts);
}


function addAllTiles() {
    shuffle(allPieces);
    shuffle(allProbs);

    var tokenCount = 0;

    for (var i = 0; i < allPieces.length; i ++) {
        if (allPieces[i] != "desert") {
            addTile(i, allPieces[i]);
            addToken(i, allProbs[tokenCount]);
            tokenCount++;
        } else {
            addTile(i, allPieces[i]);
        }
    }

}


function addToken(position, num) {
    var probToken = document.createElement("img")
    var imageSrc = "assets/tokens/" + num + ".png"
    probToken.src = imageSrc;
    var position = "tile_" + position;
    probToken.classList.add(position);
    probToken.classList.add("token");
    document.body.appendChild(probToken);
}


function addTile(num, image) {    
    var tile = document.createElement("img");
    var imageSrc = "assets/tiles/" + image + ".png"
    tile.src = imageSrc;
    var position = "tile_" + num;
    tile.classList.add(position);

    if (num < 7) {
        tile.classList.add("tile_upper");
    } else {
        tile.classList.add("tile");
    }

    document.body.appendChild(tile);
}

function removeAll() {
    $("img").remove(".tile_upper");
    $("img").remove(".tile");
    $("img").remove(".token");
}