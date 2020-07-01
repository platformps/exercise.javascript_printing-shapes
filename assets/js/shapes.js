


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
    for (let i=1; i<=length; i++){
        for (let j=0; j<i; j++){
        output += "*";
        }
        output = output + "\n";
    }
    return output;
    }


//Top Left Triangle
function getUpperLeftTriangle(length) {
    let output = "";
    for (let i=0; i<length; i++){
        for (let j=length; j>i; j--){
        output += "*";
        }
        output += "\n";
    }
    return output;
    }


//Pyramid
function getPyramid(length) 
{
    let output = "";
    for (let i=0; i<length; i++)
    {
        for(let j=1; j<length-i; j++)
        {
            output+= " ";
        }
         for(let k=1; k<=(i * 2 + 1); k++)
            { 
              output+= "*";
            }
            output+= "\n";
    }    
           return output;
}


//Checkerboard
function getCheckerboard(width, height) {
    let output1 = "";
    let output2 = "";
    
    for (let i=0; i<width; i++){
        output1 += "*";
        output1 += " ";
    }
    for (let i=0; i<height; i++){
        output2 += output1 + "\n";
    }
return output2;
}