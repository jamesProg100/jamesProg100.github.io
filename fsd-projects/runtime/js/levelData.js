var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 125, damage: 10},
          { type: "sawblade", x: 600, y: groundY - 125, damage: 10},
          { type: "sawblade", x: 800, y: groundY - 125, damage: 10},
          { type: "enemy", x: 400, y: groundY - 50, speed: -3, image: "img/enemy.png", offsetX: -35, offsetY: -35, scale: 0.5},
          { type: "enemy", x: 600, y: groundY - 50, speed: -3, image: "img/enemy.png", offsetX: -35, offsetY: -35, scale: 0.5},
          { type: "enemy", x: 800, y: groundY - 50, speed: -3, image: "img/enemy.png", offsetX: -35, offsetY: -35, scale: 0.5},
          { type: "reward", x: 1000, y: groundY - 75, speed: -3, image: "img/healthkit.jpg", offsetX: -54, offsetY: -34, scale: 0.3},
          { type: "marker", x: 1500, y: groundY - 75, speed: -3, image: "img/finish-line.png", offsetX: -25, offsetY: -25, scale: 0.6},




        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY, damage: 10},
          { type: "sawblade", x: 600, y: groundY, damage: 10},
          { type: "sawblade", x: 800, y: groundY, damage: 10},
          { type: "enemy", x: 400, y: groundY - 50, speed: -3, image: "img/enemy.png", offsetX: -35, offsetY: -35, scale: 0.5},
          { type: "enemy", x: 600, y: groundY - 50, speed: -3, image: "img/enemy.png", offsetX: -35, offsetY: -35, scale: 0.5},
          { type: "enemy", x: 800, y: groundY - 50, speed: -3, image: "img/enemy.png", offsetX: -35, offsetY: -35, scale: 0.5},
          { type: "reward", x: 1000, y: groundY - 75, speed: -3, image: "img/healthkit.jpg", offsetX: -54, offsetY: -34, scale: 0.3},
          { type: "marker", x: 1500, y: groundY - 75, speed: -3, image: "img/finish-line.png", offsetX: -25, offsetY: -25, scale: 0.6},
        
        ],
      },
      {
        name: "Robot Jigsaw",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 410, y: groundY, damage: 10},
          { type: "sawblade", x: 610, y: groundY, damage: 10},
          { type: "sawblade", x: 810, y: groundY, damage: 10},
          { type: "sawblade", x: 550, y: groundY - 145, damage: 10},
          { type: "sawblade", x: 750, y: groundY - 145, damage: 10},
          { type: "sawblade", x: 950, y: groundY - 145, damage: 10},
          { type: "enemy", x: 400, y: groundY - 50, speed: -3, image: "img/enemy.png", offsetX: -35, offsetY: -35, scale: 0.5},
          { type: "enemy", x: 600, y: groundY - 50, speed: -3, image: "img/enemy.png", offsetX: -35, offsetY: -35, scale: 0.5},
          { type: "enemy", x: 800, y: groundY - 50, speed: -3, image: "img/enemy.png", offsetX: -35, offsetY: -35, scale: 0.5},
          { type: "reward", x: 1000, y: groundY - 75, speed: -3, image: "img/healthkit.jpg", offsetX: -54, offsetY: -34, scale: 0.3},
          { type: "marker", x: 1500, y: groundY - 75, speed: -3, image: "img/finish-line.png", offsetX: -25, offsetY: -25, scale: 0.6},
        
        ],
      },
      {
        name: "Mirror Hallebot",
        number: 4,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 410, y: groundY, damage: 10},
          { type: "sawblade", x: 610, y: groundY, damage: 10},
          { type: "sawblade", x: 810, y: groundY, damage: 10},
          { type: "sawblade", x: 550, y: groundY - 145, damage: 10},
          { type: "sawblade", x: 750, y: groundY - 145, damage: 10},
          { type: "sawblade", x: 950, y: groundY - 145, damage: 10},
          { type: "enemy", x: 400, y: groundY - 50, speed: -3, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 600, y: groundY - 50, speed: -3, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 800, y: groundY - 50, speed: -3, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "reward", x: 1000, y: groundY - 75, speed: -3, image: "img/healthkit.jpg", offsetX: -54, offsetY: -34, scale: 0.3},
          { type: "marker", x: 1500, y: groundY - 75, speed: -3, image: "img/finish-line.png", offsetX: -25, offsetY: -25, scale: 0.6},
        
        ],
      },
      {
        name: "Mirror Hallebot 2",
        number: 4,
        speed: -2,
        gameItems: [
          { type: "enemy", x: 3500, y: groundY - 50, speed: -6, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3200, y: groundY - 50, speed: -7, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3200, y: groundY - 50, speed: -6, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3300, y: groundY - 50, speed: -5, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3400, y: groundY - 50, speed: -6, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3100, y: groundY - 50, speed: -8, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3100, y: groundY - 50, speed: -7, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3500, y: groundY - 50, speed: -8, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3300, y: groundY - 50, speed: -7, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3500, y: groundY - 50, speed: -6, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3200, y: groundY - 50, speed: -7, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3200, y: groundY - 50, speed: -6, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3300, y: groundY - 50, speed: -5, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3400, y: groundY - 50, speed: -6, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3100, y: groundY - 50, speed: -8, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3100, y: groundY - 50, speed: -7, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3500, y: groundY - 50, speed: -8, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3300, y: groundY - 50, speed: -7, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3500, y: groundY - 50, speed: -6, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3200, y: groundY - 50, speed: -7, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3200, y: groundY - 50, speed: -6, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3300, y: groundY - 50, speed: -5, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3400, y: groundY - 50, speed: -6, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3100, y: groundY - 50, speed: -8, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3100, y: groundY - 50, speed: -7, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3500, y: groundY - 50, speed: -8, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3300, y: groundY - 50, speed: -7, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3500, y: groundY - 50, speed: -6, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3200, y: groundY - 50, speed: -7, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3200, y: groundY - 50, speed: -6, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3300, y: groundY - 50, speed: -5, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3400, y: groundY - 50, speed: -6, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3100, y: groundY - 50, speed: -8, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3100, y: groundY - 50, speed: -7, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3500, y: groundY - 50, speed: -8, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3300, y: groundY - 50, speed: -7, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3500, y: groundY - 50, speed: -6, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3200, y: groundY - 50, speed: -7, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3200, y: groundY - 50, speed: -6, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3300, y: groundY - 50, speed: -5, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3400, y: groundY - 50, speed: -6, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3100, y: groundY - 50, speed: -8, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3100, y: groundY - 50, speed: -7, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3500, y: groundY - 50, speed: -8, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3300, y: groundY - 50, speed: -7, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3500, y: groundY - 50, speed: -6, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3200, y: groundY - 50, speed: -7, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3200, y: groundY - 50, speed: -6, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3300, y: groundY - 50, speed: -5, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3400, y: groundY - 50, speed: -6, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3100, y: groundY - 50, speed: -8, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3100, y: groundY - 50, speed: -7, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3500, y: groundY - 50, speed: -8, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3300, y: groundY - 50, speed: -7, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 3500, y: groundY - 50, speed: -6, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},


          { type: "enemy", x: 650, y: groundY - 50, speed: -8, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 950, y: groundY - 50, speed: -8, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 850, y: groundY - 50, speed: -8, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 400, y: groundY - 50, speed: -3, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 600, y: groundY - 50, speed: -3, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "enemy", x: 800, y: groundY - 50, speed: -3, image: "img/halle.png", offsetX: -45, offsetY: -33, scale: 0.8},
          { type: "reward", x: 1000, y: groundY - 75, speed: -3, image: "img/healthkit.jpg", offsetX: -54, offsetY: -34, scale: 0.3},
          { type: "marker", x: 3500, y: groundY - 75, speed: -3, image: "img/finish-line.png", offsetX: -25, offsetY: -25, scale: 0.6},
        
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
