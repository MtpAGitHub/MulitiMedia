function timerDisp() {
	timerBarElement = document.getElementById('timerBox');
	var timerPaper = Raphael(timerBarElement, 128, 128);
	curTime = 9;
	timerDial("red", curTime, timerPaper);
}

function timerDown() {
	if (curTime >= 0) {
		timerPaper.clear();
		curTime--;
		timerDial("red", curTime, timerPaper);
	}
}

function volDebugMsg(a,b) {
	document.getElementById("debug").innerHTML="Debug>>" + a + ":" + b;
	alert("Waiting");
}
