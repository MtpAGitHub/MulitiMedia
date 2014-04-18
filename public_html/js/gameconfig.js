/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function configGame() {
    questions = new Array();
    questionPaper = Raphael(document.getElementById("questionBox"), 400, 300);

    getQuestions("questions.xml");
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

function showQuestions() {
    var longString ="";
    var selectedQuestion;
    for (var i = 0; i < questions.length; i++) {
        selectedQuestion = questions[i];
        longString = longString + "<" + i + ">" + selectedQuestion.type + "<>" + selectedQuestion.text + "<>" + selectedQuestion.oneopt + "<>" + selectedQuestion.twoopt + "<>" + selectedQuestion.threeopt + "<>" + selectedQuestion.fouropt + "<>" + selectedQuestion.answer + "\n";
    }
    alert(longString);
}