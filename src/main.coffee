config = require './config.coffee'

document.addEventListener 'DOMContentLoaded', ->
    console.log 'content loaded'
    require './stage.coffee'
    # Set size of canvas according to config
