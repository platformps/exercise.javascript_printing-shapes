function getLine(length) {
  // TODO - write method definition here
  var str = "";
  for(var i=0; i<length; i++) {
    str+= "*";
  }
  return str;
}



function getBox(width, height) {
  // TODO - write method definition here
  var str = "";
  for(var i=0; i<height; i++) {
    for(var j=0; j<width; j++) {
     str += "*"; 
    }
    str += "\n";
  }
  return str;
}



function getBottomLeftTriangle(length) {
  // TODO - write method definition here
}


function getUpperLeftTriangle(length) {
  // TODO - write method definition here
var str = "";
for (var i = length; i > 0; i--) {
  for (var k = 0; k < i; k++) {
    str += "*";
  }
  if(i != 1) {
    str += "\n";
  }
}
return str;
}



function getPyramid(length) {
  // TODO - write method definition here
}


function getCheckerboard(width, height) {
  // TODO - write method definition here
}
