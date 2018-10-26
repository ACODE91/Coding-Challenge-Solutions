//brute force solution
var longestCommonPrefix = function(strs) {
	if(strs.length == 0) {
		return '';
	}
	strs.sort((a,b) => {return a.length - b.length;});
	let curr = strs[0][0], indexCheck = 0, result = '';

	while(indexCheck < strs[0].length) {
		for(let i = 0; i < strs.length; i++) {
			if(strs[i][indexCheck] !== curr) {
				if(result.length > 0) {
					return result;
				} else {
					return '';
				}
			}
		}
		result += curr;
		indexCheck++;
		curr = strs[0][indexCheck];
	}

	return result;
};