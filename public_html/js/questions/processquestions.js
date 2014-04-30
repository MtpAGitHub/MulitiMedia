/* 
 * 
 * 260414   MtpA    Added video functionality
 * 250414   MtpA    Create script
 */

function displayQuestion(questionPaper, questionText) {
    setQuestionText(questionPaper, questionText, 20, 20, 14);
}

function displayAnswers(answerA, answerB, answerC, answerD) {
    document.getElementById("answerA").innerHTML = answerA;
    document.getElementById("answerB").innerHTML = answerB;
    document.getElementById("answerC").innerHTML = answerC;
    document.getElementById("answerD").innerHTML = answerD;
}

function startSound(displayBoxPaper, soundID, song) {
    setDisplayWindowText(displayBoxPaper,"Just listen to the music !",20, 20, 24, "white", true);
    var soundContainer = document.getElementById(soundID);
    var containerSound = document.getElementById("soundSource");
    containerSound.src = "../sound/" + song;
    questionDebugMsg(soundContainer.nodeName, containerSound.nodeName);
    soundContainer.load();
    soundContainer.play();    
}

function processQuestion(displayBoxPaper, curQuestion) {
    displayBoxPaper.clear();
    switch (curQuestion.qFunc) {
        case "q1":
            question1(displayBoxPaper);
            break;
        case "q2":
            question2(displayBoxPaper);
            break;
        case "q3":
            question3(displayBoxPaper, curQuestion);
            break;
        default:
            setDisplayWindowText(displayBoxPaper,"Something wrong with questions !",20, 20, 24, "white", true);
    }
}

function processAnimation(displayBoxPaper, curAnimation) {
    displayBoxPaper.clear();
    switch (curAnimation.aniFunc) {
        case "a1":
            animate1(displayBoxPaper);
            break;
        case "a2":
            animate2(displayBoxPaper);
            break;
        case "a3":
            animate3(displayBoxPaper);
            break;
        default:
            setDisplayWindowText(displayBoxPaper,"Something wrong with animations !",20, 20, 24, "white", true);
    }
}

function processPicture(displayBoxPaper, curPicture) {
    var imagePath = "../images/" + curPicture.file;
    setDisplayWindowImage(displayBoxPaper,imagePath,20, 20, 400, 300, 1);
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