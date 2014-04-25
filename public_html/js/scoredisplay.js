/* 
 * 250414   MtpA    Create script
 */

function setScoresBoxPaper(width, height) {
    return Raphael(document.getElementById("scoresBox"), width, height);
}

function setScoreText(scoresBoxPaper, scoresText) {
    var scoresBoxText = scoresBoxPaper.text(10, 10, scoresText);
    scoresBoxText.attr(
            {
                'font-family': "arial",
                'font-size': 24,
                'fill': "white",
                'text-anchor': 'start'
            }
    );    
}