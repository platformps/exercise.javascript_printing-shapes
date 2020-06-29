function getLine(length) {
    // TODO - write method definition here
    var output = "";
    for (var i=0; i<length; i++){
        output+= "*";
    }
    return output;
}



function getBox(width, height) {
    // TODO - write method definition here
    var boxRow = "";
    var boxColumn = "";
    for(var i=1; i <= height; i++) {
        for (j=1; j<= width; j++) {
           boxRow += "*";
        } boxRow = boxRow +"\n";
    } return boxRow + boxColumn;
    
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
