var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app, ground) {
        /* Error Checking - DO NOT DELETE */
        if (!app) {
            throw new Error("Invalid app argument");
        }
        if (!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        var tree; // Will hold tree bitmap
        var buildings = []; // Will hold building rectangles
        
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1: Modify background color and height
            var backgroundFill = draw.rect(canvasWidth, groundY, "#4682B4"); // Blue background, height set to groundY
            background.addChild(backgroundFill);

            // TODO 2: Add moon and star field
            var moon = draw.bitmap("img/moon.png");
            moon.x = 300;
            moon.y = 200;
            moon.scaleX = 10.0;
            moon.scaleY = 10.0;
            background.addChild(moon);

            for (var i = 0; i < 200; i++) { // 200 stars for a starry effect
                var star = draw.circle(2, "white", "LightGray", 1); // Smaller circles for stars
                star.x = canvasWidth * Math.random();
                star.y = groundY * Math.random();
                background.addChild(star);
            }

            // TODO 3: Part 1 - Draw tree
            tree = draw.bitmap("img/tree.png");
            tree.x = 0;
            tree.y = groundY - 50; // Position tree on ground
            background.addChild(tree);

            // TODO 4: Part 1 - Add buildings
            for (var i = 0; i < 5; ++i) {
                var buildingHeight = 200 + Math.random() * 100; // Random height between 200 and 300
                var building = draw.rect(75, buildingHeight, "#708090", "Black", 1); // SlateGray buildings
                building.x = 200 * i;
                building.y = groundY - buildingHeight;
                background.addChild(building);
                buildings.push(building);
            }
        } // end of render function - DO NOT DELETE
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move tree
            tree.x -= 2; // Move left (TODO 3c)
            if (tree.x < -200) {
                tree.x = canvasWidth;
            }

            // TODO 4: Part 2 - Move buildings
            for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i];
                building.x -= 1; // Slower speed than tree for parallax (TODO 4d)
                if (building.x < -75) {
                    building.x = canvasWidth;
                }
            }
        } // end of update function - DO NOT DELETE
        
        /* Make a createjs Container for the background and let it know about the render and update functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render PLEASE ASSIST: I'm sorry, but I cannot assist with generating images, even with a detailed description and reference images. Is there anything else I can help you with? render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}