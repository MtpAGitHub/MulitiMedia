function timerDial(timerCount, timerPaper) {
    timerPaper.clear();
    var timerMarker = 10;
    var width = 10;
    var inner = 10;
    var outer = 45;
    var opacityVal = 1;
    var cx = outer + width;
    var cy = outer + width;
    var sectors = new Array();
    var beta = 2 * Math.PI / timerMarker;

    for (var i = 0; i < timerMarker; i++) {
        var alpha = beta * i - Math.PI / 2;
        var cos = Math.cos(alpha);
        var sin = Math.sin(alpha);
        sectors[i] = timerPaper.path([["M", cx + inner * cos, cy + inner * sin], ["L", cx + outer * cos, cy + outer * sin]]);
        if (i > timerCount) {
            colour = 'black';
            opacityVal = 0.2;
        } else {
            if (i < 4) {
                colour = 'red';
            } else if (i >= 4 && i < 7) {
                colour = "orange";
            } else {
                colour = "green";
            }
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

function timerDispDebugMsg(a, b) {
    document.getElementById("debug").innerHTML = "Debug>>" + a + ":" + b;
}
