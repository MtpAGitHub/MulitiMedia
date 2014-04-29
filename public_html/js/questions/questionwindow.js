/* 
 * 290414   MtpA    Added the function to split a question if too long for one line
 * 250414   MtpA    Create script
 */


function setQuestionWindow(width, height) {
    return Raphael(document.getElementById("questionBox"), width, height);
}

function setQuestionText(questionPaper, questionText, xpos, ypos, textSize) {
    var splitLength = 62;
    questionPaper.clear();
    if (questionText.length > splitLength) {
        questionText = splitQuestion(questionText, splitLength);
    }
    var questionBoxText = questionPaper.text(xpos, ypos, questionText);
    questionBoxText.attr(
            {
                'font-family': "arial",
                'font-size': textSize,
                'fill': "white",
                'text-anchor': 'start'
            }
    );
}

// this function assumes no double spaces in strings !  (Would need a regex and can't be bothered !)

function splitQuestion(splitText, maxLength) {
    var textArray = new Array();
    var curLine = "";
    var curPos = 0;
    var eol_found = false;
    var stringLength = splitText.length;
    
    while (!eol_found) {
        curPos = splitText.search(" ");
        if (curPos === -1) {
            eol_found = true;
            textArray.push(splitText);
        } else {
            if (curLine.length + curPos >= maxLength) {
                textArray.push(curLine + "\n");
                curLine = "";
            }
            curLine = curLine + splitText.substr(0, curPos) + " ";
            splitText = splitText.substr(curPos + 1);
        }
    }
    splitText = "";
    for (i=0; i < textArray.length; i++) {
        splitText = splitText + textArray[i];
    }
    return splitText;
}