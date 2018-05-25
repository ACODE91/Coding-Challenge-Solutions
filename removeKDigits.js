// Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

// Note:
// The length of num is less than 10002 and will be ≥ k.
// The given num does not contain any leading zero.
// Example 1:

// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
// Example 2:

// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
// Example 3:

// Input: num = "10", k = 2
// Output: "0"
// Explanation: Remove all the digits from the number and it is left with nothing which is 0.

var removeKdigits = function(num, k) {
    let digits = num.length - k;
    let stack = new Array(num.length);
    let top = 0;
    
    for(let i = 0; i < num.length; i++) {
        let c = num.charAt(i);
       //checks to see if previous number in stack is more than current number
        while(top > 0 && stack[top - 1] > c && k > 0) {
            top -= 1;
            k -= 1;
        }
        //if it is more than current number, then that index of stack gets replaced
        stack[top++] = c;
    }
    
        let idx = 0;
        while(idx < digits && stack[idx] == '0') {
            idx++;
        }
        
        if(idx == digits) {
            return '0';
        } 
    
        return stack.join('');
    };
    