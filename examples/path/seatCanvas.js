var cache = {}

function getSeatCanvas(scale, fillStyle, type, image) {
  var type = type || "normal"
  var key = type + scale + ":" + fillStyle
  var canvas = cache[key]

  if (!canvas) {
    canvas = drawSeat(scale, fillStyle, type, image)
    cache[key] = canvas
  }

  return canvas
}

function drawSeat(scale, fillStyle, type, image) {
  var seat = new WeCanvas({
      width: 56 * scale,
      height: 56 * scale
    })
    .scale(scale, scale)
    .beginPath()
    .fillStyle(fillStyle)
    .moveTo(33,34)
    .lineTo(33,34)
    .bezierCurveTo(35,34,36,33,36,31)
    .lineTo(36,18)
    .bezierCurveTo(36,16,35,15,33,15)
    .lineTo(33,15)
    .bezierCurveTo(33,7,26,0,18,0)
    .bezierCurveTo(10,0,3,7,3,15)
    .lineTo(3,15)
    .bezierCurveTo(1,15,0,16,0,18)
    .lineTo(0,31)
    .bezierCurveTo(0,33,1,34,3,34)
    .lineTo(3,34)
    .bezierCurveTo(3,35,4,36,5,36)
    .lineTo(31,36)
    .bezierCurveTo(32,36,33,35,33,34)
    .lineTo(33,34)
    .closePath()
    .fill()

  if (image) {
    if (type == "money") {
      seat.drawImage(image, 9, 10, 18, 18)
    } else {
      seat.drawImage(image, 11, 11, 14, 16)
    }
  }

  return seat.draw()
}