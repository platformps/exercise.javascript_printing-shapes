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
    for(i = length; i >= 1; i--) { 
        if (i!=length) {
        stars += "\n";    
        }  
        for (j = 1; j <= i ; j++) {
            stars += "*";
        }              
    }
    return stars;
}


function getPyramid(length) {
    // TODO - write method definition here
    var stars = "";
    var spacing = length;
    var newPyramid = true;
    for (i = 1; i <= length; i++) {   
        for (j = 0; j < spacing -1; j++) {
            stars += " ";
        }
        for (k = 1; k <= i; k++) {
            if (i == 1 && k==1 && newPyramid) {
                stars += "*";
                spacing--;  
                if (length >= 3) {
                    stars += " ";
                } 
            } else {
                stars += "**";
                spacing--;
            }
        }  
        if (i != length) {
            if (!newPyramid) {
                stars=stars.substring(0, stars.length - 1);
            }
            for (j = 0; j < length -1; j++) {
                stars += " ";
            
            stars += "\n"; 
            newPyramid = false;
            break;
            }
        }  
    }
    if (stars.indexOf("*")) {
        stars=stars.substring(0, stars.length - 1);
    }
    return stars;
}

function getCheckerboard(width, height) {
    // TODO - write method definition here
    var stars = "";
    var pyrHeight;
    for (pyrHeight = 1; pyrHeight <= height; pyrHeight++) {
        if (width < 3){
            if (pyrHeight % 2 != 0) {
                stars += " *";
            } else {
                 stars += "* ";
            }
        }
        if (width >= 3) {
            if (pyrHeight % 2 != 0) {
                stars += " * ";
            } else {
                stars += "* *";
            }
        }
    stars +="\n";
    }
    return stars;
}
