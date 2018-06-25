let combine = function(n, k) {
    let result = [];
    backtrack(result, [], 1, n, k);
    return result;
}

let backtrack = function(combinations, tempList, start, n, k) {
    if(k == 0) {
        let copy = tempList.slice();
        combinations.push(copy);
        return;
    }

    for(let i = start; i <= n; i++) {
        tempList.push(i);
        backtrack(combinations, tempList, i + 1, n, k-1);
        tempList.pop();
    }
}
