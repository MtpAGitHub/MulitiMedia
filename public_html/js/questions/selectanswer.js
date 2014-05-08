/* 
 * 250414   MtpA    Created script
 */

function answerEvent(pressedButton, questionList, displayBoxes) {
    document.getElementById(pressedButton).style.backgroundColor = "green";
    var soundContainer = document.getElementById("sound");
    var videoContainer = document.getElementsByClassName("pageVideo")[0];
    soundContainer.pause();
    videoContainer.pause();
    stopTimer(questionTimer);
    processAnswer(pressedButton, displayBoxes);
}

function processAnswer(userAnswer, displayBoxes) {
    isMusicIconShown = false;
    if (userAnswer === "timer") {
        setDisplayWindowText(displayBoxes.displayBoxPaper, "Out Of Time !", 20, 20, 24, "white", true);
        startSound("sound", "gong.mp3");                
    }
    else if (curAnswer === userAnswer) {
        currentScore++;
        setDisplayWindowText(displayBoxes.displayBoxPaper, "Congratulations !", 20, 20, 24, "white", true);
        startSound("sound", "applause.mp3");
        setScoreText(displayBoxes.scoresBoxPaper, "Score", currentScore);
    } else {
        setDisplayWindowText(displayBoxes.displayBoxPaper, "Bad Luck !", 20, 20, 24, "white", true);
        startSound("sound", "buzzer.mp3");        
    }
}

function answerDebugMsg(a, b) {
    document.getElementById("debug").innerHTML = "Debug>>" + a + ":" + b;
}