/* 
 * 280414   MtpA    Forgot to change canvas name for raphaelCanvas so was not 'swapping' windows properly
 * 280414   MtpA    Amended to accept class instead of id for displayWindow
 * 250414   MtpA    Create script
 */


function setDisplayWindow(width, height) {
    return Raphael(document.getElementsByClassName("raphaelCanvas")[0], width, height);
}

function windowAnimate(displayBox) {
    var canvasBox = displayBox.rect(0,0,700,300);
    canvasBox.attr(
            {
                fill:'black',
                stroke: 'gray',
                'stroke-width': 2
            }
    );
    var bouncingBall = displayBox.circle(20, 20, 15);
    bouncingBall.attr(
            {
                fill: '0-#00A3BF-#0AF424',
                stroke: 'gray',
                'stroke-width': 2
            }
    );
    bouncingBall.animate (
            {
                transform: 't560,100r360'
            },
            750,
            'linear'
    );
}

function setDisplayWindowText(displayPaper, questionText, xpos, ypos, textSize) {
    displayPaper.clear();
    var questionText = displayPaper.text(xpos, ypos, questionText);
    questionText.attr(
            {
                'font-family': "arial",
                'font-size': textSize,
                'fill': "white",
                'text-anchor': 'start'
            }
    );
}

function setDisplayWindowImage(displayPaper, displayImage, xpos, ypos, width, height) {
    displayPaper.clear();
    var btonImage = displayPaper.image(displayImage, xpos, ypos, width, height);    
}