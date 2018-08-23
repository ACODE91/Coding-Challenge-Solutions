var topKFrequent = function(nums, k) {
    let obj={};
    nums.forEach(x=>obj[x]?obj[x]++:obj[x]=1);
    let keys = Object.keys(obj);
    keys.sort((a,b)=>obj[b]-obj[a]);
    return keys.slice(0,k).map(x=>+x);
};