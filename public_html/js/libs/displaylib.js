/* 
 * 300414   MtpA    Added delay parameter to increaseOpacity
 * 300414   MtpA    Added more parameters to setDisplayWindowText - colour and isClear (do you clear the existing window content)
 * 300414   MtpA    Created script to hold common functions across modules
 */

function setDisplayWindowText(displayPaper, questionText, xpos, ypos, textSize, colour, isClear) {
    if (isClear) {
        displayPaper.clear();        
    }
    var questionText = displayPaper.text(xpos, ypos, questionText);
    questionText.attr(
            {
                'font-family': "arial",
                'font-size': textSize,
                'fill': colour,
                'text-anchor': 'start'
            }
    );
}

function increaseOpacity(opacityObj, opacityVal, delay) {
    if (opacityVal > 1) {
        opacityObj.stop();
        return;
    } else {
        opacityObj.animate(
                {
                    opacity: opacityVal
                },
                delay,
                'linear',
                setTimeout(function () {increaseOpacity(opacityObj, opacityVal + 0.1, delay);},delay)
        );
    }
}

function noteCascade(displayPaper) {
    displayPaper.clear();
    var musicIconFile = "../icons/music64.png";
    var displayIcon = displayPaper.image(musicIconFile, 0, 0, 64, 64);
    kickOffIcons(displayIcon);
}

function kickOffIcons(displayIcon) {
    var musicIconNum = randomNumber(0, 4);
    var iconOpacity = randomNumber(3, 10);
    var iconPosition = randomNumber(10, 380);
    var iconSpeed = randomNumber(2000, 5000);
    
    switch (musicIconNum) {
        case 0:
            var musicIconFile = "../icons/music64.png";
            break;
        case 1:
            var musicIconFile = "../icons/music64.png";
            break;
        case 2:
            var musicIconFile = "../icons/music64.png";
            break;
        case 3:
            var musicIconFile = "../icons/music64.png";
            break;
        case 4:
            var musicIconFile = "../icons/music64.png";
            break;
        default:
            var musicIconFile = "../icons/music64.png";
            break;            
    }
    displayIcon.attr(
            {
                x: iconPosition,
                opacity: iconOpacity/10
            }
    );
    displayIcon.animate(
            {
                transform: "t0, 400"
            },
            iconSpeed,
            'linear',
            setTimeout(function () {noteCascade(displayIcon);}, 1000)
    );    
}