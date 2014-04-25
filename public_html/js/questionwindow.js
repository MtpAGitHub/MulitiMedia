/* 
 * 250414   MtpA    Create script
 */


function setQuestionWindow(width, height) {
    return Raphael(document.getElementById("questionBox"), width, height);
}

function setQuestionText(questionPaper, questionText, xpos, ypos) {
    var questionText = questionPaper.text(xpos, ypos, questionText);
    questionText.attr(
            {
                'font-family': "arial",
                'font-size': 24,
                'fill': "white"
            }
    );
}
