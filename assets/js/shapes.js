function getLine(length) {
    var str = "";
    for(var i = 0; i < length; i++){
    str = str + "*";
    }
    return str;
}



function getBox(width, height) {
    var str = "";
    for(var i = 0; i < height; i++){
      for(var j = 0; j < width; j++){
         str = str + "*";
      }
      str = str + "\n";
    }
    return str;
}



function getBottomLeftTriangle(length) {
    var str = "";
    for(var index = 1; index <= length; index++) {
       for(var num = 0; num < index; num++) {
          str = str + "*";
       }
       str = str + "\n";
    }
    return str.slice(0,-1);
}


function getUpperLeftTriangle(length) {
    var str = "";
    for(var index = length; index >= 1; index--) {
       for(var num = 0; num < index; num++) {
          str = str + "*";
       }
       str = str + "\n";
    }
    return str.slice(0,-1);
}



function getPyramid(length) {
    var str = "";
    for(var j = 1, i = 1, num = length-1; j <= length; j++, i=i+2, num--){
        var temp = num;
	while(temp > 0){
           str = str + " ";
           temp --;
        }
        temp = i;
        while(temp > 0){
        str = str + "*";
        temp --;
        }
        temp = num;
	while(temp > 0){
           str = str + " ";
           temp --;
        }
        str = str + "\n";
    }
    return str.slice(0,-1);
}


function getCheckerboard(width, height) {
    var str = "";
    for(var i = 0; i < height; i++){
      if(i%2 == 0) 
         var temp = 0;
      else var temp = 1;
      for(var j = 0; j < width; j++){
         if(temp == 0) {
             temp = 1;
             str = str + " ";
             continue;}
         else {
               str = str + "*";
               temp = 0;
              }
      }
      str = str + "\n";
    }
    return str.slice(0,-1);
}
