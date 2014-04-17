function gameStart() {
    var questionPaper = Raphael(document.getElementById("questionBox"),400,300);                                            
    var questionText = questionPaper.text(0, 20, "Some starting question");
    questionText.attr(
            {
                'font-family': "arial",
                'font-size': 24,
                'text-anchor': "start",
                'fill': "white"
            }
    );
    startDebugMsg("You pressed","START");
}

function startDebugMsg(a,b) {
	document.getElementById("debug").innerHTML="Game page. " + a + ":" + b;
}