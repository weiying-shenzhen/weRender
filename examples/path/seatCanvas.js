var cache = {}

function getSeatCanvas(scale, fillStyle, type, image) {
  var type = type || "normal"
  var key = type + scale + ":" + fillStyle
  var canvas = cache[key]

  if (!canvas) {
    canvas = drawSeat(scale, fillStyle, image)
    cache[key] = canvas
  }

  return canvas
}

function drawSeat(scale, fillStyle, image) {
  var seat = new WeCanvas({
      width: 35 * scale,
      height: 35 * scale
    })
    .scale(scale, scale)
    .beginPath()
    .fillStyle(fillStyle)
    .moveTo(26.125, 15.1041667)
    .lineTo(26.6680645, 15.1041667)
    .bezierCurveTo(27.9559569, 15.1041667, 29, 16.1508348, 29, 17.4314182)
    .lineTo(29, 17.4314182)
    .bezierCurveTo(29, 26.5618566, 27.9993593, 27.5854121, 26.7557712, 27.6315714)
    .bezierCurveTo(26.7559884, 27.6407142, 26.7560976, 27.6498798, 26.7560976, 27.6590668)
    .lineTo(26.7560976, 27.6590668)
    .bezierCurveTo(26.7560976, 28.4784687, 26.246304, 29, 25.5966715, 29)
    .lineTo(10.2447919, 29)
    .bezierCurveTo(9.60445858, 29, 9.08536585, 28.468583, 9.08536585, 27.8351272)
    .lineTo(9.08536585, 27.8351272)
    .bezierCurveTo(9.08536585, 27.6504211, 9.08545792, 27.6417974, 9.08564116, 27.6331967)
    .lineTo(8.33193548, 27.6331967)
    .bezierCurveTo(7.04404308, 27.6331967, 6, 26.5865286, 6, 25.3059452)
    .lineTo(6, 25.3059452)
    .bezierCurveTo(6, 16.1461127, 7.04802811, 15.1041667, 8.33193548, 15.1041667)
    .lineTo(8.875, 15.1041667)
    .lineTo(8.875, 15.1041667)
    .bezierCurveTo(8.875, 9.92291528, 12.7354967, 6, 17.5, 6)
    .bezierCurveTo(22.263456, 6, 26.125, 9.92716382, 26.125, 14.7620765)
    .lineTo(26.125, 14.7620765)
    .lineTo(26.125, 14.7620765)
    .closePath()
    .fill()

  if (image) {
    seat.drawImage(image, 12, 12, 12, 12)
  }
  return seat.draw()
}