var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    var groundY = game.groundY;
    var levelData = window.opspark.levelData;

    game.setDebugMode(true);

    function createSawBlade(x, y, damage) {
      var hitZoneSize = 25;
      var damageFromObstacle = damage;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);

      var obstacleImage = draw.bitmap('img/sawblade.png');
      obstacleImage.x = -25;
      obstacleImage.y = -25;
      sawBladeHitZone.addChild(obstacleImage);
    }

    function createEnemy(x, y) {
      var enemy = game.createGameItem("enemy", 25);

      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);

      enemy.x = x;
      enemy.y = y;
      game.addGameItem(enemy);

      enemy.velocityX = -2;

      enemy.onPlayerCollision = function () {
        console.log('The enemy has hit the player');
        game.changeIntegrity(-10);
      };

      enemy.onProjectileCollision = function () {
        console.log('The enemy has been hit');
        game.increaseScore(100);
        enemy.shrink();
      };
    }

    function createGameItems() {
      let currentLevelData = levelData[currentLevel];
      for (let item of currentLevelData.gameItems) {
        if (item.type === "sawblade") {
          createSawBlade(item.x, item.y, 10);
        } else if (item.type === "enemy") {
          createEnemy(item.x, item.y);
        }
      }
    }

    function startLevel() {
      console.log("Starting level: " + (currentLevel + 1));
      createGameItems();

      // TODO 13: Level progression logic
      // Advance to next level or end game
      if (currentLevel + 1 < levelData.length) {
        // Prepare for next level on some trigger (e.g., after some delay or when player finishes current level)
        // For demo: just increment level immediately
        currentLevel++;
        // If you want to start the next level automatically after some time, you could do:
        // setTimeout(() => {
        //   startLevel();
        // }, 3000);
      } else {
        console.log("Congratulations! You completed all levels!");
        // Optionally you could stop the game loop or display a message in UI here
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
  module.exports = runLevels;
}
