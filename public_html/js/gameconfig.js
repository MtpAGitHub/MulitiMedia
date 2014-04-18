/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function configGame() {
    questions = new Array();
    randomQuestions = new Array();
    questionPaper = Raphael(document.getElementById("questionBox"), 400, 300);

    getQuestions("questions.xml");
    randomizeQuestions();
    showQuestions();
    setStartText();
    timerDisp();
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

function randomizeQuestions() {
    var questionPicked = new Array();
    var questionCount = questions.length;
    
    for (var i = 0; i < 10; i++) {
        questionPicked[i] = false;
    }
    while (questionCount > 0) {
        var curNum = randomNumber(0,9);
        if (!questionPicked[curNum]) {
            randomQuestions.push(questions[curNum]);
            questionPicked[curNum] = true;
            questionCount--;
        }
    }
}

function showQuestions() {
    var longString = "";
    var selectedQuestion;
    var noQuestions = randomQuestions.length;
    for (var i = 0; i < noQuestions; i++) {
        selectedQuestion = randomQuestions[i];
        longString = longString + "<" + i + ">" + selectedQuestion.type + "<>" + selectedQuestion.text + "<>" + selectedQuestion.oneopt + "<>" + selectedQuestion.twoopt + "<>" + selectedQuestion.threeopt + "<>" + selectedQuestion.fouropt + "<>" + selectedQuestion.answer + "\n";
    }
    alert(longString);
}