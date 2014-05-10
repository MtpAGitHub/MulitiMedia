/* 
 * 250414   MtpA    Created script
 */

function answerEvent(pressedButton, questionList, displayBoxes) {
    document.getElementById(pressedButton).style.backgroundColor = "green";
    stopTimer(questionTimer);
    processAnswer(pressedButton, displayBoxes);
}

function processAnswer(userAnswer, displayBoxes) {
    var soundContainer = document.getElementById("sound");
    var videoContainer = document.getElementsByClassName("pageVideo")[0];
    soundContainer.pause();
    videoContainer.pause();
    isMusicIconShown = false;
    if (userAnswer === "timer") {
        outOfTime(displayBoxes.displayBoxPaper);
        startSound("sound", "gong.mp3");                
    }
    else if (curAnswer === userAnswer) {
        currentScore++;
        answerCorrect(displayBoxes.displayBoxPaper);
        startSound("sound", "applause.mp3");
        setScoreText(displayBoxes.scoresBoxPaper, "Score", currentScore);
    } else {
        setDisplayWindowText(displayBoxes.displayBoxPaper, "Bad Luck !", 20, 20, 24, "white", true);
        startSound("sound", "buzzer.mp3");        
    }
}

function outOfTime(displayBoxPaper) {
    var canvasBox = displayBoxPaper.rect(0,0,700,300);
    canvasBox.attr(
            {
                fill:'black',
                stroke: 'gray',
                'stroke-width': 2
            }
    );
    var outText = displayBoxPaper.text(20, 40, "Out");
    outText.attr(
            {
                'font-family': "arial",
                'font-size': 64,
                'fill': 'white',
                'text-anchor': 'start'
            }
    );
    outText.animate(
            {
                transform: "t80, 100, s0.75"
            },
            1000,
            ">"
    );
    var ofText = displayBoxPaper.text(240, 140, "Of");
    ofText.attr(
            {
                'font-family': "arial",
                'font-size': 64,
                'fill': 'white',
                'text-anchor': 'start'
            }
    );
    ofText.animate(
            {
                transform: "s0.75"
            },
            1000,
            ">"
    );
    var timeText = displayBoxPaper.text(420, 240, "Time");
    timeText.attr(
            {
                'font-family': "arial",
                'font-size': 64,
                'fill': 'white',
                'text-anchor': 'start'
            }
    );
    timeText.animate(
            {
                transform: "t-80, -100, s0.75"
            },
            1000,
            ">"
    );
}

function answerCorrect(displayBoxPaper) {
    var canvasBox = displayBoxPaper.rect(0,0,700,300);
    canvasBox.attr(
            {
                fill:'black',
                stroke: 'gray',
                'stroke-width': 2
            }
    );    
    var cText = displayBoxPaper.text(0,0,"C");
    var cCurve = displayBoxPaper.path([
        'M', 0, 150,
        'C', 0, 150, 90, 60, 200, 150
    ]);
    var oText = displayBoxPaper.text(0,0,"o");
    var oCurve = displayBoxPaper.path([
        'M', 0, 150,
        'C', 0, 150, 112, 40, 225, 150
    ]);
    var r1Text = displayBoxPaper.text(0,0,"r");
    var r1Curve = displayBoxPaper.path([
        'M', 0, 150,
        'C', 0, 150, 122, 80, 245, 150
    ]);
    var r2Text = displayBoxPaper.text(0,0,"r");
    var r2Curve = displayBoxPaper.path([
        'M', 0, 150,
        'C', 0, 150, 130, 30, 260, 150
    ]);
    var eText = displayBoxPaper.text(0,0,"e");
    var eCurve = displayBoxPaper.path([
        'M', 0, 150,
        'C', 0, 150, 148, 60, 275, 150
    ]);
    var c2Text = displayBoxPaper.text(0,0,"c");
    var c2Curve = displayBoxPaper.path([
        'M', 0, 150,
        'C', 0, 150, 168, 10, 295, 150
    ]);
    var tText = displayBoxPaper.text(0,0,"t");
    var tCurve = displayBoxPaper.path([
        'M', 0, 150,
        'C', 0, 150, 188, 40, 315, 150
    ]);
    var exclText = displayBoxPaper.text(0,0,"!");
    var exclCurve = displayBoxPaper.path([
        'M', 0, 150,
        'C', 0, 150, 210, 20, 340, 150
    ]);
    var correctSet = displayBoxPaper.set();
    correctSet.push(
            cText,
            oText,
            r1Text,
            r2Text,
            eText,
            c2Text,
            tText,
            exclText
    );
    correctSet.attr(
            {
                'font-family': "arial",
                'font-size': 36,
                'fill': 'white',
                'text-anchor': 'start'
            }
    );
    var curveSet = displayBoxPaper.set();
    curveSet.push(
            cCurve,
            oCurve,
            r1Curve,
            r2Curve,
            eCurve,
            c2Curve,
            tCurve,
            exclCurve
    );
    curveSet.attr(
            {
                opacity: 0
            }
    );
    var clen = cCurve.getTotalLength();
    displayBoxPaper.customAttributes.alongc =
            function(v) {
                var cpoint = cCurve.getPointAtLength(v * clen);
                return {transform: "t" + [cpoint.x, cpoint.y]};
            };
    cText.attr({alongc: 0});
    cText.animate({alongc: 1}, 1000);  
    var olen = oCurve.getTotalLength();
    displayBoxPaper.customAttributes.alongo =
            function(v) {
                var opoint = oCurve.getPointAtLength(v * olen);
                return {transform: "t" + [opoint.x, opoint.y]};
            };
    oText.attr({alongo: 0});
    oText.animate({alongo: 1}, 2000);    
    var r1len = r1Curve.getTotalLength();
    displayBoxPaper.customAttributes.alongr1 =
            function(v) {
                var r1point = r1Curve.getPointAtLength(v * r1len);
                return {transform: "t" + [r1point.x, r1point.y]};
            };
    r1Text.attr({alongr1: 0});
    r1Text.animate({alongr1: 1}, 2000);    
    var r2len = r2Curve.getTotalLength();
    displayBoxPaper.customAttributes.alongr2 =
            function(v) {
                var r2point = r2Curve.getPointAtLength(v * r2len);
                return {transform: "t" + [r2point.x, r2point.y]};
            };
    r2Text.attr({alongr2: 0});
    r2Text.animate({alongr2: 1}, 2000);    
    var elen = eCurve.getTotalLength();
    displayBoxPaper.customAttributes.alonge =
            function(v) {
                var epoint = eCurve.getPointAtLength(v * elen);
                return {transform: "t" + [epoint.x, epoint.y]};
            };
    eText.attr({alonge: 0});
    eText.animate({alonge: 1}, 2000);    
    var c2len = c2Curve.getTotalLength();
    displayBoxPaper.customAttributes.alongc2 =
            function(v) {
                var c2point = c2Curve.getPointAtLength(v * c2len);
                return {transform: "t" + [c2point.x, c2point.y]};
            };
    c2Text.attr({alongc2: 0});
    c2Text.animate({alongc2: 1}, 2000);    
    var tlen = tCurve.getTotalLength();
    displayBoxPaper.customAttributes.alongt =
            function(v) {
                var tpoint = tCurve.getPointAtLength(v * tlen);
                return {transform: "t" + [tpoint.x, tpoint.y]};
            };
    tText.attr({alongt: 0});
    tText.animate({alongt: 1}, 2000);    
    var excllen = exclCurve.getTotalLength();
    displayBoxPaper.customAttributes.alongexcl =
            function(v) {
                var exclpoint = exclCurve.getPointAtLength(v * excllen);
                return {transform: "t" + [exclpoint.x, exclpoint.y]};
            };
    exclText.attr({alongexcl: 0});
    exclText.animate({alongexcl: 1}, 2000);    
}

function answerIncorrect(displayBoxPaper) {
    var canvasBox = displayBoxPaper.rect(0,0,700,300);
    canvasBox.attr(
            {
                fill:'black',
                stroke: 'gray',
                'stroke-width': 2
            }
    );    
}

function answerDebugMsg(a, b) {
    document.getElementById("debug").innerHTML = "Debug>>" + a + ":" + b;
}