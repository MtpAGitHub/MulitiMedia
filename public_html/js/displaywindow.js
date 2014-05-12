/* 
 * 120514   MtpA    Added pick a square
 * 300414   MtpA    Added return parameter to setDisplayWindowImage so it can be used for further manipulation
 * 280414   MtpA    Forgot to change canvas name for raphaelCanvas so was not 'swapping' windows properly
 * 280414   MtpA    Amended to accept class instead of id for displayWindow
 * 250414   MtpA    Create script
 */


function setDisplayWindow(width, height) {
    return Raphael(document.getElementsByClassName("raphaelCanvas")[0], width, height);
}

function windowAnimate(displayBoxPaper) {
    displayBoxPaper.clear();
    var randomColour = ['green','blue','yellow','red','purple'];
    var circleText = ['Pick', 'a', 'square'];
    var myCircle = new Array;
    var myText = new Array;
    for (var i=0; i < 3; i++) {
        var cxpos = randomNumber(100, 500);
        var cypos = randomNumber(100, 200);
        var pickColour = randomColour[randomNumber(1,5)-1];
        myCircle[i] = displayBoxPaper.circle(cxpos,cypos,50);
        myCircle[i].attr(
                {
                    'fill': pickColour,
                    'opacity': 0
                }
        );
        myText[i] = displayBoxPaper.text(cxpos, cypos, circleText[i]);
        myText[i].attr(
                {
                    'font-family': "arial",
                    'font-size': 24,
                    'fill': 'white',
                    'text-anchor': 'center',
                    'opacity': 0
                }
        );
    }
    turnUp(myCircle[0], myText[0]);
    setTimeout(function() {turnDown(myCircle[0], myText[0]);},3000);
    setTimeout(function() {turnUp(myCircle[1], myText[1]);},5000);        
    setTimeout(function() {turnDown(myCircle[1], myText[1]);},8000);
    setTimeout(function() {turnUp(myCircle[2], myText[2]);},12000);        
    setTimeout(function() {turnDown(myCircle[2], myText[2]);},17000);
}

function turnUp(myCircle, myText) {
    myCircle.animate(
            {
                'opacity': 1,
                'transform': 's1.5'
            },
            2000,
            'linear'
    );
    myText.animate(
            {
                'opacity': 1
            },
            3000,
            'linear'
    );
}

function turnDown(myCircle, myText) {
    myCircle.animate(
            {
                'opacity': 0,
                'transform': 's0.75'
            },
            3000,
            'linear'
    );
    myText.animate(
            {
                'opacity': 0
            },
            2000,
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