function getLine(length) {

  let str = "";
  for(let spot=1; spot<=length; spot++) {
    str+= "*";
  }
  return str;
}



function getBox(width, height) {

  let str = "";
  for(let level=1; level<=height; level++)
     str += getLine(width) + "\n"; 
  return str;

}



function getBottomLeftTriangle(length) {

  let str = "";
  
  for(let level = 1; level<=length; level++)
    str += getLine(level) + (level!=length ? "\n" : "");

  return str;
}



function getUpperLeftTriangle(length) {
  
  let str = "";
  
  for(let level=length; level > 0; level--)
    str += getLine(level) + (level!=1 ? "\n" : "");

  return str;
}



function getPyramid(length) {

  let str = "";
  
  for(let level=1; level<=length; level++) {

    let spaces = "";
    for(let i=0; i<length-level; i++)
      spaces += " ";

    let thisLevelWidth = 2*level - 1;    
    str += spaces + getLine(thisLevelWidth) + spaces + (level<length ? "\n" : "");

  }

  return str;
}


function getCheckerboard(width, height) {

  let str = "";

  for(let level=1; level<=height; level++) {
    
    let isOddLayer = (level % 2) == 1;
    
    for(let slot=1; slot<=width; slot++) {
      
      let isOddSlot = (slot % 2 == 1);
      
      if (isOddLayer)
        str += isOddSlot ? " " : "*";
      else
        str += isOddSlot ? "*" : " ";
    
    }

    str += "\n";
  }

  return str;
}
