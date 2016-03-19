degreesToCoords = require '../util/degreesToCoords'

class BasicLaser extends createjs.EventDispatcher

    constructor: (director, params) ->
        @lifetime = 0

        @position =
            x: params.x
            y: params.y

        @direction = params.direction
        @speed = params.speed
        @movementCoords = degreesToCoords @direction

        @graphics = new createjs.Graphics()
            .beginFill 'red'
            .drawRect @position.x, @position.y, 5, 10

        @displayObject = new createjs.Shape @graphics

    update: ->
        @displayObject.x = @displayObject.x + (@speed * @movementCoords.x)
        @displayObject.y = @displayObject.y + (@speed * @movementCoords.y)

    dispose: ->
        return false

    handleInteraction: (event) ->
        return false

    getDisplayObject: ->
        return @displayObject

module.exports = Basic
