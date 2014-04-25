function setTimerBoxPaper(width, height) {
    timerBarElement = document.getElementById('timerBox');
    return Raphael(timerBarElement, 128, 128);
}

function timerDisp(timerBoxPaper) {
    curTime = 9;
    timerDial("red", curTime, timerBoxPaper);
}

function timerDown(timerBoxPaper) {
    if (curTime >= 0) {
        timerBoxPaper.clear();
        curTime--;
        timerDial("red", curTime, timerPaper);
    }
}

function volDebugMsg(a, b) {
    document.getElementById("debug").innerHTML = "Debug>>" + a + ":" + b;
    alert("Waiting");
}
