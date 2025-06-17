(function (window) {
  'use strict';

  window.opspark = window.opspark || {};

  var 
    _ = window._,
    createjs = window.createjs,
    draw = window.opspark.draw,
    physikz = window.opspark.racket.physikz;

  window.opspark.makeProjectileManager = function (view, space, particleManager) {
    var
      _pool,
      _objects = [],
      _projectileManager;

    // Create a new projectile instance
    function makeProjectile() {
      // Circle with radius 5 and pinkish color
      var projectile = _.extend(draw.circle(5, '#FE1EFE'), physikz.makeBody('projectile'));

      // Configurable properties (could be pulled from settings)
      projectile.volatility = 10;
      projectile.velocityMax = 10;

      // Collision handler stub (hook particle effects or damage logic here)
      projectile.handleCollision = function (impact) {
        // Example: particleManager.makeEmitter(1, 2, '#FF0000').emit({x: projectile.x, y: projectile.y}, 0.5);
      };

      return projectile;
    }

    // Called when the fade tween completes - recycle the projectile
    function onTweenComplete(e) {
      _pool.recycle(e.target);
    }

    // Pool object manages recycled projectiles
    _pool = {
      objects: _objects,

      // Get a projectile from the pool or create a new one
      get: function () {
        if (_objects.length > 0) {
          return _objects.pop();
        }
        return makeProjectile();
      },

      // Recycle a projectile: remove from space, reset properties, add back to pool
      recycle: function (object) {
        var index = space.indexOf(object);
        if (index !== -1) {
          space.splice(index, 1);
        }
        object.x = -object.width;  // Move offscreen
        object.alpha = 1;
        object.scaleX = object.scaleY = 1;
        _objects.push(object);
      }
    };

    // The projectile manager interface
    _projectileManager = {
      fire: function (emitter) {
        var projectile = _pool.get();

        // Set rotation and calculate velocity based on rotation & velocityMax
        projectile.rotation = emitter.rotation;

        var degrees = emitter.rotation;
        var radians = physikz.degreesToRadians(degrees);

        // Velocity with emitter’s velocity included if available
        var velX = Math.cos(radians) * (projectile.velocityMax + (emitter.velocityX || 0));
        var velY = Math.sin(radians) * (projectile.velocityMax + (emitter.velocityY || 0));
        projectile.velocityX = velX;
        projectile.velocityY = velY;

        projectile.rotationalVelocity = 0;

        // Position projectile at emitter's projectile point
        var projectilePoint = emitter.getProjectilePoint();
        projectile.x = projectilePoint.x;
        projectile.y = projectilePoint.y;

        // Tween to fade out and shrink projectile, then recycle
        createjs.Tween.get(projectile, {override: true})
          .wait(500)
          .to({alpha: 0, scaleX: 0.1, scaleY: 0.1}, 1000, createjs.Ease.linear)
          .call(onTweenComplete);

        // Add projectile to display list and active space array
        view.addChild(projectile);
        space.push(projectile);
      }
    };

    return _projectileManager;
  };
}(window));
