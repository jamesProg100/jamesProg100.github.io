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
            
            // Load and add background image
            var backgroundImage = new createjs.Bitmap("img/background1.jpg"); // Replace with your image path
            backgroundImage.image.onload = function() {
                // Scale image to fit canvas width and height up to ground
                backgroundImage.scaleX = canvasWidth / backgroundImage.image.width;
                backgroundImage.scaleY = groundY / backgroundImage.image.height;
                background.addChild(backgroundImage);
            };
            
            // Optional: Add a fallback background fill in case the image fails to load
            var backgroundFill = draw.rect(canvasWidth, groundY, '#FFDD3C');
            background.addChild(backgroundFill);
            // Move the fill behind the image
            background.setChildIndex(backgroundFill, 0);
        }
        
        function update() {
            var canvasWidth = app.canvas.width;
            // Update logic if needed
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