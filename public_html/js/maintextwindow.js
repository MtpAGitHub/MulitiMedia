/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function textWindow(textPaper, outputText) {
    if (outputText === "I") {
        gameInstructions(textPaper);
        return outputText.INSTRUCT;
    } else if (outputText === "S") {
        gameStats(textPaper);
        return outputText.STATS;
    } else if (outputText === "G") {
        generalText(textPaper);
        return outputText.GENERAL;
    } else {
        return;
    }
}

function optionDebugMsg(a, b) {
    document.getElementById("debug").innerHTML = "Options debug>> " + a + ":" + b;
    alert("Stop !");
}