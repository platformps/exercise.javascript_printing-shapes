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
    var hCount = 0;
    var wCount = 0;
    var lineCount = 0;
    var checkerBoard = "";
    var currentLineCharCount = 0;

    for(var hCount = 0; hCount < height; hCount++){
        for(wCount = 0; wCount < width; wCount++){
            if(hCount % 2 == 0){
                if(wCount % 2 == 0){
                    checkerBoard += " ";
                }
                else{
                    checkerBoard += "*";
                }
            }
            else{
                if(wCount % 2 == 0){
                    checkerBoard += "*";
                }
                else{
                    checkerBoard += " ";
                }
            }
        }
        checkerBoard += "\n";
    }
    
    return checkerBoard;
}
