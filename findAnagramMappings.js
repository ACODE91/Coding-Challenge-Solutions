let anagramMappings = function(A, B) {
    let D = {};
   
    for (let i = 0; i < B.length; i++)
        D[B[i]] = i;

    let ans = new Array(A.length);
    let t = 0;

    for (let i = 0; i < A.length; i++){
    ans[i] = D[A[i]];
        }

    return ans;
}