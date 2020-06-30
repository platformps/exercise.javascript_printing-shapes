function getLine(length) {
var str="";
for(var i=0;i<length;i++){
str+="*";}
return str;
}


function getBox(width, height) {
var str="";
for(var i=0;i<height;i++){
for(var s=0;s<width;s++){
str+="*";}
str+="\n";}
return str;
}


function getBottomLeftTriangle(length) {
var str="";
for(s=1; s<=length; s++){
str+= getLine(s) + "\n";}
return str;
}

function getUpperLeftTriangle(length) {
 
}



function getPyramid(length) {
    // TODO - write method definition here
}


function getCheckerboard(width, height) {
    // TODO - write method definition here
}
