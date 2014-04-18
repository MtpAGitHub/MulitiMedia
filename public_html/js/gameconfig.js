/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function configGame() {
    questionPaper = Raphael(document.getElementById("questionBox"), 400, 300);

    var questions = getQuestions("questions.xml");
    var randomisedQuestions = randomizeQuestions(questions);
    showQuestions(randomisedQuestions);
    setStartText();
    timerDisp();
    return randomisedQuestions;
}

function setStartText() {
    var questionText = questionPaper.text(0, 20, "Pick a square !");
    questionText.attr(
            {
                'font-family': "arial",
                'font-size': 24,
                'text-anchor': "start",
                'fill': "white"
            }
    );
}

function randomizeQuestions(questions) {
    var randomQuestions = new Array();
    var questionPicked = new Array();
    var questionCount = questions.length;
    
    for (var i = 0; i < questionCount; i++) {
        questionPicked[i] = false;
    }
    while (questionCount > 0) {
        var curNum = randomNumber(0,8);
        if (!questionPicked[curNum]) {
            randomQuestions.push(questions[curNum]);
            questionPicked[curNum] = true;
            questionCount--;
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