function getLine(length) {
    // TODO - write method definition here
    //length= prompt("Please Enter desired line length");
    if(length==1){
        return "*";
    }else if(length==2){
        return "**";
    }else return "***";
}


function getBox(width, height) {
    let output="";
    for(let i=0;i<height; i++){
        for(let j=0;j<width; j++){
            output +="*";
        }
        output +="\n";
        }
        return output;
    }
    



function getBottomLeftTriangle(length) {
    // TODO - write method definition here
    let output="";
    for (var i = 1; i <= length; i++) {
        output += '*'.repeat(i) + "\n";
    }
    return output;
}
    



function getUpperLeftTriangle(length) {
    // TODO - write method definition here
    let output="";
    for(let i=0;i<length; i++){
        for(let j=i;j<length; j++){
            output +="*";
        }
        output +="\n";
        }
        return output;
}



function getPyramid(length) {
    // TODO - write method definition here
    
        let output= "";
        for(let i = 0; i <= length; i++){
            if (i %2 != 0){
                for(let j = 0; j < i; j){
                    output = output + "*";
                }
            }
            output = output + "\n";
        }
        return output;
    }
    



function getCheckerboard(width, height) {
    // TODO - write method definition here
    let i = 1;
    let j = 1;
    let output = "";
    while (i <= height) {
        if (i % 2 == 0) {
            for (j; j <= width; j++) {
                if (j % 2 == 0) {
                   output += " ";
                }
                else {
                   output += "*";
                }
            }
        }
        else {
            for (j; j <= width; j++) {
                if (j % 2 == 0) {
                   output+= "*";
                }
                else {
                    output+= " ";
                }
            }
        }
        j = 1;
        ++i
        if (i <= height) {
            output+= "\n"
        }
        output += "\n"

    }
    return output;
}

