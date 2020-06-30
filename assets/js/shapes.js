function getLine() {

   var output="";
   var length=prompt("enter the length");
   for(var i=0;i<length;i++)   {
     output+="*";
   }
   return output;
 }

// TODO - write method definition here
function getBox() {
   let output="";
   var width=prompt("enter the width");
   var height=prompt("enter the height");
 for(let row=1;row<=width;row++) {
    output="";
    for(let column=1;column<=height;column++)    {
     output +="*";
   }
    console.log("\n"+"Column "+output);
   }
 }
      // TODO - write method definition here




function getBottomLeftTriangle() {
    var output ="";
    var length=prompt("enter the length");
    for(i=0;i<=length;i++)
    {
       output += "*";
       console.log(output +"\n");
    }

    // TODO - write method definition here
}


function getUpperLeftTriangle() {
  var output="";
  var length=prompt("enter the length");
  for(i=length;i>=1;i--)
  {
    output="";
    for(j=1;j<=i;j++)
    {
        output +="*";
    }
    console.log(output +"\n");
    }
}



function getPyramid(length) {
    // TODO - write method definition here
}


function getCheckerboard(width, height) {
    // TODO - write method definition here
}
