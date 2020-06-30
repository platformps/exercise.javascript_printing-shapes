function getLine(length) {
    // TODO - write method definition here
    let response = "";
    for(let i = 0 ; i < length ; i++) {
        response += "*";
    }
    return response;
}



function getBox(width, height) {
    // TODO - write method definition here
    let response = "";
    for(let i = 0 ; i < height ; i++) {
        for(let j =0; j < width ; j++) {
            response += "*";
        }
        response += "\n";
    }
    return response;
}



function getBottomLeftTriangle(length) {
    // TODO - write method definition here
    let response = "";
    for(let i = 1 ; i <= length; i++) {
        for(let j = 0 ; j < i; j++) {
            response += "*";
        }
        response += "\n";
    }
    return response;
}


function getUpperLeftTriangle(length) {
    // TODO - write method definition here
    let response="";
    for (let i = 0 ; i < length ; i++) {
        for (let j = i ; j < length ;j++) {
            response += "*";
        }
        response += "\n";
    }
    return response;
}



function getPyramid(length) {
    // TODO - write method definition here
    let response="";
    for (let i = 1 ; i <= length ; i++) {
        for (let j = i ; j < length ; j++) {
            response += " ";
        }
        for( let k = 1; k < (i*2) ; k++) {
            response += "*";
        }
        response += "\n";
    }
    return response;
}


function getCheckerboard(width, height) {
    let response = "";
    for (let i = 0; i <height; i++) {
        for (let j = 0 ; j < width ; j++) {
            if (((i+j)%2) == 0) {
                response += " ";
            } else {
                response += "*";
            }
        }
        response += "\n";
    }
    return response;
    // TODO - write method definition here
}
