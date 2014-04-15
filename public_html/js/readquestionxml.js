function getQuestions(vFileName) {
    var questions = new Array();
    var questionXML = getXMLData(vFileName);
    questions = loadQuestions(questionXML, questions);
}

function getXMLData(vFileName) {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "xml/" + vFileName, false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    return xmlDoc;
}

function loadQuestions(vXMLDoc, questionArr) {
    var qlist = vXMLDoc.getElementsByTagName("Question");
    //loop through all the Question nodes
    for (i = 0; i < qlist.length; i++) {
        var curQuestion = new Object();
        children = vXMLDoc.getElementsByTagName("Question")[i].childNodes;
        child = vXMLDoc.getElementsByTagName("Question")[i].firstChild;
        for (j = 0; j < children.length; j++) {
            if (child.nodeType == 1) {
                curQuestion = processElement(child, curQuestion);
            }
            child = child.nextSibling;
        }//end for loop children of Question
        questionArr.push(curQuestion);
    }//Question loop
    return questionArr;
}

function processElement(vCurElement, curQuestion) {
    switch (vCurElement.nodeName) {
        case "Type":
            curQuestion.type = vCurElement.firstChild.nodeValue;
            break;
        case "File":
            curQuestion.file = vCurElement.firstChild.nodeValue;
            break;
        case "Text":
            curQuestion.text = vCurElement.firstChild.nodeValue;
            break;
        case "AniFunc":
            curQuestion.func = vCurElement.firstChild.nodeValue;
            break;
        case "Option":
            var optNo = parseInt(vCurElement.getAttribute("id"));
            switch (optNo) {
                case 1:
                    curQuestion.oneopt = vCurElement.firstChild.nodeValue;
                    break;
                case 2:
                    curQuestion.twoopt = vCurElement.firstChild.nodeValue;
                    break;
                case 3:
                    curQuestion.threeopt = vCurElement.firstChild.nodeValue;
                    break;
                case 4:
                    curQuestion.fouropt = vCurElement.firstChild.nodeValue;
                    break;
                default:
                    break;
            }
        case "Answer":
            curQuestion.answer = vCurElement.firstChild.nodeValue;
            break;
        default:
            break;
    }
    return curQuestion;
}

function xmlDebugMsg(a, b) {
    document.getElementById("debug").innerHTML = "Debug>>" + a + ":" + b;
}