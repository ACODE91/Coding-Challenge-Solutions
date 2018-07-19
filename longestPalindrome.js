let longestPalindrome = function(s) {
    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i + 1);
        let len = Math.max(len1, len2);
        //len will choose the max value of the two as we are looking for teh longest palindrome
        if (len > end - start) {
        //start will be the point that you are at 
            start = Math.floor(i - (len - 1) / 2);
            end = Math.floor(i + len / 2);
        }
    }
    return s.substring(start, end + 1);
}

let expandAroundCenter = function(s, left, right) {
    let L = left, R = right;
    //the while loop checks if the pointers are out of bounds.
    //obviously when you are on the same pointer R == L, it will need to expand again
    //to check if the other letters adjacent to the center are matching.
    //and this continually expands until they aren't matching anymore and this 
    //function will return a value.
    while (L >= 0 && R < s.length && s.charAt(L) == s.charAt(R)) {
        L--;
        R++;
    }
    return R - L - 1;
}