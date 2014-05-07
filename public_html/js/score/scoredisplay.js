/* 
 * 250414   MtpA    Create script
 */

function setScoresBoxPaper(width, height) {
    return Raphael(document.getElementById("scoresBox"), width, height);
}

function setScoreText(scoresBoxPaper, scoresText, scoreAmount) {
    scoresBoxPaper.clear();
    var scoresBoxText = scoresBoxPaper.text(20, 10, scoresText);
    scoresBoxText.attr(
            {
                'font-family': "arial",
                'font-size': 24,
                'fill': "white",
                'text-anchor': 'start'
            }
    );
    var scoresBoxScore = scoresBoxPaper.text(40,70, scoreAmount);
    scoresBoxScore.attr(
            {
                'font-family': "arial",
                'font-size': 48,
                'fill': "white",
                'text-anchor': 'start'
            }
    );
    scoreBig(scoresBoxScore);
}

function scoreBig(bigScoreText) {
    bigScoreText.animate(
            {
                transform: 's2.5',
                'fill': "red"
            }
            ,1000
            , 'ease-in'
            ,setTimeout(function() {scoreSmall(bigScoreText);},1000)
    );    
}

function scoreSmall(smallScoreText) {
    smallScoreText.animate(
            {
                transform: 's1 r360',
                'fill': "white"
            }
            ,2000
            , 'ease-in'
    );
}