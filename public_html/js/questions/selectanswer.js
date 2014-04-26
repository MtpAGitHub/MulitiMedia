/* 
 * 250414   MtpA    Created script
 */

function answerEvent(pressedButton, questionList, displayBoxPaper, questionBoxPaper, timerBoxPaper, scoresBoxPaper) {
    var soundContainer = document.getElementById("sound");
    soundContainer.pause();
    stopTimer(questionTimer);
}

function answerDebugMsg(a, b) {
    document.getElementById("debug").innerHTML = "Debug>>" + a + ":" + b;
}