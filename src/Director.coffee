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

        # track application heartbeat
        @ticker = createjs.Ticker
        @ticker.framerate = 60
        @ticker.addEventListener 'tick', @handleTick
        console.log 'start!'

    handleTick: (event) ->
        if event.paused
            return false
        else
            console.log 'tick!'
            return true

module.exports = Director
