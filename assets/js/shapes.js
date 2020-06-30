function getLine(length) {
  let output = "";
  let iterationCounter = 0;
  for (iterationCounter; iterationCounter < length; iterationCounter++) {
    output += "*";
  }
  return output;
}

function getBox(width, height) {
  let output = "";
  let iterationCounter;
  let iterationCounter_2;

  for (iterationCounter = 0; iterationCounter < height; iterationCounter++) {
    for (
      iterationCounter_2 = 0;
      iterationCounter_2 < width;
      iterationCounter_2++
    ) {
      output += "*";
    }
    output += "\n";
  }
  return output;
}

function getBottomLeftTriangle(length) {
  let iterationCounter;
  let iterationCounter_2;
  let output = "";
  for (iterationCounter = 1; iterationCounter <= length; iterationCounter++) {
    for (
      iterationCounter_2 = 0;
      iterationCounter_2 < iterationCounter;
      iterationCounter_2++
    ) {
      output += "*";
    }
    output += "\n";
  }
  return output;
}

function getUpperLeftTriangle(length) {
  let output = "";
  let iterationCounter;
  let iterationCounter_2;

  for (iterationCounter = length; iterationCounter >= 1; iterationCounter--) {
    for (
      iterationCounter_2 = length - 1;
      iterationCounter_2 >= length - iterationCounter;
      iterationCounter_2--
    ) {
      output += "*";
    }

    output += "\n";
  }
  return output;
}

function getPyramid(length) {
 let shape="";
 let iterationCounter;
 let iterationCounter_2;
 let iteration_Counter_3;
 let line;
 if (length ==0 || length==1) return getLine(length);
 for (iterationCounter=1; iterationCounter<=length;iterationCounter++){
     line = "";
     for (iterationCounter_2=1 ;iterationCounter_2<=length;iterationCounter_2++){
         line +=" ";

     }
     for (iteration_Counter_3=1;iteration_Counter_3<=iterationCounter+2; iteration_Counter_3++{
         line+="*";
         shape+= line + "\n";
     }
    }
     return shape;
}



function getCheckerboard(width, height) {
    let output="";

    let iterationCounter;
    let iterationCounter_2;
    let iteration_Counter_3=1;
    
    for( iterationCounter = 1; iterationCounter <= height; iterationCounter++) {
        for(iterationCounter_2 = width; iterationCounter_2 > 0; iterationCounter_2--) {
            if(iteration_Counter_3 % 2 == 0) {
                output += "*"; 
            }
            else {
                output += " "; 
            }
            iteration_Counter_3++; 
        }
        if(width % 2 == 0) { iteration_Counter_3++; } 
        output += "\n";
    }
    return output;

}
