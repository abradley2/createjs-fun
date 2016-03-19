class Basic extends createjs.EventDispatcher

    constructor: (director) ->
        @lifetime = 0

        @position =
            x: 0
            y: 0

        @graphics = new createjs.Graphics()
            .beginFill 'red'
            .drawCircle @position.x, @position.y, 25

        @displayObject = new createjs.Shape @graphics

    dispose: ->
        return false

    handleInteraction: (event) ->
        return false

    getDisplayObject: ->
        return @displayObject

module.exports = Basic
