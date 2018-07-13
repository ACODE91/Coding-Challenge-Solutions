//When considering challenges that tries to find the max value of something and constraints 
//that limit your options, always use Math.max.
let rob = function(num, n) {
    let prevMax = 0;
    let currMax = 0;
    for (let x = 0; x < num.length; x++) {
        let temp = currMax;
        currMax = Math.max(prevMax + x, currMax);
        prevMax = temp;
    }
    return currMax;
}