/* 
 * 280414   MtpA    Created script
 */

function question1(displayBoxPaper, questionOne) {
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
                'fill': "white",
                'text-anchor': 'start',
                'opacity': 0
            }
    );
}
