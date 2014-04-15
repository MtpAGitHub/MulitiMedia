function gameStart() {
    startDebugMsg("You pressed","START");
}

function startDebugMsg(a,b) {
	document.getElementById("mainPage").innerHTML="This is the main page " + a + ":" + b;
}