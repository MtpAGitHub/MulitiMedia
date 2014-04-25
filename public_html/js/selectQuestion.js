function questionEvent(pressedButton, questionList, displayBoxPaper, questionBoxPaper, timerBoxPaper, scoresBoxPaper) {    
    turnImage(pressedButton, questionList);
    displayQuestion(questionBoxPaper, pressedButton, questionList);
    return false;
}

