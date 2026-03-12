$(function () {
// initialize canvas and context when able to
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
window.addEventListener("load", loadJson);

function setup() {
if (firstTimeSetup) {
halleImage = document.getElementById("player");
projectileImage = document.getElementById("projectile");
cannonImage = document.getElementById("cannon");
$(document).on("keydown", handleKeyDown);
$(document).on("keyup", handleKeyUp);
firstTimeSetup = false;
//start game
setInterval(main, 1000 / frameRate);
}

// Create walls - do not delete or modify this code
createPlatform(-50, -50, canvas.width + 100, 50); // top wall
createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
createPlatform(-50, -50, 50, canvas.height + 500); // left wall
createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

//////////////////////////////////
// ONLY CHANGE BELOW THIS POINT //
//////////////////////////////////

// TODO 1 - Enable the Grid
toggleGrid();


// TODO 2 - Create Platforms
createPlatform(200,500, 200,20,"purple");
createPlatform(600,700,200,20,"purple");
createPlatform(600,300,200,20,"purple");
createPlatform(1000,300,200,20,"purple");
createPlatform(1300,400,200,20,"purple");
createPlatform(300,500,200,20,"purple");
createPlatform(175, 250, 200,20,"purple");
createPlatform(415, 624, 200,20,"purple");



// TODO 3 - Create Collectables
createCollectable("database",1130,350,0.5,0.7);
createCollectable("diamond",520,450,0.5,0.7);
createCollectable("max",780,300,0.5,0.7);
createCollectable('steve', 1100, 624, 0.5, 0.7);
createCollectable('database', 250, 625, 0.5, 0.7);
createCollectable('database', 475, 300, 0.5, 0.7);


// TODO 4 - Create Cannons
createCannon("top",850,1000);
createCannon("left",250,1000);
createCannon("right",320,1000);
createCannon('bottom', 600, 1000);
createCannon('right', 650, 1000);  

//////////////////////////////////
// ONLY CHANGE ABOVE THIS POINT //
//////////////////////////////////
}

registerSetup(setup);
});
