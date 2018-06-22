var simplifyPath = function(path) {


 let helper = function(currentPath, paths) {
        let index;
        let slashCount = 0;
        let ans;
        
        for(let i = currentPath.length - 1; i >= 0; i--) {
        if(slashCount === 2) {
            break;
        }
        
        if(path[i] === '/') {
            slashCount++;
        }
        
        index = i;
    }

    if(currentPath[index - 1] === '/') {
        paths = currentPath.slice(index, currentPath.length - 1);
        helper(currentPath.slice(0, index), paths);
    }

    ans = currentPath.slice(index, currentPath.length - 1);
       
    if(paths) {
       ans = currentPath.slice(index, currentPath.length - 1) + paths;
    } 

    return ans
 }

return helper(path)

};

simplifyPath("/home//foo/");