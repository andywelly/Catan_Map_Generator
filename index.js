
var allPieces = ["desert"
                ,"brick","brick","brick"
                ,"wood","wood","wood","wood"
                ,"ore","ore","ore"
                ,"sheep","sheep","sheep","sheep"
                ,"wheat","wheat","wheat","wheat"];

var allProbs = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];

var allShips = ["31", "31", "31", "31", "wheat", "ore", "wood", "brick", "sheep"];

$("button").on("click", function () { 
    alert("Generating");
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

function addAllTiles() {
    shuffle(allPieces);
    shuffle(allProbs);

    for (var i = 0; i < allPieces.length; i ++) {
        if (allPieces[i] != "desert") {
            addTile(i, allPieces[i]);
        } else {
            addTile(i, allPieces[i]);
        }
    }
}


function addProbs(num) {
    
}


function addTile(num, image) {
    var img = document.createElement("img");
    var imageSrc = "assets/tiles/" + image + ".png"
    img.src = imageSrc;
    var position = "tile_" + num;
    img.classList.add(position);

    if (num < 7) {
        img.classList.add("tile_upper");
    } else {
        img.classList.add("tile");
    }

    document.body.appendChild(img);
}

