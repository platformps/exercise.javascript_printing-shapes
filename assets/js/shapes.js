function getLine(length) {
    // TODO - write method definition here
    var answer = "";
    for(let x = 1; x <= length; x++){
        answer += "*";
    }
    return answer;
}



function getBox(width, height) {
    // TODO - write method definition here
    var answer = "";
    for(let x = 1; x <= height; x++){
        for(let y = 1; y <= width; y++){
            answer += "*";
        }
        answer += "\n";
    }
    return answer;
}



function getBottomLeftTriangle(length) {
    // TODO - write method definition here
    var answer = "";
    var loop = true;
    var count = 1;
    do{
        //Create current line
        for(let x = 1; x <= count; x++){
            answer += "*";
        }
        //Add new line if
        if(count != length){
            answer += "\n";
        }
        //Increment my counter
        count ++;
        if(count > length){
            loop = false;
        }
    }while(loop);
    return answer;
}


function getUpperLeftTriangle(length) {
    // TODO - write method definition here
    var answer = "";
    var loop = true;
    var count = length;
    do{
        //Create current line
        for(let x = 1; x <= count; x++){
            answer += "*";
        }
        //Add new line if
        if(count != 1){
            answer += "\n";
        }
        //Decrement my counter
        count --;
        if(count === 0){
            loop = false;
        }
    }while(loop);
    return answer;
}



function getPyramid(length) {
    // TODO - write method definition here
}


function getCheckerboard(width, height) {
    // TODO - write method definition here
}
