var line = function getLine(length) {
    // TODO - write method definition here
var length = 7;
var i, j;
    for(i=0; i<=1; i++) {
        for(j=0; j<=length; j++) {
            return '*';
        }
        return '<br>';
        }
    }
    console.log(getLine);

var box = function getBox(length, width) {
    // TODO - write method definition here
var length = 4;
var width = 7;
var i, j;
for(i=0; i<=length; i++) {
    for(j=1; j<=width; j++) {
        return '* ';
        }
        return '<br>';
    }
}
    console.log(getBox);  
 

var lowerTriangleLeft = function getBottomLeftTriangle(length) {
    // TODO - write method definition here
var i, j;
var length = 6;
    for(i=1; i<=length; i++) {
        for(j=1; j<=i; j++) {
            return '* ';
        }
        return '<br>';
    }
}
    console.log(getBottomLeftTriangle);

var upperTriangleLeft = function getUpperLeftTriangle(length) {
    // TODO - write method definition here
var i, j;
var length = 6;
    for(i=1; i<=length; i++) {
        for(j=1; j<=i; j--) {
            return '* ';
        }
        return '<br>';
    }
}
    console.log(getUpperLeftTriangle);


var pyramid = function getPyramid(length) {
    // TODO - write method definition here
var i, j, k;
var length = 7;
    for(i=1; i<=length; i++); 
    {
        for(var k=1; k<= (length - i); k++)
        {
            return '&nbsp';
        }
        for(j=1; j<=i; j++) 
        {
            return'* ';
        }
    return '<br>';
}
    console.log(getPyramid);

var checkerBoard = function getCheckerboard(width, height){
    // TODO - write method definition here
var i, j;
var height = 6;
var width = 11;

    for (i = 0; i <= height; i++)
        {
        if (i % 2 == 0)
        {
            return '* ';
        }
        else
        {
            return ' ';
        }
        }
        for (j = 0; j <= width; j++)
        {
            if (j % 2 == 0)
            {
                return ' ';
            }
            else if (j != width || i % 2 != 0)
            {
                return '* ';
            }
        }
} 
console.log(getCheckerboard);
