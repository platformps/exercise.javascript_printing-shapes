function getLine (length) {
    // TODO - write method definition here
let output = "";
    for(let i=0; i<7; i++){
        output += "*";
    }
    return output;
}

function getBox( 7, 4) {
    // TODO - write method definition here
    let output = " ";  
    for(let i=0; i<7; i++)
    {
    output += "*";
        for(let j=0; j<4; j++)
        {
        output += "*";
        }
        break
    }
    return output;
}
 

function getBottomLeftTriangle(length) {
    // TODO - write method definition here
let output = "";
for(let i=1; i<=6; i++)
{
output = "*";
    for(let j=1; j<=i; j++){
    output = "*";
    }
    break
}
    return output;
}

function getUpperLeftTriangle(length) {
    // TODO - write method definition here
    let output = "";
    for(let i=1; i<=5; i--)
    {
        for(let j=1; j<=i; j++){
        output = output + "*";
        }
        break
    }   
        return output;
    }


function getPyramid(length) {
    // TODO - write method definition here
for (let i = 0; i < n; i++) {
    let output = '';
    for (let j = 1; j < n-i; j++) {
      output = output + ' ';
    }
    for (let k = 1; k <= (2*i+1); k++) {
      output = output + '*';
    }
    return output;
  }
}


function getCheckerboard(width, height) {
    // TODO - write method definition here
}
