let groupAnagrams = function(strs) {
    if (strs.length == 0) return [];
    let ans = {}

    for (let i = 0; i < strs.length; i++) {
        let ca = strs[i].split('');
        Arrays.sort(ca);
        let key = ca.join('');
        if (!ans[key]) ans[key] = [];
        ans[key].push(strs[i]);
    }
    
    for(let key in ans) {
        result.push(ans[key]);
    }
    return result;
}
