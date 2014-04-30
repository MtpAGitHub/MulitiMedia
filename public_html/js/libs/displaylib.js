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
                setTimeout(function () {increaseOpacity(opacityObj, opacityVal + 0.1)},delay)
        );
    }
}