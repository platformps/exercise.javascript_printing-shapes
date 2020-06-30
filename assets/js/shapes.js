function getLine(length) {

    let lineExpected= "";
    for(let loopCounter = 0; loopCounter < length; loopCounter++){
        lineExpected = lineExpected + "*";
    }
    return lineExpected;
}


function getBox(width, height) {
    let lineExpected= "";
    for(let lineLoopCounter = 0; lineLoopCounter < width; lineLoopCounter++){
        for(let culLoopCounter = 0; culLoopCounter < height; culLoopCounter++){
            lineExpected = lineExpected + "*";
        }
        lineExpected = lineExpected + "\n";
    }
    return lineExpected;
}

function getBottomLeftTriangle(length) {
    let lineExpected= "";
    for(let lineLoopCounter = 0; lineLoopCounter <= length; lineLoopCounter++){
        for(let culLoopCounter = 0; culLoopCounter < lineLoopCounter; culLoopCounter++){
            lineExpected = lineExpected + "*";
        }
        lineExpected = lineExpected + "\n";
    }
    return lineExpected;
}

function getUpperLeftTriangle(length) {
    let lineExpected= "";
    for(let lineLoopCounter = length; lineLoopCounter >= 0; lineLoopCounter--){
        for(let culLoopCounter = lineLoopCounter ; culLoopCounter > 0; culLoopCounter--){
            lineExpected = lineExpected + "*";
        }
        lineExpected = lineExpected + "\n";
    }
    return lineExpected;
}

function getPyramid(length) {
    let lineExpected= "";
    for(let lineLoopCounter = 0; lineLoopCounter <= length; lineLoopCounter++){
        if (lineLoopCounter %2 != 0){
            for(let culLoopCounter = 0; culLoopCounter < lineLoopCounter; culLoopCounter++){
                lineExpected = lineExpected + "*";
            }
        }
        lineExpected = lineExpected + "\n";
    }
    return lineExpected;
}


function getCheckerboard(width, height) {
    let lineExpected= "_";
    for(let lineLoopCounter = 0; lineLoopCounter < width; lineLoopCounter++){
        for(let culLoopCounter = 0; culLoopCounter < height; culLoopCounter++){
            i = lineExpected.charAt(myString.length - 1)
            if (i == "\n")
                lineExpected.charAt(myString.length - 2)
            if(i == "*")
                lineExpected = lineExpected + "_";
            else 
                lineExpected = lineExpected + "*";
        }
        lineExpected = lineExpected + "\n";
    }
    return lineExpected;
}