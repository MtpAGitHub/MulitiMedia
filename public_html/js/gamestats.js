function gameStats(textPaper) {
    textPaper.clear();
    var statsText = textPaper.text(0, 0, "Some example stats text");
    statsText.attr(
            {
                'font-family': "arial",
                'font-size': 24,
                'fill': "white"
            }
    );
    statsDebugMsg("one","two");
}

function statsDebugMsg(a,b) {
	document.getElementById("debug").innerHTML="Stats debug>> " + a + ":" + b;
}


