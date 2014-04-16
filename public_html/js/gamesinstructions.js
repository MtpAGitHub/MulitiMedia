function gameInstructions(textPaper) {
    textPaper.clear();
    var instructText = textPaper.text(0, 10, "Some example instruction text");
    instructText.attr(
            {
                'font-family': "arial",
                'font-size': 24,
                'text-anchor': "start",
                'fill': "white"
            }
    );
}

function instructionDebugMsg(a,b) {
	document.getElementById("debug").innerHTML="Instruction debug>> " + a + ":" + b;
}