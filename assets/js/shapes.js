function getLine(length) {
    i=0; 
    let v1="" ;
    while(i<length)
    {
        v1+="*";
        ++i;
    }
    return v1;
}



function getBox(width, height) {
    // TODO - write method definition here
    i=0;
    j=0;
    let v1="" ;
    while(i<height)
    {
        while(j<width)
        {
            v1+="*";
            ++j;
        }
        j=0;
        v1+="\n"
        ++i
        
    }
    return v1
}



function getBottomLeftTriangle(length) {
    // TODO - write method definition here
    i = 0;
    j = 0;
    let v1 = ""
    while (i < length) {
        for (j; j <= i; j++) {
            v1 += "*";
        }
        j = 0;
        ++i
        if (i != length) {
            v1 += "\n"
        }
        
        

    }
    return v1;
}


function getUpperLeftTriangle(length) {
    // TODO - write method definition here
    i=length;
    j=0;
    let v1=""
    while(i>0)
    {
        for(i;j<i;j++)
        {
            v1+="*";
        }
        j=0;
        --i;
        if(i!=0)
        {
            v1+="\n";   
        }
    }
    return v1;
}



function getPyramid(length) {
    // TODO - write method definition here

}


function getCheckerboard(width, height) {
    // TODO - write method definition here
    i = 1;
    j = 1;
    let v1 = ""

    while (i <= height) {
        if (i % 2 == 0) {
            for (j; j <= width; j++) {
                if (j % 2 == 0) {
                    v1 += " ";
                }
                else {
                    v1 += "*";
                }
            }

        }

        else {
            for (j; j <= width; j++) {
                if (j % 2 == 0) {
                    v1 += "*";
                }
                else {
                    v1 += " ";
                }
            }

        }
        j = 1;
        ++i
        v1 += "\n"
        
    }
    return v1;
}
