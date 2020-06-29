function getLine(length) {
    let shape = "";
    for(let i = 1; i <= length; i++) shape += "*";
    return shape;
}



function getBox(width, height) {
    let shape = "";
    for(let i = 1; i <= height; i++) {

        // Creating a new line
        shape += getLine(width) + "\n";
    }
    return shape;
}



function getBottomLeftTriangle(length) {
    let shape = "";
    for(let i = 1; i <= length; i++) {
        shape += getLine(i);
        if(i != length) shape += "\n";
    }
    return shape;
}


function getUpperLeftTriangle(length) {
    let shape = "";
    for(let i = length; i >= 1; i--) {
        shape += getLine(i);
        if(i != 1) shape += "\n";
    }
    return shape;
}



function getPyramid(length) {
    let shape = "";

    if(length == 0 || length == 1) return getLine(length);

    for(let i = 1; i <= length; i++) {
        
        let line = "";

        for(let j = 1; j <= (length - i + 1)/2; j++) {
            line += " ";
        }
        for(let k = 1; k <= i + 2; k++) line += "*";

        shape += line + "\n";
    }


   
    return shape;
}


function getCheckerboard(width, height) {
    // TODO - write method definition here
}
