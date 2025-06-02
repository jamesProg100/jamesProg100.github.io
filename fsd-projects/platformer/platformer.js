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
    //toogleGrid();

    // TODO 2 - Create Platforms
    createPlatform(300, 630, 200, 20, "red");
    createPlatform(650, 520,200, 20, "red" );
    createPlatform(330, 430, 200, 20, "red");
    createPlatform(100, 330, 200, 20, "red");
    createPlatform(900, 400, 200, 20, "red");
    createPlatform(550, 320, 200, 20, "red");
    createPlatform(320, 190, 200, 20, "red");
    createPlatform(800, 190, 200, 20, "red");
    createPlatform(150, 100, 50, 20, "black")
    createPlatform(1100, 100, 50,20, "black")
    



    // TODO 3 - Create Collectables
    createCollectable("diamond", 400, 140,);
    createCollectable("grace", 400, 390);
    createCollectable("steve", 1000, 360);
    createCollectable("james", 600, 500);



    
    // TODO 4 - Create Cannons

    createCannon("top", 200, 1000)
    createCannon("top", 680, 1000)
    createCannon("right", 300,1000)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
