var findAnagrams = function(s, p) {
	var map = {};
	var result = [];
	var slideWindow = {};
	for(var i = 0; i < p.length; i++){
		map[p[i]] = map[p[i]] ? map[p[i]] + 1 : 1;
	}
	// two pointers here: the characters in between are anagrams needed
	var left = 0;
	var right = 0;
	while(right < s.length){
		//
		if(map[s.charAt(right)]){
		    // NOTICE: we only need to update left for non-continuous duplicated character,
			// because the following "if" will automatically handle the situation: "baa" "aa"
			if(slideWindow[s.charAt(right)] && map[s.charAt(right)] === 1){
				left = Math.max(slideWindow[s.charAt(right)], left);
			}
			if(right - left + 1 === p.length){
				result.push(left);
				left++;
			}
		}else{
			left = right + 1;
			slideWindow = {};
		}
		// the core of sliding window: need to save next index to current key,
		// so we can leverage it whenever we meet this key again in the future.
		slideWindow[s.charAt(right)] = right + 1;
		right++;
	}
	return result;
};