


//Line
  function getLine(length) {

let output = "";
for (let i=0; i<length; i++){
    output += "*";
}
return output;
}


//Box
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


//Bottom Left Triangle
function getBottomLeftTriangle(length) {
    let output = "";
    for (let i=0; i<length; i++){
        output += "*";
        for (let j=1; j<i; j++){
        output += "\n"
        }
    }
    return output;
    }


//Top Left Triangle
function getUpperLeftTriangle(length) {
    let output = "";
    for (let i=0; i<length; i++){
        output += "*";
    }
    return output;
}


//Pyramid
function getPyramid(length) {
    let output = "";
    for (let i=0; i<length; i++){
        output += "*";
    }
    return output;
}


//Checkerboard
function getCheckerboard(width, height) {
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