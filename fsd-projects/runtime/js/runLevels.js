var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;
    var canvasWidth = game.canvas.width; // Get canvas width for boundary checks

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // BEGIN EDITING YOUR CODE HERE

    function createEnemy(x, y, speed) {
      var enemy = game.createGameItem("enemy", 25);
      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = x;
      enemy.y = y;
      game.addGameItem(enemy);
      enemy.velocityX = speed; 
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-10);
      };
      enemy.onProjectileCollision = function () {
        game.increaseScore(100);
        enemy.shrink();
      };
    }

    function createReward(x, y, speed) {
      var reward = game.createGameItem("reward", 25);
      var blueSquare = draw.rect(50, 50, "blue");
      blueSquare.x = -25;
      blueSquare.y = -25;
      reward.addChild(blueSquare);
      reward.x = x;
      reward.y = y;
      game.addGameItem(reward);
      reward.velocityX = speed; 
      reward.onPlayerCollision = function () {
        game.changeIntegrity(50);
        game.increaseScore(100);
        reward.fadeOut();
      };
    }

    function createMarker(x, y, speed) {
      var marker = game.createGameItem("marker", 25);
      var yellowSquare = draw.rect(50, 50, "yellow");
      yellowSquare.x = -25;
      yellowSquare.y = -25;
      marker.addChild(yellowSquare);
      marker.x = x;
      marker.y = y;
      game.addGameItem(marker);
      marker.velocityX = speed; 
      marker.onPlayerCollision = function () {
        game.changeIntegrity(50);
        marker.fadeOut();
        startLevel();
      };
    }

    function createTerminatorBot(x, y, speed) {
      var bot = game.createGameItem("terminatorBot", 25);
      var botImage = new createjs.Bitmap("img/TerminatorBot.jpg"); // Replace with actual image path
      botImage.x = -25; // Center the image
      botImage.y = -25;
      // Scale image if needed (adjust scale values as necessary)
      botImage.scaleX = 0.5;
      botImage.scaleY = 0.5;
      bot.addChild(botImage);
      bot.x = x;
      bot.y = y;
      game.addGameItem(bot);
      bot.velocityX = speed;

      // Handle player collision
      bot.onPlayerCollision = function () {
        game.changeIntegrity(-20); // More damage than regular enemy
      };

      // Handle projectile collision
      bot.onProjectileCollision = function () {
        game.increaseScore(200); // Higher score for Terminator
        bot.shrink(); // Shrink on hit (same as enemy)
      };

      // Update function to handle looping across screen
      bot.onUpdate = function () {
        // Reverse direction at canvas edges
        if (bot.x > canvasWidth + 25) {
          bot.x = -25; // Reset to left edge
        } else if (bot.x < -25) {
          bot.x = canvasWidth + 25; // Reset to right edge
        }
      };
    }

    function startLevel() {
      // Create game items for the current level
      var level = levelData[currentLevel];
      if (level) {
        // Example: Spawn a Terminator bot at the start of each level
        createTerminatorBot(canvasWidth + 25, groundY - 50, -2); // Starts off-screen right, moves left
      }

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}