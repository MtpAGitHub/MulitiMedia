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

function startSound(displayBoxPaper, soundID, song) {
    var soundContainer = document.getElementById(soundID);
    var containerSound = document.getElementById("soundSource");
    containerSound.src = "../sound/" + song;
    questionDebugMsg(soundContainer.nodeName, containerSound.nodeName);
    soundContainer.load();
    soundContainer.play();    
}

function processQuestion(displayBoxPaper, curQuestion) {
    displayBoxPaper.clear();
    questionDebugMsg(curQuestion.qFunc,curQuestion.text);
    switch (curQuestion.qFunc) {
        case "q1":
            question1(displayBoxPaper, curQuestion);
            break;
        case "q2":
            setDisplayWindowText(displayBoxPaper,"Question 2 !",20, 20);
            break;
        default:
            setDisplayWindowText(displayBoxPaper,"Something wrong with questions !",20, 20);
    }
}

function processAnimation(displayBoxPaper, curAnimation) {
    setDisplayWindowText(displayBoxPaper,"animation",20, 20);
}

function processPicture(displayBoxPaper, curPicture) {
    var imagePath = "../images/" + curPicture.file;
    setDisplayWindowImage(displayBoxPaper,imagePath,20, 20, 400, 300);
}

function processVideo(curVideo) {
    var videoPlayer = document.getElementsByClassName("pageVideo")[0];
    var videoSource = document.getElementsByClassName("videoSource")[0];
    var sourceFile = "../video/" + curVideo.file + "#t=0";
    
    videoSource.src = sourceFile;
    videoPlayer.load();
    videoPlayer.play();
}

function questionDebugMsg(a, b) {
    document.getElementById("debug").innerHTML = "Debug>>" + a + ":" + b;
}