function getLine(length) {
    // TODO - write method definition here
    var output = "";
    while(length !=0)
    {
        output += "*";
        length--;
    }
    return output;
}



function getBox(width, height) {
    // TODO - write method definition here
    var output = "";
    var w = width;
    while(height > 0)
    {
        while(w > 0)
        {
            output += "*";
            w--;
        }
        output += "\n";
        height--;
        w = width;
    }
    return output;

}



function getBottomLeftTriangle(length) {
    // TODO - write method definition here
    var output = "";
    var count = 1;
    while(length > 0)
    {
        for (var cnt = count; cnt > 0; cnt--)
        {
            output += "*";
        }
        if (length != 1)
            output += "\n";
        count++;
        length--;

    }
    return output;
}


function getUpperLeftTriangle(length) {
    // TODO - write method definition here
    var output = "";
    var count = length;
    while(length > 0)
    {
        for (var cnt = count; cnt > 0; cnt--)
        {
            output += "*";
        }
        if (length != 1)
            output += "\n";
        count--;
        length--;

    }
    return output;
}




function getPyramid(length) {
    // TODO - write method definition here
    var output = "";
    var printSpace = length - 1;
    var printAsterics = length - printSpace;
    while (length > 0) 
    {
       /* for(var count = 0; count < length; count++)
        {*/
            for (var printS = printSpace; printS > 0; printS--) 
            {
                output += " ";
            }
            for (var printA = printAsterics; printA > 0; printA--)
            {
                output += "*";
            }
            for (var printS = printSpace; printS > 0; printS--) 
            {
                output += " ";
            }
      /*  }*/
      if (length != 1)
        output += "\n";
        length--;
        printSpace--;
        printAsterics += 2;
            
    }
    
    return output;
}



function getCheckerboard(width, height) {
    // TODO - write method definition here
    var output = "";
    /* print width no. of stars in two lines. print a total of height no. of lines. */
   output = parseInt(11/2);
     return output;
}
