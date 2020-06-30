function getLine(length) {
    // TODO - write method definition here
    var output = "";
    for(var x = 0; x < length; x++) {
        output += "*";
    }
    return output;
}



function getBox(width, height) {
    // TODO - write method definition here
    var output = "";
    for(var x = 0; height > x; x++) {
        for(var y = 0; width > y; y++) {
            output += "*";
        }
        output += "\n";
    }
    return output;
}



function getBottomLeftTriangle(length) {
    // TODO - write method definition here
    var output = "";
    var count = 0;
    for(var x = 1; x <= length; x++) {
        for(count = x; count > 0; count--) {
            output += "*";
        }
        //add new line if not last line
        if(x != length) {
            output += "\n";
        }
    }
    return output;
}


function getUpperLeftTriangle(length) {
    // TODO - write method definition here
    var output = "";
    var count = 0;
    for(var x = length; x > 0; x--) {
        for(count = x; count > 0; count--) {
            output += "*";
        }
        //add new line if not last line
        if(x != 1) {
            output += "\n";
        }
    }
    return output;
}



function getPyramid(length) {
    // TODO - write method definition here
    var output = "";
    for(var tier = 1; tier <= length; tier++) {
        //leading spaces
        for(var y = tier; y < length; y++) {
            output += " ";
        }
        //asterisk
        for(var z = 1; z <= 2*tier - 1; z++) {
            output += "*";
        }
        //trailing spaces
        for(var y = tier; y < length; y++) {
            output += " ";
        }
        //add new line if not last line
        if(tier < length) { output += "\n" }
    }
    return output;
}


function getCheckerboard(width, height) {
    // TODO - write method definition here
    var output = "";
    var count = 1;
    for(var line = 1; line <= height; line++) {
        for(var x = width; x > 0; x--) {
            if(count % 2 == 0) {
                output += "*"; 
            }
            else {
                output += " "; 
            }
            count++; 
        }
        if(width % 2 == 0) { count++; } //needed to alternate pattern on even width
        output += "\n";
    }
    return output;
}
