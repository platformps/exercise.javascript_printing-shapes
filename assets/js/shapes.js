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
  var str = "";
  for (var i = 1; i <= length; i++) {
    for (var j = 0; j < i; j++) {
      str += "*";
    }
    if (i != length) {
      str += "\n";
    }
  }

  return str;
}



function getUpperLeftTriangle(length) {
  // TODO - write method definition here
  var str = "";
  for (var i = length; i > 0; i--) {
    for (var k = 0; k < i; k++) {
      str += "*";
    }
    if (i != 1) {
      str += "\n";
    }
  }
  return str;
}



function getPyramid(length) {
  // TODO - write method definition here
  var str = "";
  for (var layer = 1; layer <= length; layer++) {

    //add leading spaces
    for (var j = 0; j < length - layer; j++) {
      str += " ";
    }
    //add asterisks
    for (var j = 0; j < 2 * layer - 1; j++) {
      str += "*";
    }
    //addiing spaces
    for (var j = 0; j < length - layer; j++) {
      str += " ";
    }
    str += (layer<length ? "\n" : "");
  }
  return str;
}


function getCheckerboard(width, height) {
  // TODO - write method definition here
  var str = "";

  for (var layer = 1; layer <= height; layer++) {
    var isOddLayer = (layer % 2) == 1;
    for (var slot = 1; slot <= width; slot++) {
      var isOddSlot = (slot % 2 == 1);
      if (isOddLayer) {
        str += isOddSlot ? " " : "*";
      }
      else {
        str += isOddSlot ? "*" : " ";
      }
    }
    str += "\n";
  }
  return str;
}
