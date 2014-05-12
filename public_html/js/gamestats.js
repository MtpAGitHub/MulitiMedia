function gameStats(textPaper) {
    textPaper.clear();
    var statsText = textPaper.text(0, 10, "Sorry Not Complete !");
    statsText.attr(
            {
                'font-family': "arial",
                'font-size': 24,
                'text-anchor': "start",
                'fill': "white"
            }
    );
    statsDebugMsg("one","two");
}

function statsDebugMsg(a,b) {
	document.getElementById("debug").innerHTML="Stats debug>> " + a + ":" + b;
}


