/*  Get a Simple Line
    length : length of the line
    return : String that resembles a line consisting of *
*/
function getLine(length) {
    if (length < 0) {
        throw new Error("Illegal arguement - length needs to be greater than 0");
    }

    var line = "";
    while (length > 0) {
        line += "*";
        length--;
    }
    return line;
}

/*  Get a Box
    width : width of box
    height : height of box
    return : String that resembles a box that consists of *
*/
function getBox(width, height) {
    if (width < 0) {
        throw new Error("Illegal arguement - width needs to be greater than 0");
    } else if (height < 0) {
        throw new Error("Illegal arguement - height needs to be greater than 0");
    }

    var line = new String();
    for (var heightIndex = 0; height > heightIndex; heightIndex++) {
        for (var widthIndex = 0; width > widthIndex; widthIndex++) {
            line += "*";
        }

        //All Boxes will have a \n at the end of each line (even last)
        line += "\n";
    }
    return line;
}


/*  Get a Right Triangle that Bottom is located bottom left
    length : of longest side of triangle
    return : String that resembles a right triangle
*/
function getBottomLeftTriangle(length) {
    if (length < 0) {
        throw new Error("length needs to be greater than 0");
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

        //Make sure every row besides last gets a new line
        if (lineNumber != length) {
            triangle += "\n";
        }
    }
    return triangle;
}

/*  Get a Right Triangle that Bottom is located top left
    length : of longest side of triangle
    return : String that resembles a right triangle
*/
function getUpperLeftTriangle(length) {
    if (length < 0) {
        throw new Error("Illegal arguement - length needs to be greater than 0");
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

        //Make sure every row besides last gets a new line
        if (lineNumber != 0) {
            triangle += "\n";
        }
    }
    return triangle;
}


/*  Get a Pyramid whose row = length and longest col = length * 2 - 1
    length : amount of rows the pyramid will have
    return : String that resembles a pyramid

    PS: I know there's an easier way to this but I couldn't think of it at this time.
    #TODO come back and figure out pattern to combine three inner for loops into one loop
*/
function getPyramid(length) {
    if (length < 0) {
        throw new Error("Illegal arguement - length needs to be greater than 0");
    }
    col = length * 2 - 1;
    row = length;
    var amountStars = 1;
    var pyramid = new String();
    for (var j = 0; row > j; j++) {

        //Calculate amount spaces on row
        var amountSpaces = Math.floor((col - amountStars) / 2);

        //Add first set of spaces
        for (var i = 0; amountSpaces > i; i++) {
            pyramid += " ";
        }

        //Add Stars
        for (var i = 0; amountStars > i; i++) {
            pyramid += "*";
        }

        //Add second set of spaces
        for (var i = 0; amountSpaces > i; i++) {
            pyramid += " ";
        }

        //Make sure every row besides last gets a new line
        if(j != row - 1){
            pyramid += "\n";
        }
        amountStars += 2;
    }
    return pyramid;
}

/*  Get a Checkerboard with "odd" cells = "*" and "even" = " "
    width : width of the checkerboard
    height : height of the checkerboard
    return : String that resembles a checkerboard type pattern.
*/
function getCheckerboard(width, height) {
    if (width < 0) {
        throw new Error("Illegal arguement - width needs to be greater than 0");
    } else if (height < 0) {
        throw new Error("Illegal arguement - height needs to be greater than 0");
    }

    var checkerboard = new String();
    for (var heightIndex = 0; height > heightIndex; heightIndex++) {
        for (var widthIndex = 0; width > widthIndex; widthIndex++) {
            //Depending on Cell position if x y added together is even than space otherwise *
            checkerboard += ((heightIndex + widthIndex) % 2 == 0) ? " " : "*";
        }

        //Every line gets a \n
        checkerboard += "\n";
    }
    return checkerboard;
}
