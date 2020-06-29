function getLine(length) {
    return "*".repeat(length);
    // TODO - write method definition here
}



function getBox(width, height) {
    var box = "";
    for (var i = 0; i <height; i++ ){
         box = box + getLine(width) + "\n";
    }
    return box;
    // TODO - write method definition here
}



function getBottomLeftTriangle(length) {

    var bottomTriangle ="";
    for (var i = 1; i <=length; i++){
        bottomTriangle = bottomTriangle + getLine(i);
        if (i != length){
            bottomTriangle = bottomTriangle + "\n";
        }
    }
    return bottomTriangle;
    // TODO - write method definition here
}


function getUpperLeftTriangle(length) {
    
    var topTriangle = "";
    for (var i = length; i>0; i--){
        topTriangle = topTriangle + getLine(i);
        if (i != 1){
            topTriangle = topTriangle + "\n";
        }
    }
    return topTriangle;
    // TODO - write method definition here
}



function getPyramid(length) {
    var pyramid = "";
    var j = 1;
    var size = length -1;
    for (var i = 0; i < length; i++){
        pyramid = pyramid +  " ".repeat(size) + getLine(j) + " ".repeat(size); 
        j = j + 2;
        size = size - 1;
        if (i != length-1){
            pyramid = pyramid + "\n";
        }
    }
    return pyramid;
    // TODO - write method definition here
}


function getCheckerboard(width, height) {
    var checkerBoard ="";
    var tempLine1 = "";
    var tempLine2 = "";
    for (var i = 0;i<width;i++){
        if(i%2 == 0){
            tempLine1 = tempLine1 + " ";
            tempLine2 = tempLine2 + "*";
        }
        else{
            tempLine1 = tempLine1 + "*";
            tempLine2 = tempLine2 + " ";
        }
    }

    for (var i = 0; i< height;i++){
        if(i%2 == 0){
            checkerBoard = checkerBoard + tempLine1 + "\n";
        }
        else{
            checkerBoard = checkerBoard + tempLine2 + "\n";
        }
    }
    return checkerBoard;
    // TODO - write method definition here
}

