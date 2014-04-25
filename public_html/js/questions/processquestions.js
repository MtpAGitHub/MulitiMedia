/* 
 * 250414   MtpA    Create script
 */

function displayQuestion(questionPaper, questionText) {
    setQuestionText(questionPaper, questionText, 20, 20);
}

function displayAnswers(answerA, answerB, answerC, answerD) {
    document.getElementById("answerA").innerHTML = answerA;
    document.getElementById("answerB").innerHTML = answerB;
    document.getElementById("answerC").innerHTML = answerC;
    document.getElementById("answerD").innerHTML = answerD;
}

function questionAnimate(displayBoxPaper) {
    displayBoxPaper.clear();
}

function startSound(displayBoxPaper, soundID, song) {
    var soundContainer = document.getElementById(soundID);
    var containerSound = document.getElementById("soundSource");
    containerSound.src = "../sound/" + song;
    questionDebugMsg(soundContainer.nodeName, containerSound.nodeName);
    soundContainer.load();
    soundContainer.play();    
}

function processAnimation(displayBoxPaper, curQuestion) {
    setDisplayWindowText(displayBoxPaper,"animation",20, 20);
}

function processPicture(displayBoxPaper, curQuestion) {
    var imagePath = "../images/" + curQuestion.file;
    setDisplayWindowImage(displayBoxPaper,imagePath,20, 20, 400, 300);
}

function processVideo(displayBoxPaper, curQuestion) {
    setDisplayWindowText(displayBoxPaper,"video",20, 20);
}

function questionDebugMsg(a, b) {
    document.getElementById("debug").innerHTML = "Debug>>" + a + ":" + b;
}