function getLine(length) {

    var line = "";
    for(var count = 0; count < length; count++){
        line += "*";
    }
    return line;
}



function getBox(width, height) {
   
    var hCount = 0;
    var wCount = 0;
    var box = "";
    while(hCount < height){
        wCount = 0;
        while(wCount < width){
            box += "*"
            wCount++;
        }
        box += "\n";
        wCount = 0;
        hCount++;
    }
   return box;
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
