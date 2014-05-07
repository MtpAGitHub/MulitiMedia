/* 
 * 250414   MtpA    Created script
 */

function answerEvent(pressedButton, questionList, answerBoxes) {
    var soundContainer = document.getElementById("sound");
    var videoContainer = document.getElementsByClassName("pageVideo")[0];
    soundContainer.pause();
    videoContainer.pause();
    stopTimer(questionTimer);
}

function answerDebugMsg(a, b) {
    document.getElementById("debug").innerHTML = "Debug>>" + a + ":" + b;
}