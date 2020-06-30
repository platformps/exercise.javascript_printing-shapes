

  function getLine(length) {

let output = "";
for (let i=0; i<length; i++){
    output += "*";
}
return output;
}


//
 function getBox(width, height) {
    let output1 = "";
    let output2 = "";
    
    for (let i=0; i<width; i++){
        output1 += "*";
    }
    for (let i=0; i<height; i++){
        output2 += output1 + "\n";
    }
return output2;
}


//
function getBottomLeftTriangle(length) {
    let output = "";
    for (let i=0; i<length; i++){
        output += "*";
    }
    return output;
}


//
function getUpperLeftTriangle(length) {
    let output = "";
    for (let i=0; i<length; i++){
        output += "*";
    }
    return output;
}


//
function getPyramid(length) {
    let output = "";
    for (let i=0; i<length; i++){
        output += "*";
    }
    return output;
}



//
function getCheckerboard(width, height) {
    let output = "";
    for (let i=0; i<width; i++){
        output += "*";
    }
    return output;
}
