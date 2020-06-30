function getLine(length) {
   let output = "";
   for(let i=0;i<length;i++)
   {
       output+="*"
   }
   return output;
  
}





function getBox(width, height) {
    let output = "";
    for (let i=0;i<height;i++)
    {
        for (let j=0;j<width;j++)
        {
            output+="*"
        }
        output+="\n"
        }
    return output;
    
}



function getBottomLeftTriangle(length) {
    let output = "";
    for(let i=0;i<length;i++)
    {
        output+="*"
    }
    
    return output;
}




function getUpperLeftTriangle(length) {
    // TODO - write method definition here
}



function getPyramid(length) {
    // TODO - write method definition here
}


function getCheckerboard(width, height) {
    // TODO - write method definition here
}
