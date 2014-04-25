/* 
 * 250414   MtpA    Create script
 */


function setDisplayWindow(width, height) {
    return Raphael(document.getElementById("displayWindow"), width, height);
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
