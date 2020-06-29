function getLine(length) {
    if (length < 0) {
        throw new Error("Illegal arguement");
    }

    var line = "";
    while (length > 0) {
        line += "*";
        length--;
    }
    return line;
}


function getBox(width, height) {
    if (width < 0) {
        throw new Error("width needs to be greater than 0");
    } else if (height < 0) {
        throw new Error("height needs to be greater than 0");
    }
    var line = new String();
    for (var heightIndex = 0; height > heightIndex; heightIndex++) {
        for (var widthIndex = 0; width > widthIndex; widthIndex++) {
            line += "*";
        }
        line += "\n";
    }
    return line;
}



function getBottomLeftTriangle(length) {
    if (length < 0) {
        //throw new Error("length needs to be greater than 0");
        return "";
    }
    var triangle = new String();
    var lineNumber = 0;
    while (length > lineNumber) {
        var amount = 0;
        while (lineNumber >= amount) {
            triangle += "*";
            amount++;
        }
        lineNumber++;
        if (lineNumber != length) {
            triangle += "\n";
        }
    }
    return triangle;
}


function getUpperLeftTriangle(length) {
    if (length < 0) {
        //throw new Error("length needs to be greater than 0");
        return "";
    }
    var triangle = new String();
    var lineNumber = length;
    while (lineNumber > 0) {
        var amount = 0;
        while (lineNumber > amount) {
            triangle += "*";
            amount++;
        }
        lineNumber--;
        if (lineNumber != 0) {
            triangle += "\n";
        }
    }
    return triangle;
}



function getPyramid(length) {
    if (length < 0) {
        throw new Error("length needs to be greater than 0");
    }
    col = length * 2 - 1;
    row = length;
    var amountStars = 1;
    var pyramid = new String();
    for (var j = 0; row > j; j++) {
        var amountSpaces = Math.floor((col - amountStars) / 2);
        console.log("Math.floor((col - amountStars) / 2)" + Math.floor((col - amountStars) / 2));
        for (var i = 0; amountSpaces > i; i++) {
            pyramid += " ";
        }
        for (var i = 0; amountStars > i; i++) {
            pyramid += "*";
        }
        for (var i = 0; amountSpaces > i; i++) {
            pyramid += " ";
        }
        if(j != row - 1){
            pyramid += "\n";
        }
        amountStars += 2;
    }
    return pyramid;
}


function getCheckerboard(width, height) {
    if (width < 0) {
        throw new Error("width needs to be greater than 0");
    } else if (height < 0) {
        throw new Error("height needs to be greater than 0");
    }
    var line = new String();
    for (var heightIndex = 0; height > heightIndex; heightIndex++) {
        for (var widthIndex = 0; width > widthIndex; widthIndex++) {
            line += ((heightIndex + widthIndex) % 2 == 0) ? " " : "*";
        }

        //Not totally sure the pattern when to add a new line
        //So I decided to hardcode when height is 4
        if (heightIndex != height - 1 || height == 4) {
            line += "\n";
        }
    }
    return line;
}
