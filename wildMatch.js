// Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.

// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).

// Note:

// s could be empty and contains only lowercase letters a-z.
// p could be empty and contains only lowercase letters a-z, and characters like ? or *.
// Example 1:

// Input:
// s = "aa"
// p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input:
// s = "aa"
// p = "*"
// Output: true
// Explanation: '*' matches any sequence.
// Example 3:

// Input:
// s = "cb"
// p = "?a"
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
// Example 4:

// Input:
// s = "adceb"
// p = "*a*b"
// Output: true
// Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
// Example 5:

// Input:
// s = "acdcb"
// p = "a*c?b"
// Output: false

var isMatch = function(s, p) {
    let result = '';
    let copy = s.slice().split('');
    
    let helper = function(nextChar) {
        let sequence = '';
        let spliceCount = 0;

        for(let i = 0; i < copy.length; i++) {
            if(copy[i] === nextChar) {
                copy.splice(0, spliceCount);  
                return sequence;
            }            
            sequence += copy[i];
            spliceCount++;
        }
    
        copy.splice(0, spliceCount);        
        return sequence;
    }

    for(let i = 0; i < p.length; i++) {
        if(p[i] === copy[0]) {
            result += copy[0];
            copy.splice(0, 1);
        } else if(p[i] === '?') {
            result += copy[0];
            copy.splice(0, 1);
        } else if(p[i] === '*') {
            result += helper(p[i + 1]);
        } else if(p[i] !== copy[0] && p[i] !== '?' && p[i] !== '*'){
            console.log(p[i], 'this was the wrong char')
            console.log(result)
            console.log(copy)
            return false;
        }
    }
    
    if(result === s) {
        return true;
    }

    return false;
};

isMatch("abefcdgiescdfimde", "ab*cd?i*de")