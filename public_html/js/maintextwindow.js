/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function textWindow(textPaper, outputText) {
    if (outputText === "I") {
        gameInstructions(textPaper);
        return false;
    } else if (outputText === "S") {
        gameStats(textPaper);
        return false;
    } else {
        generalText(textPaper);
        return false;
    }
}

function optionDebugMsg(a, b) {
    document.getElementById("debug").innerHTML = "Options debug>> " + a + ":" + b;
}