var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    var groundY = game.groundY;

    // Define the levels with name, number, speed, and game items.
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 25 },
          { type: "sawblade", x: 600, y: groundY - 25 },
          { type: "sawblade", x: 900, y: groundY - 25 },
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -4,
        gameItems: [
          { type: "sawblade", x: 300, y: groundY - 25 },
          { type: "sawblade", x: 650, y: groundY - 25 },
          { type: "sawblade", x: 1000, y: groundY - 25 },
          // Add more items for increased difficulty here if desired
        ],
      },
    ];

    // Make the level data globally accessible on opspark
    window.opspark.levelData = levelData;
  };
};

// Export for node testing
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  module.exports = makeLevelData;
}
