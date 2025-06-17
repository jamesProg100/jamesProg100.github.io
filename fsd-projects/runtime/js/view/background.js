var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    window.opspark.makeBackground = function(app, ground) {
        if (!app) throw new Error("Invalid app argument");
        if (!ground || typeof(ground.y) === 'undefined') throw new Error("Invalid ground argument");
        
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        var background = new createjs.Container();
        var tree;
        var buildings = [];
        
        function render() {
            background.removeAllChildren();
            buildings.length = 0; // Clear buildings array on render
            
            // Background fill (sky)
            var backgroundFill = draw.rect(canvasWidth, groundY, "#4682B4");
            background.addChild(backgroundFill);
            
            // Moon
            var moon = draw.bitmap("img/moon.png");
            moon.x = 300;
            moon.y = 100; // Higher up
            moon.scaleX = 1.0; // Normal size
            moon.scaleY = 1.0;
            background.addChild(moon);
            
            // Stars (200)
            for (var i = 0; i < 200; i++) {
                var star = draw.circle(2, "white", "LightGray", 1);
                star.x = Math.random() * canvasWidth;
                star.y = Math.random() * (groundY - 100); // Stay above ground by 100px
                background.addChild(star);
            }
            
            // Tree
            tree = draw.bitmap("img/tree.png");
            tree.x = 0;
            tree.y = groundY - 50;
            background.addChild(tree);
            
            // Buildings (5)
            for (var i = 0; i < 5; i++) {
                var building = draw.rect(75, 300, "LightGray");
                building.x = 200 * i;
                building.y = groundY - 300;
                background.addChild(building);
                buildings.push(building);
            }
        }
        
        function update() {
            var canvasWidth = app.canvas.width;
            
            // Move tree left, loop back when offscreen
            tree.x -= 2;
            if (tree.x < -200) {
                tree.x = canvasWidth;
            }
            
            // Move buildings slower for parallax effect
            for (var i = 0; i < buildings.length; i++) {
                buildings[i].x -= 1;
                if (buildings[i].x < -75) {
                    buildings[i].x = canvasWidth;
                }
            }
        }
        
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
    
    // Export for node testing
    if ((typeof process !== 'undefined') &&
        (typeof process.versions.node !== 'undefined')) {
        module.exports = background;
    }
};
