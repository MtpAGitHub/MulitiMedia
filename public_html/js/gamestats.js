function gameStats(textPaper) {
    var statsText = textPaper.text(40, 40, "Some example stats text");
    statsText.attr(
            {
                'font-family': "arial",
                'font-size': 24
            }
    );
    statsDebugMsg("one","two");
}

function statsDebugMsg(a,b) {
	document.getElementById("debug").innerHTML="Stats debug>> " + a + ":" + b;
}


