function generalText(textPaper) {
    textPaper.clear();
    var startText = textPaper.text(0, 0, "Some general text");
    startText.attr(
            {
                'font-family': "arial",
                'font-size': 24
            }
    );
    startText.animate(
            {
                transform: 't80,80r360',
                fill: 'white'
            }
    , 1000, 'ease-in');
}

function generalDebugMsg(a,b) {
	document.getElementById("debug").innerHTML="General debug>> " + a + ":" + b;
}