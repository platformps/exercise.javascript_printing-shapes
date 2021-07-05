function getLine(length) {
    // TODO - write method definition here
    var output = "";
    for (var i=0; i<length; i++){
        output+= "*";
    }
    return output;
}



function getBox(width, height) {
    // TODO - write method definition here
    var boxRow = "";
    var boxColumn = "";
    for(var i=1; i <= height; i++) {
        for (j=1; j<= width; j++) {
           boxRow += "*";
        } boxRow = boxRow +"\n";
    } return boxRow + boxColumn;
    
}
   


function getBottomLeftTriangle(length) {
    // TODO - write method definition here
    var output = "";
    for (var i=1; i <=length; i++){
        for(j=0; j<i; j++){
            output+= "*";
        } output = output + "\n";
    } return output;

}


function getUpperLeftTriangle(length) {
    // TODO - write method definition here
    var output = "";
        for (var i=0; i <length; i++){
            for(j=length; j>i; j--){
                output+= "*";
            } output = output + "\n";
            
        } return output;
}



function getPyramid(length) {
    // TODO - write method definition here
    var output = "";
for(i=1;i <=length; i++){
  for(k=1; k<=length-i; k++){
    output+= " ";
  }
  for(j=1; j<=i;j++ ){
    for(l=1; l<j; l++){
       output+= "*";
    }
    output+= "*";
    
  }
  output += "\n";
} output += "\n";
    
    return output;
}

function getCheckerboard(width, height) {
    // TODO - write method definition here
 
var output = "";
var check;
for (i=0; i< height; i++){
  if(i % 2){
    check= "* ";
  } else {
    check= " *";
  }
  for(j=0; j< height/2; j++){
    output+= check;
  }
   output+=  "\n";
} return output;
}
