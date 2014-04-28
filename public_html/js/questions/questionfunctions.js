/* 
 * 280414   MtpA    Created script
 */

function question1(displayBoxPaper, questionOne) {
    var curve = displayBoxPaper.path([
        'M', 10, 150,
        'Q', 120, 20, 230, 150,
        'T', 450, 150 
    ]);
    curve.attr(
            {
                stroke:'white',
                'stroke-width': 2
            }
    );
}
