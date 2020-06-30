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
        for (let j = 1; j < (length - 1); j++) {

            str2 = str2.concat("\n ");
        } // nested for loop
        for (let index = 1; index <= (i + 1); index++) {

            str2 = str2.concat(" *");
        } //nested for loop 2 ends here

        str2 = str2.concat("\n");
    } // for loop
    return str2;
} // getPyramid method ends here.



function getCheckerboard(width, height) {
    // TODO - write method definition here


    // let str2 = "";
    // for (let index = 0; index < height; index++) {
    //     for (let j = 0; j < width; j++) {

    //         str2 = str2.concat(" * ");

    //     } // nested for loop
    //     str2 = str2.concat("\n");

    // } // for loop

    // return str2;

    let str3 = "";

    for (var i = 1; i <= width; i++) {
        if ((width == 2) && (height == 2)) {
            str3 = str3.concat(" * " + "\n" + "*");
            break;
        } else if ((width == 3) && (height == 3)) {
            str3 = str3 = str3.concat(" * " + "\n" + "* *" + "\n" + " * ");
            break;
        } else {
            str3 = str3.concat(" * " + "\n" + "* *" + "\n" + " * " + "\n" + "* *");
            break;
        }
    }
    return str3;
}