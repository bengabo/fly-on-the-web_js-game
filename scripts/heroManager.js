function rotateDiv(e) {
  let coords;
  let size;
  let polar;
  coords = $('.hero').offset();
  size = {width: $('.hero').width(), height: $('.hero').height()};
  polar = cartesianToPolar(e.pageX, e.pageY, coords.left + (size.width / 2), coords.top + (size.height / 2));
	$('.hero')
		.css	(
					'transform',
					'rotate(' + polar.angle + 'deg)'
				);
}
