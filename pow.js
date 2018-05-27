// Implement pow(x, n), which calculates x raised to the power n (xn).

// Example 1:

// Input: 2.00000, 10
// Output: 1024.00000
// Example 2:

// Input: 2.10000, 3
// Output: 9.26100
// Example 3:

// Input: 2.00000, -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
// Note:

// -100.0 < x < 100.0
// n is a 32-bit signed integer, within the range [−231, 231 − 1]

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let base = x;
    let result = 0;
    
    if(Math.abs(n) < 10) {
    for(let i = 0; i < Math.abs(n) - 1; i++) {
    x *= base;
    }
    } else if(Math.abs(n) >= 10) {
        let factorTen = x;
        for(let i = 1; i < 10; i++) {
            factorTen *= base;
        }
    
        let multiplier = Math.round(Math.abs(n)/10);
    
        for(let i = 1; i < multiplier; i++) {
           result += (factorTen * factorTen);
        }
    
        let remainder = n - (multiplier * 10);
        if(remainder > 0) {
            for(let i = 0; i < remainder; i++) {
                result += (x *= base);
            }
        }
    
        return result;
    }
    
    
    
     if(n > 0) {    
     return x;
     } else if (n < 0) {
      return 1/result;
    } else if(n === 0) {
        return 1;
    }
    
    
    };