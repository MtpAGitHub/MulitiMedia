/* 
 * 300414   MtpA    Added return parameter to setDisplayWindowImage so it can be used for further manipulation
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

function setDisplayWindowImage(displayPaper, displayImage, xpos, ypos, width, height, startOpacity) {
    displayPaper.clear();
    var dispImage = displayPaper.image(displayImage, xpos, ypos, width, height);
    dispImage.attr(
            {
                opacity: startOpacity
            }
    );
    return dispImage;
}