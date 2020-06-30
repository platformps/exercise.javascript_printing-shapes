getLineTests();
//getBoxTests();
getBottomLeftTriangleTests();
getUpperLeftTriangleTests();
//getPyramidTests();
//getCheckerboardTests(); **/





function getLineTests()
{
 var result;
  result = getLine();
 console.log("result=" +result);

  }


function testGetLine(expectedOutput, numberOfStars)
{

   let output =getLine(numberOfStars);

    console.log("output = \n" + output);





   /** console.log("Testing `" + methodName + "`");
    console.log("first argument = `" + arg1 + "`")
    console.log("second argument = `" + arg2 + "`")
    let output = func(arg1, arg2);
    let pass = output == expectedOutput
    console.log("output = \n" + output);
    console.log("expected = \n" + expectedOutput);
    console.log("test pass = " + pass);
    console.log("------------------------------------")
    console.log("------------------------------------") **/

}



function getBoxTests() {

getBox();
// console.log("output=" +output);
    //testGetBox("*\n", 1, 1);
    //testGetBox("**\n**\n", 2, 2);
   // testGetBox("***\n***\n***\n***\n", 3, 4);
}

function getBottomLeftTriangleTests() {
   getBottomLeftTriangle();
 //   testGetBottomLeftTriangle("*", 1);
  //  testGetBottomLeftTriangle("*\n**", 2);
  //  testGetBottomLeftTriangle("*\n**\n**", 3);
}

function getUpperLeftTriangleTests() {
  getUpperLeftTriangle();
  //  testGetUpperLeftTriangle("*", 1);
  //  testGetUpperLeftTriangle("**\n*", 2);
   // testGetUpperLeftTriangle("***\n**\n*", 3);
}


function getPyramidTests() {
    testGetPyramid("*", 1);
    testGetPyramid(" * \n***", 2);
    testGetPyramid("  *  \n *** \n*****", 3);
}


function getCheckerboardTests() {
    testGetCheckerboard(" *\n* ", 2, 2);
    testGetCheckerboard(" * \n* *\n * ", 3, 3);
    testGetCheckerboard(" * \n* *\n * \n* *\n", 3, 4);
}