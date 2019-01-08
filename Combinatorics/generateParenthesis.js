var generateParenthesis = function(n) {
    if(n == 1) {
        return ['()'];
    } else if (n == 0) {
        return [];
    }
    
    let result = [];
    helper('(', 1, 0, n, result);
    return result;
};

var helper = function(parens, open, close, n, results) {
    if(open == n && close == n) {
        results.push(parens);
        return;
    }

    if(close < open) {
        helper(parens + ')', open, close + 1, n , results);
    }
    if(open < n) {
    helper(parens + '(', open + 1, close, n, results);  
    }
}