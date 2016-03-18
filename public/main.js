(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Director,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

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
    this.ticker = createjs.Ticker;
    this.ticker.framerate = 60;
    this.ticker.addEventListener('tick', this.handleTick);
    console.log('start!');
  }

  Director.prototype.handleTick = function(event) {
    if (event.paused) {
      return false;
    } else {
      console.log('tick!');
      return true;
    }
  };

  return Director;

})(createjs.EventDispatcher);

module.exports = Director;


},{}],2:[function(require,module,exports){
var Director;

Director = require('./Director.coffee');

document.addEventListener('DOMContentLoaded', function() {
  var director;
  return director = new Director();
});


},{"./Director.coffee":1}]},{},[2]);
