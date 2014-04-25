function questionEvent(pressedButton) {
    var queryElement;
    var flipImage = document.createElement("img");
    var flipElement;
    
    switch (pressedButton) {
        case "1":
            queryElement = "#one";
            break;
        case "2":
            queryElement = "#two";
            break;
        case "3":
            queryElement = "#three";
            break;
        case "4":
            queryElement = "#four";
            break;
        case "5":
            queryElement = "#five";
            break;
        case "6":
            queryElement = "#six";
            break;
        case "7":
            queryElement = "#seven";
            break;
        case "8":
            queryElement = "#eight";
            break;
        case "9":
            queryElement = "#nine";
            break;
        default:
            queryElement = "none";
            return false;
    }
    flipImage.src = getFlipImage(pressedButton - 1);
    flipElement = document.getElementById("back" + pressedButton);
    flipElement.appendChild(flipImage);
    document.querySelector(queryElement).classList.toggle("flip");
    startDebugMsg(queryElement,pressedButton);
    return false;
}

function getFlipImage(arrayPos) {
    var flipImage = "../icons/";
    return flipImage = flipImage + matchImage(questionList[arrayPos].type);
}

function matchImage(imgElement) {
    var imgType;
    switch (imgElement) {
        case "Sound":
            imgType = "music64.png";
            break;
        case "Question":
            imgType = "Q64.png";
            break;
        case "Animation":
            imgType = "animation64.png";
            break;
        case "Picture":
            imgType = "photo64.png";
            break;
        case "Video":
            imgType = "movie64.png";
            break;
        default:
            imgType = "Q64.png";
            break;
    }
    return imgType;
}

function startDebugMsg(a,b) {
	document.getElementById("debug").innerHTML="Game page. " + a + ":" + b;
}