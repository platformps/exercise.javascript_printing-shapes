function getLine(length) {
    // TODO - write method definition here
    switch (length) {
        case 1:
            return "*";
            break;
        case 2:
            return "**";
            break;
        default:
            return "***";
            break;
    }

}



function getBox(width, height) {
    // TODO - write method definition here

    let str2 = "";
    for (let index = 0; index < height; index++) {
        for (let j = 0; j < width; j++) {

            str2 = str2.concat("*");

        } // nested for loop
        str2 = str2.concat("\n");

    } // for loop

    return str2;
}



function getBottomLeftTriangle(length) {
    // TODO - write method definition here

    let str2 = "";
    for (let i = 0; i <= length; i++) {
        for (let j = 0; j < i; j++) {

            str2 = str2.concat("*");


        } // nested for loop
        str2 = str2.concat("\n");

    } // for loop

    return str2;
}


function getUpperLeftTriangle(length) {
    // TODO - write method definition here
    let str2 = "";
    for (let i = 1; i <= length; i++) {
        for (let j = i; j <= length; j++) {

            str2 = str2.concat("*");


        } // nested for loop
        str2 = str2.concat("\n");

    } // for loop

    return str2;
}



function getPyramid(length) {
    // TODO - write method definition here

    let str2 = "";

    for (let i = 1; i <= length; i++) {
        for (let j = 0; j < (length - i); j++) {

            str2 = str2.concat("\n");
        } // nested for loop
        for (let index = 1; index <= i; index++) {

            str2 = str2.concat("*");
        }

        str2 = str2.concat("\n");
    } // for loop
    return str2;
}



function getCheckerboard(width, height) {
    // TODO - write method definition here


    let str2 = "";

    for (let i = 1; i <= length; i++) {
        for (let j = 0; j < (length - i); j++) {

            str2 = str2.concat("\n");
        } // nested for loop
        for (let index = 1; index <= i; index++) {

            str2 = str2.concat("*");
        }

        str2 = str2.concat("\n");
    } // for loop
    return str2;
}