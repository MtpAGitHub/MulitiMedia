function questionEvent(pressedButton) {
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
            return false;
    }
    document.querySelector(queryElement).classList.toggle("flip");
    startDebugMsg(queryElement,pressedButton);
    return false;
}

function startDebugMsg(a,b) {
	document.getElementById("debug").innerHTML="Game page. " + a + ":" + b;
}