/* 
 * 250414   MtpA    Added video functionality
 * 240314   MtpA    Completed proper processing of sound and pictures
 * 200314   MtpA    Added full case statement for all of the question types and dummy displays
 * 140314   MtpA    Created script
 */

function questionEvent(pressedButton, questionList, questionBoxes) {    
    var questionArrayPos = pressedButton -1;
    var curQuestion = questionList[questionArrayPos];
    var curTime = 10;
    var countdownTime = 1000;
    curAnswer = curQuestion.answer;
    
    turnImage(pressedButton, questionList);
    displayQuestion(questionBoxes.questionBoxPaper, curQuestion.text);
    displayAnswers(curQuestion.oneopt, curQuestion.twoopt, curQuestion.threeopt, curQuestion.fouropt);
    switch (curQuestion.type) {
        case "Sound":
            toggleDisplayWindow(questionBoxes.displayBoxPaper,"raphael");
            startSound(questionBoxes.displayBoxPaper, "sound", curQuestion.file);
            countdownTime = 2000;
            break;
        case "Question":
            toggleDisplayWindow(questionBoxes.displayBoxPaper,"raphael");
            processQuestion(questionBoxes.displayBoxPaper, curQuestion);
            break;
        case "Animation":
            toggleDisplayWindow(questionBoxes.displayBoxPaper,"raphael");
            processAnimation(questionBoxes.displayBoxPaper, curQuestion);
            break;
        case "Picture":
            toggleDisplayWindow(questionBoxes.displayBoxPaper,"raphael");
            processPicture(questionBoxes.displayBoxPaper, curQuestion);
            break;
        case "Video":
            toggleDisplayWindow(questionBoxes.displayBoxPaper,"movie");
            processVideo(curQuestion);
            break;
        default:
            break;
    }
    questionTimer = startTimer(questionBoxes.timerBoxPaper ,curTime, countdownTime);
    return false;
}

function toggleDisplayWindow(displayPaper, displayType) {
    var raphaelCanvas = document.getElementsByClassName("raphaelCanvas")[0];
    var movieDiv = document.getElementsByClassName("movie")[0];
    var videoPlayer = document.getElementsByClassName("pageVideo")[0];
    var videoSource = document.getElementsByClassName("videoSource")[0];
    
    switch (displayType) {
        case "raphael":
            raphaelCanvas.style.display = "block";
            movieDiv.style.display = "none";
            videoPlayer.pause();
            videoSource.src = "";
            break;
        case "movie":
            movieDiv.style.display = "block";
            raphaelCanvas.style.display = "none";
            break;
        default:
            raphaelCanvas.style.display = "block";
            movieDiv.style.display = "none";
            videoPlayer.pause();
            videoSource.src = "";
            setDisplayWindowText(displayPaper,"Something wrong with canvas/video !",20, 20, 24, "white", true);
            break;
    }
}

function questionDebugMsg(a, b) {
    document.getElementById("debug").innerHTML = "Debug>>" + a + ":" + b;
}