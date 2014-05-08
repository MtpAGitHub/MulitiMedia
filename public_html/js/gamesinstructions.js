function gameInstructions(textPaper) {
    textPaper.clear();
    var instructionText = "The aim of the game !\n \n" +
                          "You need to select a question from the grid.\n \n" +
                          "Then answer before the timer segments all\n" +
                          "turn grey.\n \n" +
                          "You get a point for every question that you answer\n" +
                          "correctly.\n \n" +
                          "Good Luck !";
    var instructText = textPaper.text(0, 500, instructionText);
    instructText.attr(
            {
                'font-family': "arial",
                'font-size': 18,
                'text-anchor': "start",
                'fill': "white"
            }
    );
    instructText.animate(
            {
                transform: "t0, -380"
            },
            8000,
            'linear'
    );
}

function instructionDebugMsg(a,b) {
	document.getElementById("debug").innerHTML="Instruction debug>> " + a + ":" + b;
}