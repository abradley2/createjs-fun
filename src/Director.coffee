mobs = require './mobs/index.coffee'

class Director extends createjs.EventDispatcher

    constructor: ->
        # set some globals for useful referencing
        @globals =
            xMax: 550
            yMax:  550

        # set the HTML canvas
        @canvas = document.querySelector 'canvas'
        @canvas.setAttribute 'width', @globals.xMax
        @canvas.setAttribute 'height', @globals.yMax

        # wire the stage to the canvas
        @stage = new createjs.Stage 'canvas'

        # initialize entities array
        @entities = []

        # ticker is how often to perform logic
        @ticker = createjs.Ticker
        @ticker.framerate = 60
        @ticker.on 'tick', @handleTick.bind(this)

        # how often to draw
        @framerate = 30
        @drawInterval = setInterval @draw.bind(this), (1000 / @framerate)

    handleTick: (event) ->
        if event.paused
            return false
        else
            @entities.forEach (entity) =>
                entity.dispatchEvent 'update'

    draw: ->
        @stage.update()

module.exports = Director
