function getLine(length) {
    // TODO - write method definition here
    var answer = "";
    var userIn = length;
    for(let x = 1; x <= userIn; x++){
        answer += "*";
    }
    return answer;
}



function getBox(width, height) {
    // TODO - write method definition here
    var answer = "";
    var userIn1 = width;
    var userIn2 = height;
    for(let x = 1; x <= height; x++){
        for(let y = 1; y <= width; y++){
            answer += "*";
        }
        answer += "\n";
    }
    return answer;
}



function getBottomLeftTriangle(length) {
    // TODO - write method definition here
}


function getUpperLeftTriangle(length) {
    // TODO - write method definition here
}



function getPyramid(length) {
    // TODO - write method definition here
}


function getCheckerboard(width, height) {
    // TODO - write method definition here
}
