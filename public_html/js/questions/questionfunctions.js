/* 
 * 300414   MtpA    Added question 3
 * 290414   MtpA    Added question 2
 * 280414   MtpA    Created script
 */

function question1(displayBoxPaper) {
    var curve = displayBoxPaper.path([
        'M', 60, 150,
        'Q', 180, -25, 285, 150,
        'T', 510, 150 
    ]);
    curve.attr(
            {
                stroke:'white',
                'stroke-width': 2
            }
    );
    var xline = displayBoxPaper.path("M60 150L510 150");
    xline.attr(
            {
                stroke:'#D1D1E0',
                'stroke-width': 4
            }
    );
    var amplitude = displayBoxPaper.path("M690 72L690 220");
    amplitude.attr(
            {
                stroke:'blue',
                'stroke-width': 4,
            }
    );
    var arrowTop = displayBoxPaper.path("M690 62L695 72L685 72 z");
    arrowTop.attr(
            {
                fill:'blue',
                stroke: 'blue'
            }
    );
    var arrowBottom = displayBoxPaper.path("M690 230L695 220L685 220 z");
    arrowBottom.attr(
            {
                fill:'blue',
                stroke: 'blue'
            }
    );
    var alline = displayBoxPaper.set();
    alline.push(
            amplitude,
            arrowTop,
            arrowBottom
    );
    alline.animate(
            {
                transform : 't-515 0 r360',
                fill: 'red',
                stroke: 'red'
            },
            2000,
            'ease-in'
    );
    var lineText = displayBoxPaper.text(171, 250, "L");
    lineText.attr(
            {
                'font-family': "arial",
                'font-size': 24,
                'font-style': "italic",
                'fill': "red",
                'text-anchor': 'start',
                'opacity': 0
            }
    );
    increaseOpacity(lineText, 0.1, 200);
}

function question2(displayBoxPaper) {
    var sampleLineArray = [-33, -62, -84, -89, -81, -55, -18, 18, 59, 81, 86, 83, 67, 34];
    var curve = displayBoxPaper.path([
        'M', 60, 150,
        'Q', 180, -25, 285, 150,
        'T', 510, 150 
    ]);
    curve.attr(
            {
                stroke:'white',
                'stroke-width': 2
            }
    );
    var xline = displayBoxPaper.path("M60 150L510 150");
    xline.attr(
            {
                stroke:'#D1D1E0',
                'stroke-width': 4
            }
    );
    var arrayPos = 0;
    for (i=30; i <=420; i=i + 30) {
        var sampleLinePos = 560 + i;
        var sampleLineLength = sampleLineArray[arrayPos++];
        var sampleLinePath = "M" + sampleLinePos + " 150l0 " + sampleLineLength;
        var sampleLine = displayBoxPaper.path(sampleLinePath);
        sampleLine.attr(
                {
                    stroke: 'red',
                    'stroke-width': 4
                }
        );
        sampleLine.animate(
                {
                    transform: "t-500 0"
                },
                1000,
                'ease-out'
        );
    }
    var waveLengthLine = displayBoxPaper.path("M60 270L510 270");
    var verticalL = displayBoxPaper.path("M60 260L60 280");
    var verticalR = displayBoxPaper.path("M510 260L510 280");
    var wavelengthItems = displayBoxPaper.set();
    wavelengthItems.push(
            waveLengthLine,
            verticalL,
            verticalR
    );
    wavelengthItems.attr(
            {
                stroke:'white',
                'stroke-width': 4
            }
    );
    var waveLengthText = setDisplayWindowText(displayBoxPaper, "1 Second", 250, 290, 24, "white", false);
}

function question3(displayBoxPaper, questionThree) {
    var imagePath = "../images/" + questionThree.file;
    opacityImage = setDisplayWindowImage(displayBoxPaper,imagePath,20, 20, 400, 300, 0);
    increaseOpacity(opacityImage, 0.1, 400);    
}