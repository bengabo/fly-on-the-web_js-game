$(document).ready(init);

function init() {
  $(document).attr('unselectable', 'on').css('user-select', 'none').css('MozUserSelect', 'none')
  .on('selectstart', false);
  $('.gameArea').on('mousemove', rotateDiv);
  $(document).on('click', shoot);
}

let cartesianToPolar = (x1, y1, x2, y2) => {
  let x = x2 - x1;
  let y = y2 - y1;

  return {
    distance: Math.sqrt((x * x ) + (y * y)),
    angle: -(Math.atan2(x, y) * 180 / Math.PI)
  };
}

let polarToCartesian = (distance, angle) => {
  return {
    left: distance * Math.cos(angle),
    top: distance * Math.sin(angle)
  };
}
