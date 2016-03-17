
canvas = document.querySelector 'canvas'
canvas.setAttribute 'height', config.canvas.height
canvas.setAttribute 'width', config.canvas.width

# Mark the canvas as the stage
stage = new createjs.Stage 'canvas'
