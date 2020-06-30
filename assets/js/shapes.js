function getLine(length) {
    let stars = "";
    for (let iterationCount = 1; iterationCount <= length; iterationCount++) {
        stars += "*";
    }

    return stars;
}



function getBox(width, height) {
    let stars = "";
    for (let iterationCount = 1; iterationCount <= height; iterationCount++) {
        for (let iterationCount = 1; iterationCount <= width; iterationCount++) {
            stars += "*";
        }
        stars += "\n";
    }

    return stars;
}


function getBottomLeftTriangle(length) {
    let stars = "";
    for (let iterationCount = 1; iterationCount <= length; iterationCount++) {
        for (let iterationCount2 = 1; iterationCount2 <= iterationCount; iterationCount2++) {
            stars += "*";
        }
        stars += "\n";
    }
    return stars;
}




function getUpperLeftTriangle(length) {
    let stars = "";
    for (let iterationCount = length; iterationCount > 0; iterationCount--) {
        for (let iterationCount2 = 1; iterationCount2 <= iterationCount; iterationCount2++) {
            stars += "*";
        }
        stars += "\n";
    }
    return stars;
}



function getPyramid(length) {
    let stars = "";
    for (var i = 0; i < length; i++) {
        var str = "";
        for (var j = 1; j < length - i; j++) {
            str = str + " ";
        }
        for (var k = 1; k <= (2 * i + 1); k++) {
            str = str + "*";
        }
        stars += str;
        stars += "\n";

    }

    return stars;

}



function getCheckerboard(width, height) {

}
