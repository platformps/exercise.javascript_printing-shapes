function getLine(length) {
    // TODO - write method definition here
var lLength= length; 
var rLine="";
while(0 != lLength){
   rLine = rLine +"*";
    lLength --;
}
return rLine;
}



function getBox(width, height) {
    // TODO - write method definition here
var lheight=height;
var lLength= width; 
var rLine="";

while(0 != lheight){
while(0 != lLength){
   rLine = rLine +"*";
    lLength --;
}
rLine = rLine+"\n";
lheight--;
lLength =width;
}
return rLine;
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
var width = width;
var height = height;
var middle = width;
var topr =width;
var rLine="";

while(0 != height){
while(0 != topr){
   rLine = rLine +" *";
    topr = topr -2;
    if(topr == 1)topr=0;

}
rLine = rLine+"\n";
while(0 != middle){
    rLine = rLine +"* ";
    middle = middle - 1;
    if(middle ==1) middle=0;

}
rLine = rLine+"\n";
height = height -2;
middle =width;
topr= width;
if(height == 1){
    while(0 != topr){
        rLine = rLine +" *";
         topr = topr -2;
         if(topr == 1)topr=0;
     
     }
     height = 0;
}
}
return rLine;
}