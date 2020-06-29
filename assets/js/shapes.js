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
  for (iterationCounter = 0; iterationCounter < length; iterationCounter++) {
    for (
      iterationCounter_2 = 0;
      iterationCounter_2 < iterationCounter;
      iterationCounter_2
    ) {
      output += "*";
    }
    output += "br/>";
  }
}

function getUpperLeftTriangle(length) {
  // TODO - write method definition here
}

function getPyramid(length) {
  // TODO - write method definition here
}

function getCheckerboard(width, height) {
  // TODO - write method definition here
}
