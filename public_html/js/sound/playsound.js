function startSound(soundID, songID) {
	var quizSound = document.getElementById(soundID);
	quizSound.src = document.getElementById(songID).getAttribute("src");
	quizSound.play();
	soundDebugMsg("Got here","");
}

function soundDebugMsg(a,b) {
	document.getElementById("debug").innerHTML="Debug>>" + a + ":" + b;
}