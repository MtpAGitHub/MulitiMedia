/* 
 * 
 * 080514   MtpA    Added the falling notes
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
    kickOffIcons(displayPaper);
}

function kickOffIcons(displayPaper) {
    var musicIconNum = randomNumber(0, 4);
    var iconOpacity = randomNumber(3, 10);
    var iconPosition = randomNumber(10, 380);
    var iconSpeed = randomNumber(2000, 5000);

    if (!isMusicIconShown) {
        return;
    }
    switch (musicIconNum) {
        case 0:
            var musicIconFile = "../icons/bluemusic64.png";
            break;
        case 1:
            var musicIconFile = "../icons/yellowmusic64.png";
            break;
        case 2:
            var musicIconFile = "../icons/greenmusic64.png";
            break;
        case 3:
            var musicIconFile = "../icons/redmusic64.png";
            break;
        case 4:
            var musicIconFile = "../icons/purplemusic64.png";
            break;
        default:
            var musicIconFile = "../icons/music64.png";
            break;            
    }
    var musicDisplayIcon = displayPaper.image(musicIconFile, 0, 0, 64, 64);
    musicDisplayIcon.attr(
            {
                x: iconPosition,
                opacity: iconOpacity/10
            }
    );
    musicDisplayIcon.animate(
            {
                transform: "t0, 400"
            },
            iconSpeed,
            'linear',
            setTimeout(function () {kickOffIcons(displayPaper);}, 1000)
    );        
}