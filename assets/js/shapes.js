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
    for(let i=1;i<=length;i++)
    {
        if(i>1){output=output+"\n";}
        for(let j=1;j<=i;j++)
        {
            output+="*";
        }
        
    }  
    return output;
}




function getUpperLeftTriangle(length) {

    let output = "";
    for(let i=1;i<=length;i++)
    {
        if(i>1){output=output+"\n";}
        for(let j=length;j>=i;j--)
        {
            output+="*";
        }
        
    }  
    return output;
    
}



function getPyramid(length) {
    let output = "";
    for(let i=1;i<=length;i++)
    {
        if (i >1) {output +="\n";}
        //let output = '';
        for(let j=1; j<=(2*length-1);j++){
            
            (j>=length+1-i && j<=length-1+i) ? output +="*" : output += " ";
        }   
    }  
    return output;
}


function getCheckerboard(width, height) {
    let output = "";
    for(let i=1;i<=width;i++)
    {
        if (i >1) output +="\n";
        //let output = '';
        for(let j=1; j<=height;j++){
            
            (j>=width+1-i && j<=height-1+i) ? output +="*" : output += " ";
        }   
    }  
    return output;
}
