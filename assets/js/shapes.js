function getLine(length) {
    // TODO - write method definition here
    let output = "";
    for (let i=0; i<length; i++) {
        output +="*";
    }

    return output;
     
}




function getBox(width, height) {
    // TODO - write method definition here
   var cH=0;
   var cW=0;
   var box= "";
   while(cH<height) {
       cW=0;
       while(cW<width){
        box +="*";
        cW++;}
        box+="\n";
        cW=0;
        cH++;
    } 

    return box;
}




function getBottomLeftTriangle(length) {
    // TODO - write method definition here
    var output"";
    for(i=1; i<=length; i++) {
        output=output + getLine(i) + "\n";
    }
    return output;
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
