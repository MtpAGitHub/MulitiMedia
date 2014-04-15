/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function textWindow(textPaper) {
    var startText = textPaper.text(40, 40, "Some example text");
    startText.attr(
            {
                'font-family': "arial",
                'font-size': 24
            }
    );
    startText.animate(
            {
                transform: 't80,80r360',
                fill: 'white'
            }
    , 1000, 'ease-in');
}


function optionDebugMsg(a,b) {
	document.getElementById("debug").innerHTML="Options debug>> " + a + ":" + b;
}