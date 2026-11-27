function climbStairs(totalSteps) {
    let stepOneCounter = 1;
    while ( stepOneCounter < totalSteps ) {
        stepOneCounter++;
    }
    let stepTwoCounter = 0;
    for (counter = 0; counter < totalSteps; counter +=2) {
        stepTwoCounter += 1;
    }
    return stepOneCounter + count;
}

console.log(climbStairs(6));
