/* 
 * 010514   MtpA    Added animation 2, 3 and 4
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
                shapeObject.path = "M400 100 l 75 75 l 0 -150 z";
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
    var greenCircle = animateDisplayWindow.circle(40, 40, 30).attr({fill: "green"});
    var redCircle = animateDisplayWindow.circle(550, 40, 30).attr({fill: "red"});
    var yellowCircle = animateDisplayWindow.circle(550, 260, 30).attr({fill: "yellow"});
    var pinkCircle = animateDisplayWindow.circle(40, 260, 30).attr({fill: "pink"});
    var dropBox = animateDisplayWindow.rect(260, 120, 80, 80);
    var yellowId = yellowCircle.id;
    var circleSet = animateDisplayWindow.set();

    circleSet.push(
        greenCircle,
        redCircle,
        yellowCircle,
        pinkCircle
    );
    
    var startDrag = function() {
        this.originX = this.attr("cx");
        this.originY = this.attr("cy");
        this.scale(1.25, 1.25);
        this.animate({opacity: .5}, 500, "ease-in");
    };
    
    var moveObject = function(dragX, dragY) {
        var centreX = this.originX + dragX;
        var centreY = this.originY + dragY;
        this.attr(
                {
                cx: centreX, 
                cy: centreY
                }
        );
        if ((centreX > 260 && centreY > 120) && (centreX < 340 && centreY < 200) && (this.id === yellowId)) {
            this.undrag();
            setDisplayWindowText(animateDisplayWindow,"JAILED !",235, 160, 36, "red", false);
        }
    };

    var releaseObject = function() {
        this.animate({opacity: 1}, 500, "ease-in");
        this.scale(0.8, 0.8);
    };
    
    circleSet.drag(moveObject, startDrag, releaseObject);
}

function animate4(animateDisplayWindow) {
    var imagePath = "../images/squirel.jpg";
    setDisplayWindowImage(animateDisplayWindow,imagePath,85, 0, 400, 300, 1);    
    for (verticalBox = 0; verticalBox < 3; verticalBox++) {
        for (horizontalBox = 0; horizontalBox < 4; horizontalBox++) {
            (function(verticalBox, horizontalBox) {
                var hideBoxes = animateDisplayWindow.rect(85 + (horizontalBox * 100), 0 + (verticalBox * 100), 100, 100);
                hideBoxes.attr(
                    {
                        fill: '#24577B',
                        stroke: 'gray'
                    }
                );
                hideBoxes.node.onmouseover = function() {
                    hideBoxes.attr("opacity", 0);
                };
                hideBoxes.node.onmouseout = function() {
                    hideBoxes.attr("opacity", 1);
                };
            })
            (verticalBox, horizontalBox);
        }
    }    
}
