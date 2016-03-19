degreesToCoords = (deg) ->
    rad = deg * 0.01745
    x = Math.cos rad
    y = Math.sin rad
    return x: x, y: y

module.exports = degreesToCoords
