/*function functionName (parameters){
    // function body
    //return
}

var returnedValue = functionName(parameters)
*/

function getAverage(assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 32;
const assignment2Marks = 40;
const assignment3Marks = 50;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);

console.log('My assignment average so far ', myAverage);