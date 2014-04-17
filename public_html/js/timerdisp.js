function timerDial(colour, timerCount, timerPaper) {
	var timerMarker = 10,
		width = 6,
		inner = 10,
		outer = 45,
		opacityVal = 1,
		cx = outer + width,
		cy = outer + width,
		sectors = new Array(),
		beta = 2 * Math.PI / timerMarker;
		
	for (var i = 0; i < timerMarker; i++) {
		var alpha = beta * i - Math.PI / 2,
			cos = Math.cos(alpha),
			sin = Math.sin(alpha);
		sectors[i] = timerPaper.path([["M", cx + inner * cos, cy + inner * sin], ["L", cx + outer * cos, cy + outer * sin]]);
		if (i > timerCount) {
			colour = '#F2F0F2';
			opacityVal = 0.2;
		}
		sectors[i].attr(
			{
				stroke: colour,
				opacity: opacityVal,
				"stroke-width": width, 
				"stroke-linecap": "round"
			}
		);
	}
}