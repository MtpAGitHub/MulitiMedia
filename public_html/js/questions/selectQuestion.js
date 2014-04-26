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
            startSound(questionBoxes.displayBoxPaper, "sound", curQuestion.file);
            countdownTime = 2000;
            break;
        case "Question":
            questionAnimate(questionBoxes.displayBoxPaper);
            break;
        case "Animation":
            processAnimation(questionBoxes.displayBoxPaper, curQuestion);
            break;
        case "Picture":
            processPicture(questionBoxes.displayBoxPaper, curQuestion);
            break;
        case "Video":
            processVideo(questionBoxes.displayBoxPaper, curQuestion);
            break;
        default:
            break;
    }
    questionTimer = startTimer(questionBoxes.timerBoxPaper ,curTime, countdownTime);
    return false;
}
