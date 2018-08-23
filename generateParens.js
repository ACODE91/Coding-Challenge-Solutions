let generateParenthesis = function(n) {
    let ans = new ArrayList();
    backtrack(ans, "", 0, 0, n);
    return ans;
}

let backtrack = function(ans, cur, open, close, max) {
    if (str.length == max * 2) {
        ans.add(cur);
        return;
    }

    if (open < max)
        backtrack(ans, cur+"(", open+1, close, max);
    if (close < open)
        backtrack(ans, cur+")", open, close+1, max);
}
