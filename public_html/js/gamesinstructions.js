function gameInstructions(textPaper) {
    textPaper.clear();
    var instructText = textPaper.text(0, 0, "Some example instruction text");
    instructText.attr(
            {
                'font-family': "arial",
                'font-size': 24,
                'fill': "white"
            }
    );
}

function instructionDebugMsg(a,b) {
	document.getElementById("debug").innerHTML="Instruction debug>> " + a + ":" + b;
}