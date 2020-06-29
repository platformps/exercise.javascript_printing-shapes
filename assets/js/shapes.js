function getLine(length) {
    var stars = "";
    for (var starLength=0; starLength < length; starLength++) {
        stars = stars + "*";
    }
    return stars;
}



function getBox(width, height) {
    // TODO - write method definition here
    var stars = "";
    for(rows = 0; rows < height; rows++) {       
        for (columns = 0; columns < width; columns++) {
            stars += "*";
        }  
        stars += "\n";      
    }
    return stars;
}



function getBottomLeftTriangle(length) {
    // TODO - write method definition here
    var stars = "";
    for(i = 1; i <= length; i++) {       
        for (j = 0; j < i; j++) {
            stars += "*";
        }  
        if (i != length) {
            stars += "\n"; 
        }  
    }
    return stars;
}


function getUpperLeftTriangle(length) {
    // TODO - write method definition here
    var stars = "";
    for(i = 1; i <= length; i++) {       
        for (j = length; j < i; j--) {
            stars += "*";
        }  
        if (i != length) {
            stars += "\n"; 
        }  
    }
    return stars;
}



function getPyramid(length) {
    // TODO - write method definition here
}


function getCheckerboard(width, height) {
    // TODO - write method definition here
}
