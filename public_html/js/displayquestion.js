/* 
 * 250414   MtpA    Created script
 */


function displayQuestion(questionPaper, buttonPressed, questionList) {
    var arrayPos = buttonPressed -1;
    setQuestionText(questionPaper, questionList[arrayPos].text, 20, 20);
}