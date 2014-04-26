function setTimerBoxPaper(width, height) {
    var timerBarElement = document.getElementById('timerBox');
    return Raphael(timerBarElement, 128, 128);
}

function timerDisp(timerBoxPaper, curTime) {
    timerDial(curTime, timerBoxPaper);
}

function startTimer(timerBoxPaper, curTime, timeGap) {
    var timerInterval = setInterval(
            function() {
                timerDial(curTime, timerBoxPaper);
                if (curTime-- === -1) {
                    stopTimer(timerInterval);
                }
            }, timeGap
            );
    return timerInterval;
}

function stopTimer(timerInterval) {
    clearInterval(timerInterval);
}

function timerDebugMsg(a, b) {
    document.getElementById("debug").innerHTML = "Debug>>" + a + ":" + b;
    alert("Waiting");
}
