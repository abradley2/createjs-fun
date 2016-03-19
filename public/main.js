(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Director, mobs,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

mobs = require('./mobs/index.coffee');

Director = (function(superClass) {
  extend(Director, superClass);

  function Director() {
    this.globals = {
      xMax: 550,
      yMax: 550
    };
    this.canvas = document.querySelector('canvas');
    this.canvas.setAttribute('width', this.globals.xMax);
    this.canvas.setAttribute('height', this.globals.yMax);
    this.stage = new createjs.Stage('canvas');
    this.entities = [];
    this.ticker = createjs.Ticker;
    this.ticker.framerate = 60;
    this.ticker.on('tick', this.handleTick.bind(this));
    this.framerate = 30;
    this.drawInterval = setInterval(this.draw.bind(this), 1000 / this.framerate);
  }

  Director.prototype.handleTick = function(event) {
    if (event.paused) {
      return false;
    } else {
      return this.entities.forEach((function(_this) {
        return function(entity) {
          return entity.dispatchEvent('update');
        };
      })(this));
    }
  };

  Director.prototype.draw = function() {
    return this.stage.update();
  };

  return Director;

})(createjs.EventDispatcher);

module.exports = Director;


},{"./mobs/index.coffee":4}],2:[function(require,module,exports){
var Director;

Director = require('./Director.coffee');

document.addEventListener('DOMContentLoaded', function() {
  var director;
  return director = new Director();
});


},{"./Director.coffee":1}],3:[function(require,module,exports){
var Basic,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Basic = (function(superClass) {
  extend(Basic, superClass);

  function Basic(director) {
    this.lifetime = 0;
    this.position = {
      x: 0,
      y: 0
    };
    this.graphics = new createjs.Graphics().beginFill('red').drawCircle(this.position.x, this.position.y, 25);
    this.displayObject = new createjs.Shape(this.graphics);
  }

  Basic.prototype.dispose = function() {
    return false;
  };

  Basic.prototype.handleInteraction = function(event) {
    return false;
  };

  Basic.prototype.getDisplayObject = function() {
    return this.displayObject;
  };

  return Basic;

})(createjs.EventDispatcher);

module.exports = Basic;


},{}],4:[function(require,module,exports){
module.exports = {
  Basic: require('./Basic.coffee')
};


},{"./Basic.coffee":3}]},{},[2]);
