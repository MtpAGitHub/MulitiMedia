/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function configGame() {
    displayBox = Raphael(document.getElementById("displayWindow"), 600, 300);
    questionPaper = Raphael(document.getElementById("questionBox"), 600, 60);

    var questions = getQuestions("questions.xml");
    var randomisedQuestions = randomizeQuestions(questions);
    windowAnimate();
    setStartText();
    timerDisp();
    return randomisedQuestions;
}

function windowAnimate() {
    var canvasBox = displayBox.rect(0,0,700,300);
    canvasBox.attr(
            {
                fill:'black',
                stroke: 'gray',
                'stroke-width': 2
            }
    );
    var bouncingBall = displayBox.circle(20, 20, 15);
    bouncingBall.attr(
            {
                fill: '0-#00A3BF-#0AF424',
                stroke: 'gray',
                'stroke-width': 2
            }
    );
    bouncingBall.animate (
            {
                transform: 't560,100r360'
            },
            750,
            'linear'
    );
}

function setStartText() {
    var questionText = questionPaper.text(300, 20, "Pick a square !");
    questionText.attr(
            {
                'font-family': "arial",
                'font-size': 24,
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