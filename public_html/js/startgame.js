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
}

function selectItem(pressedButton) {
    var queryElement;
    var flipImage = document.createElement("img");
    var flipElement;
    
    switch (pressedButton) {
        case "1":
            queryElement = "#one";
            flipImage.src = "../icons/music.png";
            flipElement = document.getElementById("back1");
            flipElement.appendChild(flipImage);
            break;
        case "2":
            queryElement = "#two";
            break;
        default:
            queryElement = "none";
            break;
    }
    document.querySelector(queryElement).classList.toggle("flip");
    startDebugMsg(queryElement,pressedButton);
    return false;
}

function startDebugMsg(a,b) {
	document.getElementById("debug").innerHTML="Game page. " + a + ":" + b;
}