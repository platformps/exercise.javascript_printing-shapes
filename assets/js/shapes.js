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
    for(let lineLoopCounter = 0; lineLoopCounter < length; lineLoopCounter++){
        for(let culLoopCounter = 0; culLoopCounter < lineLoopCounter; culLoopCounter++){
            lineExpected = lineExpected + "*";
        }
        lineExpected = lineExpected + "\n";
    }
    return lineExpected;
}

function getUpperLeftTriangle(length) {
    let lineExpected= "";
    for(let lineLoopCounter = 0; lineLoopCounter < length; lineLoopCounter++){
        for(let culLoopCounter = 0; culLoopCounter < lineLoopCounter; culLoopCounter++){
            lineExpected = lineExpected + "*";
        }
        lineExpected = lineExpected + "\n";
    }
    return lineExpected;
}



function getPyramid(length) {
    // TODO - write method definition here
}


function getCheckerboard(width, height) {
    // TODO - write method definition here
}