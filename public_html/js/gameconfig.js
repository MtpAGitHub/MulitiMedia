/* 
 * 250414   MtpA    Major revision to take out functionality for display and question into seperate scripts
 * 120414   MtpA    Created script
 */

function configGame(configBoxes) {
    var questions = getQuestions("questions.xml");
    var randomisedQuestions = randomizeQuestions(questions);
    var startTime = 9;

    windowAnimate(configBoxes.displayBoxPaper);
    setQuestionText(configBoxes.questionBoxPaper, "Pick a square ! Pick a square ! Pick a square ! Pick a square ! Pick a square !", 20, 20, 14);
    displayAnswers("Answer A", "Answer B", "Answer C", "Answer D");
    timerDisp(configBoxes.timerBoxPaper, startTime);
    setScoreText(configBoxes.scoresBoxPaper, "Score", 0);
    return randomisedQuestions;
}

function randomizeQuestions(questions) {
    var randomQuestions = new Array();
    var questionPicked = new Array();
    var questionCount = questions.length;
    
    for (var i = 0; i < questionCount; i++) {
        questionPicked[i] = false;
    }
    var gridLimit = 9;
    while (gridLimit > 0) {
        var curNum = randomNumber(0,questionCount-1);
        if (!questionPicked[curNum]) {
            randomQuestions.push(questions[curNum]);
            questionPicked[curNum] = true;
            gridLimit--;
        }
    }
    return randomQuestions;
}

function showQuestions(randomQuestions) {
    var longString = "";
    var selectedQuestion;
    var noQuestions = randomQuestions.length;
    for (var i = 0; i < noQuestions; i++) {
        selectedQuestion = randomQuestions[i];
        longString = longString + "<" + i + ">" + selectedQuestion.type + "<>" + selectedQuestion.text + "<>" + selectedQuestion.oneopt + "<>" + selectedQuestion.twoopt + "<>" + selectedQuestion.threeopt + "<>" + selectedQuestion.fouropt + "<>" + selectedQuestion.answer + "\n";
    }
    alert(longString);
}