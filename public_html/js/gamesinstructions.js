function gameInstructions(textPaper) {
    var instructText = textPaper.text(40, 40, "Some example instruction text");
    instructText.attr(
            {
                'font-family': "arial",
                'font-size': 24
            }
    );
}

function instructionDebugMsg(a,b) {
	document.getElementById("debug").innerHTML="Instruction debug>> " + a + ":" + b;
}


