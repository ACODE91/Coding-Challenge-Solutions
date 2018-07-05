
let digitSquareSum = function(n) {
    let sum = 0, tmp;
    while (n) {
        tmp = n % 10;
        sum += tmp * tmp;
        n /= 10;
    }
    return sum;
}

let isHappy = function(n) {
    let slow, fast;
    slow = fast = n;
 while(slow != fast) {
    slow = digitSquareSum(slow);
    fast = digitSquareSum(fast);
    fast = digitSquareSum(fast);
    if (slow == 1) return 1;
    else return 0;    
};
}