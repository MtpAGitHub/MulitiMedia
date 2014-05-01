/* 
 * 300414   MtpA    Created script
 */

function animate1(animateDisplayWindow) {
    var shape3d = animateDisplayWindow.path("M50 50 l 100 0 l 0 100 l -100 0 z");
    shape3d.attr(
            {
                fill: '0-#e97451-#f2aa95',
                stroke: 'gray',
                'stroke-width' : 2
            }
    );
}

function animate2(animateDisplayWindow) {
    var shapeArray = new Array();
    
    for (var i = 0; i < 5; i++) {
        var shapeObject = new Object();
        switch (i) {
            case 0: // square
                shapeObject.path = "M20 50 l 150 0 l 0 150 l -150 0 z";
                shapeObject.colour = "0-#e97451-#f2aa95";
                break;
            case 1: // triangle
                shapeObject.path = "M400 50 l 75 150 l 0 -150 z";
                shapeObject.colour = "0-#0007E5-#00A3BF";
                break;
            case 2: // heptagon
                shapeObject.path = "M 150 100 l 100 0 l 50 100 l -50 100 l -100 0 l -50 -100 z";
                shapeObject.colour = "0-#00A3BF-#0AF424";
                break;                
            case 3: // star
                shapeObject.path = "M 300 100 l 25 60 l 60 25 l -60 25 l -25 60 l -25 -60 l -60 -25 l 60 -25 z";
                shapeObject.colour = "0-#9FEE00-#FFE100";
                break;                
            case 4: // trapezoid
                shapeObject.path = "M 100 50 l 120 0 l -40 120 l -40 0 l -40 -120 z";
                shapeObject.colour = "0-#0AF424-#F7A507";
                break;                
        }
        shapeArray.push(shapeObject);
    }    
    morphShape(animateDisplayWindow, shapeArray, 0);
}

function morphShape(animateDisplayWindow, shapeArray, arrayPos) {
    if (arrayPos === shapeArray.length -1) {
        return;
    } 
    var curShape = animateDisplayWindow.path(shapeArray[arrayPos].path);
    curShape.attr(
            {
            fill: shapeArray[arrayPos].colour             
            }
    );
    curShape.animate(
            [
            {path: shapeArray[arrayPos].path} , {path: shapeArray[arrayPos+1].path}
            ],
            2000,
            'linear',
            setTimeout(function() {chgColour(curShape, animateDisplayWindow, shapeArray, arrayPos)},2000)
    );
}

function chgColour(chgShape, animateDisplayWindow, shapeArray, arrayPos) {
    arrayPos++;
    if (arrayPos === shapeArray.length) {
        chgShape.stop();
    } else {
        chgShape.animate(
                {
                fill: shapeArray[arrayPos].colour
                },
                setTimeout(function() {morphShape(animateDisplayWindow, shapeArray, arrayPos)},0)
        );        
    }
}

function animate3(animateDisplayWindow) {
    setDisplayWindowText(displayBoxPaper,"Animation 3 !",20, 20, 24, "white", true);    
}