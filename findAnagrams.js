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
		//move right by 1 every iteration
        if(map[s.charAt(right)]){ //if current letter in our map object exists using "right" index
        //checks for unnecessary duplicates by checking if current letter is already traversed and it's value is 1 in map
            if(slideWindow[s.charAt(right)] && map[s.charAt(right)] === 1){
                //if it is traversed previously and map shows only 1 occurence of letter
                //reassign left index to take either itself or slideWindow's value so 
                //it skips index to for next iteration since we've found a duplicate value which
                //proves that current letters cannot be an anagram
                left = Math.max(slideWindow[s.charAt(right)], left);
            }
            //this check will prove that we have found our anagram since this is length of p
			if(right - left + 1 === p.length){
				result.push(left);
				left++;
            }
        //if the letter doesn't exists in our map object
		}else{
            //then move left as the next index after right and empty slideWindow since 
            //it can't possibly be the anagram anyway.
			left = right + 1;
			slideWindow = {};
		}
            //slideWindow will then take current letter and point it's value to the next index after it
        slideWindow[s.charAt(right)] = right + 1;
		right++;
	}
	return result;
};