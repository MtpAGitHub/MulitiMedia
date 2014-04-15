function startSound(soundID, songID) {
	var cNote = document.getElementById(soundID);
	cNote.src = document.getElementById(songID).getAttribute("src");
	cNote.play();
	soundDebugMsg("Got here","");
}

function soundDebugMsg(a,b) {
	document.getElementById("debug").innerHTML="Debug>>" + a + ":" + b;
}